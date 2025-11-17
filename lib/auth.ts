import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import { authConfig } from "@/lib/auth.config";
import { getUserByName } from './data';

const loginSchema = z.object({
    name: z.string().min(4),
    password: z.string().min(4)
})

export const { handlers, signIn, signOut, auth } = NextAuth({
    ...authConfig,

    providers: [
        Credentials({
            name: 'credentials',
            authorize: async (credentials) => {
                const parsedCredentials = loginSchema.safeParse(credentials);

                if (parsedCredentials.success) {
                    const { name, password } = parsedCredentials.data;
                    const user = await getUserByName(name);
                    if (!user) return null;
                    const passwordMatch = await bcrypt.compare(password, user.password_hash);

                    if (passwordMatch) {
                        return {
                            id: user.id.toString(),
                            name: user.username,
                        }
                    }
                }

                return null;
            }
        })
    ],
});

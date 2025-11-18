import { TruckIcon } from '@heroicons/react/24/outline';
import { auth } from '@/lib/auth';
import LogoutButton from '@/components/auth/logout-button';

export default async function Navbar() {
    const session = await auth();

    return (
        <nav className="fixed top-0 left-0 w-full bg-linear-to-r from-blue-600 to-blue-800 p-4 shadow-lg z-50">
            <div className="flex items-center justify-start gap-4 md:gap-8 lg:gap-12">

                {/* Car Number */}
                <div className="flex items-center gap-2 text-white text-lg md:text-xl font-semibold">
                    <TruckIcon className="w-6" />
                    {session?.user?.name}
                </div>

                <LogoutButton />

            </div>
        </nav>
    );
}

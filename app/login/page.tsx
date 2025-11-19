import LoginForm from '@/components/auth/login-form';
import { Suspense } from 'react';

export default function LoginPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 px-6 py-12 sm:px-6 lg:px-8">
            <Suspense fallback={<div className="text-white animate-pulse">Loading...</div>}>
                <LoginForm />
            </Suspense>
        </div>
    );
}
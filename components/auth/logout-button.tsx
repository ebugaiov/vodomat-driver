'use client';

import { logout } from '@/lib/actions';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function LogoutButton() {
    return (
        <form action={logout}>
            <button
                className="flex h-10 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 text-sm font-medium text-white transition-colors hover:bg-red-500/20 hover:text-red-400"
            >
                <PowerIcon className="w-5 h-5" />
                <span className="hidden md:block">Sign Out</span>
            </button>
        </form>
    );
}

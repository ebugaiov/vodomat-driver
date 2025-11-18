'use client';

import { logout } from '@/lib/actions';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function LogoutButton() {
    return (
        <form className='ml-auto' action={logout}>
            <button
                className="flex h-12 items-center gap-2 rounded-md bg-blue-700 p-3 text-sm font-medium text-white hover:bg-blue-500"
            >
                <PowerIcon className="w-6" />
                <span className="hidden md:block">Sign Out</span>
            </button>
        </form>
    );
}

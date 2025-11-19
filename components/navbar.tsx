import { TruckIcon } from '@heroicons/react/24/outline';
import { auth } from '@/lib/auth';
import LogoutButton from '@/components/auth/logout-button';

export default async function Navbar() {
    const session = await auth();

    return (
        <nav className="fixed top-0 left-0 w-full border-b border-white/10 bg-slate-900/80 p-4 shadow-lg backdrop-blur-md z-50">
            <div className="flex items-center justify-between gap-4 md:gap-8 lg:gap-12">

                {/* Car Number */}
                <div className="flex items-center gap-3 text-white">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/20 text-blue-400">
                        <TruckIcon className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs font-medium uppercase tracking-wider text-blue-200/70">Vehicle</span>
                        <span className="text-lg font-bold leading-none">{session?.user?.name}</span>
                    </div>
                </div>

                <LogoutButton />

            </div>
        </nav>
    );
}

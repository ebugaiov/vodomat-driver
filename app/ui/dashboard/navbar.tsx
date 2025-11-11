import Link from 'next/link';
import { PowerIcon, TruckIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  return (
    <nav className="bg-linear-to-r from-blue-600 to-blue-800 p-4 shadow-lg">
      <div className="flex items-center justify-start gap-12">
        {/* Logo */}
        <Link href="/dashboard" className="text-white text-2xl font-bold tracking-wide">
          V-Driver
        </Link>

        {/* Car Number */}
        <div className="flex items-center gap-2 text-white text-xl font-semibold">
          <TruckIcon className="w-6" />
          28-06
        </div>

        {/* Logout Button */}
        <form className="ml-auto">
          <button className="flex h-12 w-full grow items-center justify-center gap-2 rounded-md bg-blue-700 p-3 text-sm font-medium text-white hover:bg-blue-500 hover:text-gray-100 md:flex-none md::justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </nav>
  );
}



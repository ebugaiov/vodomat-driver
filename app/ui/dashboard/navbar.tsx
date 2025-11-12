import { PowerIcon, TruckIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-linear-to-r from-blue-600 to-blue-800 p-4 shadow-lg z-50">
      <div className="flex items-center justify-start gap-4 md:gap-8 lg:gap-12">
        {/* Logo */}
        {/* <Link href="/dashboard" className="text-white text-xl md:text-2xl font-bold tracking-wide">
          Driver
        </Link> */}

        {/* Car Number */}
        <div className="flex items-center gap-2 text-white text-lg md:text-xl font-semibold">
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



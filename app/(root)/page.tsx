import Navbar from '@/components/navbar';
import Statuses from '@/components/dashboard/statuses';

export default async function Page() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-20 pb-10">
            <Navbar />
            <Statuses />
        </main>
    )
}
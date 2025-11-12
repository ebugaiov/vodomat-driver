import Navbar from '@/app/ui/dashboard/navbar';
import Statuses from '@/app/ui/dashboard/statuses';

export default async function Page() {
    return (
        <main className="pt-20">
            <Navbar />
            <Statuses />
        </main>
    )
}
import { notFound } from 'next/navigation';
import { auth } from '@/lib/auth';
import { fetchStatusesByRoute } from "@/lib/data";
import StatusCard from "./status-card";

export default async function Statuses() {
    const session = await auth();

    const carNumber = session?.user?.name;
    if (!carNumber) {
        notFound();
    }

    const statuses = await fetchStatusesByRoute(carNumber);

    return (
        <div className="p-4">
            {
                statuses.map(status => (
                    <StatusCard key={status.id} status={status} />
                ))
            }
        </div>
    )
}
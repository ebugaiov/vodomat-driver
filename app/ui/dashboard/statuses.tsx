import { fetchStatusesByRoute } from "@/app/lib/data";
import StatusCard from "./status-card";

export default async function Statuses() {
    const statuses = await fetchStatusesByRoute('28-06');

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
'use client';

import { MachineStatus } from "@/lib/definitions";
import { Clock, Droplet, MapPin } from "lucide-react";

export default function StatusCard({ status }: { status: MachineStatus }) {
    const cardClasses = `
        rounded-lg shadow-md p-4 mb-4 flex flex-col
        ${status.low_water
            ? 'border-l-4 border-red-500'
            : status.is_inactive
                ? 'border-l-4 border-yellow-500'
                : 'border-l-4 border-blue-500'
        }
    `;

    const cardStyle = {
        backgroundColor: status.low_water
            ? 'rgba(254, 226, 226, 0.6)' // Light red with 60% opacity
            : status.is_inactive
                ? 'rgba(255, 247, 230, 0.6)' // Light yellow with 60% opacity
                : 'rgba(224, 242, 254, 0.6)' // Light blue with 60% opacity
    };

    return (
        <div className={cardClasses} style={cardStyle}>
            <div className="flex items-center mb-2">
                <MapPin className="w-5 h-5 mr-2 text-gray-600" />
                <h2 className="text-lg font-semibold text-gray-800">{status.address}</h2>
            </div>
            <div className="grow flex flex-col items-center justify-center py-4"> {/* Centering container */}
                <div className="flex items-baseline text-5xl font-extrabold text-blue-700 mb-2"> {/* Remind water and Volume */}
                    <Droplet className="w-10 h-10 mr-2" />
                    <span>{status.remind_water}</span>
                    <span className="mx-2 text-gray-400 text-3xl">/</span> {/* Separator */}
                    <span className="text-xl font-semibold text-gray-600">{status.volume}</span>
                </div>
            </div>
            <div className="flex items-center text-sm text-gray-600 mt-auto justify-center"> {/* Last updated, moved to bottom */}
                <Clock className="w-4 h-4 mr-2" />
                <span>{new Date(status.last_notification).toLocaleString()}</span>
            </div>
            {status.low_water ? (
                <div className="mt-3 text-sm font-semibold text-red-600 animate-pulse text-center">
                    Warning: Low water level!
                </div>
            ) : null}
            {status.is_inactive && !status.low_water ? (
                <div className="mt-3 text-sm font-semibold text-yellow-600 animate-pulse text-center">
                    Warning: Machine is inactive!
                </div>
            ) : null}
        </div>
    );
}

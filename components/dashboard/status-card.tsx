'use client';

import { MachineStatus } from "@/lib/definitions";
import { Clock, Droplet, MapPin, AlertTriangle, AlertCircle } from "lucide-react";
import clsx from "clsx";

export default function StatusCard({ status }: { status: MachineStatus }) {
    const isLowWater = Boolean(status.low_water);
    const isInactive = Boolean(status.is_inactive);

    // Calculate water percentage for visual indicator
    const waterPercentage = Math.min(Math.round((status.remind_water / status.volume) * 100), 100);

    // Determine status color
    let statusColor = "blue";
    if (isLowWater) statusColor = "red";
    else if (isInactive) statusColor = "yellow";

    return (
        <div className={clsx(
            "relative mb-6 overflow-hidden rounded-2xl border bg-white/10 p-6 shadow-xl backdrop-blur-md transition-all",
            {
                "border-red-500/50 shadow-red-900/20": isLowWater,
                "border-yellow-500/50 shadow-yellow-900/20": isInactive && !isLowWater,
                "border-white/10 shadow-black/20": !isLowWater && !isInactive
            }
        )}>
            {/* Header: Address */}
            <div className="mb-6 flex items-start gap-3">
                <div className={clsx(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                    {
                        "bg-red-500/20 text-red-400": isLowWater,
                        "bg-yellow-500/20 text-yellow-400": isInactive && !isLowWater,
                        "bg-blue-500/20 text-blue-400": !isLowWater && !isInactive
                    }
                )}>
                    <MapPin className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold leading-tight text-white md:text-2xl">
                    {status.address}
                </h2>
            </div>

            {/* Main Content: Water Level */}
            <div className="mb-6 flex flex-col items-center justify-center rounded-xl bg-black/20 p-6">
                <div className="mb-2 flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-blue-200/70">
                    <Droplet className="h-4 w-4" />
                    Water Level
                </div>
                <div className="flex items-baseline gap-2">
                    <span className={clsx(
                        "text-6xl font-black tracking-tight md:text-7xl",
                        {
                            "text-red-400": isLowWater,
                            "text-white": !isLowWater
                        }
                    )}>
                        {status.remind_water}
                    </span>
                    <span className="text-2xl font-medium text-white/40">/ {status.volume}L</span>
                </div>

                {/* Progress Bar */}
                <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                        className={clsx("h-full transition-all duration-500", {
                            "bg-red-500": isLowWater,
                            "bg-yellow-500": isInactive && !isLowWater,
                            "bg-blue-500": !isLowWater && !isInactive
                        })}
                        style={{ width: `${waterPercentage}%` }}
                    />
                </div>
            </div>

            {/* Footer: Last Updated & Warnings */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 text-blue-200">
                    <Clock className="h-5 w-5" />
                    <span className="text-base font-medium">
                        {new Date(status.last_notification).toLocaleString(undefined, {
                            month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false
                        })}
                    </span>
                </div>

                {isLowWater && (
                    <div className="flex items-center gap-2 rounded-lg bg-red-500/20 px-4 py-2 text-red-300 animate-pulse">
                        <AlertCircle className="h-5 w-5" />
                        <span className="font-bold">LOW WATER</span>
                    </div>
                )}

                {isInactive && !isLowWater && (
                    <div className="flex items-center gap-2 rounded-lg bg-yellow-500/20 px-4 py-2 text-yellow-300">
                        <AlertTriangle className="h-5 w-5" />
                        <span className="font-bold">INACTIVE</span>
                    </div>
                )}
            </div>
        </div>
    );
}

import { RowDataPacket } from "mysql2";

export type User = RowDataPacket & {
    id: number;
    username: string;
    password_hash: string;
    permission: 'admin' | 'driver'
}

export type MachineStatus = {
    id: number,
    address: string;
    remind_water: number;
    volume: number;
    last_notification: string;
    low_water: boolean;
    is_inactive: boolean;
}

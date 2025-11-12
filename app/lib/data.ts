import pool from '@/app/lib/db';

export type MachineStatus = {
    id: number,
    address: string;
    remind_water: number;
    volume: number;
    last_notification: string;
    low_water: boolean;
}

export async function fetchStatusesByRoute(route: string): Promise<MachineStatus[]> {
    try {
        const [rows] = await pool.query(`
            SELECT
                status.id,
                status.time AS last_notification,
                CONCAT(street.street, ' ', avtomat.house) AS address,
                avtomat.size AS volume,
                ROUND(status.water / 100) AS remind_water,
                status.low_water_balance AS low_water,
                route.car_number
            FROM status
            JOIN avtomat ON status.avtomat_number = avtomat.avtomat_number
            JOIN street ON avtomat.street_id = street.id
            JOIN route ON avtomat.route_id = route.id
            WHERE route.car_number = ?
            ORDER BY remind_water
        `, [route]);
        return rows as MachineStatus[];
    } catch (error) {
        console.log(error);
        throw new Error('Database Error: Can not fetch statuses by route');
    }  
}
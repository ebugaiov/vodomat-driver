import pool from '@/lib/db';
import { MachineStatus, User } from '@/lib/definitions';

export async function getUserByName(name: string): Promise<User | null> {
    try {
        const [rows] = await pool.execute<User[]>(`
            SELECT
                id,
                username,
                password_hash,
                permission
            FROM user
            WHERE username = ?
        `, [name])
        
        if (rows.length === 0) {
            return null;
        }

        return rows[0];
    } catch (error) {
        console.log(error);
        throw new Error(`Database Error: Can not fetch user with name ${name}`);
    }
}

export async function fetchStatusesByRoute(route: string): Promise<MachineStatus[]> {
    try {
        const [rows] = await pool.execute(`
            SELECT
                status.id,
                status.time AS last_notification,
                CONCAT(street.street, ' ', avtomat.house) AS address,
                avtomat.size AS volume,
                ROUND(status.water / 100) AS remind_water,
                status.low_water_balance AS low_water,
                (status.time < NOW() - INTERVAL 2 HOUR) AS is_inactive,
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
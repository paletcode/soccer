import {createPool} from 'mysql2'

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    portL: 3306,
    database: 'playersDB'
})

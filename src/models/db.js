import mysql from 'mysql2/promise'

export const pool = mysql.createPool({
    host: 'localhost',
    //port: 3306,
    user: 'root',
    password: 'carlos3241',
    database: 'taller3m',  //clinica
})

pool
    .query('SELECT 1')
    .then(() => console.log('Connected to MySQL'))
    .catch((err) => {
        console.error('Error connecting to MySQL', err)
    })

pool.on('error', err => {
    console.error('MySQL error', err)
})
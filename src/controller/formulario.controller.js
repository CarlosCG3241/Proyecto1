// /controllers/formulario.controller.js
import { pool } from '../models/db.js'; // Asegúrate de que la conexión a la base de datos esté correctamente configurada

export const getFormulario = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Ejecutar la consulta SQL para insertar los datos en la base de datos
        const [result] = await pool.query('INSERT INTO usuario (username, password) VALUES (?, ?)', [username, password]);

        // Responder al cliente con un mensaje de éxito
        res.json({ message: 'Datos enviados correctamente', data: result });
    } catch (error) {
        // Si ocurre un error, devolver el error
        res.status(500).json({ error: 'Error al insertar los datos', details: error.message });
    }
};

// /controller/login.controller.js
import { pool } from '../models/db.js';

export const loginUsuario = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Consultar si existe un usuario con el nombre de usuario proporcionado
        const [result] = await pool.query('SELECT * FROM usuario WHERE username = ?', [username]);

        if (result.length === 0) {
            return res.status(400).json({ error: 'Usuario no encontrado' });
        }

        // Si el usuario existe, verificamos que la contraseña coincida
        const user = result[0];

        if (user.password === password) {
            res.json({ message: 'Inicio de sesión exitoso, Bienvenido' });
        } else {
            res.status(400).json({ error: 'Contraseña incorrecta' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al intentar iniciar sesión', details: error.message });
    }
};

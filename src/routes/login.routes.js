// /routes/login.routes.js
import express from 'express';
import { loginUsuario } from '../controller/login.controller.js';

const router = express.Router();

// Ruta para el inicio de sesión
router.post('/login', loginUsuario);

export default router;

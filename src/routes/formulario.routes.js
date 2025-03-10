// /routes/formulario.routes.js
import express from 'express';
import { getFormulario} from '../controller/formulario.controller.js'; // Importar el controlador

const router = express.Router();

// Ruta para manejar el envío del formulario
router.post('/submit', getFormulario);  // Cuando el formulario se envíe con POST, ejecutará 'submitForm'

export default router;

//index.js
import express from 'express';
import {PORT} from './config.js';
import { pool } from './models/db.js';
import { insercionRoutes, usuarioRoutes } from './routes/index.js'
import morgan from 'morgan';
import path from 'path';
import bodyParser from 'body-parser';
import formularioRoutes from './routes/formulario.routes.js'; // Importar las rutas del formulario
import loginRoutes from './routes/login.routes.js'; // Rutas para el inicio de sesión

const app = express();

app.use(morgan('dev'));

// Middleware para procesar los datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Obtener la URL del módulo actual
const __filename = new URL(import.meta.url).pathname;

// Obtener el directorio con path.dirname()
const __dirname = path.dirname(__filename);

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rutas de la API
app.use('/api', formularioRoutes); // Para registrar usuarios
app.use('/api', loginRoutes);  // Para el inicio de sesión

app.use('/api', usuarioRoutes);
app.use('/api', insercionRoutes);

app.listen(PORT, () => {
    console.log('Servidor corriendo', PORT)
})

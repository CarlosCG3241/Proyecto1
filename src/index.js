import express from 'express';
const app = express();
import {PORT} from './config.js';
import { pool } from './models/db.js';
import { insercionRoutes, usuarioRoutes } from './routes/index.js'
import morgan from 'morgan';

app.use(morgan('dev'));

app.use('/api', usuarioRoutes);
app.use('/api', insercionRoutes);

app.listen(PORT, () => {
    console.log('Servidor corriendo', PORT)
})

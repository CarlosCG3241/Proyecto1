import { Router } from 'express';
import { getInsercion } from '../controller/insercion.controller.js';

const router = Router();

router.get('/registro', getInsercion);

export default router;

import { Router } from 'express';
import { getusuario } from '../controller/usuario.controller.js';
const router = Router();

router.get('/usuario', getusuario);
//router.get('/clinica/:id',getclinicas);

export default router;

//router.get('/clinica', (req, res) =>{
//   res.send('clinica')
//})
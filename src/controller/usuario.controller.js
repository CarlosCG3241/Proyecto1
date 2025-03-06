import { pool } from "../models/db.js";

export const getusuario = async(req, res) => {
    const [rows] = await pool.query('SELECT * FROM usuario')
    res.json(rows)
}

//Este tipo de codigo se usa comunmente en APIS RESTFUL para interactuar
//enviar datos a los usuarios a traves de una aplicacion web

//export const getclinicas = async(req, res) => {
//    const {id} = req.params;
//    const [rows] =
//}

import { pool } from "../models/db.js";

export const getInsercion = async (req, res) => {
    const [result] = await pool.query('Insert into usuario (username, password) values ("OtroIvan", "ivan10")');
    res.json(result);
}


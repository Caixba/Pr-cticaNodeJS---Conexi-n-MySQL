const connection = require('../models/database'); 

const usuariosGet = (req, res) => { 
    const query = 'SELECT * FROM usuarios'; 
    connection.query(query, (error, results) => { 
        if (error) throw error; 
        res.json(results); 
    }); 
}; 

const usuariosPost = (req, res) => {
    const { nombre, correo } = req.body;
    const query = 'INSERT INTO usuarios (nombre, correo) VALUES (?, ?)';
    connection.query(query, [nombre, correo], (error, results) => {
        if (error) throw error;
        res.status(201).json({ id: results.insertId, nombre, correo });
    });
};

const usuariosPut = (req, res) => {
    const { id } = req.params;
    const { nombre, correo } = req.body;
    const query = 'UPDATE usuarios SET nombre = ?, correo = ? WHERE id = ?';
    connection.query(query, [nombre, correo, id], (error, results) => {
        if (error) throw error;
        res.json({ message: 'Usuario actualizado', affectedRows: results.affectedRows });
    });
};

const usuariosDelete = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM usuarios WHERE id = ?';
    connection.query(query, [id], (error, results) => {
        if (error) throw error;
        res.json({ message: 'Usuario eliminado', affectedRows: results.affectedRows });
    });
};

module.exports = { usuariosGet, usuariosPost, usuariosPut, usuariosDelete };

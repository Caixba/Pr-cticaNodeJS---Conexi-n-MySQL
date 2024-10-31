const {Router} = require('express'); 
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete } = require('../controllers/usuarios'); 

const router = Router(); 

router.get('/', usuariosGet);           // Leer usuarios
router.post('/', usuariosPost);          // Crear usuario
router.put('/:id', usuariosPut);         // Actualizar usuario
router.delete('/:id', usuariosDelete);   // Eliminar usuario

module.exports = router; 
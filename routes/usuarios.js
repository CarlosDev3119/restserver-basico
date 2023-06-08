const { Router, response, request } = require('express');

const bcryptjs = require('bcryptjs');

// http://localhost:8080/api/usuarios

const router = Router();


//crear usuarios /post
router.post('/', (req = request, res = response) => {

    const { password, ...rest } = req.body;

    const salt = bcryptjs.genSaltSync();
    const newPassword = bcryptjs.hashSync(`${password}`, salt);

    const newUser = {
        message: 'Usuario creado satisfactoriamente',
        data: rest
    }

    res.status(200).json(newUser);
});


//obtener usuario por id /get
router.get('/:id', (req = request, res = response) => {
    res.status(200).json({
        msg: 'get usuarios por id'
    })
});

//obtener usuarios /get
router.get('/', (req = request, res = response) => {
    res.status(200).json({
        msg: 'get usuarios'
    })
});

//Actualizar usuario /put

router.put('/:id', (req = request, res = response) => {
    res.status(200).json({
        msg: 'put usuarios por id'
    })
});

//eliminar usuario /delete
router.delete('/:id', (req = request, res = response) => {
    res.status(200).json({
        msg: 'delete usuarios por id'
    })
});


module.exports = router;
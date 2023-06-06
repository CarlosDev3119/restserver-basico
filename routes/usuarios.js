const { Router, response, request } = require('express');
// http://localhost:8080/api/usuarios

const router = Router();


//crear usuarios /post
router.post('/', (req = request, res = response) => {
    res.status(200).json({
        msg: 'post usuarios'
    })
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
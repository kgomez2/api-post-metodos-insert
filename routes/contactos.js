let router=require('express').Router

router.get('/',(req,res)=>{
    let respuesta={tipo:20,msg:'listado de todos los clientes'}
    res.json(respuesta);
});
router.delete('/:idUser',(req,res)=>{
    res.json({tipo:220,msg:'resultado de un put'});
});
router.get('/:idUsers',(req,res)=>{
    console.log(req.params.idUsers);
    let respuesta={tipo:20,msg:'Buscando un solo cliente'}
});

router.post('/',(req,res)=>{
    let respuesta={tipo:20,msg:'añadir'}
    res.json(respuesta);
});
router.put('/:id', function(req, res) {
    res.json({ message: 'actualizar el producto con id ' + req.params.id })
  })
  //url:puerto/api/clientes
  module.exports = router
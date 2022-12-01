const mysql= require('../db/mysq');
module.exports = {
    crear: (req,res) => {
        console.log(req.body);
        mysql.query('INSERT INTO contacto (nombre,edad,email,activo) values (?,?,?,?)',[req.body.nombre, req.body.edad,
        req.body.email, req.body.activo],
        (err, results, fields) => {
            if (err) {
                res.json(err);
            } else {
                console.log(results);
                for(let i =0; i < req.body.depende.length; i++) {
                    mysql.query('INSERT INTO dependientes (nombre,edad,contacto) values (?,?,?)',[req.body.depende[i].
                nombre, req.body.depende[i].edad, results.insertId],
                (err,results,campos) =>{
                    if(err){
                        res.json(err);
                    } else {
                        console.log(results);
                
                    }
                })
                }
                res.json({msg: "el dato se inserto"})

            }
        })
    },
}
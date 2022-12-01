//const { json } = require("express");

const btnadd = document.getElementById('btnadd');
btnadd.addEventListener("click",() =>{
    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;
    let email = document.getElementById('email').value;
    let activo = document.getElementById('activo').value;
    let depende = parseInt(document.getElementById('numdependiente').value);
    let dependientes = []
    for (let i = 1; i <= depende; i++) {
        let nom = document.getElementById('nombre'+ i).value;
        let eda = document.getElementById('edad'+ i).value;
        dependientes.push({nombre: nom, edad: eda })
    }
    let resultado = {
        nombre: nombre,
        edad: edad,
        email: email,
        activo: activo,
        depende: dependientes
    }
    console.log(resultado);
    fetch('http://localhost:3000/api/contactos/', {
        method: 'POST',
        body: JSON.stringify(resultado),
        headers:{
            'content-type':'application/json'
        }
    })
    .then(res=> res.json())
    .then(resultado =>{
        console.log(resultado);
    })
})
const btndepende = document.getElementById('depende');
btndepende.addEventListener('click',()=>{
    let  input = document.getElementById("divdependes");
    let dependientes = parseInt(document.getElementById("numdependiente").value);
    let datos = '';
    for (let contador = 1; contador <=dependientes; contador ++){
    datos += `<div id="dep${contador}"}>
    <input type="text" id="nombre${contador}" placeholder="nombre"><input
    type="number" id="edad${contador}" placeholder= "edad"<br>
    </div>
    `;
    }
    input.innerHTML = datos;
});
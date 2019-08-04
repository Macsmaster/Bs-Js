/*
const formato = document.getElementById('formato');


formato.addEventListener("#Sbutton", (e) =>{
e.preventDefault();
console.log("form has been submited");
});
*/


function validar(){

    const nameForm = document.getElementById("NameForm").value;
    const correo = document.getElementById("Correo").value;
    const mensaje = document.getElementById("Mensaje").value;

    const expresion = /\w+@\w+\.+[a-z]/;


    if (nameForm ==="" || correo ==="" || mensaje ==="") {
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if(nameForm.length>30){
        alert("El nombre supera la cantidad de caracteres permitidos");
        return false;
    }
    else if(correo.length>20){
        alert("El correo electronico supera la cantidad de caracteres permetidos")
        return false;
    }

    else if(!expresion.test(correo)){
        alert("EL correo no es valido")
        return false;


    }
}

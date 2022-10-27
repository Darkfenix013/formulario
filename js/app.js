// capturar los input y las alertas de texto
const nombre = document.querySelector(".nombre");
const apellido = document.querySelector(".apellido");
const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementById('submit');
const alertaNombre = document.getElementById('alertaNombre');
const alertaApellido = document.getElementById('alertaApellido');
const alertaPassword = document.getElementById('alertaPassword');
const alertaEmail = document.getElementById('alertaEmail');
console.log(nombre.textLength);
// escuchar evento click en submit y agregar la clase activo a los input y a .Alerta_Texto
submit.addEventListener('click', (e)=>{
    e.preventDefault();
    let  regUserEmail = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/;
    if(!regUserEmail.test(email.value) || !email.value.trim()){
        email.classList.add('activo');
        alertaEmail.classList.add('activo');
    }
    if(nombre.value.length < 3 || !nombre.value.trim()){
        nombre.classList.add('activo');
        alertaNombre.classList.add('activo');
    }
     if(apellido.value.length < 6 || !apellido.value.trim()){
        apellido.classList.add('activo');
        alertaApellido.classList.add('activo');
    }

    if(password.value.length < 8 || !password.value.trim()){
        password.classList.add('activo');
        alertaPassword.classList.add('activo');
     }
     else{
        password.value="";
        nombre.value="";
        apellido.value="";
        email.value="";
        nombre.classList.remove('activo');
        alertaNombre.classList.remove('activo');
        email.classList.remove('activo');
        alertaEmail.classList.remove('activo');
        apellido.classList.remove('activo');
        alertaApellido.classList.remove('activo');
        password.classList.remove('activo');
        alertaPassword.classList.remove('activo');
    }
    
})
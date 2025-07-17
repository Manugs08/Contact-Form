const nombre = document.getElementById("name");
const apellido = document.getElementById("surname");
const mail = document.getElementById("mail");
const formulario = document.querySelector(".form");
const msg=document.getElementById("msg")

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const valorNombre = nombre.value.trim();
    const valorApellido = apellido.value.trim();
    const valorMail = mail.value.trim();
    const valorMsg=msg.value.trim();
    let errorNombre = false;
    let errorApellido = false;
    let errorMail = false;
    let errorQuery = false;
    let errorMsg=false;
    let errorCheck=false;
    const advertirNombre = document.getElementById("advertirNombre");
    const advertirApellido = document.getElementById("advertirApellido");
    const advertirMail = document.getElementById("advertirMail");
    const advertirQuery = document.getElementById("advertirQuery");
    const advertirMsg= document.getElementById("advertirMsg");
    const adevertirCheck= document.getElementById("advertirCheckbox")
    if (valorNombre === "") {
        nombre.style.border = "1px solid var(--Red)";
        advertirNombre.style.display = "block";
        errorNombre = true;
    } else {
        nombre.style.border = "1px solid var(--Grey500medium)";
        advertirNombre.style.display = "none";
    }

    if (valorApellido === "") {
        apellido.style.border = "1px solid var(--Red)";
        advertirApellido.style.display = "block";
        errorApellido = true;
    } else {
        apellido.style.border = "1px solid var(--Grey500medium)";
        advertirApellido.style.display = "none";
    }

    if (valorMail === "" ||!valorMail.includes("@") ||!valorMail.split("@")[1]?.includes(".")) {
        mail.style.border = "1px solid var(--Red)";
        advertirMail.style.display = "block";
        errorMail = true;
    } else {
        mail.style.border = "1px solid var(--Grey500medium)";
        advertirMail.style.display = "none";
    }

    const seleccionado = document.querySelector('input[name="request"]:checked');
    if (!seleccionado) {
        advertirQuery.style.display = "block";
        errorQuery = true;
    } else {
        advertirQuery.style.display = "none";
    }

    if(valorMsg===""){
        msg.style.border = "1px solid var(--Red)";
        advertirMsg.style.display = "block";
        errorMsg = true;
    } else{
        msg.style.border = "1px solid var(--Grey500medium)";
        advertirMsg.style.display = "none";
    }

    const check = document.querySelector('input[type="checkbox"]:checked');
    if(!check){
        adevertirCheck.style.display = "block";
        errorCheck = true;
    }else{
        adevertirCheck.style.display = "none";
    }
    if (errorNombre || errorApellido || errorMail || errorQuery || errorMsg || errorCheck) {
        return;
    }

    mostrar();
    setTimeout(() => {
    formulario.submit();
}, 3000);
});
function mostrar(){
    const successContainer = document.createElement("div");
    successContainer.classList.add("success-container");

    const confirmacionContainer = document.createElement("div");
    confirmacionContainer.classList.add("confirmacion-container");
    successContainer.appendChild(confirmacionContainer);

    const tick = document.createElement("img");
    tick.classList.add("tick");
    tick.src = "images/icon-success-check.svg";
    confirmacionContainer.appendChild(tick);

    const mensaje = document.createElement("p");
    mensaje.textContent = "Message Sent";
    mensaje.classList.add("mensaje");
    confirmacionContainer.appendChild(mensaje);

    const agradecer = document.createElement("p");
    agradecer.textContent = "Thanks for completing the form. We'll be in touch soon!";
    agradecer.classList.add("agradecer");
    successContainer.appendChild(agradecer);

    const contenedor = document.querySelector(".form__container");
    contenedor.appendChild(successContainer);
}
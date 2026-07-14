/*========================================
        STUDY CLASSROOM
========================================*/


/*==============================
        RELOJ
==============================*/

function actualizarHora(){

const reloj=document.getElementById("hora");

if(!reloj) return;

const fecha=new Date();

const opciones={

weekday:"long",
day:"numeric",
month:"long",
year:"numeric"

};

const hora=fecha.toLocaleTimeString();

const dia=fecha.toLocaleDateString("es-GT",opciones);

reloj.innerHTML=`
<b>${hora}</b><br>
${dia}
`;

}

setInterval(actualizarHora,1000);

actualizarHora();


/*==============================
        ANIMACIÓN
==============================*/

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-15px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


/*==============================
      BUSCADOR
==============================*/

const buscador=document.getElementById("buscar");

if(buscador){

buscador.addEventListener("keyup",()=>{

let texto=buscador.value.toLowerCase();

cards.forEach(card=>{

let titulo=card.innerText.toLowerCase();

card.style.display=titulo.includes(texto)
?"block"
:"none";

});

});

}


/*==============================
      MODO OSCURO
==============================*/

const boton=document.getElementById("dark");

if(boton){

if(localStorage.getItem("modo")=="oscuro"){

document.body.classList.add("dark");

}

boton.onclick=()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("modo","oscuro");

}else{

localStorage.setItem("modo","claro");

}

}

}


/*==============================
      SALUDO
==============================*/

const hero=document.querySelector(".hero h2");

if(hero){

const hora=new Date().getHours();

if(hora<12){

hero.innerHTML="🌸 Buenos días 🌸";

}else if(hora<18){

hero.innerHTML="☀️ Buenas tardes ☀️";

}else{

hero.innerHTML="🌙 Buenas noches 🌙";

}

}


/*==============================
      EFECTO CLICK
==============================*/

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",()=>{

btn.innerHTML="✔ Listo";

setTimeout(()=>{

btn.innerHTML="Abrir";

},1500);

});

});


/*==============================
      APARECER
==============================*/

window.onload=()=>{

document.querySelectorAll(".card,.integrante,.hero").forEach((obj,i)=>{

obj.style.opacity="0";

obj.style.transform="translateY(40px)";

setTimeout(()=>{

obj.style.transition=".7s";

obj.style.opacity="1";

obj.style.transform="translateY(0px)";

},i*150);

});

};


/*==============================
      MENSAJE
==============================*/

console.log("Study Classroom iniciado correctamente 🌸");
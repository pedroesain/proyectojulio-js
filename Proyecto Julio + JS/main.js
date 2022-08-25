let visitas = 0;
let usuarios = "";
let ver;

usuarios = usuarios.trim ();

let click = document.querySelector ("nav-link");
function identificarUsuario () {
 usuarios = prompt ("Ingrese su nombre")
 localStorage.setItem ("usuarios", JSON.stringify(usuarios));
 if (usuarios === null || usuarios === "") {
  while (usuarios == "" || usuarios == null) { 
   alert ("Debe ingresar su nombre para identificarse");
   usuarios = prompt ("Ingrese su nombre");
   localStorage.setItem ("usuarios", JSON.stringify (usuarios));
   ver = JSON.parse (localStorage.getItem("usuarios"));
   document.querySelector("nav-link").innerHTML = "Bienvenido " + ver;
  }
 } else {
  ver = JSON.parse (localStorage.getItem("usuarios"));
  document.querySelector("nav-link").innerHTML = "Bienvenido " + ver;
  console.log(usuarios)
 }
}
click.addEventListener("click", identificarUsuario);
console.log(usuarios)

// contador //
function contador () {
 visitas = visitas + 1;
 localStorage.setItem("contador", JSON.stringify(visitas));
 let vistas = localStorage.getItem("contador");
 document.querySelector("#visitas").innerHTML = " Visitas " + vistas;
}
contador();
function iniciar() {
    console.log(contador)
    //contador//

 ver = JSON.parse (localStorage.getItem("usuarios"));

 if (ver === null || ver === "") {
  document.querySelector (".ver").innerHTML = "Haz click para identificarte";
 } else {
  ver = JSON.parse (localStorage.getItem("usuarios"));
  document.querySelector("nav-link").innerHTML = "Bienvenido " + ver;
 }
}
iniciar ();
console.log(usuarios)
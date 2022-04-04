//import { dataUser } from "../../firebase/firebaseConfig.js"
export const home = () => {
    window.location.hash = '#/home';
    const viewHome = document.createElement('div');
    viewHome.classList.add("container-login");
    const formHome = `<div class="containerLogin" id="containerLogin">
    <img class="container-img" src="./img/logo-mobil.png" alt="logo BarterBook con un ícono del libro abierto" />
    <h1 class="titleWelcome">¡Bienvenidos!</h1>
    <div class="containerBtns">
        <a href="#/login" class="links">Log In <img src="./img/google.png" alt="google" class="google"></a>
        <a href="#/login" class="links">Sign Up with</a>
        <a href="#/register" class="links">Register </a>
    </div>
</div>
`;
    viewHome.innerHTML += formHome;
    return viewHome
};
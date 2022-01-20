import photo from "../../assets/logo.png"
import './navbar.css'
const navbar = document.createElement("div");
navbar.style.height="50px";
navbar.style.marginBottom="60px"
navbar.innerHTML= `
<ul class="nav-ul">
<li><img src=${photo} style="width:100px;margin:0px"/></li>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">Menu</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>`
document.body.appendChild(navbar);


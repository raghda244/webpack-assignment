import './cardGroup.css'
import burger from '../../assets/burger-dinner-food-hamburger-wallpaper-preview.jpg'
import pizza from '../../assets/crust-1.jpg'
import pasta from '../../assets/spaghetti-dish-wooden-background_45583-1175.webp'
const cardgroup = document.createElement("div");
cardgroup.style.marginLeft="80px";
cardgroup.innerHTML=`
<h1 style="text-align:center">Restaurant</h1>
<div>
  <div class="card">
  <img src="${burger}" alt="Avatar" style="width:100%">
  <div class="container">
    <h2><b>Sandwitches</b></h2> 
    <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> 
  </div>
</div>

<div class="card">
<img src="${pizza}" alt="Avatar" style="width:100%">
<div class="container">
  <h2><b>Pizza</b></h2> 
  <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> 
</div>
</div>

<div class="card">
<img src="${pasta}" alt="Avatar" style="width:100%">
<div class="container">
  <h2><b>Pasta</b></h2> 
  <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> 
</div>
</div>

</div>`
document.body.appendChild(cardgroup);
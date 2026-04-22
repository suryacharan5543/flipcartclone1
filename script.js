const products = [
  {id:1,name:"iPhone 14",price:70000,img:"https://via.placeholder.com/150?text=iPhone"},
  {id:2,name:"Dell Laptop",price:50000,img:"https://via.placeholder.com/150?text=Laptop"},
  {id:3,name:"Running Shoes",price:1500,img:"https://via.placeholder.com/150?text=Shoes"},
  {id:4,name:"Samsung TV",price:35000,img:"https://via.placeholder.com/150?text=TV"},
  {id:5,name:"Wireless Earbuds",price:3000,img:"https://via.placeholder.com/150?text=Earbuds"},
  {id:6,name:"Smart Watch",price:5000,img:"https://via.placeholder.com/150?text=Watch"},
  {id:7,name:"Bluetooth Speaker",price:2500,img:"https://via.placeholder.com/150?text=Speaker"},
  {id:8,name:"USB-C Cable",price:500,img:"https://via.placeholder.com/150?text=Cable"}
];

let cart = [];

/* SHOW PRODUCTS */
function showProducts(list){
  const box = document.getElementById("products");
  box.innerHTML = "";

  list.forEach(p=>{
    box.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

/* ADD TO CART */
function addToCart(id){
  const item = products.find(p=>p.id===id);
  cart.push(item);
  updateCart();
}

/* UPDATE CART */
function updateCart(){
  const list = document.getElementById("cartItems");
  const count = document.getElementById("count");

  list.innerHTML="";
  let total=0;

  cart.forEach((item,i)=>{
    total+=item.price;
    list.innerHTML += `
      <li>
        <span>${item.name} - ₹${item.price}</span>
        <button onclick="removeItem(${i})">Remove</button>
      </li>
    `;
  });

  list.innerHTML += `<h4>Total: ₹${total}</h4>`;
  count.innerText = cart.length;
}

/* REMOVE */
function removeItem(i){
  cart.splice(i,1);
  updateCart();
}

/* SEARCH */
function searchProducts(){
  const val = document.getElementById("search").value.toLowerCase();
  const filtered = products.filter(p=>p.name.toLowerCase().includes(val));
  showProducts(filtered);
}

/* TOGGLE CART */
function toggleCart(){
  const box = document.getElementById("cartBox");
  box.classList.toggle("show");
}

/* LOAD */
showProducts(products);

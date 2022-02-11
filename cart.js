let cart = JSON.parse(localStorage.getItem("cart"))
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

function readCart(array) {
  document.querySelector(".cartItems").innerHTML = "";
  array.forEach((item, index) => {
    document.querySelector(".cartItems").innerHTML += `
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${item.img}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <input type="number" value="${item.qty}" onchange="addtoQty(${this.value}, ${index})">
        <button onclick="deleteCart(${index})"> delete </button>
      </div>
    </div>
  </div>
</div>
    `;
  });
}

readCart(cart);
  
function deleteCart(position) {
  cart.splice(position, 1);
  console.log(cart);
  localStorage.setItem("cart", JSON.stringify(cart));

  readCart(cart);
}

function addtoQty(qty, index) {
  cart[index].qty = parseInt(qty);
  localStorage.setItem("cart", JSON.stringify(cart));
}

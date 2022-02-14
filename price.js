let meals = [
  {
    title: "Umpokoqo",
    price: "R19,99",
    catergory: "dairy",
    img: "https://images.rove.me/w_1920,q_85/nbpzg8zcrttoqjkoyabe/south-africa-phutu-umphokoqo.jpg",
  },
  {
    title: "orange juice",
    price: "R16,99",
    catergory: "liquids",
    img: "https://www.collinsdictionary.com/images/full/fruitjuice_148446767.jpg",
  },

  {
    title: "Apple",
    price: "R5,99",
    catergory: "fruit",

    img: "https://sc04.alicdn.com/kf/Ub20e768717be4ffcbfc408c056f99582C.jpg",
  },
];
meals = JSON.parse(localStorage.getItem("food"))
  ? JSON.parse(localStorage.getItem("food"))
  : meals;

let cart = JSON.parse(localStorage.getItem("cart"))
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
// console.log(meals);

function readCard(meals) {
  document.querySelector("#food").innerHTML = "";

  meals.forEach((meal, position) => {
    document.querySelector("#food").innerHTML += `


  <div class="col-sm-4">
    <div class="card" style="width: 18rem;">
  <img src="${meal.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${meal.title}</h5>
   <h4>${meal.price}</h4>

    </div>
 
  <div class="card-body">
    <a href="#" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#editFood${position}">UPDATE</a>
    <a href="#" class="btn btn-danger " onclick="deleteCard(${position})">DELETE</a>
    <a href="#" class="btn btn-primary " onclick="addToCart(${position})">Add to Cart</a>
  </div>
</div>
  </div>

<div class="modal fade" id="editFood${position}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        

        Title: <br>
        <input type="text" placeholder="" id="editTitle${position}"/>
        <br>
 Price: <br>
        <input type="text" placeholder="" id="editPrice${position}">
        <br>
Catergory: <br>
        <input type="text" placeholder="" id="editCatergory${position}">
        <br>
Image url: <br>
                <input type="text" placeholder="" id="editImage${position}">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addFood" onclick="updateMeal(${position})">Save changes</button>
      </div>
    </div>
  </div>
</div>

        `;
  });
}

readCard(meals);

function addMeal() {
  let title = document.querySelector("#addTitle").value;
  let catergory = document.querySelector("#addCatergory").value;
  let price = document.querySelector("#addPrice").value;
  let img = document.querySelector("#addImage").value;

  try {
    if (!meals) throw new Error("No country input");
    meals.push({
      title,
      catergory,
      price,
      img,
    });
    localStorage.setItem("food", JSON.stringify(meals));
    readCard(meals);
  } catch (err) {
    alert(err);
  }
}

function deleteCard(position) {
  meals.splice(position, 1);
  localStorage.setItem("food", JSON.stringify(meals));
  readCard(meals);
}

function updateMeal(position) {
  let title = document.querySelector(`#editTitle${position}`).value;
  let catergory = document.querySelector(`#editCatergory${position}`).value;
  let price = document.querySelector(`#editPrice${position}`).value;
  let img = document.querySelector(`#editImage${position}`).value;

  try {
    if (meals === "") {
      throw new Error("Please input country name");
    }
    meals[position] = {
      title,
      catergory,
      price,
      img,
    };
    localStorage.setItem("food", JSON.stringify(meals));
    readCard(meals);
  } catch (error) {
    alert(error);
  }
}

// cart fuction

function addToCart(position) {
  let qty = 1;
  let inCart = false;
  cart.forEach((item) => {
    if (item.name == meals[position].name) {
      item.qty += 1;
      inCart = true;
    }
  });

  if (!inCart) {
    cart.push({
      ...meals[position],
      qty,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  console.log(cart);
}

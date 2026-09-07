let cart = [];
let total = 0;

function addFood(name, price) {
  cart.push({name, price});
  total += price;

  document.getElementById("count").innerText = cart.length;
  showCart();
}

function showCart() {
  let items = document.getElementById("items");
  items.innerHTML = "";

  cart.forEach(food => {
    items.innerHTML += `
      <div class="cart-item">
        ${food.name} - ₹${food.price}
      </div>`;
  });

  document.getElementById("total").innerText = total;
}

function placeOrder() {
  if (cart.length == 0)
    alert("Please add food to cart!");
  else
    alert("Order placed successfully! 🍕");
}
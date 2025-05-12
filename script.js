let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(productName + " added to cart!");
}

function showCart() {
  const cartItems = document.getElementById("cart-items");
  const totalPrice = document.getElementById("total");
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - RWF ${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  totalPrice.textContent = `Total: RWF ${total}`;
}

function clearCart() {
  localStorage.removeItem("cart");
  location.reload();
}

if (document.getElementById("cart-items")) {
  showCart();
}
// Example of adding an item to the cart
document.querySelectorAll('.product-card button').forEach(button => {
  button.addEventListener('click', function() {
    alert('Item added to the cart!');
  });
});

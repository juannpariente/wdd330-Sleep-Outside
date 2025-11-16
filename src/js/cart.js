import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
  getSum(cartItems)
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

function getSum(cartItems){
    if (cartItems) {
      const cartTotal = document.querySelector(".cart-total");
      const cartFooter = document.querySelector(".cart-footer");

      let sum = 0;
      cartItems.forEach(item => {
          sum = sum + item.FinalPrice;
      });

      cartTotal.textContent = `Total: $${sum}`;

      cartFooter.classList.remove("hide");
    }
}

renderCartContents();

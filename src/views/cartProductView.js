import plus from "../assets/plus.png";
import minus from "../assets/minus.png";
import close from "../assets/close.png";

class CartProductView {
  constructor() {
    this._DOMParent = document.getElementById("cart-body");
  }
  updateCartProduct(param) {
    const selectors = document.querySelectorAll(".cart_item");
    const cartProduct = Array.from(selectors).find(
      (selector) => selector.dataset.id == param.id
    );

    const amountElement = cartProduct.getElementsByClassName(
      "cart_item__controls--amount"
    );
    amountElement.item(0).innerHTML = param.amount;
  }

  renderCartProduct(param) {
    const markup = this._markupGen(param);
    this._DOMParent.insertAdjacentHTML("afterbegin", markup);
  }

  _refreshSum() {}

  _markupGen(params) {
    return `
    <div class="cart_item" data-id="${params.id}">
    <div class="cart_item__info">
      <img
        class="cart_item__info--image"
        src="${params.image}"
      />
      <div class="cart_item__info--description">
        <p class="cart-produce__description--info">${params.title}</p>
        <p class="cart-produce__description--price">$${params.price}</p>
      </div>
    </div>
    <div class="cart_item__controls">
      <img
        src="./plus.png"
        class="cart_item__controls--quantity"
      />
      <p class="cart_item__controls--quantity cart_item__controls--amount">${params.amount}</p>
      <img
        src="./minus.png"
        class="cart_item__controls--quantity"
      />
    </div>
  </div>
    
    `;
  }
}

export default new CartProductView();

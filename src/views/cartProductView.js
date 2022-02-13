// static import for webpack
import plus from "../assets/plus.png";
import minus from "../assets/minus.png";
import close from "../assets/close.png";

class CartProductView {
  constructor() {
    this._DOMCartBody = document.getElementById("cart-body");
    this._DOMBuyButton = document.getElementById("btn__buy");
    this._DOMTotalSum = document.getElementById("cart_total");

    return this._instance;
  }

  static _instance;
  static getInstance() {
    if (this._instance === undefined) {
      this._instance = new CartProductView();
    }
    return this._instance;
  }

  updateCartProduct(param) {
    //getting cart_item elements

    const cartItems = document.querySelectorAll(".cart_item");

    //find the spesific cart-item
    const cartProduct = Array.from(cartItems).find(
      (item) => item.dataset.id == param.productInfo.id
    );
    if (param.productInfo.amount == 0) {
      cartProduct.remove();
      return;
    }

    const priceElement = cartProduct.getElementsByClassName(
      "cart-produce__description--price"
    );
    priceElement[0].innerHTML = param.totalPrice.toFixed(1);

    const amountElement =
      cartProduct.getElementsByClassName("btn__amount--sum");

    amountElement[0].innerHTML = param.productInfo.amount;
  }

  renderCartProduct(param, addOrRemoveListener) {
    const markup = this._markupGen(param);

    this._DOMCartBody.insertAdjacentHTML("afterbegin", markup);
    this._DOMCartBody.firstElementChild.addEventListener(
      "click",
      addOrRemoveListener
    );
  }
  removeProduct(id) {
    Array.from(this._DOMCartBody.querySelectorAll(".cart_item"))
      .find((cartProduct) => cartProduct.dataset.id == id)
      .remove();
  }
  updateTotalSum(sum) {
    this._DOMTotalSum.innerHTML = sum.toFixed(1);
  }

  _markupGen(params) {
    return `
    <div class="cart_item" data-id="${params.productInfo.id}">
    <div class="cart_item__info">
      <img
        class="cart_item__info--image"
        src="${params.productInfo.image}"
      />
      <div class="cart_item__info--description">
        <p class="cart-produce__description--info">${
          params.productInfo.title
        }</p>
        <p class="cart-produce__description--price">${params.totalPrice.toFixed(
          1
        )}</p>
      </div>
    </div>
    <div class="amount">
      <img
        src="./plus.png"
        class="amount__quantity btn__amount--add"
       
      />
      <p class="amount__quantity btn__amount--sum ">${
        params.productInfo.amount
      }</p>
      <img
        src="./minus.png"
        class="amount__quantity  btn__amount--reduce"
      />
    </div>
    <img
    src="./close.png"
    class="cart_item--remove"
  />
  </div>
    
    `;
  }
}

export default CartProductView.getInstance();

// static import for webpack
import style from "./sass/main.scss";
import logo from "./assets/logo.png";
import cart from "./assets/cart.png";

import * as model from "./model.js";
import productsView from "./views/productsView";
import cartProductView from "./views/cartProductView";

const init = function () {
  //load products from DB, render and listen to their click events
  model.loadProducts(renderProductsAndAddListeners);
  cartProductView.updateTotalSum(model.calculateTotalSum());
};
//init();

function renderProductsAndAddListeners() {
  productsView
    .render(model.state.products)
    .addListenerToProducts(productListener);
}

// listen to product clicks.
function productListener(element) {
  if (element.target.className.includes("btn__amount--add")) {
    model.addProductAmount(
      element.target.closest(".product").dataset.id,
      updateProduct
    );
  } else if (element.target.className.includes("btn__amount--reduce")) {
    model.reduceProductAmount(
      element.target.closest(".product").dataset.id,
      updateProduct
    );
  } else if (element.target.className === "product__hover--image") {
    const id = element.currentTarget.getAttribute("data-id");

    model.addProductToCart(
      id,
      updateProduct,
      cartProductView.updateCartProduct,
      renderCartProduct
    );
    cartProductView.updateTotalSum(model.calculateTotalSum());
  }
}
function updateProduct(product) {
  productsView.updateProduct(product);
}

function renderCartProduct(product) {
  cartProductView.renderCartProduct(product, cartProductListener);
}
function cartProductListener(element) {
  if (element.target.className.includes("btn__amount--add")) {
    model.addProductAmountAtCart(
      _getCartProductId(element),
      cartProductView.updateCartProduct
    );
  } else if (element.target.className.includes("btn__amount--reduce")) {
    model.reduceProductAmountAtCart(
      _getCartProductId(element),
      cartProductView.updateCartProduct
    );
  } else if (element.target.className.includes("cart_item--remove")) {
    const id = _getCartProductId(element);
    model.removeCartProduct(id);
    cartProductView.removeProduct(id);
  }
  cartProductView.updateTotalSum(model.calculateTotalSum());
}
function _getCartProductId(element) {
  return element.target.closest(".cart_item").dataset.id;
}
function totalSumListener() {}

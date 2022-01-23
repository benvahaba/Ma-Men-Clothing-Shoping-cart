import style from "./sass/main.scss";
import logo from "./assets/logo.png";
import cart from "./assets/cart.png";

import * as model from "./model.js";
import ProductsView from "./views/productsView";
import CartProductView from "./views/cartProductView";

const init = function () {
  //load products from DB, render and listen to their click events
  model.loadProducts(renderProductsAndAddListeners);
};
init();

function renderProductsAndAddListeners() {
  ProductsView.render(model.state.products).addListenerToProducts(
    productListener
  );
}

function productListener(product) {
  model.addProductToCart(
    product,
    CartProductView.updateCartProduct,
    renderCartProduct
  );
}

function renderCartProduct(product) {
  CartProductView.renderCartProduct(product, addOrReduceProductAmountListener);
}
function addOrReduceProductAmountListener(element) {
  if (element.target.className.includes("btn__amount--add")) {
    model.addProductAmountAtCart(
      element.target.closest(".cart_item").dataset.id,
      CartProductView.updateCartProduct
    );
  } else if (element.target.className.includes("btn__amount--reduce")) {
    model.reduceProductAmountAtCart(
      element.target.closest(".cart_item").dataset.id,
      CartProductView.updateCartProduct
    );
  }
}

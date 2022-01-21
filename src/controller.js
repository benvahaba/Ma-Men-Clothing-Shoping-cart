import style from "./sass/main.scss";
import logo from "./assets/logo.png";
import cart from "./assets/cart.png";

import * as model from "./model.js";
import ProductsView from "./views/productsView";
import CartProductView from "./views/cartProductView";

model.loadProducts(renderAndAddListeners);

function renderAndAddListeners() {
  ProductsView.render(model.state.products).addListenerToProducts(
    productListener
  );
}

function productListener(product) {
  model.addProductToCart(product, updateCartProduct, renderCartProduct);
}

function updateCartProduct(product) {
  CartProductView.updateCartProduct(product);
}
function renderCartProduct(product) {
  CartProductView.renderCartProduct(product);
}

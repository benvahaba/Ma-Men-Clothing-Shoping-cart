import style from "./sass/main.scss";
import logo from "./assets/logo.png";
import cart from "./assets/cart.png";

import * as model from "./model.js";
import ProductsView from "./views/productsView";

let _DOMProducts;
model.loadProducts(renderAndAddListeners);

function renderAndAddListeners() {
  ProductsView.render(model.state.products);
  _DOMProducts = document.querySelectorAll(".product");
  console.log(_DOMProducts);
  _DOMProducts.forEach((DOMProduct) => {
    console.log("adding click listener");

    DOMProduct.addEventListener("click", ProductListener);
  });
}

function ProductListener(product) {}

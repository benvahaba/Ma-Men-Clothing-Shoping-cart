import style from "./sass/main.scss";
import logo from "./assets/logo.png";
import cart from "./assets/cart.png";

import * as model from "./model.js";
import ProductsView from "./views/productsView";

model.loadProducts(productsFetched);

function productsFetched() {
  ProductsView.render(model.state.products);
}

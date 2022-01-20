import _productsLocalJson from "./assets/products.json";

export const state = {
  products: [],
  cartProducts: new Set(),
};

export const loadProducts = function (productsUpdatedListener) {
  const req = new XMLHttpRequest();
  req.open("get", "./products.json", true);

  req.onload = function () {
    if (req.status == 200) {
      state.products = JSON.parse(req.responseText);
      productsUpdatedListener();
    }
    if (req.status == 400) {
      console.log("file not found");
    }
  };
  req.onerror = function () {
    //TODO
  };

  req.send();

  console.log("finished");
};
export const addProductToCart = function (DOMProduct) {
  if (state.cartProducts.has(DOMProduct)) {
  } else {
  }
};

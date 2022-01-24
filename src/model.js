import _productsLocalJson from "./assets/products.json";

export const state = {
  products: [],
  cartProducts: new Map(),
};

export const loadProducts = function (productsUpdatedListener) {
  const req = new XMLHttpRequest();
  req.open("get", "./products.json", true);

  req.onload = function () {
    if (req.status == 200) {
      state.products = JSON.parse(req.responseText);
      state.products.forEach((product) => (product.amount = 1));
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
};
export const addProductToCart = function (
  id,
  updateCartProduct,
  renderCartProduct
) {
  if (state.cartProducts.has(id)) {
    // product exists in cart and needs to be updated
    addProductAmountAtCart(id, updateCartProduct);
  } else {
    //product was not at cart and needs to be renderd
    const productInfo = state.products.find((product) => product.id == id);

    productInfo.amount = 1;
    state.cartProducts.set(id, productInfo);
    renderCartProduct(productInfo);
  }
};
export function addProductAmountAtCart(id, updateCartProduct) {
  state.cartProducts.get(id).amount++;
  updateCartProduct(state.cartProducts.get(id));
}
export function reduceProductAmountAtCart(id, updateCartProduct) {
  state.cartProducts.get(id).amount--;
  const tempCartProduct = state.cartProducts.get(id);
  if (tempCartProduct.amount == 0) {
    state.cartProducts.delete(id);
  }
  updateCartProduct(tempCartProduct);
}
export function addProductAmount(id, updateProduct) {
  let product = state.products.find((product) => product.id == id);

  product.amount++;
  updateProduct(product);
}
export function reduceProductAmount(id, updateProduct) {
  let product = state.products.find((product) => product.id == id);

  if (product.amount == 1) return;

  product.amount--;

  updateProduct(product);
}

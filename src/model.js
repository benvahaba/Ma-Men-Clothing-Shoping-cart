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
      //todo throw and render error
    }
  };
  req.onerror = function () {
    console.log("file not found");
    //todo throw and render error
  };

  req.send();
};
export const addProductToCart = function (
  id,
  updateProduct,
  updateCartProduct,
  renderCartProduct
) {
  const product = state.products.find((product) => product.id == id);

  if (state.cartProducts.has(id)) {
    // product exists in cart and needs to be updated
    const cartProduct = state.cartProducts.get(id);
    //sum the cart product amount with the chosen product amount
    cartProduct.amount += product.amount;

    _updateCartPrice(id);

    updateCartProduct(cartProduct);
  } else {
    //product was not at cart and needs to be renderd

    state.cartProducts.set(id, { ...product });
    _updateCartPrice(id);
    renderCartProduct(state.cartProducts.get(id));
  }
  product.amount = 1;
  updateProduct(product);
};
export function addProductAmountAtCart(id, updateCartProduct) {
  state.cartProducts.get(id).amount++;
  _updateCartPrice(id);
  updateCartProduct(state.cartProducts.get(id));
}
export function reduceProductAmountAtCart(id, updateCartProduct) {
  state.cartProducts.get(id).amount--;
  _updateCartPrice(id);
  const tempCartProduct = state.cartProducts.get(id);
  if (tempCartProduct.amount == 0) state.cartProducts.delete(id);

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
export function removeCartProduct(id) {
  state.cartProducts.delete(id);
}
export function calculateTotalSum() {
  const sum = Array.from(state.cartProducts).reduce((acc, cartProduct) => {
    acc += cartProduct[1].price;
    return acc;
  }, 0);

  return sum;
}
function _updateCartPrice(id) {
  const productPrice = state.products.find((product) => product.id == id).price;
  const cartProduct = state.cartProducts.get(id);
  cartProduct.price = cartProduct.amount * productPrice;
}

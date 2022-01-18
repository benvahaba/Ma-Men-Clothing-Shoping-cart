class ProductsView {
  _DOMParent=Document.
  render(productArr, render = true) {
    //in case of errors

    if (
      !productArr ||
      !Array.isArray(productArr) ||
      (Array.isArray(productArr) && productArr.length === 0)
    ) {
      //TODO
    }

    this._generateMarkup(productArr);
  }
  _generateMarkup(productArr) {
    const markup = productArr.reduce((acc, product) => {
      acc += `
      <div class="product">
     <img
       class="product__image"
       src="${product.image}"
       alt="logo"
     />
 
     <h2>${product.title}</h2>
     <p>
       Price:
       <span class="product__price-currency">$</span>
       <span class="product__price"> ${product.price} </span>
     </p>
     <div class="product__cart-box">
       <img class="product__cart" src="./assets/cart.png" alt="cart" />
     </div>
   </div> `;
      return acc;
    }, "");
  }
}

export default new ProductsView();

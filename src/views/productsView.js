import productPictures1 from "../assets/clothing/2632403805_6_1_1.jpg";
import productPictures2 from "../assets/clothing/6771407800_6_1_1.jpg";
import productPictures3 from "../assets/clothing/ezgif-7-5fecef2611.jpg";
import productPictures4 from "../assets/clothing/ezgif-7-8be437ed0e.jpg";
import productPictures5 from "../assets/clothing/ezgif-7-9af305e781.jpg";
import productPictures6 from "../assets/clothing/ezgif-7-81e74a915e.jpg";
import productPictures7 from "../assets/clothing/ezgif-7-194f1769bb.jpg";
import productPictures8 from "../assets/clothing/ezgif-7-57500c769d.jpg";
import productPictures9 from "../assets/clothing/ezgif-7-5635011e38.jpg";
import productPictures10 from "../assets/clothing/ezgif-7-d4790b5529.jpg";
import productPictures11 from "../assets/clothing/ezgif-7-e4e02e5070.jpg";
import productPictures12 from "../assets/clothing/ezgif-7-fc21d4918c.jpg";
import cart from "../assets/cart.png";

class ProductsView {
  render(productArr, render = true) {
    //in case of errors

    if (
      !productArr ||
      !Array.isArray(productArr) ||
      (Array.isArray(productArr) && productArr.length === 0)
    )
      return;

    const markup = this._generateMarkup(productArr);
    const _DOMParent = document.getElementById("container");
    _DOMParent.insertAdjacentHTML("afterbegin", markup);

    this._DOMProducts = document.querySelectorAll(".product");
    return this;
  }

  addListenerToProducts(listener) {
    this._DOMProducts.forEach((DOMProduct) => {
      DOMProduct.addEventListener("click", listener);
    });
  }

  _generateMarkup(productArr) {
    const markup = productArr.reduce((acc, product) => {
      acc += `
      <div class="product" data-id="${product.id}">
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
       <img class="product__cart" src="./cart.png" alt="cart" />
     </div>
   </div> `;
      return acc;
    }, "");
    return markup;
  }
}

export default new ProductsView();

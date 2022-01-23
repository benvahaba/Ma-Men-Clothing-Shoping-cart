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
      acc += `<div class="product" data-id="${product.id}">
      <img
        class="product__image"
        src="${product.image}"
        alt="logo"
      />

      <h2>black shirt</h2>
      <p>
        Price:
        <span class="product__price-currency">$</span>
        <span class="product__price">${product.price} </span>
      </p>
      <div class="product__hover">
        <div class="product__hover--inner-box">
          <div class="product__hover--cart">
            <img
              src="./cart.png"
              class="product__hover--image"
              alt="cart"
            />
          </div>

          <div class="product__hover--amount-box amount">
            <img
              src="./plus.png"
              class="amount__quantity btn__amount--add"
            />
            <p class="amount__quantity cart_item__controls--amount">1</p>
            <img
              src="./minus.png"
              class="amount__quantity btn__amount--reduce"
            />
          </div>
        </div>
      </div>
    </div> `;
      return acc;
    }, "");
    return markup;
  }
}

export default new ProductsView();

{
  /* <div class="product" data-id="3">
        <img
          class="product__image"
          src="./assets/clothing/2632403805_6_1_1.jpg"
          alt="logo"
        />

        <h2>black shirt</h2>
        <p>
          Price:
          <span class="product__price-currency">$</span>
          <span class="product__price"> 300 </span>
        </p>
        <div class="product__hover">
          <div class="product__hover--inner-box">
            <div class="product__hover--cart">
              <img
                src="./assets/cart.png"
                class="product__hover--image"
                alt="cart"
              />
            </div>

            <div class="product__hover--amount-box amount">
              <img
                src="./assets/plus.png"
                class="amount__quantity btn__amount--add"
              />
              <p class="amount__quantity cart_item__controls--amount">0</p>
              <img
                src="./assets/minus.png"
                class="amount__quantity btn__amount--reduce"
              />
            </div>
          </div>
        </div>
      </div> */
}

//     `
//     <div class="product" data-id="${product.id}">
//    <img
//      class="product__image"
//      src="${product.image}"
//      alt="logo"
//    />

//    <h2>${product.title}</h2>
//    <p>
//      Price:
//      <span class="product__price-currency">$</span>
//      <span class="product__price"> ${product.price} </span>
//    </p>
//    <div class="product__cart-box">
//      <img class="product__cart" src="./cart.png" alt="cart" />
//    </div>
//  </div> `

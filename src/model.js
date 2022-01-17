import products from "./products.txt";

export const state = {
  products: [],
};

export const loadProducts = function () {
  const req = new XMLHttpRequest();

  req.onreadystatechange = function () {
    if (req.readyState == 4) {
      if (req.status == 200) {
        console.log(req.response);
      }
      if (req.status == 400) {
        console.log("file not found");
      }
    }
  };
  req.open("get", "products.txt", true);
  req.send();
};

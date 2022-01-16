export const state = {
  products: [],
};

export const loadProducts = function () {
  const req = new XMLHttpRequest();
  req.addEventListener("load", () => {});

  req.open("GET", "", true);
  req.send();
};

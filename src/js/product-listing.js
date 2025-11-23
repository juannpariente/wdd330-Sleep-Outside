import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";

loadHeaderFooter();

const category = getParam("category");

document.querySelector(".products-name").textContent =
  category.charAt(0).toUpperCase() + category.slice(1);

const dataSource = new ProductData();

const element = document.querySelector(".product-list");

const myList = new ProductList(category, dataSource, element);

myList.init();

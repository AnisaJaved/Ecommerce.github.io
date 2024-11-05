


import products from "./api/products.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";

import { getCartProductFromLS } from "./getCartProduct";
import { incrementDecrement } from "./incrementDecrement";
import { removeTheCardFromCart } from "./removeTheCardFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

let cardProducts = getCartProductFromLS();
let filterProduct = products.filter((ele) => {
   //---map sy b ni ay tha includes sy b ni aya tha    some method sy aya tha 
   return cardProducts.some((curele) => curele.id === ele.id)
})



const productCartTemplate = document.querySelector("#productCartTemplate");
const productCartContainer = document.querySelector("#productCartContainer");



const showCartProduct = () => {
   filterProduct.forEach((curProd) => {
      const { category, id, image, name, stock, price } = curProd;
      const lSActualData = fetchQuantityFromCartLS(id, stock)

      let productClone = document.importNode(productCartTemplate.content, true);
      //---------------- in template have one div  (id cardvalve )get the id in this belowe and with setattribute (id)name (card id : 1,2,3,4,5,6) 
      productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

      productClone.querySelector(".category").textContent = category;
      productClone.querySelector(".productImage").src = image;
      productClone.querySelector(".productName").textContent = name;
      productClone.querySelector(".productQuantity").textContent = lSActualData.quantity;
      productClone.querySelector(".productPrice").textContent = lSActualData.price;

      productClone.querySelector('.stockElement')
         .addEventListener('click', () => {
            incrementDecrement(event, id, stock, price)
         })

      productClone.querySelector('.remove-to-cart-button')
         .addEventListener('click', () => {
            removeTheCardFromCart(id)
         })
      productCartContainer.append(productClone)

   })
}
 

updateCartProductTotal();


showCartProduct();
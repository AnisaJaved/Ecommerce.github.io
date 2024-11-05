import { updateCartValue } from "./updateCartValue";

import { getCartProductFromLS } from "./getCartProduct";
import { showToast } from "./showToast";

getCartProductFromLS();
export const addToCart1 = (event, id, stock) => {

   let arrLocalStorageProduct = getCartProductFromLS();

   const currentProdElem = document.querySelector(`#card${id}`);
   let quantity = currentProdElem.querySelector(".productQuantity").innerText;
   let price = currentProdElem.querySelector(".productPrice").innerText;
   // console.log(quantity, price);
   price = price.replace("Rs", "");


   let existingProd = arrLocalStorageProduct.find(
      (curProd) => curProd.id === id
   );
 

   if (existingProd && quantity > 1) {
      let updatedCart = { id, quantity, price };

      quantity = Number(existingProd.quantity) + Number(quantity);
      price = Number(price * quantity);

      updatedCart = arrLocalStorageProduct.map((curProd) => {
         return curProd.id === id ? updatedCart : curProd;
      });
      console.log(updatedCart,'aneesa');

      localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
      //show toast when product added to the cart
      showToast("add", id);
   }

   if (existingProd) {
      return false
   }

  price = Number(price * quantity);
   quantity = Number(quantity);

   arrLocalStorageProduct.push({ id, quantity, price });
   localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

// console.log(price);

   // console.log(arrLocalStorageProduct);

   // arrLocalStorageProduct.map((ele,index) => {

   //    console.log(ele,index);

   // })
   updateCartValue(arrLocalStorageProduct);

   showToast("add", id);

}
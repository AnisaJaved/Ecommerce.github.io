import { getCartProductFromLS } from "./getCartProduct";


export const updateCartProductTotal = () => {

   let productSubTotal = document.querySelector(".productSubTotal");
   let productFinalTotal = document.querySelector(".productFinalTotal");

   let localCartProducts = getCartProductFromLS();
   let initialValue = 0
  let totalProductPrice=  localCartProducts.reduce((accum, ele) => {

  let productPrice=parseInt(ele.price)||0;
  return productPrice+accum;

   },initialValue)
   console.log(totalProductPrice);
   productSubTotal.textContent = `Rs ${totalProductPrice}`;
   productFinalTotal.textContent = `Rs ${totalProductPrice + 50}`;
    
}

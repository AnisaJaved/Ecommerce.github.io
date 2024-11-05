import { addToCart1 } from "./addToCart1";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.querySelector('#productContainer');
const productTemplate = document.querySelector('#productTemplate');

export const showProductContainer = (products) => {
   // console.log(products);

   if (!products) {
      return false;
   }
//---------------for each loop access the array in api-------------------
   products.forEach(curProd => {
      // console.log(curProd.brand);

      const { brand, category, description, id, image, name, price, stock } =
         curProd;
         // console.log(category);
         
      const productClone = document.importNode(productTemplate.content, true);
// replace the id in belowe (all set)hhh
      productClone.querySelector('#cardValue').setAttribute('id',`card${id}`);

      productClone.querySelector(".productName").textContent = name;
      productClone.querySelector(".productImage").src = image;
      productClone.querySelector(".productImage").alt = name;
      productClone.querySelector(".category").textContent = category;
      productClone.querySelector(".productDescription").textContent = description;
      productClone.querySelector(".productStock").textContent = stock;
      productClone.querySelector(".productPrice").textContent = `Rs ${price}`;
      productClone.querySelector(".productActualPrice").textContent = `Rs ${price * 4}`;
//
      productClone
         .querySelector(".stockElement")
         .addEventListener("click", (event) => {
            homeQuantityToggle(event, id, stock);
         });

      productClone
         .querySelector(".add-to-cart-button")
         .addEventListener("click", (event) => {
            addToCart1(event, id, stock);
            
         });

       
         
      //-----------------------------------------------------  
     
      productContainer.append(productClone);

// console.log('aneesa');


   });
}



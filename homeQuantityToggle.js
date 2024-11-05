
export const homeQuantityToggle = (event, id, stock) => {

   const currentCardElement = document.querySelector(`#card${id}`);
   // console.log(currentCardElement);
   const productQuantity = currentCardElement.querySelector('.productQuantity');
   // console.log(productQuantity);
   // productQuantity


   
   // is ke bad hum ny is ko parseint kia
   let quantity = parseInt(productQuantity.getAttribute('data-quantity'))||1;
   
   if (event.target.className ==='cartIncrement'){
      if(quantity<stock){
         quantity+=1;
      }else if(quantity===stock){
         quantity=stock;
      }
   }
   if (event.target.className ==='cartDecrement'){
      if (quantity >1) {
         quantity -= 1;
      }
   }
   productQuantity.innerHTML=quantity;
   
   // why to setAttributein to string? from aneesa javed comment 
   //  because any Attribute  value not set without string in html therefore we use tostring builting function  
   // below :Attribute value in this attribute (quantity)
   productQuantity.setAttribute('data-quantity',quantity.toString());
   return quantity; 


}
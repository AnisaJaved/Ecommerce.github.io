import { getCartProductFromLS } from "./getCartProduct";
import { showToast } from "./showToast";
import { updateCartProductTotal } from "./updateCartProductTotal";
import { updateCartValue } from "./updateCartValue";


export const removeTheCardFromCart = (id) => {
   let cartProducts = getCartProductFromLS();
   cartProducts = cartProducts.filter((ele) => ele.id !== id)
   localStorage.setItem('cartProductLS', JSON.stringify(cartProducts));
   let removediv = document.querySelector(`#card${id}`);
   if (removediv) {  
      removediv.remove()

      showToast('delete',id)
   }
   updateCartValue(cartProducts);

   updateCartProductTotal();
 
}
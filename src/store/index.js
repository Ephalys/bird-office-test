import { createStore } from 'vuex';
import productsJson from '/data/products.json';

export default createStore({
  state: {
    products: [productsJson.products],
    cart: [],
  },
  mutations: {
    addCartItem(state, item) {
      state.cart.push(item);
    },
    updateCartItem(state, updatedItem) {
      state.cart = state.cart.map((cartItem) => {
        if (cartItem.id == updatedItem.id) {
          cartItem.quantity = updatedItem.quantity;
        }

        return cartItem;
      });
    },
    removeCartItem(state, id) {
      state.cart = state.cart.filter((cartItem) => {
        return cartItem.id != id;
      });
    },
  },
});

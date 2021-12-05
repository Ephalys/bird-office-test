<template>
  <nav class="nav">
    <router-link to="/">
      <img src="../assets/images/logo.svg" alt="logo" class="nav-logo" />
    </router-link>
    <div class="nav-cart" @mouseover="showCart" @mouseleave="hideCart">
      <img src="../assets/images/icons/cart.svg" alt="cart" />
      <span class="nav-cart-label">Shopping Cart</span>
      <div class="nav-cart-count">
        {{ cart_items }}
      </div>
      <transition name="fade" appear>
        <Cart :visibleCart="this.visibleCart" />
      </transition>
    </div>
    <transition name="fade" appear>
      <div v-show="visibleCart" class="overlay"></div>
    </transition>
  </nav>
</template>

<script>
import Cart from "@/components/Cart.vue";
export default {
  name: "Header",
  components: {
    Cart,
  },
  data() {
    return {
      cart_items: 0,
      visibleCart: false,
    };
  },
  methods: {
    showCart() {
      this.visibleCart = true;
    },
    hideCart() {
      this.visibleCart = false;
    },
  },
};
</script>

<style scoped lang="scss">
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 1;
}
.nav {
  position: relative;
  display: flex;
  justify-content: space-between;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);
  margin-bottom: 50px;

  &-logo {
    padding: 20px;
  }

  &-cart {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    z-index: 2;
    cursor: pointer;
    background-color: white;
    gap: 15px;
    padding-left: 15px;
    border-left: 1px solid rgba(254, 189, 23, 0.1);

    &-label {
      font-size: 12px;
      color: $light-grey;

      @media (max-width: $screen-max-sm) {
        display: none;
      }
    }
    &-count {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      background-color: $primary;
      border-radius: 50%;
      min-height: 36px;
      min-width: 36px;
    }
  }
}
</style>
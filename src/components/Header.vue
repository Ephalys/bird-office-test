<template>
  <nav class="nav">
    <a href="">
      <img src="../assets/logo.svg" alt="logo" />
    </a>
    <div class="nav-cart">
      <img src="../assets/icons/cart.svg" alt="cart" />
      <span class="nav-cart-label">Shopping Cart</span>
      <div class="nav-cart-count">
        {{ cart_items }}
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      cart_items: 0,
    };
  },
};
</script>

<style scoped lang="scss">
.nav {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);

  &-cart {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding-left: 15px;
    border-left: 1px solid rgba(254, 189, 23, 0.1);

    &-label {
      font-size: 12px;
      color: $light-grey;
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
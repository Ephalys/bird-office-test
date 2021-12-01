<template>
  <nav class="nav">
    <a href="">
      <img src="../assets/logo.svg" alt="logo" />
    </a>
    <div class="nav-cart">
          <img src="../assets/icons/cart.svg" alt="cart">
          <span>Shopping Cart</span>
          <div>
              {{cart_items}}
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
      }
  }
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
  }
}
</style>
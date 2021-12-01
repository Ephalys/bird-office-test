<template>
  <div class="card">
    <img src="assets/images/products/product_0.jpg" class="card-image" alt="" />
    <div class="card-infos">
      <p class="card-title">Step behind</p>
      <p class="card-price">$7,956</p>
    </div>
    <p class="card-desc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, eum.
    </p>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;

  &-image {
      width: 100%;
      min-height: 320px;
  }

  &-infos {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 5px solid rgba(254, 189, 23, 0.1);

    .card-title {
    color: $dark-grey;
      font-weight: bold;
    }
    .card-price {
      color: $primary;
    }
  }
  &-desc {
      margin-top: 10px;
  }
}
</style>
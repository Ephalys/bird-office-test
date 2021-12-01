<template>
  <router-link :to="{ name: 'Product', params: { id: product.id }}" class="card">
    <img
      src="../assets/images/products/product_0.jpg"
      class="card-image"
      alt=""
    />
    <div class="card-infos">
      <h3 class="card-title">{{ product.title }}</h3>
      <p class="card-price">${{ product.price }}</p>
    </div>
    <p class="card-desc">
      {{ product.excerpt }}
    </p>
  </router-link>
</template>

<script>
export default {
  name: "Card",
  props: {
    product: Object,
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  transition: background-color 0.3s;
  &:hover {
    background-color: #eeeeee;
    transition: background-color 0.3s;
  }

  &-image {
    width: 100%;
  }

  &-infos {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 5px solid rgba(254, 189, 23, 0.1);

    .card-title {
      color: $dark-grey;
      font-weight: bold;
      font-size: 16px;
      margin: 0;
    }
    .card-price {
      color: $primary;
    }
  }
  &-desc {
    padding: 10px;
  }
}
</style>
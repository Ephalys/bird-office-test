<template>
  <div class="card-list">
    <h2>{{ formatCategoryTitle }}</h2>
    <div class="card-list-items">
      <Card v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "CardList",
  components: {
    Card,
  },
  props: {
    categoryTitle: String,
    products: Array,
  },
  computed: {
      formatCategoryTitle() {
          return this.categoryTitle.replaceAll('_', ' ')
      }
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.card-list {
  margin-bottom: 30px;
  text-transform: capitalize;
  h2 {
    margin-bottom: 20px;
    color: $dark-grey;
    font-size: 36px;
    font-weight: bold;
  }
  &-items {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
<template>
  <div class="home container">
    <CardList
      v-for="(productsCategory, index) in products"
      :products="productsCategory"
      :categoryTitle="index"
      :key="productsCategory"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import CardList from "@/components/CardList.vue";
import productsJson from "/data/products.json";

export default {
  name: "Home",
  components: {
    CardList,
  },
  data() {
    return {
      products: productsJson.products,
    };
  },
};
</script>

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
import { useStore } from "vuex";
import CardList from "@/components/CardList.vue";

export default {
  name: "Home",
  components: {
    CardList,
  },
  data() {
    const store = useStore();
    return {
      products: store.state.products[0],
    };
  },
};
</script>

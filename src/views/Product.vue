<template>
  <div class="product container">
    <h1>This is a product page</h1>
  </div>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      id: this.$route.params.id
    };
  },
};
</script>
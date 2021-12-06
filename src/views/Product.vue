<template>
  <div class="product container">
    <div class="product-infos">
      <h1>{{this.productData.title}}</h1>
      <div class="product-price">${{this.productData.price}}</div>
      <div class="product-description">
        {{this.productData.description}}
      </div>
      <div class="product-price-infos">
        Prices valid till 31.10.2019, yearly adjustment for conversion rate to
        EURO
      </div>
      <div class="product-cart">
        <div class="product-quantity">
          <button class="cart-action" @click="itemCount > 1 && itemCount--">
            -
          </button>
          {{ itemCount }}
          <button class="cart-action" @click="itemCount++">+</button>
        </div>
        <button class="btn-primary cart-add">Add to Cart</button>
      </div>
    </div>
    <div class="product-image">
      <img src="../assets/images/products/product_0.jpg" alt="" />
    </div>
  </div>
</template>

<script>
import productsJson from "/data/products.json";

export default {
  name: "Product",
  data() {
    return {
      products: productsJson.products,
      id: this.$route.params.id,
      productData: null,
      itemCount: 1,
    };
  },
  created() {
    this.productData = this.getProductData(this.products)
  },
  methods: {
    getProductData(object) {
      if (Object.prototype.hasOwnProperty.call(object, "id") && object["id"] == this.id) return object;

      for (var i = 0; i < Object.keys(object).length; i++) {
        if (typeof object[Object.keys(object)[i]] == "object") {
          var o = this.getProductData(object[Object.keys(object)[i]]);
          if (o != null) return o;
        }
      }
      return null;
    },
  },
};
</script>
<style scoped lang="scss">
.product {
  display: flex;
  gap: 20px;

  @media (max-width: $screen-max-sm) {
    flex-direction: column;
  }

  &-image {
    min-width: 40%;

    @media (max-width: $screen-max-xs) {
      min-width: 80%;
      margin: auto;
    }

    @media (min-width: $screen-min-xs) and (max-width: $screen-max-sm) {
      max-width: 50%;
      margin: auto;
    }

    img {
      width: 100%;
    }
  }

  &-infos {
    margin-bottom: 30px;
    @media (max-width: $screen-max-sm) {
      order: 2;
    }

    h1 {
      font-size: 48px;
      margin-bottom: 15px;

      @media (max-width: $screen-max-sm) {
        font-size: 28px;
      }
    }
  }

  &-price {
    color: $primary;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;

    @media (max-width: $screen-max-sm) {
      font-size: 20px;
    }

    &-infos {
      color: $light-grey;
      margin-bottom: 30px;
    }
  }

  &-description {
    border-top: 5px solid rgba(254, 189, 23, 0.1);
    padding: 30px 0;
  }

  &-cart {
    display: flex;
    align-items: center;
    gap: 20px;

    .product-quantity {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;
      padding: 5px;
      background: rgba(229, 229, 229, 0.5);
    }

    .cart-action {
      padding: 10px;
      background-color: #e5e5e5;

      &:hover {
        background-color: #cacaca;
      }
    }

    .cart-add {
      padding: 15px 20px;
    }
  }
}
</style>
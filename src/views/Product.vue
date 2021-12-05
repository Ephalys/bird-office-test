<template>
  <div class="product container">
    <div class="product-infos">
      <h1>Step behind the scenes of Havana’s thearter</h1>
      <div class="product-price">$7,956</div>
      <div class="product-description">
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Vestibulum tortor quam Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet,
        ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi
        vitae est. Mauris placerat eleifend leo.
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
export default {
  name: "Product",
  data() {
    return {
      id: this.$route.params.id,
      itemCount: 1,
    };
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
<template>
  <div v-if="visibleCart" class="cart">
    <div class="cart-item">
      <div class="cart-item-header">
        <div class="cart-item-title">
          Step behind the Scenes of Havana’s theater
        </div>
        <div class="divider"></div>
        <button class="cart-item-delete">
          <img src="../assets/images/icons/trash.svg" alt="" />
        </button>
      </div>
      <div class="cart-item-quantity">2 x 7,956$</div>
      <div class="cart-item-price">15,912$</div>
    </div>
    <div class="cart-footer">
      <span class="cart-total-label">TOTAL</span>
      <span class="cart-total-price">29.999$</span>
      <button class="btn-primary">Validate</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: {
    product: Object,
    visibleCart: Boolean,
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.cart {
  position: absolute;
  top: 100%;
  right: 0;
  width: 768px;
  background-color: white;
  padding: 0 20px;
  cursor: auto;

  @media (max-width: $screen-max-sm) {
    width: 100%;
  }
  &-item {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 0.5fr;
    gap: 10px;
    padding: 20px 0;

    &-header {
      display: flex;
      align-items: center;
      gap: 20px;
      grid-column-end: span 4;
    }

    .divider {
      background-color: rgba(254, 189, 23, 0.1);
      height: 1px;
      width: 100%;
    }

    &-title {
      font-weight: bold;
    }

    &-quantity {
      align-self: end;
      grid-row: 2;
      grid-column: 2;
      color: $light-grey;
    }

    &-price {
      grid-row: 2;
      grid-column: 3;
      align-self: end;
    }

    &-delete {
      background: none;
      justify-self: right;
    }
  }
  &-footer {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 0.5fr;
    align-items: center;
    gap: 10px;
    border-top: 5px solid rgba(254, 189, 23, 0.1);
    padding: 20px 0;

    .cart-total {
      &-label {
        grid-column: 2;
        font-weight: bold;
      }
      &-price {
        color: $primary;
        font-weight: bold;
      }
    }

    button {
      padding: 5px;
    }
  }
}
</style>
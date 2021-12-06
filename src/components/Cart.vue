<template>
  <div v-if="visibleCart" class="cart">
    <div v-for="cartItem in cart" class="cart-item" :key="cartItem.id">
      <div class="cart-item-header">
        <div class="cart-item-title">
          {{ cartItem.title }}
        </div>
        <div class="divider"></div>
        <button class="cart-item-delete" @click="deleteFromCart(cartItem.id)">
          <img src="../assets/images/icons/trash.svg" alt="" />
        </button>
      </div>
      <div class="cart-item-quantity">
        {{ cartItem.quantity }} x {{ numberWithCommas(cartItem.price) }}$
      </div>
      <div class="cart-item-price">
        {{ numberWithCommas(cartItem.quantity * cartItem.price) }}$
      </div>
    </div>
    <div class="cart-footer">
      <span class="cart-total-label">TOTAL</span>
      <span class="cart-total-price">{{ numberWithCommas(total) }}$</span>
      <button class="btn-primary">Validate</button>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { numberWithCommas } from "@/helpers";

export default {
  name: "Cart",
  props: {
    visibleCart: Boolean,
  },
  data() {
    const store = useStore();
    return {
      store: store,
    };
  },
  methods: {
    numberWithCommas,
    deleteFromCart(id) {
      this.store.commit("removeCartItem", id);
    },
  },
  computed: {
    cart() {
      return this.store.state.cart
    },
    total() {
      return this.cart.reduce((total, next) => {
        return total + next.quantity * next.price;
      }, 0);
    },
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
      justify-content: space-between;
      gap: 20px;
      grid-column-end: span 4;
    }

    .divider {
      background-color: rgba(254, 189, 23, 0.1);
      height: 1px;
      flex: 1;

      @media (max-width: $screen-max-xs) {
        display: none;
      }
    }

    &-title {
      font-weight: bold;
    }

    &-quantity {
      align-self: end;
      grid-row: 2;
      grid-column: 2;
      color: $light-grey;

      @media (max-width: $screen-max-xs) {
        grid-row: 2;
        grid-column: 1;
      }
    }

    &-price {
      grid-row: 2;
      grid-column: 3;
      align-self: end;

      @media (max-width: $screen-max-xs) {
        grid-row: 3;
        grid-column: 1;
      }
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
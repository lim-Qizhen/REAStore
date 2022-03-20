<template>
  <div class="checkout">
    Thank you for shopping with us! Please make payment of
    <span
      >${{ priceWithGST }} to Singapore DBS account 293-38373 within 3 days
    </span>
    for your order to be processed. We hope you will enjoy your purchase!
    <br />
    <NuxtLink to="/"
      ><button>{{ $t("shop") }}</button></NuxtLink
    >
  </div>
</template>

<script>
export default {
  name: "CheckOut",
  computed: {
    cart() {
      return this.$store.state.cart.list;
    },
    priceWithGST() {
      return this.$store.state.cart.totalCost;
    },
    totalCost() {
      let cost = 0;
      for (const item of this.$store.state.cart.list) {
        cost += parseInt(item.text.cost);
      }
      return parseFloat(cost).toFixed(2);
    },
  },
  methods: {
    addToCart(product) {
      this.$store.commit("cart/add", product);
    },
  },
};
</script>

<style>
body {
  background-color: #ffe8d6;
  color: #6b705c;
}
.checkout {
  text-align: center;
  margin-top: 35%;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
span {
  color: black;
  font-weight: bold;
}
</style>

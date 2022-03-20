<template>
  <div>
    <NavBar />
    <h2>{{ $t("countries") }}</h2>

    <div v-for="country in countries" :key="country.name" class="country">
      <div class="sticky">
        <h3>{{ $t(country.name) }}</h3>
      </div>
      <div class="products">
        <div
          v-for="product in country.products"
          :key="product.name"
          class="product"
        >
          <img :src="product.img" />
          <p>{{ $t(product.name) }}</p>
          <p>${{ product.cost }}</p>
          <button v-on:click="addToCart(product)">{{ $t("addToCart") }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllCountries",
  computed: {
    cart() {
      return this.$store.state.todos.list;
    },
  },
  data: () => {
    return {
      countries: [
        {
          name: "singapore",
          image: "url link",
          products: [
            {
              name: "singaporeOne",
              cost: "59.00",
              img: "https://images.krisshop.com/pim/UV4UUutHbxhA0adr8SuX1HYYP9nCCDaeZOc2KjQ4FxM=/322x,q80/catalog/3/0/a/4/30a4bb6821aa87ca49d6111f96032f49_210676_dwb5fX6EX.jpg",
            },
            {
              name: "singaporeTwo",
              cost: "148.00",
              img: "https://cdn.shopify.com/s/files/1/0175/9848/products/edp-singapore-girl-100ml-perfumes-singapore-memories-833729_1004x.JPG?v=1569633018",
            },
          ],
        },
        {
          name: "hongkong",
          image: "url link",
          products: [
            {
              name: "hongkongOne",
              cost: "55.00",
              img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcScgFB2nkFQ6AX41J-E5--hRwRiQXTh3b8LpNLLpGBJYZ5SUkh04KUGvow8LtWQ5bMJ7VA25AgK&usqp=CAE",
            },
            {
              name: "hongkongTwo",
              cost: "180.00",
              img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS4m-80htnESe9M7vMNSNPItqLPZDVbhTMdP5vOofFajFZH8R2KmHZKP9tBPFk&usqp=CAE",
            },
          ],
        },
      ],
    };
  },
  methods: {
    addToCart(product) {
      this.$store.commit("cart/add", product);
    },
  },
  components: {},
};
</script>

<style>
body {
  background-color: #ffe8d6;
  color: #6b705c;
}
.products {
  display: flex;
}
.product {
  width: 350px;
  height: 450px;
  align-content: center;
  text-align: center;
}
img {
  max-width: 90%;
  max-height: 90%;
}
.sticky {
  position: sticky;
  top: 50px;
  background-color: #ffe8d6;
}
</style>

<template>
  <div>
    <NavBar />
    <table>
      <tr>
        <th id="product">{{ $t("product") }}</th>
        <th id="cost">{{ $t("price") }}</th>
        <th id="quantity">{{ $t("quantity") }}</th>
      </tr>
      <tr v-for="item in cart">
        <td>{{ $t(item.name) }}</td>
        <td id="numbers">${{ item.cost }}</td>
        <td id="numbers">{{ item.qty }}</td>
      </tr>
    </table>

    <h4>{{ $t("totalCost") }} (before GST): ${{ totalCost }}</h4>

    <label for="market">{{ $t("location") }}</label>

    <select name="market" v-model="selected">
      <option v-for="option in options" v-bind:value="option.value">
        {{ $t(option.label) }}
      </option>
    </select>
    <div v-if="selected === 'hk'">
      <h4>
        {{ $t("totalCost") }}: ${{ (parseFloat(totalCost) * 1.03).toFixed(2) }}
      </h4>
      <NuxtLink to="/checkOut"
        ><button
          v-on:click="updateCost((parseFloat(totalCost) * 1.03).toFixed(2))"
        >
          {{ $t("checkOut") }}
        </button></NuxtLink
      >
    </div>
    <div v-if="selected === 'sg'">
      <h4>
        {{ $t("totalCost") }}: ${{ (parseFloat(totalCost) * 1.07).toFixed(2) }}
      </h4>
      <NuxtLink to="/checkOut"
        ><button
          v-on:click="updateCost((parseFloat(totalCost) * 1.07).toFixed(2))"
        >
          {{ $t("checkOut") }}
        </button></NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "CartPage",
  data: () => {
    return {
      selected: "",
      options: [
        { label: "hongkong", value: "hk" },
        { label: "singapore", value: "sg" },
      ],
    };
  },
  computed: {
    cart() {
      console.log(this.$store.state.cart.list);
      return this.$store.state.cart.list;
    },
    totalCost() {
      let cost = 0;
      for (const item of this.$store.state.cart.list) {
        cost += parseInt(item.cost) * item.qty;
      }
      return parseFloat(cost).toFixed(2);
    },
  },
  methods: {
    chooseCountry(country) {
      console.log(country);
    },
    updateCost(withGST) {
      this.$store.commit("cart/update", withGST);
    },
  },
};
</script>

<style>
#product {
  width: 300px;
}
#cost {
  width: 100px;
}
#quantity {
  width: 100px;
}
table {
  margin-top: 20px;
}
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
#numbers {
  text-align: center;
}
</style>

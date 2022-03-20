<template>
  <div class="navbar">
    <NuxtLink to="/">{{ $t("shop") }}</NuxtLink>
    <NuxtLink to="/cart">{{ $t("cart") }}</NuxtLink>
    <nuxt-link v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')">
      English
    </nuxt-link>

    <nuxt-link v-if="$i18n.locale !== 'cl'" :to="switchLocalePath('cl')">
      中文
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
.navbar {
  height: 50px;
  background-color: #ddbea9;
  display: flex;
  margin: 0;
  justify-content: space-evenly;
  align-items: center;
  color: #a1b0ab;
  position: sticky;
  top: 0;
}
</style>

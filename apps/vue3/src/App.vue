<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue';
import IconAccessibility from '~icons/carbon/accessibility';
import IconAccountBox from '~icons/mdi/account-box';
</script>

<template>
  <icon-accessibility />
  <icon-account-box style="font-size: 2em; color: red" />
  <!-- sizes and positions -->
  <div class="p-5px mt-[0.3px] text-7px">p5x</div>

  <!-- colors -->
  <button class="bg-hex-b2a8bb">color</button>
  <button class="bg-[hsl(211.7,81.9%,69.6%)]">color2</button>

  <!-- grid template -->
  <div class="grid-cols-[auto,1fr,30px]"></div>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>
<style lang="scss" scoped>
@import '@styles/style.scss';
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: antiquewhite;
}
</style>

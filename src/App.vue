<script lang="ts">
import { defineComponent } from 'vue';
import Calculator from './components/Calculator.vue';

export default defineComponent({
  name: "App",
  components: {
    Calculator
  }
});
</script>

<template>
  <Calculator />
</template>

<style lang="scss">
@import "./style/App";
</style>

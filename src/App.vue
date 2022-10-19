<script setup lang="ts">
import Counter from "./components/Counter.vue";
import useCounter from "./composables/useCounter";
const CounterPlusOne = useCounter(Counter, 1);
const CounterPlusTwo = useCounter(Counter, 2);
const CounterPlusThree = useCounter(Counter, 3);
const CounterPlusFour = useCounter(Counter, 4);
const CounterPlusFive = useCounter(Counter, 5);
const CounterPlusSix = useCounter(Counter, 6);
</script>

<template>
  <CounterPlusOne />
  <CounterPlusTwo />
  <CounterPlusThree />
  <CounterPlusFour />
  <CounterPlusFive />
  <CounterPlusSix />
</template>

<style scoped>
</style>

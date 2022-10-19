<script setup lang="ts">
import { ref } from "vue";

defineProps<{ counter: number; increment: Function }>();
</script>

<template>
  <div class="card">
    <button type="button" @click="increment">
      count is {{ counter }}
    </button>
  </div>
</template>

<style scoped>
</style>

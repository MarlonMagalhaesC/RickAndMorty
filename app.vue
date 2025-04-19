<template>
  <div>
    <div class="">
      <h1> {{ data.results[0].name }} </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data, status, error, refresh, clear } = await useFetch("https://rickandmortyapi.com/api/character");

console.log(data.value);
</script>

<template>
  <div>
    <div class="text-white">

      <div class="flex flex-col bg-[#313234] card w-[294px] h-[400px] mx-auto">
        <div class="mx-auto flex flex-col gap-2">
          <div class="mx-auto mt-4 border border-[#000000] rounded-2xl w-[262px] h-[200px]">
            <NuxtImg
              :src="data.results[0].image"
              :key="data.results[0].id"
              width="262"
              height="200"
              class="rounded-2xl object-cover w-full h-full"
            />
          </div>

          <div class="text-white">
            <p> {{ data.results[0].name }} </p>
          </div>
        </div>
      </div>




      <p> {{ data.results[0].created }} </p>
      <p> {{ data.results[0].episode }} </p>
      <p> {{ data.results[0].id }} </p>
      <h1> {{ data.results[0].status }} </h1>
      <h1> {{ data.results[0].species }} </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data, status, error, refresh, clear } = await useFetch("https://rickandmortyapi.com/api/character");

console.log(data.value);
</script>

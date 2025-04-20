<template>
<div class="bg-gray-900">
  <div class="flex flex-wrap gap-4 justify-center max-w-[1300px] mx-auto">
    <div
      v-for="item in data.results"
      :key="item.id"
      class="flex flex-col gap-2 w-[294px] h-[425px] bg-[#313234] text-white rounded-xl"
    >
      <Card
        :image="item.image"
        :name="item.name"
        :status="item.status"
        :species="item.species"
        :planet="item.planet"
        :url="item.url"
      />
    </div>
  </div>
</div>
</template>


<script setup lang="ts">
const { data, status, error, refresh, clear } = await useFetch("https://rickandmortyapi.com/api/character");

console.log(data.value);


</script>

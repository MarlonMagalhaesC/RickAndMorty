<template>
<div class="w-full h-[580px] bg-black text-white">
  <div class="mx-auto container max-w-[1250px]">
    <div class="flex justify-between py-14">
      <NuxtImg
        src="img/logo.png"
        height="64"
        width="219"
      />

        <div
          class="flex gap-2 place-self-end px-3 py-2 rounded-full bg-[#11B0C8] text-sm items-center mb-4"
        >
          <IconsHeartVoidWhite />
          <span>Lista de favoritos</span>
        </div>
    </div>
  </div>
</div>



<!--  -->
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
        :planet="item.origin.name"
        :url="item.url"
      />
    </div>
  </div>
</div>
</template>


<script setup lang="ts">
import { IconsHeartVoid } from '#components';

const { data, status, error, refresh, clear } = await useFetch("https://rickandmortyapi.com/api/character");

console.log(data.value);


</script>

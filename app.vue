<template>
<div class="bg-black">
  <div class="flex flex-wrap gap-4 justify-center max-w-[1300px] mx-auto">
    <div
      v-for="item in data.results"
      :key="item.id"
      class="flex flex-col gap-2 w-[294px] h-[425px] bg-[#313234] text-white rounded-xl"
    >
      <div class="mx-auto mt-4 border border-[#000000] rounded-2xl w-[262px] h-[200px]">
        <NuxtImg
          :src="item.image"
          width="262"
          height="200"
          class="rounded-2xl object-cover w-full h-full"
        />
      </div>

      <div class="mx-auto w-[262px] flex flex-col gap-2 flex-1">
        <div class="flex flex-row justify-between flex-1">
          <div class="flex flex-col gap-3">
            <p>{{ item.name }}</p>

            <ul class="inline-block">
              <li class="flex items-center gap-2">
                <IconsAlive /> {{ item.status }}
              </li>
              <li class="flex items-center gap-2">
                <IconsHuman /> {{ item.species }}
              </li>
              <li class="flex items-center gap-2">
                <IconsEarth /> {{ item.origin.name }}
              </li>
            </ul>
          </div>

          <div class="mt-2">
            <IconsHeartFull v-if="item.status === 'Alive'" />
            <IconsHeartVoid v-else />
          </div>
        </div>

        <NuxtLink :to="item.url">
          <div
            class="flex gap-1 place-self-end px-3 py-2 rounded-full bg-[#11B0C8] text-sm items-center mb-4"
          >
            <IconsReadmore />
            <span>Saiba Mais</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</div>
</template>


<script setup lang="ts">
const { data, status, error, refresh, clear } = await useFetch("https://rickandmortyapi.com/api/character");

console.log(data.value);


</script>

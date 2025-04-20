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

          <div class="flex flex-row justify-between">
            <div class="text-white flex flex-col gap-3">
              <p> {{ data.results[0].name }} </p>

              <ul class="inline-block">
                <li class="flex items-center gap-2"><IconsAlive/> {{ data.results[0].status }}</li>
                <li class="flex items-center gap-2"><IconsHuman/> {{ data.results[0].species }} </li>
                <li class="flex items-center gap-2"><IconsEarth/> {{ data.results[0].origin.name }} </li>
              </ul>
            </div>

            <div class="mt-2">
              <IconsHeartFull v-if="data.results[0].status === 'Alive'"/>
              <IconsHeartVoid v-else/>
            </div>
          </div>

            <NuxtLink :to="data.results[0].url">
              <div class="flex gap-1 place-self-end px-3 py-2 rounded-full bg-[#11B0C8] mt-auto text-sm items-center">
                <IconsReadmore/>
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

<template>
  <div
    v-for="item in data.results"
    :key="item.id"
    class="min-w-[295px] h-[145px] bg-[#313234] rounded-xl flex flex-col text-lg p-4 justify-between hover:bg-[#213234]"
  >
    <div class="flex gap-4">
      <IconsEpisode class="shrink-0"/>
      <p> {{ item.name }} | {{ item.episode }} </p>
    </div>

    <div class="flex justify-between">
      <NuxtLink :to="item.url">
        <div class="flex gap-1 place-self-start px-3 py-2 rounded-full bg-[#11B0C8] text-sm items-center ">
          <IconsReadmore />
          <span>Saiba Mais</span>
        </div>
      </NuxtLink>
      <IconsHeartVoid
        v-if="!isFavorite(item.id)"
        @click="favoritesEpisodes.addFavorite(item)"
        class="cursor-pointer"
      />

      <IconsHeartFull
        v-else
        @click="favoritesEpisodes.removeFavorite(item.id)"
        class="cursor-pointer"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
 import { useFavoritesEpisodes } from '../stores/useFavoritesEpisodes';
 const favoritesEpisodes = useFavoritesEpisodes()

const { data, status, error, refresh, clear } = await useFetch("https://rickandmortyapi.com/api/episode");

 // console.log(data.value.results);

 const isFavorite = (id: number) => {
  return favoritesEpisodes.favorites.some(e => e.id === id)
}
</script>

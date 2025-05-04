<template>
  <div class="pt-10  mx-auto container max-w-[1250px] text-white">
    <h1 class="p-4 mb-4 text-3xl">Personagens</h1>
    <div class="flex flex-wrap gap-4 justify-center">
      <div
        v-for="item in data.results"
        :key="item.id"
        class="flex flex-col gap-2 w-[294px] h-[425px] bg-[#313234] hover:bg-[#213234] rounded-xl"
      >
        <Card
          :image="item.image"
          :name="item.name"
          :status="item.status"
          :species="item.species"
          :planet="item.origin.name"
          :url="item.url"
        >
          <IconsHeartFull
            v-if="isFavorite(item.id)"
            @click="favoritesCharacters.removeFavorite(item.id)"
            class="cursor-pointer"
          />

          <IconsHeartVoid
            v-else
            @click="treatsDataStore(item)"
            class="cursor-pointer"
          />
       </Card>
      </div>
    </div>
    <h1 class="p-4 mt-4 text-3xl">Episodios</h1>
    <div class="grid grid-rows-2 grid-flow-col gap-5 py-5 overflow-x-auto overflow-y-hidden flex-wrap max-w-[2000px] max-h-[350px] scrollbar-thin scrollbar-thumb-[#11B0C8] scrollbar-track-[#313234] scrollbar-thumb-rounded-md scrollbar-corner-rounded p-2">
      <ListenerEpisodes/>
    </div>
    <h1 class="p-4 mt-4 text-3xl">Localizacoes</h1>
    <div>
      <ListenerLocations/>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useFavoritesCharacters } from '~/stores/useFavoritesCharacters'
  import type { Character } from '~/types/Characters';

  const { data, status, error, refresh, clear } = await useFetch("https://rickandmortyapi.com/api/character");

  console.log(data.value);

  const favoritesCharacters = useFavoritesCharacters()

  const treatsDataStore = (characterAPI: any) => {
    const c: Character = {
      id: characterAPI.id,
      name: characterAPI.name,
      image: characterAPI.image,
      status: characterAPI.status,
      species: characterAPI.species,
      planet: characterAPI.origin.name,
      url: characterAPI.origin.url
    }

    favoritesCharacters.addFavorite(c);
  }

  const isFavorite = (id: number): boolean => {
    return favoritesCharacters.favorites.some(character => character.id === id)
  }
</script>

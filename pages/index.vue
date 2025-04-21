<template>
  <div class="pt-10">
    <div class="flex flex-wrap gap-4 justify-center max-w-[1250px] mx-auto container">
      <div
        v-for="item in data.results"
        :key="item.id"
        class="flex flex-col gap-2 w-[294px] h-[425px] bg-[#313234] hover:bg-[#213234] text-white rounded-xl"
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

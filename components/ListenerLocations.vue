<template>

<OverflowX>
  <div class="flex">
    <div
      v-for="item in data.results"
      :key="item.id"
      class="flex flex-col justify-between min-w-[173px] min-h-[212px] bg-[#313234] mt-2.5 mx-2.5 pb-3 rounded-3xl relative items-center px-3"
    >
      <div class="absolute top-0 -translate-y-1/2">
         <IconsPlanet/>
      </div>
      <div class="text-center pt-8 flex-1">
         {{ item.name }}
      </div>
      <div class="pb-7">
        <ReadMore :url="item.url" />
      </div>
      <div>
        <IconsHeartVoid
          v-if="!isFavorite(item.id)"
          @click="favoritesLocations.addFavorite(item)"
        />
        <IconsHeartFull
          v-else
          @click="favoritesLocations.removeFavorite(item.id)"
        />
      </div>
    </div>
  </div>
</OverflowX>
</template>

<script setup lang="ts">

import { useFavoritesLocations } from '@/stores/useFavoritesLocations'

const  { data, status, error, refresh, clear } = useFetch("https://rickandmortyapi.com/api/location")
const favoritesLocations = useFavoritesLocations()


console.log('locations: ')
console.log(data.value)

const isFavorite = (id: number) => {
  return favoritesLocations.favorites.some(location => location.id === id)
}
</script>
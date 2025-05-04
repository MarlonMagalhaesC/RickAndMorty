<template>
<OverflowX>
  <div class="flex">
    <div
      v-for="item in data.results"
      :key="item.id"
    >
    <LocationCard :location="item" />
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
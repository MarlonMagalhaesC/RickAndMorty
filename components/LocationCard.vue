<template>
  <div
    class="flex flex-col justify-between min-w-[173px] min-h-[212px] bg-[#313234] mt-2.5 mx-2.5 pb-3 rounded-3xl relative items-center px-3 text-white"
  >
    <div class="absolute top-0 -translate-y-1/2">
      <IconsPlanet />
    </div>
    <div class="text-center pt-8 flex-1">
      {{ location.name }}
    </div>
    <div class="pb-7">
      <ReadMore :url="location.url" />
    </div>
    <div>
      <IconsHeartVoid
        v-if="!isFavorite(location.id)"
        @click="favoritesLocations.addFavorite(location)"
        class="cursor-pointer"
      />
      <IconsHeartFull
        v-else
        @click="favoritesLocations.removeFavorite(location.id)"
        class="cursor-pointer"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFavoritesLocations } from '@/stores/useFavoritesLocations'
import type { Location } from '~/types/Location'

const props = defineProps<{
  location: Location
}>()

const favoritesLocations = useFavoritesLocations()

const isFavorite = (id: number) => {
  return favoritesLocations.favorites.some(loc => loc.id === id)
}
</script>

import { defineStore } from 'pinia'
import type { Location } from '~/types/Location'


export const useFavoritesLocations = defineStore('locations', () => {

const favorites = ref<Location[]>([])

const addFavorite = (location: Location) => {
  favorites.value.push(location);
}

const removeFavorite = (id: number) => {
  favorites.value = favorites.value.filter(l => l.id !== id);
}

return {
  favorites,
  addFavorite,
  removeFavorite
}
})
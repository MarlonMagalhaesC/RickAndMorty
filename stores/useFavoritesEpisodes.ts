import { defineStore } from 'pinia'
import type { Episode } from '~/types/Episode'

export const useFavoritesEpisodes = defineStore('favorites', () => {

const favorites = ref<(Episode[])>([])

const addFavorite = (ep: Episode) => {
  favorites.value.push(ep)
}

const removeFavorite = (id: number) => {
  favorites.value = favorites.value.filter(e => e.id !== id)
}

return{
  favorites,
  addFavorite,
  removeFavorite
}
})

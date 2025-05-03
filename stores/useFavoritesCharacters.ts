import { defineStore } from 'pinia'
import type { Character } from '~/types/Characters'

export const useFavoritesCharacters = defineStore('character', () => {
  const favorites = ref<Character[]>([])

  const addFavorite = (character: Character) => {
    favorites.value.push(character)
    console.log(character)
  }

  const removeFavorite = (id: number) => {
    favorites.value = favorites.value.filter(c => c.id !== id)
  }

  return {
    favorites,
    addFavorite,
    removeFavorite
  }
})

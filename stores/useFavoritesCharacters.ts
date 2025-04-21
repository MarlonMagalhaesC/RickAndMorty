// stores/useFavoritesCharacters.ts
import { defineStore } from 'pinia'
import type { Character } from '~/types/Characters' // ✅ IMPORT CORRETO

export const useFavoritesCharacters = defineStore('favorites', () => {
  const favorites = ref<Character[]>([])

  const addFavorite = (character: Character) => {
    favorites.value.push(character)
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

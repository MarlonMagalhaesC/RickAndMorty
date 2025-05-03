import type { Character } from "./Characters";

export interface Episode {
  id: number,
  name: string,
  air_date: string,
  episode: string,
  characters: Character[]
}
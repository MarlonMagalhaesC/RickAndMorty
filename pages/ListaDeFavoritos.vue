<template>
  <div class="container mx-auto max-w-[1250px]">

    <h1 class="text-white text-3xl mt-10 px-3">
      Personagens
    </h1>

    <h2
      v-if="isArrayVoid(favoritesCharacters.favorites)"
      class="text-red-500 text-lg px-3 pt-3"
    >
      *Nenhum personagem foi favoritado.
    </h2>

    <div class="pt-10">
      <TransitionGroup
        name="fade"
        tag="div"
        class="flex flex-wrap gap-4 justify-center max-w-[1250px] mx-auto container"
      >
        <div
          v-for="item in favoritesCharacters.favorites"
          :key="item.id"
          class="fade-item flex flex-col gap-2 w-[294px] h-[425px] bg-[#313234] hover:bg-[#213234] hover:delay-50 text-white rounded-xl transition-all duration-100 ease-in-out"
        >
          <Card
            :image="item.image"
            :name="item.name"
            :status="item.status"
            :species="item.species"
            :planet="item.planet"
            :url="item.url"
          >
            <IconsHeartFull
              @click="favoritesCharacters.removeFavorite(item.id)"
              class="cursor-pointer"
            />
          </Card>
        </div>
      </TransitionGroup>
    </div>

    <h1 class="py-4 px-3 mt-4 text-3xl text-white">
      Episodios
    </h1>

    <span
      v-if="isArrayVoid(favoritesEpisodes.favorites)"
      class="text-red-500 text-lg px-3 pt-3"
    >
      *Nenhum episodio foi favoritado.
    </span>

    <div class="flex text-white">
      <div
        class="grid grid-rows-2 grid-flow-col gap-5 py-5 overflow-x-auto overflow-y-hidden flex-wrap max-h-[350px] scrollbar-thin scrollbar-thumb-[#11B0C8] scrollbar-track-[#313234] scrollbar-thumb-rounded-md scrollbar-corner-rounded p-2"
      >
        <div
          v-for="item in favoritesEpisodes.favorites"
          :key="item.id"
          class="min-w-[295px] h-[145px] bg-[#313234] rounded-xl flex flex-col text-lg p-4 justify-between hover:bg-[#213234]"
        >
          <div class="flex gap-4">
            <IconsEpisode class="shrink-0" />
            <p>{{ item.name }} | {{ item.episode }}</p>
          </div>

          <div class="flex justify-between">
            <ReadMore :url="item.url" />
            <IconsHeartFull
              @click="favoritesEpisodes.removeFavorite(item.id)"
              class="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>

    <h1 class="text-3xl text-white my-4 px-3">
      Localizações
    </h1>

    <span
      v-if="isArrayVoid(favoritesLocations.favorites)"
      class="text-red-500 text-lg px-3 pt-3"
    >
      *Nenhum planeta foi favoritado.
    </span>

    <OverflowX class="flex">
        <LocationCard
          v-for="item in favoritesLocations.favorites"
          :key="item.id"
          :location="item"
        />
    </OverflowX>

  </div>
</template>

<script lang="ts" setup>
definePageMeta({ layout: 'header-lista-de-favoritos' })

const favoritesCharacters = useFavoritesCharacters()
const favoritesEpisodes = useFavoritesEpisodes()
const favoritesLocations = useFavoritesLocations()

const isArrayVoid = (array) => { return array.length === 0 ? true : false }
</script>

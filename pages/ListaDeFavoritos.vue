<template>
  <div class="container mx-auto max-w-[1250px]">
    <!-- Título -->
    <h1 class="text-white text-3xl mt-10 px-3">Personagens</h1>

    <!-- Lista de Personagens Favoritos -->
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

    <!-- Lista de Episódios Favoritos -->
    <h1 class="p-4 mt-4 text-3xl text-white">Episodios</h1>
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
          <NuxtLink :to="item.url">
            <div
              class="flex gap-1 place-self-start px-3 py-2 rounded-full bg-[#11B0C8] text-sm items-center"
            >
              <IconsReadmore />
              <span>Saiba Mais</span>
            </div>
          </NuxtLink>
          <IconsHeartFull
            @click="favoritesEpisodes.removeFavorite(item.id)"
            class="cursor-pointer"
          />
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({ layout: 'header-lista-de-favoritos' })

const favoritesCharacters = useFavoritesCharacters()
const favoritesEpisodes = useFavoritesEpisodes()
</script>

<template>
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
</template>

<script lang="ts" setup>
  const favoritesCharacters = useFavoritesCharacters()
</script>
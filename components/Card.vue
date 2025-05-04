<template>
      <div class="mx-auto mt-4 border border-[#000000] rounded-2xl w-[262px] h-[200px]">
        <NuxtImg
          :src="image"
          width="262"
          height="200"
          class="rounded-2xl object-cover w-full h-full"
        />
      </div>

      <div class="mx-auto w-[262px] flex flex-col gap-2 flex-1">
        <div class="flex flex-row justify-between flex-1">
          <div class="flex flex-col gap-3">
            <p>{{ name }}</p>

            <ul class="inline-block">
              <li class="flex items-center gap-2">
                <IconsAlive /> {{ status }}
              </li>
              <li class="flex items-center gap-2">
                <IconsHuman /> {{ species }}
              </li>
              <li class="flex items-center gap-2">
                <IconsEarth /> {{ planet }}
              </li>
            </ul>
          </div>
          <div class="mt-2">
            <slot />
          </div>
        </div>

          <div class="place-self-end items-center mb-4">
            <ReadMore :url="url" />
          </div>
      </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  image: {
    type: String,
    required: true
  },

  name: {
    type: String,
    required: true
  },

  status: {
    type: String,
    required: true
  },

  species: {
    type: String,
    required: true
  },

  planet: {
    type: String,
    required: true
  },

  url: {
    type:String,
    required: true
  }
})
</script>
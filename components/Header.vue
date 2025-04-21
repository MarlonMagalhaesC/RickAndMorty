<template>
  <div class="w-full h-[580px] bg-black text-white">
  <div class="mx-auto container max-w-[1250px] px-4">
    <div class="flex justify-between pt-14">
      <NuxtImg
        src="img/logo.png"
        height="64"
        width="219"
      />
        <NuxtLink
          to="/ListaDeFavoritos"
          class="flex gap-2 place-self-end px-3 py-2 rounded-full bg-[#11B0C8] text-sm items-center mb-4"
        >
          <IconsHeartVoidWhite />
          <span>Lista de favoritos</span>
        </NuxtLink>
    </div>

    <div class="flex justify-between">
      <div class="content w-[397px] flex flex-col  mt-14">
        <h1 class="text-5xl font-bold leading-[52px] block mb-10">Saiba tudo em um só <span class="text-[#11B0C8]"> lugar. </span></h1>
        <p class="mb-16">Personagens. localizações, episódios e muito mais.</p>

        <div class="flex gap-5 mb-4">
          <div
          class="flex gap-2 place-self-end px-3 py-2 rounded-full bg-[#11B0C8] text-sm items-center mb-4"
          >
            <IconsMoon />
            <span>Escuro</span>
          </div>

          <div
          class="flex gap-2 place-self-end px-3 py-2 rounded-full bg-[#313234] text-sm items-center mb-4"
          >
            <IconsSun />
            <span>Claro</span>
          </div>
        </div>
        <p class="text-[#11B0C8]">Ai sim, Porr#@%&*</p>
      </div>
      <div class="w-[774px] h-[434px] mt-6">
        <NuxtImg
         src="img/Rick.png"
         width="774"
         height="434"
         class="w-full h-full"
        />
      </div>
    </div>
  </div>
</div>
</template>
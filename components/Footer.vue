<template>
  <div class="mx-72 text-white">

    <div class="flex justify-between mb-16">
      <div class="h-[48px] w-[165px]">
        <NuxtImg
          src="img/logo.png"
          height="48"
          width="165"
          class="h-full w-full"
        />
      </div>
      <div class="flex items-center gap-2">
        <span>Voltar ao topo</span>
        <IconsUp/>
      </div>
    </div>

    <div class="border border-separate mb-4"/>

    <div class="flex justify-between pb-10">
      <span> ©2023 </span>
      <div class="flex items-center gap-2">
        <IconsLeftChevron/>
        <IconsRightCrevron/>
        <p>Desenvolvido por <strong class="text-[#11B0C8]">Marlon Magalhaes</strong> </p>
      </div>
    </div>
  </div>
</template>
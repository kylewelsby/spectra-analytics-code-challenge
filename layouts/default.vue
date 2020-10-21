<template>
  <div class="h-screen flex flex-col">
    <div class="w-full bg-purple-500 h-1"></div>
    <AppHeader class="border-b-2"/>
    <div class="flex flex-row flex-grow">
      <AppSidebar class="w-1/4 py-2 px-4 border-r-2"/>
      <Nuxt class="w-3/4 py-2 px-4"/>
    </div>
  </div>
</template>

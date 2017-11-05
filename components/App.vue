<template>
  <transition name="slide-in" mode="out-in">
    <router-view></router-view>
  </transition>
</template>

<style>
  @import url(https://fonts.googleapis.com/icon?family=Material+Icons);

  [no-flex] {
    flex: none;
  }

  body {
    overflow-x: hidden;
  }

  .slide-in-enter-active {
    transition: all 0.2s ease-out;
  }

  .slide-in-leave-active {
    transition: all 0.2s ease-in;
  }

  .slide-in-enter {
    opacity: 0;
    transform: translateX(50px);
  }

  .slide-in-leave-to  {
    opacity: 0;
    transform: translateX(-50px);
  }
</style>

<template>
  <transition name="slide-in">
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

  .slide-in-enter-active, .slide-leave-active {
    transition: 0.5s ease;
  }
  .slide-in-enter, .slide-in-leave-to {
    opacity: 0;
  }
</style>

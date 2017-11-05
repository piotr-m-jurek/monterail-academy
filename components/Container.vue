<template>
  <div layout="column center">
    <div flex class="container">
      <slot/>
    </div>
  </div>
</template>

<style>
  .container {
    width: 100%;
    max-width: 900px;
  }
</style>

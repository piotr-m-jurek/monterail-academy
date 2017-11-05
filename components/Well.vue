<-- Styled component example -->

<template>
  <div class="well">
    <slot/>
  </div>
</template>

<style scoped>
  .well {
    border-bottom: 1px solid #e6ebf5;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    padding: 10px;
    border-radius: 4px;
  }
</style>

<template>
  <md-layout md-column md-gutter="8">
    <md-layout md-column>
      <md-toolbar class="md-title" md-flex="1">
        <container>
          <slot name="header"/>
        </container>
      </md-toolbar>
    </md-layout>
    <container>
      <slot name="content"/>
    </container>
  </md-layout>
</template>

<script>
import Container from './Container'
export default {
  components: {
    Container
  }
}
</script>

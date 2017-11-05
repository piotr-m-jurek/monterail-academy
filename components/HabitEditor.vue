<template>
  <page-layout>
    <template slot="header">
      <h1>Habit</h1>
    </template>
    <template slot="content">
      Habit editor
      <router-link to="/">
        <md-button class="md-fab md-icon-button md-fab-top-right">
          <md-icon>close</md-icon>
        </md-button>
      </router-link>
    </template>
  </page-layout>
</template>

<script>
import PageLayout from './PageLayout'
export default {
  components: {
    PageLayout
  }
}
</script>

<template>
  <page-layout>
    <template slot="header">
      <h1>Your habits</h1>
    </template>
    <template slot="content">
      <md-layout md-column md-gutter="8">
          <md-layout md-column v-for="(habit, key) in habits" :key="key">
            <habit-card :habit="habit"/>
          </md-layout>
      </md-layout>
      <md-button class="md-fab md-fab-bottom-right">
        <md-icon>add</md-icon>
      </md-button>
    </template>
  </page-layout>
</template>

<script>
import HabitCard from './HabitCard'
import PageLayout from './PageLayout'
export default {
  components: {
    PageLayout,
    HabitCard
  },
  props: ['habits']
}
</script>

<template>
  <md-layout md-column>
    <md-toolbar class="md-title" md-flex="1">
      <h1>Habit Tracker</h1>
    </md-toolbar>
    <md-layout md-column md-gutter="16">
        <md-layout md-column v-for="(habit, key) in habits" :key="key">
          <habit-card :habit="habit"/>
        </md-layout>
    </md-layout>
    <md-button class="md-fab md-fab-bottom-right">
      <md-icon>add</md-icon>
    </md-button>

  </md-layout>
</template>

<script>
  import HabitCard from './HabitCard'
  export default {
    components: {
      HabitCard
    },
    data () {
      return {
        habits: [
          {
            id: 0,
            name: 'yoga',
            progress: 90,
            track: ['Monday', 'Friday', 'Saturday']
          },
          {
            id: 1,
            name: 'wake up early',
            progress: 100,
            track: ['Monday', 'Tuesday', 'Saturday']
          },
          {
            id: 2,
            name: 'stay up late',
            progress: 64,
            track: ['Monday', 'Wednesday', 'Saturday', 'Sunday']
          },
          {
            id: 3,
            name: 'cook dinner',
            progress: 14,
            track: ['Monday', 'Thursday', 'Sunday']
          },
          {
            id: 4,
            name: 'work',
            progress: 51,
            track: ['Monday', 'Tuesday', 'Wednesday', 'Saturday']
          },
        ],
      }
    }
  }

</script>

<style>
  [no-flex] {
    flex: none;
  }
</style>

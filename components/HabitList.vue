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
      <router-link to="habit">
        <md-button class="md-fab md-fab-bottom-right">
          <md-icon>add</md-icon>
        </md-button>
      </router-link>
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
  data () {
      return {
        habits: [
          {
            id: 0,
            name: 'yoga',
            track: ['Monday', 'Friday', 'Saturday']
          },
          {
            id: 1,
            name: 'wake up early',
            track: ['Monday', 'Tuesday', 'Saturday']
          },
          {
            id: 2,
            name: 'stay up late',
            track: ['Monday', 'Wednesday', 'Saturday', 'Sunday']
          },
          {
            id: 3,
            name: 'cook dinner',
            track: ['Monday', 'Thursday', 'Sunday']
          },
          {
            id: 4,
            name: 'work',
            track: ['Monday', 'Tuesday', 'Wednesday', 'Saturday']
          },
        ],
      }
    }
}
</script>

<template>
  <habit-list :habits="habits" />
</template>

<script>
  import HabitList from './HabitList'
  export default {
    components: {
      HabitList
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
<style>
  @import url(https://fonts.googleapis.com/icon?family=Material+Icons);

  [no-flex] {
    flex: none;
  }

  body {
    overflow-x: hidden;
  }
</style>

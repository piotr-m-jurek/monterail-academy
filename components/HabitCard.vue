<template>
    <md-whiteframe
      md-elevation="3"
      class="habit-card"
      md-column
    >
      <md-layout md-vertical-align="center" md-gutter="8">
        <md-layout><span class="title">{{ habit.name }}</span></md-layout>
        <md-layout no-flex md-align="center" md-gutter="8" md-gutter-large="24">
          <md-layout no-flex v-for="(day, key) in weekDays" :key="key">
            <md-checkbox
              :name="day"
              :md-value="day"
              v-model="habit.track"
            />
          </md-layout>
        </md-layout>
        <md-layout no-flex>
          <md-button class="md-raised">Remove</md-button>
        </md-layout>
      </md-layout>
      <!-- <md-progress
      :md-progress="progress"
      class="md-accent"
      /> -->
    </md-whiteframe>
</template>

<script>
export default {
  name: "HabitCard",
  props: {
    habit: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      weekDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    }
  },
  computed: {
    progress () {
      return this.habit.track.length / this.weekDays.length * 100
    }
  }
}
</script>

<style scoped>
  .title {
    padding: 0 8px;
  }
  /* .habit-card + .habit-card {
    margin-top: 8px;
  } */
</style>

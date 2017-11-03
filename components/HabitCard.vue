<template>
    <md-whiteframe
      md-elevation="3"
      class="habit-card"
      md-column
    >
      <md-layout md-vertical-align="center" md-gutter="8">
        <md-layout no-flex>
          <radial-progress
            class="progress"
            :diameter="30"
            :stroke-width="5"
            :total-steps="weekDays.length"
            :completed-steps="this.habit.track.length"
            inner-stroke-color="#abc"
            start-color="#3F50B4"
            stop-color="#3F50B4"
            :animate-speed="300"
            timing-func="ease"
          />
        </md-layout>
        <md-layout><span>{{ habit.name }}</span></md-layout>
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
    </md-whiteframe>
</template>

<script>
import RadialProgress from 'vue-radial-progress'
export default {
  name: "HabitCard",
  components: {
    RadialProgress
  },
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
  }
}
</script>

<style scoped>
  .progress {
    margin-left: 8px;
  }

  .habit-card {
    border-radius: 3px;
  }
</style>

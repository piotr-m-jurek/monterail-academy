<-- Data component example -->
<template>
  <Well :style="{color: habit.color}">
    <div layout="row center gutter">
      <el-progress
        type="circle"
        :percentage="percentage"
        :status="progressStatus"
        :width="36"
        :stroke="4"
        :show-text="percentage === 100"
      />
      <span flex>{{ habit.name }}</span>
      <el-checkbox-group layout="row" v-model="habit.track">
        <div
          v-for="(day, key) in weekDays"
          :key="key"
        >
          <el-checkbox
            :label="day"
          >{{''}}</el-checkbox>
        </div>
      </el-checkbox-group>
      <router-link :to="{name: 'Edit', params: {id: habit.id}}">
        <el-button>Edit</el-button>
      </router-link>
      <el-button @click="$emit('remove', habit)">Remove</el-button>
    </div>
  </Well>
</template>

<script>
import Well from './Well'
export default {
  name: "HabitCard",
  props: {
    habit: {
      type: Object,
      required: true
    }
  },
  components: {
    Well
  },
  data () {
    return {
      weekDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    }
  },
  computed: {
    percentage () {
      return Math.min(100, Math.floor(this.habit.track.length / this.habit.weeklyTarget * 100))
    },
    progressStatus () {
      switch (this.percentage) {
        case 100: return 'success'
        default: return ''
      }
    }
  }
}
</script>

<style scoped>
  .habit-card {
    border-radius: 3px;
  }
</style>

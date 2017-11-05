<template>
  <el-form label-width="240px" @submit.native.prevent="$emit('submit', habit)">
    <el-form-item label="Habit name">
      <el-input type="text" v-model="habit.name"/>
    </el-form-item>
    <el-form-item label="Habit color">
      <el-color-picker v-model="habit.color"></el-color-picker>
    </el-form-item>
    <el-form-item label="Weekly target">
      <el-input-number :max="7" :min="1" v-model="habit.weeklyTarget"></el-input-number>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">Submit</el-button>
      <router-link to="/">
        <el-button>Cancel</el-button>
      </router-link>
    </el-form-item>          
  </el-form>
</template>

<script>
import Well from './Well'
export default {
  components: {
    Well
  },
  props: {
    habit: Object
  }
}
</script>

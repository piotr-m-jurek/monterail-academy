<template>
  <page-layout>
    <template slot="header">
      <h1 layout="row center gutter">
        <router-link to="/">
          <el-button>
            <i class="el-icon-back"></i>
          </el-button>
        </router-link>
        <span>New habit</span>
      </h1>
    </template>
    <template slot="content">
      <Well>
        <HabitForm v-if="editedHabit" :habit="editedHabit" @submit="submitForm"/>
      </Well>
    </template>
  </page-layout>
</template>

<script>
import PageLayout from './PageLayout'
import HabitForm from './HabitForm'
import Well from './Well'
import store from '../store'
export default {
  components: {
    PageLayout,
    Well,
    HabitForm
  },
  data () {
    return {
      editedHabit: {
        id: 0,
        name: 'New habit',
        color: "#000",
        track: [],
        weeklyTarget: 5

      }
    }
  },
  methods: {
    submitForm () {
      store.habits = [
        ...store.habits,
        {...this.editedHabit}
      ]
    this.$router.push({name: 'Home'})
    }
  }
}
</script>

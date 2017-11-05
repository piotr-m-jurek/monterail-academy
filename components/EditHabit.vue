<template>
  <page-layout>
    <template slot="header">
      <h1 layout="row center gutter">
        <router-link to="/">
          <el-button>
            <i class="el-icon-back"></i>
          </el-button>
        </router-link>
        <span>Edit habit: {{ foundHabit ? foundHabit.name : 'Unknown' }}</span>
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
      editedHabit: null
    }
  },
  computed: {
    foundHabit () {
      return store.habits
        .find(habit => habit.id === +this.$route.params.id)
    }
  },
  created () {
    this.editedHabit = this.foundHabit ? {...this.foundHabit} : null
  },
  methods: {
    submitForm () {
      store.habits = store.habits.map(habit => {
        if (habit.id === +this.$route.params.id) {
          return {...this.editedHabit}
        }
        return habit
      })
      this.$router.push({name: 'Home'})
    }
  }
}
</script>

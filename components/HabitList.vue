<template>
  <PageLayout>
    <template slot="header">
      <h1>Your habits</h1>
    </template>
    <template slot="content">
      <div layout="column gutter">
        <transition-group layout="column gutter" name="list-movement" tag="div">
          <habit-card
            v-for="habit in habits"
            :key="habit.id"
            :habit="habit"
            @remove="remove"
          />
        </transition-group>
        <router-link :to="{name: 'New'}" layout="row">
          <el-button flex>
              <i class="el-icon-plus"></i>
          </el-button>
        </router-link>
      </div>
    </template>
  </PageLayout>
</template>

<script>
import HabitCard from './HabitCard'
import PageLayout from './PageLayout'
import store from '../store'
export default {
  components: {
    PageLayout,
    HabitCard
  },
  computed: {
    habits () {
      return store.habits
    }
  },

  methods: {
    remove (habit) {
      store.habits = store.habits.filter(h => h !== habit)
    }
  }
}
</script>


<style>  
  /* .list-movement-leave,
  .list-movement-move {
    transition: transform 300ms ease;
    transform: scale(1);
  }

  .list-movement-leave-active {
    transform: scale(0);
  } */

.list-movement-item {
  display: inline-block;
  margin-right: 10px;
}
.list-movement-enter-active, .list-movement-leave-active {
  transition: opacity 300ms, transform 300ms, margin 300ms;
  transform: scale(1);
  
}
.list-movement-enter, .list-movement-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform-origin: 0% 0%;
  transform: scale(1, 0);
  margin-bottom: -71px;
}

</style>

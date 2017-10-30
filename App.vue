<template>
  <el-containter>
    <el-header>
      <h1>Header</h1>
    </el-header>
    <el-main>
      <div :gutter="8" v-for="(habit, key) in habits" :key="key" class="habit-card">
        {{habit}}
      </div>
    </el-main>
  </el-containter>
</template>

<script>
  export default {
    data () {
      return {
        habits: [
          '1',
          '2',
          '3',
          '4',
          '5',
        ]
      }
    }
  }

</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
    background: #abc;
  }

  .habit-card {
    background: white;
    padding: 16px;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }

  .habit-card + .habit-card {
    margin-top: 4px;
  }

</style>

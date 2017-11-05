import Vue from 'vue'

export default new Vue({
  data: {
    habits: [
      {
        id: 0,
        name: 'yoga',
        color: "#000",
        track: ['Monday', 'Friday', 'Saturday'],
        weeklyTarget: 4
      },
      {
        id: 1,
        name: 'wake up early',
        color: "#000",
        track: ['Monday', 'Tuesday', 'Saturday'],
        weeklyTarget: 4
      },
      {
        id: 2,
        name: 'stay up late',
        color: "#000",
        track: ['Monday', 'Wednesday', 'Saturday', 'Sunday'],
        weeklyTarget: 5
      },
      {
        id: 3,
        name: 'cook dinner',
        color: "#000",
        track: ['Monday', 'Thursday', 'Sunday'],
        weeklyTarget: 7
      },
      {
        id: 4,
        name: 'work',
        color: "#000",
        track: ['Monday', 'Tuesday', 'Wednesday', 'Saturday'],
        weeklyTarget: 4
      },
    ]
  }
})

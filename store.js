import Vue from 'vue'

export default new Vue({
  data: {
    habits: [
      {
        id: 0,
        name: 'yoga',
        color: "#000",
        track: ['Mon', 'Fri', 'Sat'],
        weeklyTarget: 4
      },
      {
        id: 1,
        name: 'wake up early',
        color: "#000",
        track: ['Mon', 'Tue', 'Sat'],
        weeklyTarget: 4
      },
      {
        id: 2,
        name: 'stay up late',
        color: "#000",
        track: ['Mon', 'Wed', 'Sat', 'Sun'],
        weeklyTarget: 5
      },
      {
        id: 3,
        name: 'cook dinner',
        color: "#000",
        track: ['Mon', 'Thu', 'Sun'],
        weeklyTarget: 7
      },
      {
        id: 4,
        name: 'work',
        color: "#000",
        track: ['Mon', 'Tue', 'Wed', 'Sat'],
        weeklyTarget: 4
      },
    ]
  }
})

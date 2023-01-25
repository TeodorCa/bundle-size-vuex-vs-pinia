import { defineStore } from 'pinia'

const store = defineStore({
  state: () => ({
    count: 0
  }),
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    }
  }
})
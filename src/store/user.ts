import { defineStore } from 'pinia'
import dayjs from 'dayjs'
import Log from "@/utils/Log";

interface UserStoreState {
  count: number,
  time: undefined | number
}

export default defineStore('user', {
  state: () => {
    return {
      count: 0,
      time: undefined
    } as UserStoreState;
  },
  actions: {
    increment() {
      this.count++;
      this.time = Date.now();
      Log.log("user action increment")
    }
  },
  getters: {
    lastTime(state) {
      return dayjs(state.time).format("YYYY-MM-DD HH:mm:ss")
    }
  }
})
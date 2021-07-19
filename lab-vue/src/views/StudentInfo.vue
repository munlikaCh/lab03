<template>
  <!-- <div class="NewStuInfo"> -->
<div class="stus">
    <h1>= Student information page =</h1>
    <!-- <StuInfo class="stus" v-for="stu in events" :key="stu.id" :stu="stu" /> -->
    <StuInfo v-for="stu in stus" :key="stu.id" :stu="stu" />
  </div>
</template>

<script>
import StuInfo from '../components/StuInfo.vue'

import EventSerStu from '../services/EventSerStu.js'

export default {
//   name: 'EventList',
  name: 'StudentInfo',
  components: {
    StuInfo
  },
  data() {
    return {
      stus: null
    }
  },
  created(){
      EventSerStu.getStudents()
      .then((response) => {
        this.stus = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
<style scoped>
.stus {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
<template>
  <div class="events">
    <h1>Events For Good</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <ShowCo class="shows" v-for="show in events" :key="show.id" :show="show" />
    <!-- <StuInfo class="stus" v-for="stu in events" :key="stu.id" :stu="stu" /> -->
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import EventCard from '../components/EventCard.vue'
import ShowCo from '../components/ShowCo.vue'

// import StuInfo from '../components/StuInfo.vue'

import EventService from '../services/EventService.js'
// import EventSerStu from '../services/EventSerStu.js'
// import axios from 'axios'


export default {
  name: 'EventList',
  components: {
    // HelloWorld
    EventCard, //register it as a child component
    ShowCo,
    // StuInfo
  },
  data() {
    return {
      events: null
    }
  },
  created(){
      EventService.getEvents()
      .then((response) => {
        this.events = response.data
      })
      // EventSerStu.getStus()
      // .then((response) => {
      //   this.stus = response.data
      // })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.shows {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
/* .stus {
  display: flex;
  flex-direction: column;
  align-items: center;
} */
</style>

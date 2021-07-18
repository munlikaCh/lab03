<template>
  <div class="events">
    <h1>Events For Good</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <ShowCo class="shows" v-for="show in events" :key="show.id" :show="show" />
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import EventCard from '../components/EventCard.vue'
import ShowCo from '../components/ShowCo.vue'

import axios from 'axios'


export default {
  name: 'EventList',
  components: {
    // HelloWorld
    EventCard, //register it as a child component
    ShowCo
  },
  data() {
    return {
      events: null
    }
  },
  created(){
      axios
      .get('http://localhost:3004/events')
      .then((response) => {
        this.events = response.data
      })
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
</style>

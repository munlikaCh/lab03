<template>
  <div class="ShowNewCompo">
    <h1>This is an new component page</h1>
    <h4>___ It's show about category and organizer ___</h4>
    <ShowCo class="shows" v-for="show in events" :key="show.id" :show="show" />
  </div>
</template>

<script>
import ShowCo from '../components/ShowCo.vue'

export default {
  name: 'New',
  components: {
    // HelloWorld
    // EventCard, //register it as a child component
    ShowCo
  },
  data() {
    return {
      events: [
        {
          id: 5928101,
          category: 'animal welfare',
          title: 'Cat Adoption Day',
          description: 'Find your new feline friend at this event.',
          location: 'Meow Town',
          date: 'January 28, 2022',
          time: '12:00',
          petsAllowed: true,
          organizer: 'Kat Laydee'
        },
        {
          id: 4582797,
          category: 'food',
          title: 'Community Gardening',
          description: 'Join us as we tend to the community edible plants.',
          location: 'Flora City',
          date: 'March 14, 2022',
          time: '10:00',
          petsAllowed: true,
          organizer: 'Fern Pollin'
        },
        {
          id: 8419988,
          category: 'sustainability',
          title: 'Beach Cleanup',
          description: 'Help pick up trash along the shore.',
          location: 'Playa Del Carmen',
          date: 'July 22, 2022',
          time: '11:00',
          petsAllowed: false,
          organizer: 'Carey Wales'
        }
      ]
    }
  }
}
</script>
<style scoped>
.ShowNewCompo {
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
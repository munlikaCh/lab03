<template>
  <div class="show-co">
    <!-- <span>@{{ event.time }} on {{ event.date }}</span> -->
    <h5>{{ show.category }}<br /> {{ show.organizer }}</h5>
  </div>
</template>

<script>
export default {
  name: 'ShowCo',
  //   data() {
  //     return {
  //       event: {
  //         id: 5928101,
  //         category: 'animal walfare',
  //         title: 'Cat Adoption Day',
  //         description: 'Find your new feline friend at this event.',
  //         location: 'Meow Town',
  //         date: 'January 28, 2022',
  //         time: '12:00',
  //         peetsAllowed: true,
  //         organizer: 'Kat Laydee'
  //       }
  //     }
    props: {
        show: {
            type: Object,
            required: true
        }
    }
}
</script>
<style scoped>
.show-co {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.show-co:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>

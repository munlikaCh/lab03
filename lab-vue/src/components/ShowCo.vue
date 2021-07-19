<template>
  <div class="show-co">
    <!-- <span>@{{ event.time }} on {{ event.date }}</span> -->
    <h5>{{ show.category }}<br /> {{ show.organizer }}</h5>
  </div>
</template>

<script>
export default {
  name: 'ShowCo',
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

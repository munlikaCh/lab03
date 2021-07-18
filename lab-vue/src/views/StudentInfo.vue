<template>
  <div class="NewStuInfo">
    <h1>= Student information page =</h1>
    <StuInfo class="stus" v-for="stu in events" :key="stu.id" :stu="stu" />
  </div>
</template>

<script>
import StuInfo from '../components/StuInfo.vue'

export default {
  name: 'EventList',
  components: {
    // HelloWorld
    // EventCard, //register it as a child component
    StuInfo
  },
  data() {
    return {
      events: [
        {
          id: 1,
          studentId: 'SE-001',
          name: 'Prayuth',
          surname: 'The minister',
          gpa: 3.59,
          image:'https://firebasestorage.googleapis.com/v0/b/test-331-lab05.appspot.com/o/tu.jpg?alt=media&token=f16b5c1c-fbea-4d98-9fa3-732b69a1bae8',
          penAmount: 15,
          description: 'The great man ever!!!!'
        },
        {
          id: 2,
          studentId: 'SE-002',
          name: 'Cherprang ',
          surname: 'BNK48',
          gpa: 4.01,
          image:'https://firebasestorage.googleapis.com/v0/b/test-331-lab05.appspot.com/o/cherprang.png?alt=media&token=2e6a41f3-3bf0-4e42-ac6f-8b7516e24d92',
          penAmount: 2,
          description: 'Code for Thailand'
        },
        {
          id: 3,
          studentId: 'SE-003',
          name: 'Nobi',
          surname: 'Nobita',
          gpa: 1.77,
          image:'https://firebasestorage.googleapis.com/v0/b/test-331-lab05.appspot.com/o/nobita.jpg?alt=media&token=16e30fb0-9904-470f-b868-c35601df8326',
          penAmount: 0,
          description: 'Welcome to Olympic'
        }
      ]
    }
  }
}
</script>
<style scoped>
.NewStuInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.stus {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
<template>
  <div class="stu-info">
    <!-- <span>@{{ event.time }} on {{ event.date }}</span> -->
    <h4>Student Name : {{ stu.name }}<br />
      Surname : {{ stu.surname }}<br />
      GPA : {{ stu.gpa }}<br />
    </h4>
  </div>
</template>

<script>
export default {
  name: 'StuInfo',
    props: {
        stu: {
            type: Object,
            required: true
        }
    }
}
</script>
<style scoped>
.stu-info {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.stu-info:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>

<template>
  <div class="container">
    <div class="task" v-for="task in tasks" v-bind:key="task">
      {{ task.toString() }}
    </div>
  </div>
</template>

<script>
import taskGenerator from './../services/task-generator';

const tasks = taskGenerator.generateTasks(20, 15);
console.log(JSON.stringify(tasks));

export default {
  name: 'Tasks',
  data: () => ({
    tasks: tasks
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  height: 950px;
  width: 600px;
}

.task {
  flex: 1;
  font-size: 30px;
  margin: 14px;
}
</style>

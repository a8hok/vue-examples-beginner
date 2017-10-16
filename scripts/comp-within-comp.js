Vue.component('task', {
  template: '<li><slot></slot></li>'
});

Vue.component('task-list', {
  template: `
    <div>
      <task v-for="task in tasks">
        {{task.name}} - {{task.age}}
      </task>
    </div>
  `,
  data(){
    return {
      tasks: [
        { name: 'Ashok', age:12 },
        { name: 'Arun', age:13 },
        { name: 'santhosh', age:14 }
      ]
    };
  }
});

new Vue({
  el: "#wrapper"
})
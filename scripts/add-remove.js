Vue.component("list", {
  template: `
    <div>
      <ul>
      <li v-for="(item, index) in items">
          <delete @removeItems="removeItems(index)"></delete>
          {{item.name}}
        </li>
      </ul>
      <add @addItem="addItem"></add>
    </div>
  `,
  props: ["items"],
  methods: {
    removeItems(index) {
      this.items.splice(index, 1);
    },
    addItem(item) {
      this.items.push({ name: item });
    }
  }
});
Vue.component("delete", {
  template: `
      <button @click="$emit('removeItems')">X</button>
  `
});
Vue.component("add", {
  template: `
      <div>
        <input v-model="item"/>
        <button @click="$emit('addItem', item)">Add fruit</button>
      </div>
  `,
  data() {
    return {
      item: ""
    };
  }
});
new Vue({
  el: "#wrapper",
  data: {
    items: [{ name: "apple" }, { name: "orange" }, { name: "grape" }]
  }
});

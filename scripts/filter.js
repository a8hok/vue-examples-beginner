Vue.component("fruits", {
  template: `
    <div>
      <ul>
        <li v-for="fruit in fruits">
          {{fruit.name | uppercase}}
          <br>
          <a target="_blank" :href="fruit.name | urlLink">{{fruit.name | urlLink}}<a/>
        </li>
      </ul>
    </div>
  `,
  filters: {
    uppercase(value) {
      return (
        value
          .toString()
          .charAt(0)
          .toUpperCase() + value.slice(1)
      );
    },
    urlLink(value) {
      return `https://en.wikipedia.org/wiki/` + value;
    }
  },
  data() {
    return {
      fruits: [
        {
          name: "apple",
          color: "Meron, Green"
        },
        {
          name: "banana",
          color: "Yellow"
        },
        {
          name: "orange",
          color: "Orange"
        }
      ]
    };
  }
});
new Vue({
  el: "#wrapper"
});

window.Event = new class {
  constructor() {
    this.vue = new Vue();
  }
  fire(event, data) {
    this.vue.$emit(event, data);
  }
  listen(event, callback) {
    this.vue.$on(event, callback);
  }
}();

Vue.component("name", {
  template: '<input place-holder="enter your name" @blur="doneEntered">',
  methods: {
    doneEntered() {
      Event.$emit("entered");
    }
  }
});

new Vue({
  el: "#wrapper",
  created() {
    Event.$on("entered", () => alert("Hurry"));
  }
});

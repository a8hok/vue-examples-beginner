Vue.component("name", {
  template: '<input place-holder="enter your name" @blur="doneName">',
  methods: {
    doneName() {
      this.$emit("entered");
    }
  }
});

new Vue({
  el: "#wrapper",
  data: {
    isEntered: false
  },
  methods: {
    nameEntered() {
      this.isEntered = true;
    }
  }
});

Vue.component("model", {
  template: `
    <div class="modal is-active">
      <div class="modal-background"></div>
        <div class="modal-content ">
          <div class="box">
              Click X mark to close
          </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
  </div>
  `
});

new Vue({
  el: "#wrapper",
  data: {
    isModel: true
  }
});

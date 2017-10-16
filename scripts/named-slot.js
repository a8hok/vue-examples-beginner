Vue.component("model", {
  template: `
      <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">
            <slot name="title"></slot>
          </p>
          <button class="delete" aria-label="close" @click="$emit('close')"></button>
        </header>
        <section class="modal-card-body">
          <slot name="body"></slot>
        </section>
        <footer class="modal-card-foot">
          <slot name="footer">
          <button class="button is-success">Okay</button>
          </slot>
        </footer>
      </div>
    </div>
  `
});

new Vue({
  el: "#wrapper",
  data: {
    isOpen: false
  }
});

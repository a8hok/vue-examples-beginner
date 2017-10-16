Vue.component("message", {
  template: `
    <div>
      <span> {{title}} </span>
      <span>--------------</span>
      <span> {{body}} </span>
    </div>
  `,

  props: ["title", "body"]
});

new Vue({
  el: "#wrapper"
});

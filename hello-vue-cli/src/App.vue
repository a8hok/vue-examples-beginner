<template>
  <div class="message-container">
    <welcome>
    </welcome>
  </div>
</template>

<script>
import welcome from './components/welcome.vue';
export default {
  name: 'app',
  components: { welcome }
}
</script>

<style>
.message-container {
  background: #e3e3e3;
  padding: 10px;
}
</style>




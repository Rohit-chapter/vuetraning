<template>
  <div class="header">
        <img src="https://vizzual.io/images/logo.svg" width="150">
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header{
        background: #0f0930;
        padding: 14px 20px;
    }
</style>

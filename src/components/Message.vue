<template>
  <h1>Nenhum resultado para "{{ termMessage }}"</h1>
</template>
<script>
export default {
  name: 'Message',
  props: {
    termMessage: {
      type: String,
      required: true,
      default: () => ''
    }
  }
}
</script>
<style>
h1 {
  text-align: center;
  font-family: 'Lexend Deca', sans-serif;
}
</style>
<template>
  <div class="app">
    <Header />
    <Search />
  </div>  
</template>

<script>
import Search from './components/Search'
import Header from './components/Header'
export default {
  name: 'app',
  components: {
    Search,
    Header
  },
  data: () =>({

  }),
  methods: {
    
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap');
* {
  padding: 0;
  margin: 0;
}
.app {
  width: 100%;
}
</style>

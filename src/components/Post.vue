<template>
  <div class="posts">
    <section v-for="result in results" :key="result.id" >

      <p> {{ result.Title }} </p>
      
      <a :href="`https://www.google.com/search?&q=${result.Title}`"  >
       <img :src="result.Poster" :alt="` Imagem do filme ${result.Title}`" >
      </a>

      <p> {{ result.Year }} </p>

    </section>
  </div>
</template>
<script>
export default {
  name: "Post",
  components: {
    
  },
  props: {
    results: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>
<style>
.posts {
  font-family: 'Lexend Deca', sans-serif;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.posts section {
  align-content: center;
  justify-content: center;
  margin: 20px;
  transition: all .2s ease-in-out;
}
.posts section:hover {
  transform: scale(1.06);
 
}

.posts section a img {
  text-align: center;
}

.posts section p {
  color: black;
  font-size: 1.2em;
  text-align: center;
  font-weight: bold;
}

</style>
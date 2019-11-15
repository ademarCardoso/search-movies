<template>
  <div class="search">
    <input 
      class="search__input"
      type="text"
      ref="onSearch"
      v-model="terms"
    />
    <button class="clean--term" @click="clean">
      <svg width="18px" height="17px" viewBox="0 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Artboard" transform="translate(-1047.000000, -246.000000)" fill="#CBCBCB">
              <g id="Group-2-Copy" transform="translate(1047.000000, 245.000000)">
                <path d="M2.39339828,0.97918472 L9.0002915,7.58618472 L15.5355339,1.05025253 L16.9497475,2.46446609 L10.4142915,9.00018472 L17.2426407,15.8284271 L15.8284271,17.2426407 L8.9992915,10.4141847 L2.10050506,17.3137085 L0.686291501,15.8994949 L7.5852915,9.00018472 L0.97918472,2.39339828 L2.39339828,0.97918472 Z" id="Combined-Shape"></path>
              </g>
            </g>
          </g>
      </svg>
    </button>

    <Message :termMessage="terms" v-if="response === undefined"/>

    <Post :results="response"/>

    <Footer />
    
  </div>
</template>

<script>
import { debounce } from 'lodash'
import getMovies from '../services/index'
import Post from './Post'
import Message from './Message'
import Footer from './Footer'

export default {
  name: 'Search',
  components: {
    Post,
    Message,
    Footer
  },
  data: () =>({
    terms: '',
    response: []
  }),
  watch: {
    terms: 'onSearch'
  },
  methods: {
    onSearch: debounce(async function () {
      this.response = await getMovies(this.terms || 'man')
    }, 500),

    clean () {
      this.terms = ''
    }

    },
    mounted () {
      this.onSearch()
      this.$refs.onSearch.focus()
    }
  }

</script>

<style>
.search {
  width: 100%
}

h2 {
  font-family: 'Lexend Deca', sans-serif;
}

.search__input {
  font-family: 'Lexend Deca', sans-serif;
  display: flex;
  width: 80%;
  height: 30px;
  font-size: 1.6em;
  margin: 0 auto;
  margin-bottom: 15px;
  border: 2px solid #EDEDED;
  border-radius: 5px;
}

.clean--term {
  width: 30px;
  height: 30px;
  background: none;
  background-color: none;
  border: none;
  cursor: pointer;
  right: 150px;
  top: 88px;
  position: absolute;
}

</style>

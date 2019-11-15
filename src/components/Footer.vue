<template>
    <section class="footer__section">
      <a href="https://www.linkedin.com/in/ademar-cardoso-940820162/">
        <h1> Desenvolvido por Ademar Cardoso </h1>
      </a>
    </section> 
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style>
.footer__section {
  width: 100%;
  height: 50px;
  background-color: rgb(29, 36, 95);
  text-align: center;
  color: white;
  position: relative;
  bottom: 0;
}

.footer__section h1 {
  padding: 8px;
}

.footer__section a {
  color: white;
  text-decoration: none;
  text-decoration-color: none;
}
</style>
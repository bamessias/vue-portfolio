<template>
  <div class="footercontainer">
    <div class="name">
      Nikan Shahidi
    </div>
    <ul class="socialicons">
      <li><font-awesome-icon :icon="['fab', 'dribbble']" size="lg" /></li>
      <li><font-awesome-icon :icon="['fab', 'instagram']" size="lg" /></li>
      <li><font-awesome-icon :icon="['fab', 'twitter']" size="lg" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footercontainer{
  max-width: 1416px;
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 144px;
}
.name{
  font-family: LatoBold;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 12px;
  margin-left: 8px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
ul.socialicons li {
  margin-left: 16px;
  margin-right: 0;
}
a {
  color: #42b983;
}
</style>

<template>
  <div id="app">
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view/>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Footer
  },
  data () {
    return {
      routerName: this.$route.name
    }
  }
}
</script>

<style>
@font-face {
  font-family: TimesNewRomanPSMT;
  src: url(./assets/fonts/timesNewRoman.ttf);
}
@font-face {
  font-family: RaleWayBold;
  src: url(./assets/fonts/raleway/Raleway-Bold.ttf);
}
@font-face {
  font-family: RaleWayMedium;
  src: url(./assets/fonts/raleway/Raleway-Light.ttf);
}
@font-face {
  font-family: LatoBlack;
  src: url(./assets/fonts/lato/Lato-Black.ttf);
}
@font-face {
  font-family: LatoBold;
  src: url(./assets/fonts/lato/Lato-Bold.ttf);
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.6s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
body{
  margin: 0;
}
#app {
  margin-top:-8px;
}
</style>

<template>
  <div class="homepage">
    <Menu />
    <div class="slideshow">
      <div class="slideBackgroundContainer">
        <div class="slideBackground slideBackground1"></div>
        <div class="slideBackground slideBackground2"></div>
        <div class="slideBackground slideBackground3"></div>
        <div class="slideBackground slideBackground4"></div>
      </div>
      <div class="topbar topbar1"></div>
      <div class="contentpart">
        <div class="leftpart">
          <h1>Creative Developer</h1>
          <div class="category">
            UI/UX Design | Animation | Front-end Development
          </div>
          <div class="content">
          A dynamic and driven young professional seeking a role in web development. Significant expertise and proven success across conversion focused interface design, conversation rate optimization, and web development in both startup and corporate environments. Advanced knowledge of user journey-mapping, wire framing and UI/UX Strategy for both mobile and desktop applications. Eager to grow and engage in a setting that values the development and retention of its emerging professionals. Expert knowledge in multiple CMS platforms including Shopify, Wordpress, Magento, Hubspot.
          </div>
          <router-link to="/aboutme"><div class="learnmore">
            <div class="letters">
              <div>L</div><div>e</div><div>a</div><div>r</div><div>n</div><div style="width: 5px"></div><div>M</div><div>o</div><div>r</div><div>e</div></div>
            <span class="line"></span>
          </div></router-link>
        </div>
        <div class="rightpartContainer">
          <div id="rightpart1" class="rightpart">
            <div class="mainImage">
              <img src="../assets/images/wordpress.png" />
            </div>
            <h1 class="mainTitle">Wordpress Development</h1>
            <div class="mainContent">
              A dynamic and driven young professional seeking a role in web development.
            </div>
          </div>
          <div id="rightpart2" class="rightpart">
            <div class="mainImage">
              <img src="../assets/images/hubspot.png" />
            </div>
            <h1 class="mainTitle">Hubspot Development</h1>
            <div class="mainContent">
              A dynamic and driven young professional seeking a role in web development.
            </div>
          </div>
          <div id="rightpart3" class="rightpart">
            <div class="mainImage">
              <img src="../assets/images/shopify.png" />
            </div>
            <h1 class="mainTitle">Shopify Development</h1>
            <div class="mainContent">
              A dynamic and driven young professional seeking a role in web development.
            </div>
          </div>
          <div id="rightpart4" class="rightpart">
            <div class="mainImage">
              <img src="../assets/images/Ui Design + Strategy.svg" />
            </div>
            <h1 class="mainTitle">UI/UX Design + Strategy</h1>
            <div class="mainContent">
              A dynamic and driven young professional seeking a role in web development.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './Menu'
export default {
  name: 'HomePage',
  components: {
    Menu
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    $(document).ready(function () {
      setTimeout(function () {
        setTimeout(function () {
          $('.slideBackground1').hide()
        }, 400)
        $('.slideBackground2').fadeIn(400)
      }, 6000)
      setTimeout(function () {
        $('#rightpart1').hide()
        // $('#rightpart1').css('margin-top', -300);
        // $('#rightpart2').css('margin-top', 300);
        // $('#rightpart2').fadeIn(200).animate({
        //   marginTop: 0
        // }, 400)
        $('#rightpart2').fadeIn(600)
      }, 6400)
      setTimeout(function () {
        $('.topbar').removeClass('topbar1')
        $('.topbar').addClass('topbar2')
      }, 7000)
      setTimeout(function () {
        setTimeout(function () {
          $('.slideBackground2').hide()
        }, 400)
        $('.slideBackground3').fadeIn(400)
      }, 13000)
      setTimeout(function () {
        $('#rightpart2').hide()
        $('#rightpart3').fadeIn(600)
      }, 13400)
      setTimeout(function () {
        $('.topbar').removeClass('topbar2')
        $('.topbar').addClass('topbar3')
      }, 14000)
      setTimeout(function () {
        setTimeout(function () {
          $('.slideBackground3').hide()
        }, 400)
        $('.slideBackground4').fadeIn(400)
      }, 20000)
      setTimeout(function () {
        $('#rightpart3').hide()
        $('#rightpart4').fadeIn(600)
      }, 20400)
      setTimeout(function () {
        $('.topbar').removeClass('topbar3')
        $('.topbar').addClass('topbar4')
      }, 21000)
      setTimeout(function () {
        setTimeout(function () {
          $('.slideBackground4').hide()
        }, 400)
        $('.slideBackground1').fadeIn(400)
      }, 27000)
      setTimeout(function () {
        $('#rightpart4').hide()
        $('#rightpart1').fadeIn(600)
      }, 27400)
      setTimeout(function () {
        $('.topbar').removeClass('topbar4')
        $('.topbar').addClass('topbar1')
      }, 28000)
      setInterval(function () {
        setTimeout(function () {
          setTimeout(function () {
            $('.slideBackground1').hide()
          }, 400)
          $('.slideBackground2').fadeIn(400)
        }, 6000)
        setTimeout(function () {
          $('#rightpart1').hide()
          // $('#rightpart1').css('margin-top', -300);
          // $('#rightpart2').css('margin-top', 300);
          // $('#rightpart2').fadeIn(200).animate({
          //   marginTop: 0
          // }, 400)
          $('#rightpart2').fadeIn(600)
        }, 6400)
        setTimeout(function () {
          $('.topbar').removeClass('topbar1')
          $('.topbar').addClass('topbar2')
        }, 7000)
        setTimeout(function () {
          setTimeout(function () {
            $('.slideBackground2').hide()
          }, 400)
          $('.slideBackground3').fadeIn(400)
        }, 13000)
        setTimeout(function () {
          $('#rightpart2').hide()
          $('#rightpart3').fadeIn(600)
        }, 13400)
        setTimeout(function () {
          $('.topbar').removeClass('topbar2')
          $('.topbar').addClass('topbar3')
        }, 14000)
        setTimeout(function () {
          setTimeout(function () {
            $('.slideBackground3').hide()
          }, 400)
          $('.slideBackground4').fadeIn(400)
        }, 20000)
        setTimeout(function () {
          $('#rightpart3').hide()
          $('#rightpart4').fadeIn(600)
        }, 20400)
        setTimeout(function () {
          $('.topbar').removeClass('topbar3')
          $('.topbar').addClass('topbar4')
        }, 21000)
        setTimeout(function () {
          setTimeout(function () {
            $('.slideBackground4').hide()
          }, 400)
          $('.slideBackground1').fadeIn(400)
        }, 27000)
        setTimeout(function () {
          $('#rightpart4').hide()
          $('#rightpart1').fadeIn(600)
        }, 27400)
        setTimeout(function () {
          $('.topbar').removeClass('topbar4')
          $('.topbar').addClass('topbar1')
        }, 28000)
      }, 28000)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
  cursor: pointer;
  text-decoration: none;
}
.slideshow{
  z-index: 999;
  color: #fff;
  width: 100%;
  height: calc(100vh - 144px);
  min-height: 780px;
  position: relative;
}
.slideBackgroundContainer{
  position: absolute;
  z-index: 1000;
  width: 100%;
  height: 100%;
  top: 0;
}
.slideBackground{
  width: 100%;
  height: 100%;
  position: absolute;
  display: none;
}
.slideBackground1{
  background: linear-gradient(to right, #8ea8fc, #0074aa);
  display: block;
}
.slideBackground2{
  background: linear-gradient(to right, #fcb58e, #f87e55);
}
.slideBackground3{
  background: linear-gradient(to right, #ddfc8e, #95be46);
}
.slideBackground4{
  background: linear-gradient(to right, #9787ff, #7464dd);
}
@keyframes topbarWidth {
  0%   {width: 0; }
  100% {width: 100%; }
}
.slideshow .topbar{
  width: 100%;
  height: 4px;
  position: absolute;
  top: 8px;
  z-index: 1000;
  animation-name: topbarWidth;
  animation-duration: 7s;
  animation-iteration-count: infinite;
}
.topbar1{
  background: #a0c751;
}
.topbar2{
  background: #0074aa;
}
.topbar3{
  background: #7767e0;
}
.topbar4{
  background: #f8845b;
}
.slideshow .contentpart{
  max-width: 1416px;
  width: 80%;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 9999;
}
.slideshow .leftpart{
  width: 52%;
  z-index: 1000;
}
.slideshow .leftpart h1{
  font-family: TimesNewRomanPSMT;
  font-size: 40px;
  margin-bottom: 32px;
}
.slideshow .leftpart .category{
  font-family: RaleWayMedium;
  font-size: 14px;
  margin-bottom: 40px;
  letter-spacing: 0.5px;
}
.slideshow .leftpart .content{
  font-family: RaleWayMedium;
  font-size: 16px;
  margin-bottom: 48px;
  line-height: 1.5;
}
.slideshow .leftpart .learnmore{
  font-family: LatoBlack;
  font-size: 14px;
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  color: #fff;
}
@keyframes moveletters {
  0%   {margin-top: 0 }
  100% {margin-top: -3px }
}
@keyframes moveletters1{
  0%   {margin-top: 0 }
  100% {margin-top: 3px }
}
.slideshow .leftpart .learnmore .letters{
  display: flex;
  flex-direction: row;
  height: 20px;
}
.slideshow .leftpart .learnmore:hover .letters div:not(:last-child){
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
}
.slideshow .leftpart .learnmore:hover .letters div:nth-child(2n+1){
  animation-name: moveletters;
}
.slideshow .leftpart .learnmore:hover .letters div:nth-child(2n){
  animation-name: moveletters1;
}
.slideshow .leftpart .line{
  width: 32px;
  height: 2px;
  background: #fff;
  margin-left: 16px;
}
.slideshow .rightpartContainer{
  width: 35%;
  z-index:1000
}
.slideshow .rightpart{
  width: 100%;
  display: none;
}
.slideshow #rightpart1{
  display: block;
}
.slideshow .rightpart h1.mainTitle{
  font-family: LatoBlack;
  font-size: 24px;
  letter-spacing: 3.6px;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 24px;
}
.slideshow .rightpart .mainContent{
  font-family: RaleWayMedium;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
@media only screen and (max-width: 850px) {
  .slideshow .contentpart{
    flex-direction: column;
  }
  .slideshow .leftpart, .slideshow .rightpartContainer{
    width: 95%;
    text-align: center;
  }
  .slideshow .leftpart {
    margin-top: 50px;
    margin-bottom: 100px;
  }
  .slideshow .leftpart .learnmore{
    justify-content: center;
  }
  .slideshow{
    padding: 100px 0;
    height: auto;
  }
}
@media only screen and (max-width: 500px) {
  .slideshow .leftpart {
    margin-top: 100px;
  }
  .slideshow{
    padding: 50px 0;
    height: auto;
  }
  .slideshow .mainImage img{
    width: 100%;
  }
}
@media only screen and (max-height: 500px) {
  .slideshow{
    height: auto;
  }
}
</style>

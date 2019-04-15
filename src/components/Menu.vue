<template>
  <div class="menuBar">
    <div class="logo">
      <img src="../assets/images/logo_main.png" class="logo_white" />
      <img src="../assets/images/logo_black.png" class="logo_black" />
    </div>
    <div class="menu">
      <div class="menuTop desktop">
        <div class="menuItem">M</div>
        <div class="menuItem">E</div>
        <div class="menuItem">N</div>
        <div class="menuItem">U</div>
        <div class="menuLine"></div>
        <div class="menuClose">
          <img src="../assets/images/menuclose_black.png" />
        </div>
      </div>
      <div class="menuTop mobile">
        <div class="menuItem">M</div>
        <div class="menuItem">E</div>
        <div class="menuItem">N</div>
        <div class="menuItem">U</div>
        <div class="menuLine"></div>
        <div class="menuClose">
          <img src="../assets/images/menuclose_black.png" />
        </div>
      </div>
      <div class="menuContent">
        <div class="menuContentInner">
          <ul>
            <li>
              <router-link to="/">Home</router-link>
              <div class="menuContentLine"></div>
            </li>
            <li>
              <router-link to="/aboutme">About me</router-link>
              <div class="menuContentLine"></div>
            </li>
            <li>
              <router-link to="/contact">Contact</router-link>
              <div class="menuContentLine"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      routerName: this.$route.name
    }
  },
  mounted () {
    $(document).ready(function () {
      $('.menuTop').click(function () {
        $(this).parent().parent().parent().toggleClass('open')
        $(this).parent().find('menuContent').toggleClass('active')
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo{
  position: absolute;
  top: 48px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999999;
}
.open .logo{
  position: fixed;
}
.homepage.open .logo{
  z-index: 999999;
}
.logo_white, .homepage.open .logo_white, .homepage .logo_black{
  display: none;
}
.homepage .logo_white, .homepage.open .logo_black{
  display: block;
}
.menu{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
.open .menu{
  height: 969px;
}
.menu .menuTop{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.menuTop.mobile{
  display: none;
}
.open .menu .menuTop.mobile{
  display: none;
}
.menu .menuTop.mobile{
  flex-direction: row;
  position: fixed;
  bottom: 0;
  right: 0;
  top: auto;
  left: auto;
  background: #fff;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  width: 150px;
  height: 40px;
}
.menu .menuTop.mobile .menuItem{
  color: #000;
  margin-bottom: 0;
  font-size: 20px;
}
.menu .menuTop.mobile .menuLine{
  width: 30px;
  height: 2px;
  background: #000;
  margin-top: 0;
  margin-left: 10px;
}
.menu .menuTop{
  z-index: 999999;
  position: absolute;
  top: 64px;
  left: 20px;
  width: 50px;
}
.open .menu .menuTop .menuItem{
  color: #000;
}
.open .menu .menuTop .menuClose{
  display: block;
}
.menu .menuLine{
  display: block;
}
.open .menuLine, .menu .menuClose{
  display: none;
}
.menu .menuItem{
  font-family: LatoBold;
  font-size: 10px;
  color: #000;
  margin-bottom: 10px;
}
.homepage .menuItem{
  color: #fff;
}
.menu .menuLine{
  width: 2px;
  height: 96px;
  background: #000;
  margin-top: 16px;
}
.homepage .menu .menuLine{
  background: #fff;
}
.menuClose{
  margin-top: 16px;
}
.menuContent{
  width: 100%;
  height: 0;
  background: #fff;
  align-items: center;
  display: flex;
  opacity: 0;
  transition: height 0.5s;
}
.menuContent .menuContentInner{
  width: 533px;
  position: relative;
  margin-left: 142px;
  display: none;
}
.open .menuContent .menuContentInner{
  height: 290px;
  display: block;
}
.menuContent ul li{
  margin: 0 0 90px;
}
.menuContent ul li a{
  font-family: LatoBold;
  font-size: 32px;
  letter-spacing: 4.6px;
  color: #000;
  text-transform: uppercase;
  padding: 0 32px;
  background: #fff;
  z-index: 9999;
  margin-left: 32px;
  cursor: pointer;
  text-decoration: none;
}
.open .menuContent{
  opacity: 1;
  height: 80%;
}
.menu .menuContent .menuContentLine{
  width: 50%;
  height: 2px;
  background: #000;
  z-index: 999;
  margin-top: -20px;
  margin-bottom: 20px;
  opacity: 0;
  -webkit-transition: width 0.5s;
  transition: width 0.5s;
}
.menu .menuContent ul li.active .menuContentLine, .menu .menuContent ul li:hover .menuContentLine{
  opacity: 1;
  width: 100%;
}
.menu .menuContent ul {
  display: flex;
  flex-direction: column;
  margin: 0;
  list-style-type: none;
  padding: 0;
}
@media only screen and (max-width: 768px) {
  .menuContent .menuContentInner{
    margin-left: 100px;
  }
}
@media only screen and (max-width: 530px){
  .menuContent .menuContentInner{
    margin-left: 0;
  }
  .open .menuTop.desktop{
    display: flex;
  }
  .menuTop.desktop{
    display: none;
  }
  .menuTop.mobile{
    display: flex;
  }
}
@media only screen and (max-height: 530px) {
  .menuContent .menuContentInner{
    position: absolute;
    top: 130px;
    margin-left: 150px;
  }
  .menuContent ul li{
    margin: 0 0 40px;
  }
}
</style>

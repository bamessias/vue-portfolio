<template>
  <div class="aboutmepage">
    <Menu />
    <div class="aboutmecontent">
      <div class="introduction">
        <div class="left">
          <h2>- Visual Design & Front-end Developer</h2>
          <h1>Creative Web Development Consultant</h1>
          <p>A dynamic and driven young professional seeking a role in web development. Significant expertise and proven success across conversion focused interface design, conversation rate optimization, and web development in both startup and corporate environments. Advanced knowledge of user journey-mapping, wire framing and UI/UX Strategy for both mobile and desktop applications. Eager to grow and engage in a setting that values the development and retention of its emerging professionals. Expert knowledge in multiple CMS platforms including Shopify, Wordpress, Magento, Hubspot. </p>
        </div>
        <div class="right">
          <img src="../assets/images/nikan_photo.png" />
        </div>
        <div class="scrollButton">
          <div class="scrollLine"></div>
          <div class="scrollText">Scroll</div>
        </div>
      </div>
      <div class="focuspart">
        <h1>Focus</h1>
        <p class="focusdesc">A dynamic and driven young professional seeking a role in web development. Significant expertise and proven success across conversion focused interface design,</p>
        <div class="content">
          <div class="row">
            <div class="column">
              <h2>- User Experience</h2>
              <p>A dynamic and driven young professional seeking a role in web development. Significant expertise and proven success across conversion focused interface design,</p>
            </div>
            <div class="column">
              <h2>- Development</h2>
              <p>A dynamic and driven young professional seeking a role in web development. Significant expertise and proven success across conversion focused interface design,</p>
            </div>
            <div class="column">
              <h2>- E-Commerce</h2>
              <p>A dynamic and driven young professional seeking a role in web development. Significant expertise and proven success across conversion focused interface design,</p>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <h2>- Interaction</h2>
              <p>A dynamic and driven young professional seeking a role in web development. Significant expertise and proven success across conversion focused interface design,</p>
            </div>
            <div class="column">
              <h2>- User Experience</h2>
              <p>A dynamic and driven young professional seeking a role in web development. Significant expertise and proven success across conversion focused interface design,</p>
            </div>
            <div class="column">
              <h2>- User Experience</h2>
              <p>A dynamic and driven young professional seeking a role in web development. Significant expertise and proven success across conversion focused interface design,</p>
            </div>
          </div>
        </div>
      </div>
      <div class="experiencepart">
        <h1>Experience</h1>
        <p>A dynamic and driven young professional seeking a role in web development. Significant expertise and proven success across conversion focused interface design,</p>
      </div>
      <div class="timelinepart">
        <div class="horizontalline"></div>
        <ul class="years">
          <li v-for="year in years">
            <div class="value">{{ year.value }}</div>
            <div class="line" v-if="year.selected && year.value != '2011' && year.value != '2017'"></div>
            <div class="line longline" v-if="year.value === '2017'"></div>
            <div class="circle" v-if="year.selected"></div>
            <div class="duration" v-if="year.selected && year.value != '2011'">{{year.duration}}</div>
            <div class="duration top" v-if="year.value === '2011'">{{year.duration}}</div>
            <div class="description" v-if="year.selected && year.value != '2017'">
              <div class="title">- {{ year.title }}</div>
              <div class="text">{{ year.text }}</div>
            </div>
            <div class="description bottom" v-if="year.value == '2017'">
              <div class="title">- {{ year.title }}</div>
              <div class="text">{{ year.text }}</div>
            </div>
          </li>
        </ul>
      </div>
      <p class="lastdesc">A dynamic and driven young professional seeking a role in web development. Significant expertise and proven success across conversion focused interface design,</p>
      <div class="downloadResume"><a href="http://localhost:3000/nikan-shahidi-resume-2018.docx" download><div>D</div><div>o</div><div>w</div><div>n</div><div>l</div><div>o</div><div>a</div><div>d</div><div style="width: 5px;"></div><div>R</div><div>e</div><div>s</div><div>u</div><div>m</div><div>e</div></a></div>
    </div>
  </div>
</template>

<script>
import Menu from './Menu'
export default {
  name: 'AboutMe',
  components: {
    Menu
  },
  data () {
    return {
      years: [
        {
          value: '2011',
          selected: true,
          duration: 'July 2011 - Present',
          title: 'SplashThat',
          text: 'UI/UX & Front-end Developer Intern'
        },
        {
          value: '2012',
          selected: false
        },
        {
          value: '2013',
          selected: false
        },
        {
          value: '2014',
          selected: true,
          duration: 'Sep 2014 - Oct 2017',
          title: 'Spectrum Executive Suites',
          text: 'Design & Front-end Development'
        },
        {
          value: '2015',
          selected: false
        },
        {
          value: '2016',
          selected: false
        },
        {
          value: '2017',
          selected: true,
          duration: 'Dec 2017 - Feb 2018',
          title: 'BLVR',
          text: 'Backend Developer Intern'
        },
        {
          value: '2018',
          selected: true,
          duration: 'March 2018 - Feb 2019',
          title: 'Campaign Creators',
          text: 'Creative Technologist'
        }
      ]
    }
  },
  mounted () {
    $(document).ready(function () {
      $(window).scrollTop(0)
      $(window).scroll(function (e) {
        if ($(window).scrollTop() > $('.focuspart').position().top - 400) {
          $('.focuspart').addClass('show')
        }
        if ($(window).scrollTop() > $('.experiencepart').position().top - 500) {
          $('.experiencepart').addClass('show')
        }
        if ($(window).scrollTop() > $('.timelinepart').position().top - 400) {
          $('.timelinepart').addClass('show')
          $('.timelinepart ul.years li .duration').each(function (index) {
            $(this).css('animation-delay', index * 0.3 + 1 + 's')
            $(this).parent().find('.description').find('.title').css('animation-delay', index * 0.3 + 1.8 + 's')
            $(this).parent().find('.description').find('.text').css('animation-delay', index * 0.3 + 2.2 + 's')
          })
        }
        if ($(window).scrollTop() > $('.lastdesc').position().top - 700) {
          $('.lastdesc').addClass('show')
          $('.downloadResume').addClass('show')
        }
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
  text-decoration: none;
}
h1{
  font-family: TimesNewRomanPSMT;
  font-size: 40px;
  color: #2a2d34;
  letter-spacing: 1px;
  opacity: 0;
  animation-fill-mode: forwards;
}
h2{
  font-family: RalewayBold;
  font-size: 14px;
  font-weight: bold;
  color: #2a2d34;
  opacity: 0;
  animation-fill-mode: forwards;
}
p{
  font-family: RalewayMedium;
  font-size: 16px;
  line-height: 1.5;
  color: #2a2d34;
  opacity: 0;
  animation-fill-mode: forwards;
}
@keyframes righttoleft {
  from {
    opacity: 0;
    margin-left: 50px;
  }
  to {
    opacity: 1;
    margin-left: 0;
  }
}
@keyframes bottomtotop {
  from {
    opacity: 0;
    margin-top: 200px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
}
@keyframes lastdescAnime {
  from {
    opacity: 0;
    margin-top: 350px;
  }
  to {
    opacity: 1;
    margin-top: 120px;
  }
}
@keyframes downloadResumeAnime {
  from {
    opacity: 0;
    margin-top: 350px;
  }
  to {
    opacity: 1;
    margin-top: 40px;
  }
}
@keyframes fadeIn{
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes scrollButtonAnime{
  from {
    opacity: 0;
    bottom: 0;
  }
  to {
    opacity: 1;
    bottom: -62px;
  }
}
@keyframes cirlcleAnime{
  from {
    opacity: 0;
    top: -200px;
  }
  to {
    opacity: 1;
    top: 74px;
  }
}
@keyframes cirlcleAnimeMobile{
  from {
    opacity: 0;
    top: -300px;
  }
  to {
    opacity: 1;
    top: 0px;
  }
}
@keyframes yearValueAnime{
  from {
    opacity: 0;
    top: -200px;
  }
  to {
    opacity: 1;
    top: 55px;
  }
}
@keyframes yearValueAnimeMobile{
  from {
    opacity: 0;
    top: -300px;
  }
  to {
    opacity: 1;
    top: 30px;
  }
}
@keyframes durationAnimeMobile{
  from {
    opacity: 0;
    margin-left: 60%;
  }
  to {
    opacity: 1;
    margin-left: 10%;
  }
}
p{
  width: 100%;
}
.aboutmecontent{
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 96px;
  width: 90%;
  margin: auto;
  margin-top: 144px;
}
.introduction{
  background: #fbfbff;
  padding: 48px 10%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  animation-name: fadeIn;
  animation-duration: 1s;
}
.introduction .left{
  margin-right: 60px;
}
.introduction .left h1, .introduction .left h2, .introduction .left p{
  animation-name: righttoleft;
  animation-duration: 1s;
}
.introduction .left h1{
  margin: 32px 0 40px;
  animation-delay: 1.5s;
}
.introduction .left h2{
  animation-delay: 1s;
}
.introduction .left p{
  animation-delay: 2s;
}
.introduction .right img{
  opacity: 0;
  animation-name: fadeIn;
  animation-duration: 1s;
  animation-delay: 2.5s;
  animation-fill-mode: forwards;
}
.scrollButton{
  width: 124px;
  height: 124px;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  opacity: 0;
  animation-name: scrollButtonAnime;
  animation-duration: 1s;
  animation-delay: 2.5s;
  animation-fill-mode: forwards;
}
.scrollButton .scrollLine{
  width: 3px;
  height: 43px;
  background: #fff;
}
.scrollButton .scrollText{
  font-family: LatoBlack;
  font-size: 12px;
  letter-spacing: 1.7px;
  color: #ffffff;
  text-transform: uppercase;
  margin-top: 16px;
}
.focuspart{
  margin-top: 160px;
  padding: 0 10%;
  box-sizing: border-box;
}
.focuspart p.focusdesc{
  margin: 32px 0 40px;
  width: 55%;
}
.focuspart .content .row{
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;
}
.focuspart .content .column{
  width: 30%;
}
.focuspart .content .column p{
  margin: 24px 0 0;
}
.focuspart.show h1, .focuspart.show h2, .focuspart.show p{
  animation-name: righttoleft;
  animation-duration: 1s;
}
.focuspart.show p{
  animation-delay: 0.8s;
}
.focuspart.show .column h2, .focuspart.show .column p{
  animation-delay: 1.6s;
}
.experiencepart{
  margin-top: 56px;
  margin-bottom: 120px;
  padding: 0 10%;
  box-sizing: border-box;
  text-align: center;
}
.experiencepart p{
  width: 55%;
  margin: auto;
}
.experiencepart.show h1, .experiencepart.show p{
  animation-name: bottomtotop;
  animation-duration: 1.5s;
}
.experiencepart.show p{
  animation-delay: 0.8s;
}
.timelinepart{
  width: 80%;
  height: 320px;
  margin: 10%;
  border-left: 1px solid #f2f2f2;
  box-sizing: border-box;
  position:relative;
  opacity: 0;
}
.timelinepart.show{
  animation-name: bottomtotop;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
}
.horizontalline{
  width: 80%;
  height: 4px;
  border-radius: 2px;
  background-color: #f2f2f2;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.timelinepart ul.years{
  display: flex;
  list-style-type: none;
  padding: 0;
  width: 80%;
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 8px;
}
.timelinepart ul.years li{
  width: 12.5%;
  font-family: RalewayMedium;
  font-size: 12px;
  color: #000000;
  height: 160px;
  position: relative;
}
.timelinepart ul.years li .value{
  position: absolute;
  top: 55px;
  opacity: 0;
}
.timelinepart ul.years li .duration{
  opacity: 0;
}
.timelinepart ul.years li .circle{
  width: 12px;
  height: 12px;
  background-color: #000000;
  border-radius: 6px;
  margin-left: -14px;
  z-index: 9999;
  position: absolute;
  opacity: 0;
}
.timelinepart.show ul.years li .value{
  animation-name: yearValueAnime;
  animation-duration: 1s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
}
.timelinepart.show ul.years li .circle{
  animation-name: cirlcleAnime;
  animation-duration: 1s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
}
.timelinepart ul.years li .line{
  width: 1px;
  height: 100%;
  background-color: #f2f2f2;
  position: absolute;
  left: -8px;
  z-index: 999;
}
.timelinepart ul.years li .line.longline{
  height: 150%;
}
.timelinepart ul.years li .duration.top{
  position: absolute;
  top: -50%;
}
.timelinepart ul.years li .description{
  position: absolute;
  top: 65%;
  width: 130%;
}
.timelinepart ul.years li .description .title{
  font-family: RalewayBold;
  font-size: 14px;
  color: #2a2d34;
  margin-bottom: 8px;
  opacity: 0;
}
.timelinepart ul.years li .description .text{
  font-family: RalewayMedium;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: normal;
  color: #2a2d34;
  margin-left: 8px;
  letter-spacing: 0.5px;
  opacity: 0;
  width: 100%;
}
.timelinepart.show ul.years li .duration, .timelinepart.show ul.years li .description .title, .timelinepart.show ul.years li .description .text{
  animation-name: righttoleft;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
.timelinepart ul.years li .description.bottom{
  top: 115%;
}
p.lastdesc{
  width: 45%;
  margin: auto;
  margin-top: 120px;
  text-align: center;
  opacity: 0;
}
p.lastdesc.show{
  animation-name: lastdescAnime;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
.downloadResume.show{
  animation-name: downloadResumeAnime;
  animation-duration: 1s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
}
.downloadResume{
  text-align: center;
  margin-top: 40px;
  opacity: 0;
}
.downloadResume a{
  font-family: LatoBlack;
  font-size: 14px;
  letter-spacing: 2px;
  color: #000000;
  margin: auto;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  height: 20px;
  width: 180px;
  justify-content: center;
  cursor: pointer;
}
@keyframes moveletters {
  0%   {margin-top: 0 }
  100% {margin-top: -3px }
}
@keyframes moveletters1{
  0%   {margin-top: 0 }
  100% {margin-top: 3px }
}
.downloadResume a:hover div:not(:last-child){
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
}
.downloadResume a:hover div:nth-child(2n+1){
  animation-name: moveletters;
}
.downloadResume a:hover div:nth-child(2n){
  animation-name: moveletters1;
}
@media only screen and (max-width: 1024px){
  .introduction{
    flex-direction: column;
  }
  .introduction .left, .introduction .right{
    width: 70%;
  }
  .introduction .left{
    align-self: flex-start;
    margin-right: 0;
    margin-bottom: 50px;
  }
  .introduction .right{
    align-self: flex-end;
    margin-bottom: 50px;
  }
  .introduction .scrollButton{
    left: 10%;
  }
}
@media only screen and (max-width: 1024px) {
  .timelinepart {
    height: 800px;
    border: none;
  }
  .timelinepart .horizontalline{
    width: 4px;
    height: 100%;
    left: 40%;
    top: 0;
    transform: translateX(-50%);
  }
  .timelinepart ul.years{
    flex-direction: column;
    left: 40%;
  }
  .timelinepart ul.years li{
    height: 100px;
    width: 100%;
  }
  .timelinepart ul.years li .line{
    display: none;
  }
  .timelinepart ul.years li .circle{
    top: 0;
    margin-left: -6px;
  }
  .timelinepart.show ul.years li .circle{
    animation-name: cirlcleAnimeMobile;
  }
  .timelinepart ul.years li .value{
    top: 30px;
    position: absolute;
    margin-left: -12px;
  }
  .timelinepart.show ul.years li .value{
    animation-name: yearValueAnimeMobile;
  }
  .timelinepart ul.years li .duration {
    top: 0 !important;
    margin-left: 10%;
    width: 90%;
  }
  .timelinepart.show ul.years li .duration {
    animation-name: durationAnimeMobile;
  }
  .timelinepart ul.years li .description {
    top: 30px !important;
    margin-left: 10%;
    width: 90%;
  }
  p.lastdesc{
    margin-top: 0;
  }
}
@media only screen and (max-width: 768px) {
  .introduction .right{
    width: auto;
  }
  .content .row{
    flex-direction: column;
  }
  .focuspart p.focusdesc, .focuspart .content .column, .experiencepart p{
    width: 100%;
  }
  .focuspart .content .column{
    margin-bottom: 40px;
  }
  p.lastdesc{
    width: 80%;
  }
}
@media only screen and (max-width: 600px) {
  .introduction .left, .introduction .right, .introduction .right img{
    width: 100%;
  }
  .timelinepart .horizontalline{
    left: 0;
  }
  .timelinepart ul.years{
    left: 0;
  }
}
</style>

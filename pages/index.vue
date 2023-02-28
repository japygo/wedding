<template>
  <div>
    <div id="home-date">
      <div class="container ww-announcement-container">
        <p id="name-title" class="ww-couple-name ww-title" data-aos="zoom-in-down">
          김현진&nbsp;&nbsp;
          <svg viewBox="0 0 32 29.6" class="heart"><path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"></path></svg>
          &nbsp;&nbsp;정혜화
        </p>
        <span id="wedding-day">wedding day
        </span>
        <p  id="name-title2" class="ww-wedding-date mt-5 ww-title" data-aos="zoom-in-down" data-aos-offset="10">
          2023년 4월 1일 토요일 낮 12시<br>
          JK아트컨벤션 4층 아트리움홀
        </p>
      </div>
    </div>
    <div id="home" class="ww-home-page">
      <span id="wedding-day2">
              04.01
      </span>
    </div>
    <div class="text-background invite d-flex align-center justify-center">
      <span>결혼합니다</span>
    </div>
    <div class="text-background invite-message d-flex flex-column align-center justify-center">
      <span>두 사람이 하나가 될 새 인생을 시작합니다.</span>
      <span>사랑으로 가득채워 즐거움은 나누고,</span>
      <span>어려움은 이겨내는 함께 나아가는 삶을 꾸리겠습니다.</span>
      <span>부디 걸음하시어 축복하여 주시면</span>
      <span>더없는 기쁨이 되겠습니다.</span>
    </div>
    <div class="text-background invite-name d-flex align-center justify-center">
      <div id="man-name">
        김동용 · 오시영<span class="small align-self-end">의 장남</span>김현진
      </div>
    </div>
    <div class="text-background invite-name d-flex align-center justify-center">
      <div  id="woman-name">
        정일현 · 장영미<span class="small align-self-end">의 장녀</span>정혜화
      </div>
    </div>
    <div class="default-background default-line d-flex align-center justify-center">
      <div class="line"></div>
    </div>
    <div class="default-background date-message d-flex flex-column align-center justify-center">
      <div class="d-flex flex-column align-center justify-center">
        <span>결혼식</span>
        <div>2023년 4월 1일(토) 낮 12시<br> JK아트컨벤션 4층 / 아트리움홀</div>
      </div>
    </div>
    <div class="calendar-background d-flex align-center justify-center">
      <WeddingCalendar />
    </div>
    <div class="default-background default-line d-flex align-center justify-center">
      <div class="line"></div>
    </div>
    <div class="default-background date-message d-flex flex-column align-center justify-center">
      <div class="d-flex flex-column align-center justify-center">
        <span>제주 피로연(신랑측)</span>
        <div>2023년 4월 2일(일) 11시 ~ 17시<br>제주시 오션스위츠 호텔 2층 <br>(제주시 삼도이동 탑동해안로 74, 이마트 동쪽)</div>
      </div>
    </div>
    <div class="default-background default-line d-flex align-center justify-center">
      <div class="line"></div>
    </div>
    <div class="text-background gallery d-flex flex-column align-center justify-center">
      <span>갤러리</span>
      <WeddingGallery id="gallery-photo"/>
    </div>
    <div class="text-background video d-flex flex-column align-center justify-center">
      <video ref="video" width="100%" :poster="require('@/static/og.jpg')" controls>
        <source :src="require('@/static/mp4/welcome.mp4')" type="video/mp4">
      </video>
    </div>
    <div class="default-background map d-flex flex-column align-center justify-center">
      <span class="map-title">오시는 길</span>
      <span class="map-address">서울특별시 영등포구 문래로 164</span>
      <span class="map-address">(문래동3가 55-16)</span>
      <span class="map-address-sub">JK아트컨벤션 4층 아트리움홀</span>
      <div class="d-flex flex-row">
        <a href="https://naver.me/FHYucCYu">
          <img :src="require('@/static/imgs/naver-map.png')"  alt="naver" />
        </a>
        <a href="https://kko.to/Zy5MN-yVX9">
          <img :src="require('@/static/imgs/kakao-map.png')"  alt="kakao" />
        </a>
        <a href="https://goo.gl/maps/NFU28dVxGeJ5KMPs9">
          <img :src="require('@/static/imgs/google-map.png')"  alt="google" />
        </a>
      </div>
      <KakaoMap />
        <div class="map-description">
          ■ 지하철 - 셔틀 운행하는 문래역 권장<br>
          &nbsp;&nbsp;&nbsp;○ [2호선 문래역] 4번 출구 (뒷쪽) 셔틀버스 운행<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 도보 : 5번 출구에서 전방 직진 300M<br>
          <br>
          ■ 버스<br>
          &nbsp;&nbsp;&nbsp;○ 문래역 하차시<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(지선) 6211, 6625, 6650<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(광역) 2300, 2400. 2500<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(간선) 641<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(마을) 영등포 05<br>
          &nbsp;&nbsp;&nbsp;○ 영등포역 하차시<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(마을) 영등포 05<br>
          <br>
          ■ 건물 내 주차<br>
          &nbsp;&nbsp;&nbsp;1200대 동시 주차 가능
        </div>
    </div>
    <div class="text-background panel d-flex flex-column align-center justify-center">
      <span class="panel-title">신랑 신부에게 마음 전하기</span>
      <WeddingPanel />
    </div>
  </div>
</template>

<script>

export default {
name: 'IndexPage'
}

</script>

<style lang="scss">
@font-face {
  font-family: 'BMJUA';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

* {
  font-family: "BMJUA", sans-serif;
}

body {
  font-family: "BMJUA", sans-serif;
}

/* Home Page Style */
#home-date {
  margin: 3vh 2vh 0 2vh;
}

#wedding-day {
  float: right;
  color: lightcoral;
  margin-right: 1%;
}

#wedding-day2{
  background: black;
  padding: 13px;
  border-radius: 50px;
  height: 13%;
  border: 1px solid black;
  display: flex;
  text-align: center;
  float: right;
  color: white;
  align-items: center;
  transform: translate(-13%, -38%);
}

.ww-home-page {
  background: url("@/static/imgs/2.jpg") no-repeat 70% 68%;
  background-size: cover;
  height: 58vh;
  min-height: 480px;
  max-height: 1080px;
  margin: 1vh 3vh 3vh 3vh;
}
.ww-home-page .ww-wedding-announcement {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  height: 100%;
  color: #fff;
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px  1px 0 #000,
    1px  1px 0 #000;
  letter-spacing: 2px;
}
.ww-home-page .ww-wedding-announcement .ww-announcement-container {
  max-width: 600px;
  text-align: center;
  margin-left: 0;
  z-index: 999;
  margin-top: 150px;
}
.ww-home-page .ww-wedding-announcement img {
  max-height: 350px;
  width: auto;
}
@media (max-width: 480px) {
  .ww-home-page .ww-wedding-announcement img {
    max-height: 250px;
    width: auto;
  }
}
.ww-home-page .ww-wedding-announcement .ww-couple-name {
  font-size: 70px;
}
@media (max-width: 576px) {
  .ww-home-page .ww-wedding-announcement .ww-couple-name {
    font-size: 50px;
  }
}
.ww-home-page .ww-wedding-announcement .ww-wedding-date {
  font-size: 28px;
}
@media (max-width: 576px) {
  .ww-home-page .ww-wedding-announcement .ww-wedding-date {
    font-size: 22px;
  }
}

/* Nav Bar Style */
.ww-couple-name {
  border-bottom: 1px solid black ;
  display: inline-block;
  padding-bottom: 3%;
}

.ww-couple-name .heart {
  fill: #f26147;
  position: relative;
  top: 2px;
  width: 5%;
  -webkit-animation: pulse 1s ease infinite;
  animation: pulse 1s ease infinite;
}

@-webkit-keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}

/* Common Style */
.ww-title {
  font-family: "BMJUA", cursive;
  font-size: 19px;
}

#name-title {
  display: inline;
  padding: 7% 0;
}

#name-title2 {
  padding-top: 6%;
}

.text-background {
  background-image: url("@/static/imgs/groovepaper.png");
  background-size: cover;
  background-color: #f3efec;
}

.invite {
  span {
    font-family: "BMJUA", sans-serif;
    font-size: 30px;
    margin: 10% 0 5%;
  }
}

.invite-message {
  font-family: "BMJUA", sans-serif;
  font-size: 17px;
}

.invite-name {
  font-family: "BMJUA", sans-serif;
  letter-spacing: 2px;
  font-size: 20px;
  height: 100px;
  .small {
    font-size: 13px;
    margin-left: 2px;
    margin-right: 2px;
  }
}

#man-name {
  padding-top: 33px;
}

#woman-name {
  padding-bottom: 82px;
}

.default-background {
  background-image: url("@/static/imgs/groovepaper.png");
  background-size: cover;
  background-color: #ffffff;
}

.date-message {
  font-family: "BMJUA", sans-serif;
  font-size: 25px;
  span {
    font-size: 30px;
    margin: 10% 0 5%;
  }
  div:last-child {
    font-size: 19px;
    text-align: center;
    padding-bottom: 4%;
  }
}

.default-line {
  height: 50px;
}

.line {
  width: 88vw;
  border-top:1px solid #c4c3c2;
  margin:0 auto;
}

.calendar-background {
  background-image: url("@/static/imgs/groovepaper.png");
  background-size: cover;
  padding: 5% 2%;
}

#gallery-photo {
  width: 90%;
  margin-bottom: 20px;
}

.gallery {
  height: 100%;
  span {
    font-family: "BMJUA", cursive;
    font-size: 30px;
    margin: 10% 0;
  }
}

.video {
  height: 100%;
  width: 100%;
  margin: auto;
  padding-bottom: 8%;
  span {
    font-family: "BMJUA", cursive;
    font-size: 30px;
    margin: 50px 0;
  }
}

video {
  width: 90%;
}

.map {
  img {
    width: 40px;
    height: 40px;
    margin: 5px;
  }

  .map-title {
    font-family: "BMJUA", sans-serif;
    font-size: 30px;
    margin: 30px 0;
  }

  .map-address {
    font-family: "BMJUA", sans-serif;
    font-size: 20px;
  }

  .map-address-sub {
    font-family: "BMJUA", sans-serif;
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 5%;
  }

  .map-description {
    font-family: "BMJUA", sans-serif;
    font-size: 16px;
    padding: 7%;
  }
}

.panel {
  .panel-title {
    font-family: "BMJUA", cursive;
    font-size: 30px;
    margin: 30px 0;
  }
}

</style>

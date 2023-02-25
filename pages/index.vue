<template>
  <div>
    <div id="home" class="ww-home-page">
      <div class="ww-wedding-announcement d-flex align-center justify-center">
        <div class="container ww-announcement-container">
          <p class="ww-couple-name ww-title" data-aos="zoom-in-down">
            현진
            <svg class="heart" viewBox="0 0 32 29.6">
              <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"></path>
            </svg>
            혜화
          </p>
          <p class="ww-wedding-date mt-5 ww-title" data-aos="zoom-in-down" data-aos-offset="10">
            2023년 4월 1일(토) 낮 12시<br>
            JK아트컨벤션 / 아트리움홀
          </p>
        </div>
      </div>
    </div>
    <div class="text-background invite d-flex align-center justify-center">
      <span data-aos="zoom-in-down">초대합니다</span>
    </div>
    <div class="text-background invite-message d-flex align-center justify-center">
      <div>
        저희 두 사람이 사랑과 믿음으로<br>
        한 가정을 이루게 되었습니다.<br>
        바쁘시더라도 부디 오셔서 저희들의 앞날을<br>
        축복해 주시고 격려해 주시면<br>
        더없는 기쁨이 되겠습니다. <br>
      </div>
    </div>
    <v-row no-gutters class="text-background">
      <v-col cols="6" data-aos="flip-left" data-aos-offset="200">
        <v-img :src="require('@/static/imgs/3.jpg')" />
      </v-col>
      <v-col cols="6" data-aos="flip-right" data-aos-offset="200">
        <v-img :src="require('@/static/imgs/4.jpg')" />
      </v-col>
    </v-row>
    <div class="text-background invite-name d-flex align-center justify-center">
      <div data-aos="fade-left" data-aos-offset="330">
        김동용 · 오시영<span class="small align-self-end">의 장남</span>김현진
      </div>
    </div>
    <div class="text-background invite-name d-flex align-center justify-center">
      <div data-aos="fade-right" data-aos-offset="330">
        정일현 · 장영미<span class="small align-self-end">의 장녀</span>정혜화
      </div>
    </div>
    <div class="default-background date-message ">
      <div class="d-flex flex-column align-center justify-center" data-aos="zoom-in-up" data-aos-offset="330">
        <span>결혼식</span>
        <div>
          2023년 4월 1일(토) 낮 12시<br>
          JK아트컨벤션 / 아트리움홀
        </div>
      </div>
    </div>
    <div class="calendar-background d-flex align-center justify-center">
      <WeddingCalendar />
    </div>
    <div class="default-background default-line d-flex align-center justify-center">
      <div class="line"></div>
    </div>
    <div class="default-background date-message d-flex flex-column align-center justify-center">
      <div class="d-flex flex-column align-center justify-center" data-aos="zoom-out" data-aos-offset="400">
        <span>피로연(신랑측)</span>
        <div>2023년 4월 2일(토) 낮 11시</div>
        <div>제주시 오션스위츠 호텔 2층</div>
        <div>(제주시 삼도이동 탑동해안로 74, 이마트 동쪽)</div>
      </div>
    </div>
    <div class="default-background default-line d-flex align-center justify-center">
      <div class="line"></div>
    </div>
    <div class="text-background gallery d-flex flex-column align-center justify-center">
      <span data-aos="zoom-in-down" data-aos-offset="330">Gallery</span>
      <WeddingGallery />
    </div>
    <div class="default-background video d-flex flex-column align-center justify-center">
      <span data-aos="zoom-in-down" data-aos-offset="660">초대영상</span>
      <video width="100%" controls>
        <source :src="require('@/static/mp4/welcome.mp4')" type="video/mp4">
      </video>
    </div>
    <div class="text-background map d-flex flex-column align-center justify-center">
      <span class="map-title" data-aos="zoom-in-down" data-aos-offset="770">오시는 길</span>
      <span class="map-address" data-aos="fade-left" data-aos-offset="770">서울특별시 영등포구 문래로 164 (문래동3가 55-16)</span>
      <span class="map-address-sub" data-aos="fade-right" data-aos-offset="770">JK아트컨벤션 4층 아트리움홀</span>
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
      <div class="map-description" data-aos="zoom-in-up" data-aos-offset="1400">
        ■ 지하철<br>
         ○ [2호선 문래역] 4번 출구 (뒷쪽) 셔틀버스 운행<br>
          - 도보 : 5번 출구에서 전방 직진 300M<br>
         ○ [1호선 영등포역] 지하상가 지나 로터리 4번 출구 (영등포소방서 방면)<br>
          - 도보 : 영등포로터리 지하쇼핑센터 4번 출구에서 전방 직진 300M<br>
        <br>
        ■ 버스<br>
           ○ 문래역 하차시<br>
            (지선) 6211, 6625, 6650<br>
            (광역) 2300, 2400. 2500<br>
            (간선) 641<br>
            (마을) 영등포 05<br>
        </div>
    </div>
    <div class="default-background panel d-flex flex-column align-center justify-center">
      <span class="panel-title">마음 전하는 곳</span>
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
body {
  font-family: "Dosis", sans-serif;
}

/* Home Page Style */
.ww-home-page {
  background: url("@/static/imgs/1.jpg") no-repeat 70% 0;
  background-size: cover;
  height: 100vh;
  min-height: 480px;
  max-height: 1080px;
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
.ww-couple-name .heart {
  fill: #f26147;
  position: relative;
  top: 2px;
  width: 40px;
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
  font-family: "Gamja Flower", cursive;
}

.text-background {
  background-image: url("@/static/imgs/groovepaper.png");
  background-size: cover;
  background-color: #ebd3bb;
}

.invite {
  span {
    font-family: "East Sea Dokdo", cursive;
    font-size: 30px;
    margin: 50px 0;
  }
}

.invite-message {
  font-family: "East Sea Dokdo", cursive;
  font-size: 25px;
  padding-bottom: 25px;
}

.invite-name {
  font-family: "Nanum Myeongjo", serif;
  letter-spacing: 2px;
  font-size: 20px;
  height: 50px;
  .small {
    font-size: 13px;
    margin-left: 2px;
    margin-right: 2px;
  }
}

.default-background {
  background-image: url("@/static/imgs/groovepaper.png");
  background-size: cover;
  background-color: #ffffff;
}

.date-message {
  font-family: "Do Hyeon", sans-serif;
  font-size: 25px;
  padding: 50px 0;
  span {
    font-size: 30px;
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
  background-color: #ffffff;
}

.gallery {
  height: 100%;
  span {
    font-family: "Great Vibes", cursive;
    font-size: 30px;
    margin: 50px 0;
  }
}

.video {
  height: 100%;
  span {
    font-family: "Nanum Pen Script", cursive;
    font-size: 30px;
    margin: 50px 0;
  }
}

.map {
  img {
    width: 40px;
    height: 40px;
    margin: 5px;
  }

  .map-title {
    font-family: "Nanum Pen Script", cursive;
    font-size: 30px;
    margin: 50px 0;
  }

  .map-address {
    font-family: "Do Hyeon", sans-serif;
    font-size: 20px;
  }

  .map-address-sub {
    font-family: "Do Hyeon", sans-serif;
    font-size: 20px;
    font-weight: bold;
  }

  .map-description {
    font-family: "Do Hyeon", sans-serif;
    font-size: 20px;
    padding: 10px;
  }
}

.panel {
  .panel-title {
    font-family: "Nanum Pen Script", cursive;
    font-size: 30px;
    margin: 50px 0;
  }
}



</style>

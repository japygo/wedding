<template>
  <div>
    <div id="home-date">
      <div class="container ww-announcement-container">
        <p id="name-title" class="ww-couple-name ww-title" data-aos="zoom-in-down">
          김현진
          &
          정혜화
        </p>
        <span id="wedding-day">
          D-{{ dday }}
          <svg viewBox="0 0 32 29.6" class="heart"><path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"></path></svg>
        </span>
        <p id="name-title2" class="ww-wedding-date mt-5 ww-title" data-aos="zoom-in-down" data-aos-offset="10">
          2023/04/01 (토) 낮 12시<br>
          JK아트컨벤션 4층 아트리움홀
        </p>
      </div>
    </div>
    <div id="home" class="ww-home-page">
      <span id="wedding-day2">
              04.01
      </span>
    </div>
    <div class="title-background invite align-center justify-center">
      <span>- INVITE YOU -</span>
      <p>저희 둘, 결혼합니다</p>
    </div>
    <div class="text-background invite-message d-flex flex-column align-center justify-center">
      <span>두 사람이 하나가 될 새 인생을 시작합니다.</span>
      <span>사랑으로 가득채워 즐거움은 나누고,</span>
      <span>어려움은 이겨내 함께 나아가는 삶을 꾸리겠습니다.</span>
      <span>부디 걸음하시어 축복하여 주시면</span>
      <span>더없는 기쁨이 되겠습니다.</span>
    </div>
    <div class="text-background invite-name d-flex align-center justify-center">
      <div id="man-name">
        김동용 · 오시영<span class="small align-self-end">의 장남</span><span class="name-color">현진</span>
      </div>
    </div>
    <div class="text-background invite-name d-flex align-center justify-center">
      <div  id="woman-name">
        정일현 · 장영미<span class="small align-self-end">의 장녀</span><span class="name-color">혜화</span>
      </div>
    </div>
    <div class="day-background default-line d-flex align-center justify-center">
      <div class="line"></div>
    </div>
    <div class="day-background date-message d-flex flex-column align-center justify-center">
      <div class="d-flex flex-column align-center justify-center">
        <span class="wedding-date">4월의 웨딩 데이,</span>
        <h3 class="wedding_day">01</h3>
        <span class="wedding_dday">2023/04/01 (토) 낮 12시</span>
        <p class="wedding_place">JK아트컨벤션 4층 / 아트리움홀</p>
      </div>
    </div>
    <div class="day-background calendar-background d-flex align-center justify-center">
      <WeddingCalendar/>
    </div>
    <div class="day-background default-line d-flex align-center justify-center">
      <div class="line"></div>
    </div>
    <div class="day-background date-message d-flex flex-column align-center justify-center">
      <div class="d-flex flex-column align-center justify-center">
        <span class="wedding_day">제주 피로연(신랑측)</span>
        <span class="wedding_dday">2023년 4월 2일(일) 11시 ~ 17시</span>
        <p class="wedding_place">제주시 오션스위츠 호텔 2층 <br> (제주시 삼도이동 탑동해안로 74, 이마트 동쪽)</p>
      </div>
    </div>
    <div class="day-background default-line d-flex align-center justify-center">
      <div class="line"></div>
    </div>
    <div class="text-background gallery d-flex flex-column align-center justify-center">
      <span class="wedding-date">-Wedding Gellery-</span>
      <WeddingGallery id="gallery-photo"/>
    </div>
    <div class="text-background video d-flex flex-column align-center justify-center">
      <video width="100%" :poster="require('@/static/og.jpg')" controls>
        <source :src="require('@/static/mp4/welcome.mp4')" type="video/mp4">
      </video>
    </div>
    <div class="default-background map d-flex flex-column align-center justify-center">
      <span class="map-title">- Location -</span>
      <span class="map-subtitle"> 오시는 길 안내합니다.</span>
      <KakaoMap ref="map" />
      <span class="map-address">서울특별시 영등포구 문래로 164 (문래동3가 55-16)</span>
      <span class="map-address-sub">JK아트컨벤션 4층 아트리움홀</span>
      <div>
        <v-btn elevation="5" small color="white" @click="handleCopy(location)">주소 복사</v-btn>
      </div>
      <div class="map-description">
        <span class="nav-title">🚙 내비게이션</span><br>
        <span class="nav-span">&nbsp;&nbsp;&nbsp;원하시는 앱을 선택하면 길안내가 시작됩니다.</span>
        <br>
        <div class="map-nav">
          <div class="nav-tab">
            <a href="https://naver.me/FHYucCYu">
              <img :src="require('@/static/imgs/naver-map.png')"  alt="naver" />
            </a>
            <span>네이버</span>
          </div>
          <div class="nav-tab">
            <a href="https://kko.to/Zy5MN-yVX9">
              <img :src="require('@/static/imgs/kakao-map.png')"  alt="kakao" />
            </a>
            <span>카카오</span>
          </div>
          <div class="nav-tab">
            <a href="https://goo.gl/maps/NFU28dVxGeJ5KMPs9">
              <img :src="require('@/static/imgs/google-map.png')"  alt="google" />
            </a>
            <span>구글</span>
          </div>
        </div>
        <br>
        🅿️ 건물 내 주차 안내<br>
        &nbsp;&nbsp;&nbsp;1200대 동시 주차 가능
        <br>
        <br>
        🚃 지하철 - 셔틀 운행하는 문래역 권장<br>
        &nbsp;&nbsp;&nbsp;⊙ [2호선 문래역] 4번 출구 (뒷쪽) 셔틀버스 운행<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 도보 : 5번 출구에서 전방 직진 300M<br>
        <br>
        🚎 버스<br>
        &nbsp;&nbsp;&nbsp;⊙ 문래역 하차시<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- (지선) 6211, 6625, 6650<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- (광역) 2300, 2400. 2500<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- (간선) 641<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- (마을) 영등포 05<br>
        &nbsp;&nbsp;&nbsp;⊙ 영등포역 하차시<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- (마을) 영등포 05<br>
        <br>
      </div>
    </div>
    <div class="text-background panel d-flex flex-column align-center justify-center">
      <span class="for-you-heart">- FOR YOUR HEART -</span>
      <span class="panel-title">신랑 신부에게 마음 전하기</span>
      <WeddingPanel />
    </div>
    <div class="default-background thanks align-center justify-center">
      <span>
        - THANKS TO -<br>
        언제나 곁을 따뜻하게 지켜주신<br>
        양가 부모님과 사랑으로 응원해주신<br>
        모든 분들께 감사드립니다.
      </span>
    </div>
    <v-snackbar
      v-model="snackbar"
      :timeout="1000"
      shaped
      bottom
      elevation="5"
      color="primary"
      text
    >
      클립보드에 복사되었습니다.
      <template #action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          X
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: 'IndexPage',
  data() {
    return {
      dday: 0,
      location : '서울특별시 영등포구 문래로 164(문래동 3가 55-16) JK아트컨벤션',
      scrollTimeout: null,
      snackbar: false
    }
  },
  created() {
    const now = dayjs()
    const weddingDay = dayjs('2023-04-01')
    this.dday = Math.floor(weddingDay.diff(now, "day", true))
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.handleScroll)
    })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      window.clearTimeout(this.scrollTimeout);
      this.scrollTimeout = window.setTimeout(() => {
        this.$refs.map.$refs.kakaoMap.style.pointerEvents = '';
      }, 300);

      this.$refs.map.$refs.kakaoMap.style.pointerEvents = 'none';
    },
    async handleCopy(text) {
      try {
        await navigator.clipboard.writeText(text)
        this.snackbar = true
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('Failed to copy text: ', err)
      }
    }
  }
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

.v-main__wrap {
  background: #fbfaf8;
}

/* Home Page Style */
#home-date {
  margin: 3vh 2vh 0 2vh;
}

#wedding-day {
  float: right;
  color: lightcoral;
}

#wedding-day2 {
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

.heart {
  fill: #f26147;
  position: relative;
  top: 2px;
  display: inline;
  width: 14px;
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

.title-background {
  background-image: url("@/static/imgs/invite_bg_m.jpg");
  background-size: cover;
  background-color: #f3efec;
  color : white;
  text-align: center;
  padding: 3%;
}

.text-background {
  background-size: cover;
  background-color: #fbfaf8;
}

.invite {
  span {
    font-family: "BMJUA", sans-serif;
    font-size: 30px;
    margin: 10% 0 5%;
  }
  p {
    font-size: 22px;
  }
}

.invite-message {
  font-family: "BMJUA", sans-serif;
  font-size: 17px;
  padding-top: 30px;
}

.invite-name {
  font-family: "BMJUA", sans-serif;
  letter-spacing: 2px;
  font-size: 20px;
  .small {
    font-size: 13px;
    margin-left: 2px;
    margin-right: 2px;
  }
}

#man-name::before{
  background-image: url("@/static/imgs/bg_thx01_m.png");
  height: 3px;
  background-size: 100% 3px;
}

#man-name {
  padding-top: 33px;
}

#woman-name {
  padding-bottom: 30px;
  padding-top: 21px;
}

.default-background {
  background-image: url("@/static/imgs/contact_bg.jpg");
  background-size: cover;
  background-color: #2c2722;
}

.day-background {
  background-image: url("@/static/imgs/day_bg.jpg");
  font-size: 20px;
}

.date-message {
  font-family: "BMJUA", sans-serif;
  font-size: 30px;

  span {
    margin: 10% 0 5%;
  }

  .wedding-date {
    font-size: 15px;
  }

  .wedding_day {
    font-size: 30px;
  }

  #wedding_day{
    font-size: 20px;
  }

  .wedding_place{
    font-size: 16px;
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
  background-size: cover;
  padding: 0 2%;
}

#gallery-photo {
  width: 90%;
  margin-bottom: 20px;
}

.gallery {
  background-image: url("@/static/imgs/guestbook_bg.jpg");
  color: white;
  height: 100%;
  span {
    font-family: "BMJUA", cursive;
    font-size: 15px;
    margin: 6% 0;
  }
}

.video {
  background-image: url("@/static/imgs/guestbook_bg.jpg");
  height: 100%;
  width: 100%;
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
    vertical-align: middle;
  }

  .map-title {
    font-family: "BMJUA", sans-serif;
    font-size: 30px;
    margin: 30px 0 0 0;
  }

  .map-subtitle {
    padding: 2%;
    font-size: 15px;
  }

  .map-address {
    font-family: "BMJUA", sans-serif;
    font-size: 16px;
    padding-top: 30px;
  }

  .map-address-sub {
    font-family: "BMJUA", sans-serif;
    font-size: 16px;
    padding-bottom: 10px;
  }

  .map-description {
    font-family: "BMJUA", sans-serif;
    font-size: 16px;
    padding: 30px;
  }
}

.panel {
  background-image: url("@/static/imgs/invite_bg_m.jpg");
  color: white;
  .panel-title {
    font-family: "BMJUA", cursive;
    font-size: 17px;
    margin: 18px 0;
  }
}

.for-you-heart {
  font-size: 13px;
  padding-top: 20px;
}

.map-nav {
  width: 100%;

  .nav-tab {
    height: 100%;
    margin: 1% 0 0 0;
    background: white;
    width: 100px;
    display: inline-block;
    border: 1px solid white;
    border-radius: 17px;
  }
}

.thanks {
  text-align: center;
  font-size: 12px;
  padding: 40px;
}
</style>

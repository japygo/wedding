<template>
  <div>
    <div class="panel-content d-flex flex-column align-center justify-center">
      <div>
        <span>๐ ์ ๋์ธก</span>
        <v-btn
          color="#adbcf3"
          elevation="5"
          @click="dialogSr = true"
        >
          ๊ณ์ข๋ฒํธ ๋ณด๊ธฐ
        </v-btn>
      </div>
      <div>
        <span>๐ ์ ๋ถ์ธก</span>
        <v-btn
          color="#f1b9cc"
          elevation="5"
          @click="dialogSb = true"
        >
          ๊ณ์ข๋ฒํธ ๋ณด๊ธฐ
        </v-btn>
      </div>
      <v-dialog v-model="dialogSr" max-width="500">
        <v-card class="broom">
          <v-card-title>๐ ์ ๋์ธก</v-card-title>
          <v-card-text>
            <v-row justify="space-between">
              <span>ํผ์ฃผ [๋ถ] ๊น๋์ฉ</span>
              <span>๋ํ {{ account.srf }}</span>
            </v-row>
            <v-row justify="center">
              <v-btn elevation="5" small color="white" @click="handleCopy(account.srf)">๊ณ์ข๋ฒํธ ๋ณต์ฌ</v-btn>
            </v-row>
            <v-row justify="space-between">
              <span>ํผ์ฃผ [๋ชจ] ์ค์์</span>
              <span>๋ํ {{ account.srm }}</span>
            </v-row>
            <v-row justify="center">
              <v-btn elevation="5" small color="white" @click="handleCopy(account.srm)">๊ณ์ข๋ฒํธ ๋ณต์ฌ</v-btn>
            </v-row>
            <v-row justify="space-between">
              <span>์ ๋ ๊นํ์ง</span>
              <span>์นด์นด์ค๋ฑํฌ {{ account.sr }}</span>
            </v-row>
            <v-row justify="center">
              <v-btn elevation="5" small color="white" @click="handleCopy(account.sr)">๊ณ์ข๋ฒํธ ๋ณต์ฌ</v-btn>
            </v-row>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialogSb" max-width="500">
        <v-card class="bride">
          <v-card-title>๐ ์ ๋ถ์ธก</v-card-title>
          <v-card-text>
            <v-row justify="space-between">
              <span>ํผ์ฃผ [๋ถ] ์ ์ผํ</span>
              <span>๋ํ {{ account.sbf }}</span>
            </v-row>
            <v-row justify="center">
              <v-btn elevation="5" small color="white" @click="handleCopy(account.sbf)">๊ณ์ข๋ฒํธ ๋ณต์ฌ</v-btn>
            </v-row>
            <v-row justify="space-between">
              <span>ํผ์ฃผ [๋ชจ] ์ฅ์๋ฏธ</span>
              <span>๋ํ {{ account.sbm }}</span>
            </v-row>
            <v-row justify="center">
              <v-btn elevation="5" small color="white" @click="handleCopy(account.sbm)">๊ณ์ข๋ฒํธ ๋ณต์ฌ</v-btn>
            </v-row>
            <v-row justify="space-between">
              <span>์ ๋ถ ์ ํํ</span>
              <span>์นด์นด์ค๋ฑํฌ {{ account.sb }}</span>
            </v-row>
            <v-row justify="center">
              <v-btn elevation="5" small color="white" @click="handleCopy(account.sb)">๊ณ์ข๋ฒํธ ๋ณต์ฌ</v-btn>
            </v-row>
          </v-card-text>
        </v-card>
      </v-dialog>
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
      ํด๋ฆฝ๋ณด๋์ ๋ณต์ฌ๋์์ต๋๋ค.
      <template #action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          X
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "WeddingPanel",
  data() {
    return {
      account: {
        sr: '3333-03-4510082',
        srf: '1095-12-008277',
        srm: '302-1037-992-991',
        sb: '3333-15-4277263',
        sbf: '574-02-021445',
        sbm: '351-0071-6566-83'
      },
      dialogSr: false,
      dialogSb: false,
      snackbar: false
    }
  },
  methods: {
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

.panel-content {
  font-family: "BMJUA", sans-serif;
  margin-bottom: 20px;

  span {
    margin-right: 10px;
  }

  button {
    span {
      font-size: 18px;
    }
  }

  div:first-child {
    margin-bottom: 10%;
  }

  div:last-child {
    margin-bottom: 10%;
  }
}

.broom {
  background: #f0f2f5 !important;

  .row {
    margin: 11px 0 0 0;
  }

  .row:nth-child(2n+1) {
    border-top: 1px solid;
    span {
      font-size: 16px;
    }
  }

  .row:nth-child(2n) {
    padding: 10px 0;
  }
}

.bride {
  background: #f7f3f4 !important;

  .row {
    margin: 11px 0 0 0;
  }

  .row:nth-child(2n+1) {
    border-top: 1px solid;
    span {
      font-size: 16px;
    }
  }

  .row:nth-child(2n) {
    padding: 10px 0;
  }
}
</style>

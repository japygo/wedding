<template>
  <div class="panel-content d-flex flex-column align-center justify-center">
    <div>
      <span>신랑측 마음</span>
      <v-btn
        color="blue accent-2"
        elevation="5"
        @click="dialogSr = true"
      >
        계좌번호 보기
      </v-btn>
    </div>
    <div>
      <span>신부측 마음</span>
      <v-btn
        color="pink accent-1"
        elevation="5"
        @click="dialogSb = true"
      >
        계좌번호 보기
      </v-btn>
    </div>
    <v-dialog v-model="dialogSr" max-width="500">
      <v-card>
        <v-card-title>신랑측 계좌번호</v-card-title>
        <v-card-text>
          <v-row justify="space-between">
            <v-col cols="9">
              <span>카카오 {{ account.sr }} 김현진</span>
            </v-col>
            <v-col cols="3">
              <v-btn elevation="5" small color="primary" @click="handleCopy(account.sr)">복사</v-btn>
            </v-col>
          </v-row>
          <v-row justify="space-between">
            <v-col cols="9">
              <span>농협 {{ account.srf }} 김동용</span>
            </v-col>
            <v-col cols="3">
              <v-btn elevation="5" small color="primary" @click="handleCopy(account.srf)">복사</v-btn>
            </v-col>
          </v-row>
          <v-row justify="space-between">
            <v-col cols="9">
              <span>농협 {{ account.srm }} 오시영</span>
            </v-col>
            <v-col cols="3">
              <v-btn elevation="5" small color="primary" @click="handleCopy(account.srm)">복사</v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogSb" max-width="500">
      <v-card>
        <v-card-title>신부측 계좌번호</v-card-title>
        <v-card-text>
          <v-row justify="space-between">
            <v-col cols="9">
              <span>카카오 {{ account.sb }} 정혜화</span>
            </v-col>
            <v-col cols="3">
              <v-btn elevation="5" small color="primary" @click="handleCopy(account.sb)">복사</v-btn>
            </v-col>
          </v-row>
          <v-row justify="space-between">
            <v-col cols="9">
              <span>농협 {{ account.sbf }} 정일현</span>
            </v-col>
            <v-col cols="3">
              <v-btn elevation="5" small color="primary" @click="handleCopy(account.sbf)">복사</v-btn>
            </v-col>
          </v-row>
          <v-row justify="space-between">
            <v-col cols="9">
              <span>농협 {{ account.sbm }} 장영미</span>
            </v-col>
            <v-col cols="3">
              <v-btn elevation="5" small color="primary" @click="handleCopy(account.sbm)">복사</v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
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
.panel-content {
  font-family: "Stylish", sans-serif;
  margin-bottom: 20px;
  span {
    margin-right: 10px;
  }
  div:first-child {
    margin-bottom: 20px;
  }
}
</style>

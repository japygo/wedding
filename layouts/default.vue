<template>
  <v-app>
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer padless>
      <v-col class="text-right footer" cols="12">
        © 2023 HyunJin, HyeHwa. All rights reserved.
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style lang="scss">
.footer {
  font-family: "Great Vibes", cursive;
  font-size: 14px;
}
</style>

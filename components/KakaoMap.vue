<template>
  <div id="daumRoughmapContainer1677310237057" class="root_daum_roughmap root_daum_roughmap_landing"></div>
</template>

<script>
export default {
  name: "KakaoMap",
  mounted() {
    // eslint-disable-next-line no-undef
    new daum.roughmap.Lander({
      "timestamp" : "1677310237057",
      "key" : "2duvb",
      "mapWidth" : `${window.innerWidth - 20}`,
      "mapHeight" : "360"
    }).render();
  },
}
</script>

<style scoped>

</style>

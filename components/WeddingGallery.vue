<template>
  <v-carousel
    hide-delimiters
    height="50%"
  >
    <v-carousel-item
      v-for="(src, i) in images"
      :key="i"
      :src="src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "WeddingGallery",
  data() {
    return {
      images: [
        '/imgs/2.jpg',
        '/imgs/5.jpg',
        '/imgs/3.jpg',
        '/imgs/4.jpg',
        '/imgs/6.jpg',
        '/imgs/7.jpg',
        '/imgs/1.jpg',
      ],
    }
  }
}
</script>

<style scoped>

</style>

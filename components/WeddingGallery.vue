<template>
  <v-carousel
    hide-delimiters
    height="500"
  >
    <v-carousel-item
      v-for="(src, i) in images"
      :key="i"
      eager
    >
      <v-img :src="src" eager />
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "WeddingGallery",
  data() {
    return {
      images: [
        require('@/static/imgs/5.jpg'),
        require('@/static/imgs/2.jpg'),
        require('@/static/imgs/3.jpg'),
        require('@/static/imgs/4.jpg'),
        require('@/static/imgs/6.jpg'),
        require('@/static/imgs/7.jpg'),
        require('@/static/imgs/1.jpg'),
      ],
    }
  }
}
</script>

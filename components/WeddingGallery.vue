<template>
  <v-carousel
    hide-delimiters
    height="100%"
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
        // require('@/static/imgs/5.jpg'),
        // require('@/static/imgs/3.jpg'),
        // require('@/static/imgs/4.jpg'),
        // require('@/static/imgs/7.jpg'),
        // require('@/static/imgs/2.jpg'),
        // require('@/static/imgs/1.jpg'),
        require('@/static/imgs/11.jpg'),
        require('@/static/imgs/15.jpg'),
        require('@/static/imgs/16.jpg'),
        require('@/static/imgs/17.jpg'),
        require('@/static/imgs/8.jpg'),
        require('@/static/imgs/9.jpg'),
        require('@/static/imgs/10.jpg'),
        require('@/static/imgs/12.jpg'),
        require('@/static/imgs/13.jpg'),
        require('@/static/imgs/14.jpg'),
      ],
    }
  }
}
</script>

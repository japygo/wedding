<template>
  <div>
    <v-row>
      <v-col v-for="(image, index) in images" :key="index" cols="6" md="4" lg="3">
        <v-card @click="openDialog(index)">
          <v-img :src="image.src" width="200" height="150" contain />
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" max-width="90%">
      <v-card>
        <v-card-title>
          <v-icon small>mdi-close</v-icon>
        </v-card-title>
        <v-card-text>
          <v-img :src="images[currentImage].src" contain />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "WeddingGallery",
  data() {
    return {
      images: [
        { src: require('@/static/imgs/2.jpg') },
        { src: require('@/static/imgs/5.jpg') },
        { src: require('@/static/imgs/3.jpg') },
        { src: require('@/static/imgs/4.jpg') },
        { src: require('@/static/imgs/6.jpg') },
        { src: require('@/static/imgs/7.jpg') },
        { src: require('@/static/imgs/1.jpg') }
      ],
      dialog: false,
      currentImage: 0
    }
  },
  methods: {
    openDialog(index) {
      this.currentImage = index;
      this.dialog = true;
    },
  }
}
</script>

<style scoped>

</style>

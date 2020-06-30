<template>
  <div>
    <v-carousel height="500" hide-delimiters show-arrows-on-hover cycle interval="3000">
      <v-carousel-item v-for="(slide, i) in bannercarousel" :key="i" :src="slide.image">
        <v-overlay :opacity="opacity" :absolute="absolute"></v-overlay>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "BannerCarousel",
  data() {
    return {
      bannercarousel: [
        {
          id: 1,
          title: "From our own Independent Pharmacy",
          image: "/images/BannerCarousel/1.jpg"
        },
        {
          id: 2,
          title: "From our own Independent Pharmacy",
          image: "/images/BannerCarousel/2.jpg"
        },
        {
          id: 3,
          title: "From our own Independent Pharmacy",
          image: "/images/BannerCarousel/1.jpg"
        },
        {
          id: 4,
          title: "From our own Independent Pharmacy",
          image: "/images/BannerCarousel/2.jpg"
        }
      ],
      absolute: true,
      opacity: 0.1
    };
  }
};
</script>
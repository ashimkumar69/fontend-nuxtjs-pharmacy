<template>
  <div>
    <BannerCarousel></BannerCarousel>
    <AboutOrder></AboutOrder>
  </div>
</template>

<script>
import BannerCarousel from "@/components/fontend/BannerCarousel";
import AboutOrder from "@/components/fontend/AboutOrder";

export default {
  name: "Home",
  components: {
    BannerCarousel,
    AboutOrder
  }
};
</script>

<style>
</style>
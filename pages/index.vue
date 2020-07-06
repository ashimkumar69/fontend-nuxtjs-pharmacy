<template>
  <div>
    <BannerCarousel></BannerCarousel>
    <AboutOrder></AboutOrder>
    <MedicineSlider></MedicineSlider>
  </div>
</template>

<script>
import BannerCarousel from "@/components/fontend/BannerCarousel";
import AboutOrder from "@/components/fontend/AboutOrder";
import MedicineSlider from "@/components/fontend/MedicineSlider";

export default {
  name: "Home",
  auth: false,
  components: {
    BannerCarousel,
    AboutOrder,
    MedicineSlider
  }
};
</script>

<style>
</style>
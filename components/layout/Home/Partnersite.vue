<template>
  <div class="w-full py-10 flex flex-col items-center justify-center">
    <div>
      <h1 class="text-[#316fb7] text-4xl font-semibold">Our Partners</h1>
    </div>

    <div class="grid xl:grid-cols-4 sm:grid-cols-2 gap-[100px]">
      <img
        v-for="(image, index) in partner"
        :key="index"
        :src="image"
        alt="Partner logo"
        class=" w-[170px] xl:w-full h-auto"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partner: [
        "/images/home/partners/image7.webp",
        "/images/home/partners/image1.webp",
        "/images/home/partners/image2.webp",
        "/images/home/partners/image3.webp",
        "/images/home/partners/image4.webp",
        "/images/home/partners/image5.webp",
        "/images/home/partners/image6.webp",
        "/images/home/partners/image8.webp",
      ],
    };
  },
};
</script>

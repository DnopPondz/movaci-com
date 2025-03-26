import Testimonial3 from '~/components/layout/testimonial3.vue';
<template>
  <div
    class="relative min-h-screen flex flex-col items-center justify-center bg-[#9bbbe1] bg-opacity-90 rounded-t-xl "
    style="background-image: url('/vector.png'); background-size: cover; background-position: center;"
  >
    <div class="flex flex-col  justify-between items-center bg-[#ffffff] bg-opacity-90 shadow-lg rounded-lg p-6 max-w-lg w-[220px] h-[300px] text-center">
      <img src="/public/img/testimonail/business/comment-1.png" alt="Company Logo" class="mx-auto w-full h-full rounded-full object-cover" />
      <div>
        <h1 class="text-2xl font-bold text-gray-800 mt-4">Company</h1>
      <p>Lorem ipsum </p>
      <h2>Thailand</h2>
      </div>
      
    </div>

    <div class="w-[450px] flex flex-col items-center justify-center mt-10 text-white">
    <!-- ⭐ แสดงดาว -->
    <div class="flex text-4xl  space-x-1 text-yellow-400 ">
      <span v-for="index in startCount" :key="index">★</span>
    </div>

    <h1 class="text-3xl font-semibold my-10">Testimonial</h1>
    <p class="text-lg text-center">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda deserunt
      sapiente labore at unde saepe quaerat totam? Modi voluptates quibusdam quod
      aliquid soluta reiciendis, in veritatis dolor omnis qui eligendi ut incidunt
      blanditiis voluptatum quam provident libero culpa hic eum natus similique.
      Totam expedita asperiores voluptas dolore minima facere reprehenderit.
    </p>
  </div>
  </div>
</template>

<script setup>
const startCount = 5;
</script>
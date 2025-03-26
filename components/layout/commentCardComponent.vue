<template>
  <div class="bg-white shadow-lg rounded-lg p-4 flex items-start space-x-4">
    <!-- Avatar -->
    <img
      class="w-12 h-12 rounded-full object-cover"
      :src="`${dataTestimonial?.asset_path}${dataTestimonial?.comments[commentIndex]?.comment_img}.png`"
      alt="comment avatar"
    />

    <!-- รายละเอียดคอมเมนต์ -->
    <div class="flex-1">
      <!-- ดาว Rating -->
      <div class="flex space-x-1 text-yellow-500">
        <span v-for="index in startCount" :key="index">★</span>
      </div>

      <!-- ข้อความหลัก -->
      <h5 class="text-gray-900 font-semibold mt-2">
        {{ dataTestimonial?.comments[commentIndex]?.comment_detail }}
      </h5>

      <!-- คำบรรยายเสริม -->
      <p class="text-gray-700 mt-1">
        {{ dataTestimonial.comments[commentIndex]?.comment_sub_1 }}
        <span class="font-medium">{{ dataTestimonial?.comments[commentIndex]?.comment_sub_2 }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  dataTestimonial: Object,
  startCount: Number,
  commentIndex: Number,
});
</script>

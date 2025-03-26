<template>
    <div class="bg-[#316fb7]  p-10 text-white relative">
      <img src="/public/img/home/svg/circle-right.svg" alt="" class=" w-28 absolute right-0 top-0">
      <img src="/public/img/home/svg/circle-left.svg" alt="" class=" w-28 absolute left-0 bottom-0" >
      <div class="max-w-5xl mx-auto text-left mt-5">
        <h3 class="text-2xl font- mt-5">― Individualized Solutions</h3>
        <h2 class="text-3xl font-bold mt-5 text-center">
          Market segment <span class="text-gray-300">based experience</span>
        </h2>
        <p class="text-lg mt-7 text-gray-200">
          Understanding your specific needs is our primary concern. We leverage our
          market-based experience to design solutions that alleviate your technology pain
          points. Highly trained and certified technicians execute the custom design package,
          and friendly support personnel are available to you at any time.
        </p>
  
        <div class="grid md:grid-cols-3 gap-6 mt-10  relative ">
          <div v-for="(item, index) in cards" :key="index" class="bg-white text-black p-6 rounded-lg shadow-md">
            <img :src="item.image" :alt="item.title" class="w-full h-40 object-cover rounded-md mb-4">
            <img :src="item.image2" :alt="item.title" class="w-12 absolute bottom-[200px] ml-5 ">
            <h3 class="text-xl font-bold text-blue-700">{{ item.title }}</h3>
            <p class="mt-2 text-gray-600">{{ item.description }}</p>
            <a :href="item.link" class="text-blue-700 font-semibold mt-4 inline-block">→ LEARN HOW</a>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script setup>
import main1 from '@/public/images/home/content-3-3-1.webp';
import main2 from '@/public/images/home/content-3-1-1.webp';
import main3 from '@/public/images/home/content-3-2-1.webp';

import pic1 from '@/public/images/home/content-3-1-2.png'
import pic2 from '@/public/images/home/content-3-2-2.png'
import pic3 from '@/public/images/home/content-3-3-2.png'
  
const cards = [
  {
    image: main3,
    image2: pic3,
    title: "Non-Profits",
    description: "Fulfilling your mission is our passion. Movaci can customize solutions to help you realize your calling.",
    link: "/nonprofit"
  },
  {
    image: main2,
    image2: pic2,
    title: "Business",
    description: "No one knows your business better than you. Movaci can customize solutions to help you reach your goals.",
    link: "/business"
  },
  {
    image: main1,
    image2: pic1,
    title: "Enterprise",
    description: "Resiliency and scalability are key to sustaining an enterprise. Movaci can customize solutions to grow with your needs.",
    link: "/enterprise"
  }
];
</script>

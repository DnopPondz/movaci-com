<template>
    <div class="flex  justify-start bg-gray-100 mt-[50px] ">
      <div class="flex flex-col md:flex-row bg-white   overflow-hidden">
        <!-- Left Side - Image Section -->
        <div class="relative md:w-1/2 p-6 flex justify-center items-center">
          <div class="relative xl:left-[300px] ">
            <img src="/public/img/home/bg-home-person-tablet.webp" alt="Security Illustration" class="w-80  object-cover ">
            <img src="/public/img/home/bg-home-text.webp" alt="" class="absolute top-5 left- w-[120px]">
          </div>
        </div>
        
        <!-- Right Side - Content Section -->
        <div class="p-8 md:w-1/2 flex flex-col justify-center">
          <h2 class="text-xl xl:text-3xl font-bold text-gray-900">
            STRENGTHENING <span class="text-blue-600">TECHNOLOGY</span>
          </h2>
          <h2 class="text-xl xl:text-3xl font-bold text-gray-900 mt-1">
            SIMPLIFYING <span class="text-blue-600">SECURITY</span>
          </h2>
          <p class="mt-4 xl:pr-[500px] text-blue-600 text-sm xl:text-lg leading-relaxed">
            Technology shapes the world, how we live, and work.
            Unfortunately, there are those that would use our technology against us.
            Movaci helps you strengthen your technology to work harder for you while we simplify security to protect you from threats.
          </p>
          <button class="mt-6 w-[120px] bg-blue-600 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-700 transition">
            Let's Talk
          </button>
        </div>
      </div>
    </div>
  </template>
   
  <script>
  export default {
    name: "SecuritySection",
  };
  </script>
  
  <style scoped>
  /* Add custom styles here if needed */
  </style>
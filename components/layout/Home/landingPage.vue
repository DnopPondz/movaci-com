<template>
  <div class="flex justify-start bg-gray-100">
    <div class="flex flex-row bg-white w-full overflow-hidden">
      <!-- Left Side - Image Section -->
      <div class="w-1/2 py-[2px] flex justify-center items-center">
        <div class="relative xl:left-[200px] w-full max-w-[500px]">
          <img src="/img/home/capture.png" alt="Security Illustration" class="w-full h-auto object-cover">
        </div>
      </div>

      <!-- Right Side - Content Section -->
      <div class="p-4 sm:p-6 md:p-8 w-1/2 flex flex-col justify-center">
        <h2 class="text-lg sm:text-xl md:text-2xl xl:text-3xl font-bold text-gray-900">
          STRENGTHENING <span class="text-blue-600">TECHNOLOGY</span>
        </h2>
        <h2 class="text-lg sm:text-xl md:text-2xl xl:text-3xl font-bold text-gray-900 mt-1">
          SIMPLIFYING <span class="text-blue-600">SECURITY</span>
        </h2>
        <p class="mt-4 text-blue-600 text-xs sm:text-sm md:text-base xl:text-lg leading-relaxed">
          Technology shapes the world, how we live, and work.
          Unfortunately, there are those that would use our technology against us.
          Movaci helps you strengthen your technology to work harder for you while we simplify security to protect you from threats.
        </p>
        <button class="mt-6 w-[100px] sm:w-[120px] bg-blue-600 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-700 transition">
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
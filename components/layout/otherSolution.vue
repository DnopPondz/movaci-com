<template>
  <div class="text-center p-5">
    <div class="my-10 text-center">
      <h1 class="text-3xl font-bold text-[#3071b7]">OTHER SOLUTIONS THAT MAY INTEREST YOU</h1>
    </div>

    <div class="flex justify-center gap-4 xl:gap-[200px]">
      <div class="relative w-64 h-64 cursor-pointer" @click="navigateTo('nonprofits')">
        <img src="/images/home/content-3-3-1.webp" alt="Non-Profits" class="w-full h-full object-cover border border-gray-300 shadow-2xl rounded-xl">
        <div class="absolute inset-0 bg-black opacity-50 text-white flex justify-center items-center text-2xl font-bold shadow-2xl rounded-xl">
          Non-Profits
        </div>
      </div>

      <div class="relative w-64 h-64 cursor-pointer" @click="navigateTo('business')">
        <img src="/images/home/content-3-1-1.webp" alt="Business" class="w-full h-full object-cover border border-gray-300 shadow-2xl rounded-xl">
        <div class="absolute inset-0 bg-black opacity-50 text-white flex justify-center items-center text-2xl font-bold shadow-2xl rounded-xl">
          Business
        </div>
      </div>

      <div class="relative w-64 h-64 cursor-pointer" @click="navigateTo('enterprise')">
        <img src="/images/home/content-3-2-1.webp" alt="Enterprise" class="w-full h-full object-cover border border-gray-300 shadow-2xl rounded-xl">
        <div class="absolute inset-0 bg-black opacity-50 text-white flex justify-center items-center text-2xl font-bold shadow-2xl rounded-xl">
          Enterprise
        </div>
      </div>
    </div>
  </div>
</template>

  
  <script>
  export default {
    name: 'SolutionSection',
    methods: {
      navigateTo(page) {
        // Add logic to navigate to the specific page
        this.$router.push(`/${page}`); // Example using Vue Router
      }
    }
  }
  </script>
  
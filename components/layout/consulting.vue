<template>
    <div class="w-full flex flex-col md:flex-row items-center p-6 bg-[#576fb7] md:gap-6 rounded-b-xl">
      <!-- รูปภาพ -->
      <div class="w-full md:w-1/2 flex justify-center">
        <img 
          src="/public/img/contact/contact-2.jpg" 
          alt="Consulting" 
          class="w-full max-w-md md:max-w-lg h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
      
      <!-- เนื้อหา -->
      <div class="w-full md:w-1/2 flex flex-col items-start max-md:items-center  justify-center text-left p-6">
        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="53"
            height="4"
            viewBox="0 0 60 4"
            fill="none"
          >
            <path
              d="M50.2489 0.347168H2.2489C1.00626 0.347168 -0.00109863 1.08874 -0.00109863 2.00351C-0.00109863 2.91828 1.00626 3.65985 2.2489 3.65985H50.2489C51.4915 3.65985 52.4989 2.91828 52.4989 2.00351C52.4989 1.08874 51.4915 0.347168 50.2489 0.347168Z"
              fill="white"
            />
          </svg>
          <p class="text-2xl md:text-3xl font-bold text-white">Get Free Consulting</p>
        </div>
        <h3 class="text-lg md:text-xl font-semibold text-gray-200 mt-4">
          Take advantage of a 
          <span class="text-blue-400 cursor-pointer underline" @click="openUrl">FREE</span> 
          30-minute consultation.
        </h3>
        <p class="text-white mt-2 text-sm md:text-base max-md:text-center">
          A solutions expert will visit with you about your technology and security 
          to help you find your next step.
        </p>
        <button
          class="bg-white hover:bg-slate-100 text-[#576fb7] py-2 px-6 rounded-full mt-4 text-sm md:text-base"
          @click="openUrl"
        >
          Schedule Now
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  const openUrl = () => {
    window.open("https://hub.movaci.com/free-consultation", "_blank");
  };
  </script>
  
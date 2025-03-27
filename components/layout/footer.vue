<template>
  <footer class="bg-white text-black py-10 max-md:text-center">
    <div class="max-w-screen-xl mx-auto px-6 md:px-10">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Column 1: Logo & Company Info -->
        <div class="border-r border-gray-300 pr-6">
          <img src="/images/footer/logo.png" class="h-12 mb-4 mx-auto md:mx-0" alt="Movaci Logo">
          <h3 class="text-4xl text-[#576fb7] font-semibold">Movaci Co., Ltd.</h3>
          
          <div v-if="!loadLocation" class="mt-4 text-lg">
            <p v-html="addressCompany"></p>
            <p class="mt-2">Call: {{ phoneCompany }}</p>
            <p class="mt-2 text-blue-400 underline cursor-pointer" @click="$router.push('/contact')">
              Email us
            </p>
          </div>

          <div v-else class="flex justify-center mt-4">
            <svg class="w-6 h-6 animate-spin text-black" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V1l3 3-3 3V4a6 6 0 00-6 6H4z"></path>
            </svg>
          </div>

          <a href="https://my.movaci.com/" target="_blank"
            class="inline-block mt-4 px-6 py-3 bg-[#576fb7] rounded-full text-white text-lg font-medium hover:bg-opacity-90">
            my.Movaci
          </a>

          <!-- Social Media -->
          <div class="flex space-x-4 mt-4">
            <a href="https://www.facebook.com/movaci" target="_blank">
              <i class="fab fa-facebook text-xl hover:text-gray-300"></i>
            </a>
            <a href="https://www.youtube.com/@movaci9387" target="_blank">
              <i class="fab fa-youtube text-xl hover:text-gray-300"></i>
            </a>
            <a href="https://www.linkedin.com/company/movaci/" target="_blank">
              <i class="fab fa-linkedin text-xl hover:text-gray-300"></i>
            </a>
          </div>
        </div>

        <!-- Column 2: Our Solutions & About Us -->
        <div>
          <h3 class="text-xl text-[#576fb7] font-semibold">Our Solutions</h3>
          <ul class="space-y-2 ">
            <li v-for="(item, i) in footerList[0].details" :key="i">
              <a :href="item.link" class="text-lg hover:text-gray-500 cursor-pointer">{{ item.content }}</a>
            </li>
          </ul>
          
          <h3 class="text-xl text-[#576fb7] font-semibold mt-6">About Us</h3>
          <ul class="space-y-2">
            <li v-for="(item, i) in footerList[1].details" :key="i">
              <a :href="item.link" class="text-lg hover:text-gray-500 cursor-pointer">{{ item.content }}</a>
            </li>
          </ul>
        </div>

        <!-- Column 3: Solutions -->
        <div>
          <h3 class="text-xl text-[#576fb7] font-semibold">Solutions</h3>
          <ul class="space-y-2">
            <li v-for="(item, i) in footerList[2].details" :key="i">
              <a :href="item.link" class="text-lg hover:text-gray-500 cursor-pointer">{{ item.content }}</a>
            </li>
          </ul>
        </div>

        <!-- Column 4: Policies -->
        <div>
          <h3 class="text-xl text-[#576fb7] font-semibold">Policies</h3>
          <ul class="space-y-2">
            <li v-for="(item, i) in footerList[3].details" :key="i">
              <a :href="item.external_url || item.link"
                :target="item.external_url ? '_blank' : '_self'"
                class="text-lg hover:text-gray-500 cursor-pointer">
                {{ item.content }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-8 text-center text-gray-400 text-sm border-t border-gray-400 pt-4">
        Copyright © {{ currentYear }} Movaci. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from "vue";

const currentYear = ref(new Date().getFullYear());
const loadLocation = ref(true);
const addressCompany = ref("");
const phoneCompany = ref("");

const footerList = ref([
  {
    title: "Our Solutions",
    details: [
      { link: "/nonprofit", content: "Non-Profits" },
      { link: "/business", content: "Business" },
      { link: "/enterprise", content: "Enterprise" },
    ],
  },
  {
    title: "About Us",
    details: [
      { link: "/about", content: "About our Company" },
      { link: "/career", content: "Join our Team" },
      { external_url: "https://hub.movaci.com/blog", content: "Explore our Blog" },
      { link: "/contact", content: "Contact Us" },
    ],
  },
  {
    title: "Solutions",
    details : [
      { link: "/", content: "Secure Web Hosting" },
      { link: "/", content: "Cloud Server" },
      { link: "/", content: "Microsoft 365" },
      { link: "/", content: "Managed Online Backup" },
      { link: "/", content: "MailGuard" },
      { link: "/", content: "Managed Services" },
      { link: "/", content: "Security Auditing and Testing" },
      { link: "/", content: "IT Consulting" },
      { link: "/", content: "Training Services" },
      { link: "/", content: "Hardware & Software Procurement Services" },
      { link: "/", content: "Secure Email Services" },
      { link: "/", content: "Movaci Next Cloud" },
      { link: "/", content: "Authorized Pearson VUE Testing Center" },
    ]
  },
  {
    title: "Policies",
    details: [
      { external_url: "https://my.movaci.com/privacy/", content: "Privacy Policy" },
      { external_url: "https://my.movaci.com/tos/", content: "Terms of Service" },
      { external_url: "https://my.movaci.com/aup/", content: "Acceptable Use Policy" },
    ],
  },
]);

onMounted(() => {
  addressCompany.value = `420/11-13 Changklan Rd.<br />T. Changklan, A. Muang<br />Chiang Mai 50100, Thailand`;
  phoneCompany.value = `+66 (053) 920 555`;
  loadLocation.value = false;
});
</script>

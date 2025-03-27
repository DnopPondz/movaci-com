<template>
  <nav
    class="xl:bg-white md:bg-white bg-[#576fb7] fixed w-full z-20 top-0 start-0 border-b border-gray-200 shadow-2xl"
  >
    <div
      class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-6 md:px-10 py-4"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center space-x-4">
        <img
          :src="isMobile ? '/img/logo/logo-white.svg' : '/img/logo/logo-blue.svg'"
          class="h-10"
          alt="Logo"
        />
      </NuxtLink>

      <!-- Right Section (เฉพาะจอใหญ่) -->
      <div class="hidden lg:flex  md:order-2 space-x-4 z-20">
        <NuxtLink to="https://my.movaci.com/" target="_black" class="flex items-center space-x-4">
          <button
  type="button"
  class="text-white bg-[#576fb7] hover:bg-[#879ee4] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-base px-6 py-3 transform transition-all duration-150 ease-in-out shadow-lg hover:shadow-2xl active:transform active:scale-95 active:shadow-none"
>
  my.Movaci
</button>

        </NuxtLink>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMenu"
        type="button"
        class="inline-flex  items-center p-3 w-12 h-12 justify-center text-white rounded-lg md:hidden hover:bg-[#5f75b8] focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <!-- Desktop Navigation -->
      <div
        :class="isOpen ? 'block' : 'hidden'"
        class="w-full md:flex md:w-auto md:order-1 "
      >
        <ul
          class="flex bg-white flex-col p-4 md:p-0 mt-4 text-xl font-medium md:space-x-2 md:flex-row md:mt-0 md:border-0 rounded-lg  "
        >
          <li>
            <NuxtLink
              to="/business"
              @click="closeDropdown"
              class="block py-3 px-4 text-[#576fb7] hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
            >
              Business
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/enterprise"
              @click="closeDropdown"
              class="block py-3 px-4 text-[#576fb7] hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
            >
              Enterprise
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/nonprofit"
              @click="closeDropdown"
              class="block py-3 px-4 text-[#576fb7] hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
            >
              Non-Profit
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/solution"
              @click="closeDropdown"
              class="block py-3 px-4 text-[#576fb7] hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
            >
              Solution
            </NuxtLink>
          </li>

          <!-- About Us with Dropdown -->
          <li class="relative">
            <button
              @click.prevent="toggleDropdown"
              class="block py-3 px-4 text-[#576fb7] hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 focus:outline-none"
            >
              About Us
            </button>

            <!-- Dropdown Menu -->
            <transition name="dropdown">
              <div
                v-if="isDropdownOpen"
                class="absolute left-0 mt-2 w-56 bg-white border border-gray-200 shadow-lg rounded-lg"
              >
                <ul class="py-2">
                  <li>
                    <NuxtLink
                      to="/about"
                      @click="closeDropdown"
                      class="block py-3 px-4 text-[#576fb7]"
                    >
                      About Our Company
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="https://hub.movaci.com/blog"
                      target="_blank"
                      @click="closeDropdown"
                      class="block py-3 px-4 text-[#576fb7]"
                    >
                      Explore Our Blog
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/career"
                      @click="closeDropdown"
                      class="block py-3 px-4 text-[#576fb7]"
                    >
                      Join Our Team
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/contact"
                      @click="closeDropdown"
                      class="block py-3 px-4 text-[#576fb7]"
                    >
                      Contact Us
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </transition>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

// State เปิด-ปิดเมนูหลัก
const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

// State ตรวจจับขนาดหน้าจอ (เปลี่ยนโลโก้)
const isMobile = ref(false);
const updateScreenSize = () => {
  isMobile.value = window.innerWidth < 768;
};

// State เปิด-ปิด Dropdown ของ "About Us"
const isDropdownOpen = ref(false);
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

// ปิด Dropdown เมื่อเลือกเมนู
const closeDropdown = () => {
  isDropdownOpen.value = false;
  if (isMobile.value) {
    isOpen.value = false; // ปิดเมนูมือถือเมื่อเลือกเมนู
  }
};

// ตรวจจับการเปลี่ยนขนาดหน้าจอ
onMounted(() => {
  updateScreenSize();
  window.addEventListener("resize", updateScreenSize);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateScreenSize);
});
</script>

<style>
/* Dropdown & Mobile Menu Animation */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
.dropdown-enter-to,
.dropdown-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>

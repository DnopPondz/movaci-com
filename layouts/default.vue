<template>
  <v-layout class="flex flex-col min-h-screen">
    <!-- Navbar -->
    <Navbar />

    <!-- Main Content -->
    <v-main class="flex-1 p-6 mt-[64px]">
      <NuxtPage/>
    </v-main>

    <!-- Consulting -->
     
  
     <!-- Footer -->
     <Footer />
  </v-layout>
</template>

<script setup>
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '~/components/layout/footer.vue';
import Consulting from '~/components/layout/consulting.vue';
import Testimonial3 from '~/components/layout/testimonial3.vue';
import seeallsolution from '~/components/layout/seeallsolution.vue';
import productFeattureCompoent from '~/components/layout/productFeattureCompoent.vue';
</script>

<template>
  <div
    class="relative bg-cover bg-center py-16 px-6 flex flex-col xl:flex-row xl:justify-between items-center"
    style="
      background: linear-gradient(#0d254aa2, #0d254aa2),
        url('/img/home/bg-product-service.webp');
      background-size: cover;
      background-position: center;
    "
  >
    <!-- Left Content -->
    <div
      class="max-w-5xl xl:ml-[100px]  text-white text-left flex flex-col justify-center w-full xl:w-1/2"
    >
      <h2 class="text-xl font-semibold uppercase text-gray-300">― Solutions</h2>
      <h1 class="text-4xl font-bold leading-tight">
        <span class="text-[#9bbbe1]">How can</span> we help
      </h1>
      <h1 class="text-4xl font-bold leading-tight text-[#9bbbe1]">
        your business?
      </h1>
      <p class="mt-4 text-lg text-gray-200 max-w-2xl">
        The success of your operations often depends on the quality and security
        of the technology products you employ. However, state-of-the-art
        technology is only as good as your ability to execute it. Movaci staff
        have the experience and expertise to execute all the products and
        services in our extensive list.
      </p>
      <a href="/solution">
        <button
          class="w-[160px] mt-6 bg-[#316fb7] text-white font-semibold py-3 px-6 rounded-full shadow-[0_6px_0_#265a94,0_10px_15px_rgba(0,0,0,0.2)] hover:bg-[#477cb8] hover:translate-y-[2px] hover:shadow-[0_4px_0_#265a94,0_6px_10px_rgba(0,0,0,0.2)] active:translate-y-[6px] active:shadow-[0_0px_0_#265a94,0_3px_5px_rgba(0,0,0,0.2)] transition-all duration-200"
        >
          EXPLORE NOW
        </button>
      </a>
    </div>

    <!-- Swiper Carousel (Right) -->
    <div class="relative mt-12 xl:mr-[100px] max-w-full mx-auto flex justify-center xl:w-1/2">
      <swiper
        :modules="modules"
        :slides-per-view="'auto'"
        :space-between="10"
        :centeredSlides="true"
        :breakpoints="{
          640: { slidesPerView: 1.5, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }"
        :pagination="{ clickable: true }"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        class="swiper-container cursor-grab active:cursor-grabbing"
      >
        <swiper-slide
          v-for="(service, index) in services"
          :key="index"
          class="h-full flex max-w-xs sm:max-w-sm"
        >
          <div
            class="bg-white/30 backdrop-blur-md rounded-lg shadow-lg p-6 w-80 text-center mx-auto border border-white/40 h-full flex flex-col justify-between"
          >
            <img
              :src="service.image"
              class="w-full h-40 object-cover rounded-lg shadow-xl mb-4"
            />
            <div class="flex-grow">
              <h3 class="text-xl font-bold text-gray-800">
                {{ service.title }}
              </h3>
              <p class="text-gray-600 mt-2">
                {{ service.description }}
              </p>
            </div>
            <a href="#" class="mt-4 inline-block text-blue-600 font-semibold">
              → READ MORE
            </a>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default {
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      modules: [Navigation, Pagination, Autoplay],
      services: [
        {
          image: "/img/products_services/product&services/thumbnail.webp",
          title: "Secure Web Hosting",
          description:
            "Secure your web hosting with our reliable data centers.",
        },
        {
          image: "/img/products_services/product&services/cloud-servers/thumbnail.webp",
          title: "Cloud Servers",
          description:
            "Secure virtual servers that are private and that have flexible OS options.",
        },
        {
          image: "/img/products_services/product&services/microsoft365/thumbnail.webp",
          title: "Microsoft 365",
          description:
            "Movaci provides custom Microsoft solutions in the following areas.",
        },
        {
          image: "/img/products_services/product&services/managed-online-backup/thumbnail.webp",
          title: "Managed Online Backup",
          description:
            "Guarantee your last line of defense against a data breach with Movaci’s help.",
        },
        {
          image: "/img/products_services/product&services/mail-guard/thumbnail.webp",
          title: "MailGuard",
          description:
            "Avoid any email threats with our powerful security solution.",
        },
        {
          image: "/img/products_services/product&services/managed-services/thumbnail.webp",
          title: "Managed Services",
          description:
            "Let Movaci help your business grow through our industry-leading managed IT support services.",
        },
        {
          image: "/img/products_services/product&services/security-auditing-and-testing/thumbnail.webp",
          title: "Security Auditing and Testing",
          description:
            "Our security services are designed to meet the needs of small to mid-sized businesses and organizations.",
        },
        {
          image: "/img/products_services/product&services/it-consulting/thumbnail.webp",
          title: "IT Consulting",
          description:
            "Professional and custom-tailored IT consultation services.",
        },
        {
          image: "/img/products_services/product&services/training-services/thumbnail.webp",
          title: "Training Services",
          description:
            "Push your business to the next level with skills and certifications Movaci provided.",
        },
        {
          image: "/img/products_services/product&services/internet-services-summary/thumbnail.webp",
          title: "Internet Services",
          description:
            "Business internet designed for reliability and tailored for your connectivity needs.",
        },
        {
          image: "/img/products_services/product&services/hardware&software-procurement-services/thumbnail.webp",
          title: "Hardware & Software Procurement Services",
          description: "Top-tier products from industry leading brands.",
        },
        {
          image: "/img/products_services/product&services/secure-email-services/thumbnail.webp",
          title: "Secure Email Services",
          description:
            "Ensure the confidentiality, integrity, and availability of your email communications.",
        },
        {
          image: "/img/products_services/product&services/next-cloud/thumbnail.webp",
          title: "Movaci Next Cloud",
          description:
            "Robust, secure, and scalable private cloud solution to manage and share data seamlessly.",
        },
        {
          image: "/img/products_services/product&services/authorized-pearson-vue-testing-center/thumbnail.webp",
          title: "Authorized Pearson VUE Testing Center",
          description:
            "State-of-the-art, air-conditioned testing center in Chiang Mai.",
        },
      ],
    };
  },
};
</script>

<style>
/* ปรับแต่ง Swiper ให้เหมือนต้นฉบับ */
.swiper-container {
  padding-bottom: 30px;
}
</style>

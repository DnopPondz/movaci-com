<template>
    <div>

  <div class="bg-[#e6eef8] p-4 md:p-8">
    <!-- Hero Image -->
    <div class="w-full">
      <img
        src="/img/products_services/bg-product-service.png"
        class="w-full rounded-xl shadow-xl object-cover"
        alt="Product Service"
      />
    </div>

    <!-- Title & Description -->
    <div class="text-center xl:text-left mt-6">
      <h1 class="text-2xl xl:text-4xl text-[#3071b7] font-bold">
        More Solution
      </h1>
      <p class="text-gray-600 xl:text-xl">
        Let Movaci help your business grow through our industry-leading managed
        IT support services.
      </p>
    </div>

    <!-- Card Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="relative rounded-xl overflow-hidden group shadow-lg"
      >
        <img
          :src="service.img"
          alt="Service Image"
          class="w-full h-64 object-cover group-hover:brightness-50 transition duration-300"
        />

        <!-- Title (Always Visible) -->
        <div
          class="absolute inset-0 flex items-center justify-center bg-black/40"
        >
          <h2 class="text-white text-xl font-semibold text-center">
            {{ service.title }}
          </h2>
        </div>

        <!-- Overlay Detail & Button (Hidden Until Hover) -->
        <div
          class="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/60 p-4"
        >
          <h2 class="text-white text-xl font-semibold">{{ service.title }}</h2>
          <p class="text-white mt-2 max-w-xs">{{ service.detail }}</p>
          <NuxtLink
            :to="`/solution/${service.slug}`"
            class="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Read More
          </NuxtLink>
        </div>
      </div>
    </div>


  </div>
  <Consulting />    
</div>

  
</template>

<script>
import Consulting from "~/components/layout/consulting.vue"


export default {
    components: {
    Consulting, // อย่าลืมลงทะเบียนที่นี่
  },
  data() {
    return {
      services: [
        {
          img: "/img/products_services/product&services/thumbnail.webp",
          title: "Secure Web Hosting",
          detail: "Secure your web hosting with our reliable data centers.",
          slug: "secure-web-hosting",
        },
        {
          img: "/img/products_services/product&services/cloud-servers/thumbnail.webp",
          title: "Cloud Servers",
          detail:
            "Secure virtual servers that are private and that have flexible OS options.",
          slug: "cloud-servers",
        },
        {
          img: "/img/products_services/product&services/microsoft365/thumbnail.webp",
          title: "Microsoft 365",
          detail:
            "Movaci provides custom Microsoft solutions in the following areas",
          slug: "microsoft-365",
        },
        {
          img: "/img/products_services/product&services/managed-online-backup/thumbnail.jpg",
          title: "Managed Online Backup",
          detail:
            "Guarantee your last line of defense against a data breach with Movaci’s help.",
          slug: "managed-online-backup",
        },
        {
          img: "/img/products_services/product&services/mail-guard/thumbnail.jpg",
          title: "MailGuard",
          detail:
            "Avoid any email threats with our powerful security solution.",
          slug: "mail-guard",
        },
        {
          img: "/img/products_services/product&services/managed-services/thumbnail.jpg",
          title: "Managed Services",
          detail:
            "Let Movaci help your business grow through our industry-leading managed IT support services.",
          slug: "managed-services",
        },
        {
          img: "/img/products_services/product&services/security-auditing-and-testing/thumbnail.jpg",
          title: "Security Auditing and Testing",
          detail:
            "Our security services are designed to meet the needs of small to mid-sized businesses and organizations.",
          slug: "security-auditing-and-testing",
        },
        {
          img: "/img/products_services/product&services/it-consulting/thumbnail.jpg",
          title: "IT Consulting",
          detail: "Professional and custom-tailored IT consultation services.",
          slug: "it-consulting",
        },
        {
          img: "/img/products_services/product&services/training-services/thumbnail.jpg",
          title: "Training Services",
          detail:
            "Push your business to the next level with skills and certifications Movaci provided.",
          slug: "training-services",
        },
        {
          img: "/img/products_services/product&services/internet-services-summary/thumbnail.webp",
          title: "Internet Services",
          detail:
            "Business internet designed for reliability and tailored for your connectivity needs.",
          slug: "internet-services",
        },
        {
          img: "/img/products_services/product&services/hardware&software-procurement-services/thumbnail.webp",
          title: "Hardware & Software Procurement Services",
          detail: "Top-tier products from industry leading brands.",
          slug: "hardware-software-procurement-services",
        },
        {
          img: "/img/products_services/product&services/secure-email-services/thumbnail.webp",
          title: "Secure Email Services",
          detail:
            "Ensure the confidentiality, integrity, and availability of your email communications.",
          slug: "secure-email-services",
        },
        {
          img: "/img/products_services/product&services/next-cloud/thumbnail.webp",
          title: "Movaci Next Cloud",
          detail:
            "Robust, secure, and scalable private cloud solution to manage and share data seamlessly.",
          slug: "next-cloud",
        },
        {
          img: "/img/products_services/product&services/authorized-pearson-vue-testing-center/thumbnail.webp",
          title: "Authorized Pearson VUE Testing Center",
          detail:
            "State-of-the-art, air-conditioned testing center in Chiang Mai.",
          slug: "authorized-pearson-vue-testing-center",
        },
      ],
    };
  },
};
</script>

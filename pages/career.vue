<script></script>

<template>
  <div class="w-full p-4 md:p-8">
    <div class="">
      <div class="">
        <img
          src="/public/img/career/bg-career.png"
          class="w-full rounded-xl shadow-xl"
        />
      </div>

      <div class="mt-5 container mx-auto px-4">
        <div class="flex flex-col gap-5 mb-10">
          <h1 class="max-sm:text-4xl text-5xl font-bold">
            Career Opportunities
          </h1>
          <h2 class="max-sm:text-sm text-gray-700">
            Join our team and make a difference in the world!
          </h2>
        </div>

        <div>
          <h2 class="max-sm:text-xl border-b-2 border-black pb-2">
            Open Positions
          </h2>

          <div class="flex flex-col gap-2 pt-3 border-b pb-2">
            <h3 class="max-sm:text-sm font-semibold">Human Resources</h3>
            <div class="flex flex-col md:flex-row justify-between pl-5">
              <NuxtLink
                to="https://movaci.bamboohr.com/careers/58"
                class="text-blue-600 font-semibold hover:underline"
              >
                Human Resources Officer
              </NuxtLink>
              <span class="max-sm:text-sm text-gray-600"
                >Mueang Chiang Mai, Chiangmai</span
              >
            </div>
          </div>

          <div class="flex flex-col gap-2 pt-3 border-b pb-2">
            <h3 class="max-sm:text-sm font-semibold">System Administration</h3>
            <div class="flex flex-col md:flex-row justify-between pl-5">
              <NuxtLink
                to="https://movaci.bamboohr.com/careers/26"
                class="text-blue-600 font-semibold hover:underline"
              >
                System Administrator
              </NuxtLink>
              <span class="max-sm:text-sm text-gray-600"
                >Mueang Chiang Mai, Chiangmai</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Map section -->
    <div class="bg-[#e7f0fc] py-5 mt-10">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Google Map -->
        <div class="w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            class="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7555.234693658724!2d98.996263!3d18.766887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a7cfa15f9b9%3A0xb1345eaf82a358d8!2sMovaci!5e0!3m2!1sth!2sth!4v1710000000000"
            allowfullscreen
            loading="lazy"
          ></iframe>
        </div>

        <!-- Contact Info -->
        <div class="p-6 flex flex-col justify-center">
          <p class="mb-6 text-[#467ebf]">
            Explore Open Opportunities Utilize your skills and achieve your
            career goals with Movaci. Feel free to get in touch with us:
          </p>

          <div class="mb-4 flex flex-row items-end gap-1">
            <p class="text-lg font-semibold text-[#316fb7]">Email :</p>
            <p class="text-[#467ebf]">hr@movaci.com</p>
          </div>

          <div class="mb-4 flex flex-row items-end gap-1">
            <p class="text-lg font-semibold text-[#316fb7]">Phone :</p>
            <p class="text-[#467ebf]">+66 (053) 920 555</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Section Detail -->
    <div
      class="w-full h-auto py-16 bg-cover bg-left md:bg-[length:50%_100%] bg-no-repeat"
      style="background-image: url('/img/career/bg-career-work.png')"
    >
      <div class="container mx-auto px-6 lg:px-16">
        <!-- Section 1 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <!-- Content -->
          <div class="text-white">
            <h2 class="text-xl md:text-2xl font-bold mb-6">
              Working with Movaci you will get
            </h2>
            <div class="space-y-4">
              <p class="flex items-start text-sm md:text-base">
                <span
                  class="w-5 h-5 flex items-center justify-center aspect-square text-[#316FB7] font-black bg-white rounded-full"
                >
                  ✓
                </span>

                <span class="ml-2"
                  >Provident Fund: The company contributes up to 3% of your
                  salary.</span
                >
              </p>
              <p class="flex items-start text-sm md:text-base">
                <span
                  class="w-5 h-5 flex items-center justify-center aspect-square text-[#316FB7] font-black bg-white rounded-full"
                >
                  ✓
                </span>

                <span class="ml-2"
                  >Vacation Policy: Begin with 6 days annually after one year of
                  service, increasing up to 15 days depending on tenure.</span
                >
              </p>
              <p class="flex items-start text-sm md:text-base">
                <span
                  class="w-5 h-5 flex items-center justify-center aspect-square text-[#316FB7] font-black bg-white rounded-full"
                >
                  ✓
                </span>

                <span class="ml-2"
                  >Additional Leave: Inclusive of graduation, bereavement, and
                  paternal leave for male employees.</span
                >
              </p>
              <p class="flex items-start text-sm md:text-base">
                <span
                  class="w-5 h-5 flex items-center justify-center aspect-square text-[#316FB7] font-black bg-white rounded-full"
                >
                  ✓
                </span>

                <span class="ml-2"
                  >Health Check-Up Program: Regular health assessments.</span
                >
              </p>
              <p class="flex items-start text-sm md:text-base">
                <span
                  class="w-5 h-5 flex items-center justify-center aspect-square text-[#316FB7] font-black bg-white rounded-full"
                >
                  ✓
                </span>

                <span class="ml-2"
                  >Insurance Coverage: Comprehensive accident and health
                  insurance provided by Allianz Ayudhya.</span
                >
              </p>
            </div>
          </div>

          <!-- Image -->
          <div class="flex justify-center">
            <img
              src="/img/career/cr-work-1.png"
              alt="career work 1"
              class="rounded-lg shadow-lg w-[400px] md:w-[500px] lg:w-[600px]"
            />
          </div>
        </div>

        <!-- Section 2 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-10">
          <!-- Image -->
          <div class="flex justify-center">
            <img
              src="/img/career/cr-work-2.png"
              alt="career work 2"
              class="rounded-lg shadow-lg w-[400px] md:w-[500px] lg:w-[600px]"
            />
          </div>

          <!-- Content -->
          <div class="text-[#316FB7] max-sm:text-white">
            <div class="space-y-4">
              <p class="flex items-start text-sm md:text-base">
                <span
                  class="w-5 h-5 flex items-center justify-center aspect-square text-[#316FB7] xl:text-white font-black bg-white xl:bg-[#316FB7] rounded-full"
                >
                  ✓
                </span>

                <span class="ml-2"
                  >Recreational Events: Includes company retreats, employee
                  birthdays, Christmas celebrations, and more.</span
                >
              </p>
              <p class="flex items-start text-sm md:text-base">
                <span
                  class="w-5 h-5 flex items-center justify-center aspect-square text-[#316FB7] xl:text-white font-black bg-white xl:bg-[#316FB7] rounded-full"
                >
                  ✓
                </span>

                <span class="ml-2"
                  >Health and Team Building Activities: Access to fitness room
                  and team sports like soccer, running, and badminton.</span
                >
              </p>
              <p class="flex items-start text-sm md:text-base">
                <span
                  class="w-5 h-5 flex items-center justify-center aspect-square text-[#316FB7] xl:text-white font-black bg-white xl:bg-[#316FB7] rounded-full"
                >
                  ✓
                </span>

                <span class="ml-2"
                  >Bonus Structure: Includes payroll-based, performance, and
                  profit-sharing bonuses.</span
                >
              </p>
              <p class="flex items-start text-sm md:text-base">
                <span
                  class="w-5 h-5 flex items-center justify-center aspect-square text-[#316FB7] xl:text-white font-black bg-white xl:bg-[#316FB7] rounded-full"
                >
                  ✓
                </span>

                <span class="ml-2"
                  >Performance Reviews: Regular evaluations for potential salary
                  adjustments.</span
                >
              </p>
              <p class="flex items-start text-sm md:text-base">
                <span
                  class="w-5 h-5 flex items-center justify-center aspect-square text-[#316FB7] xl:text-white font-black bg-white xl:bg-[#316FB7] rounded-full"
                >
                  ✓
                </span>

                <span class="ml-2"
                  >Employee Recognition: Awards and prizes for outstanding
                  performance.</span
                >
              </p>
              <p class="flex items-start text-sm md:text-base">
                <span
                  class="w-5 h-5 flex items-center justify-center aspect-square text-[#316FB7] xl:text-white font-black bg-white xl:bg-[#316FB7] rounded-full"
                >
                  ✓
                </span>

                <span class="ml-2"
                  >Advanced IT Resources: Provision of modern IT tools and
                  equipment for efficient work.</span
                >
              </p>
              <p class="flex items-start text-sm md:text-base">
                <span
                  class="w-5 h-5 flex items-center justify-center aspect-square text-[#316FB7] xl:text-white font-black bg-white xl:bg-[#316FB7] rounded-full"
                >
                  ✓
                </span>

                <span class="ml-2"
                  >Professional Development: Internal and external training
                  programs to enhance skills.</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

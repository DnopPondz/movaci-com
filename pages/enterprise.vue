<template>
  <div class="w-full p-4 md:p-8">
    <!-- section1 -->
    <div>
      <img
        src="/public/img/enterprise/bg-enterprise.png"
        class="w-full rounded-xl shadow-xl"
        alt="Enterprise Background"
      />
    </div>

    <div class="max-w-[1500px] mx-auto px-6 md:px-12 py-12">
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
        <div>
            <img
                src="/public/img/enterprise/svg/enterprise-1.svg"
                alt="Enterprise Illustration"
                class="w-full h-auto"
            />
        </div>
        <div class="flex flex-col justify-center gap-6">
            <h1 class="text-[#316fb7] font-bold" style="font-size: clamp(1.5rem, 3vw, 2.5rem);">Solutions for Enterprises</h1>
            <p class="text-lg" style="font-size: clamp(1rem, 2vw, 1.2rem);">
                Empowering flexibility and scalability to meet growth demand.
            </p>
            <h2 class="text-[#316fb7] font-semibold" style="font-size: clamp(1.2rem, 2.5vw, 2rem);">What is holding you back?</h2>
            <p style="font-size: clamp(0.9rem, 1.8vw, 1.1rem);">
                In today's dynamic business landscape, enterprises are grappling with
                multiple challenges related to their IT systems. Investing in new
                hardware and software (CAPX) can be prohibitively expensive and limit
                your flexibility and scalability. Large capital project implementation
                can also tax your already overextended team and burden them with added
                long-term maintenance.
            </p>
            <p class="text-lg" style="font-size: clamp(1rem, 2vw, 1.2rem);">
                Updating legacy technology may resolve your immediate system needs but
                could expose you to additional risk from compliance and cyber security
                considerations. Staying compliant with ever-changing laws and
                regulations is a constant headache and the multifaceted nature of
                cyber security can be overwhelming. Finally, a single point of failure
                can lead to catastrophic data losses and downtime. Cyber liability
                insurance may not always address these issues and can be cost
                prohibitive.
            </p>
        </div>
    </div>
</div>

<!-- section 2 -->
<div class="max-w-[1500px] mx-auto px-6 md:px-12 py-12">
  <h1
    class="w-full bg-[#316fb7] text-white text-2xl font-bold p-8 md:p-10 text-center rounded-t-md"
  >
    Types of Enterprise Solutions
  </h1>

  <div
    class="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-[auto,1fr] gap-6 md:gap-10 items-start bg-[#e7f0fc] rounded-b-md"
  >
    <div class="flex flex-col sm:flex-row gap-4 p-5">
      <img
        class="w-full sm:w-1/2 lg:w-full xl:w-[280px] xl:h-[500px] h-auto rounded-lg shadow-lg object-cover"
        src="/img/enterprise/type-enterprise-1.jpg"
        alt="Enterprise Type 1"
      />
      <img
        class="w-full sm:w-1/2 lg:w-full xl:w-[280px] xl:h-[500px] h-auto rounded-lg shadow-lg object-cover"
        src="/img/enterprise/type-enterprise-2.jpg"
        alt="Enterprise Type 2"
      />
    </div>

    <div class="space-y-8 p-5">
      <div>
        <h2 class="text-xl font-semibold text-blue-800">MSP / MSSP</h2>
        <p class="text-gray-700 text-lg">
          High-availability cybersecurity (SOC) services can be a
          cost-effective asset for an enterprise. Tailored services to your
          specific needs, budget, and environment gives you peace of mind
          that your business will have continuity and resiliency.
        </p>
      </div>

      <div>
        <h2 class="text-xl font-semibold text-blue-800">
          Business Continuity
        </h2>
        <p class="text-gray-700 text-lg">
          Critical business functions must remain functional during a
          disaster and after it has occurred. Establishing risk management
          processes and procedures seek to mitigate interruptions to
          mission-critical services and restore daily operations as quickly
          as possible.
        </p>
      </div>

      <div>
        <h2 class="text-xl font-semibold text-blue-800">
          Compliance and Auditing
        </h2>
        <p class="text-gray-700 text-lg">
          Trusted guidance and auditing for industry-specific compliance
          concerns including ISO, PCI DSS, HIPPA, GDPR, and PDPA. Security
          penetration testing will find vulnerabilities that could be used
          by threat actors to obtain sensitive information.
        </p>
      </div>
    </div>
  </div>
</div>

    <productFeatureComponent />
    <seeAllSolution />
    <Testimonial3 />
    <Consulting />
  </div>
</template>

<script setup>
import Consulting from "~/components/layout/consulting.vue";
import Testimonial3 from "~/components/layout/testimonial3.vue";
import seeallsolution from "~/components/layout/seeallsolution.vue";
import productFeattureCompoent from "~/components/layout/productFeattureCompoent.vue";
</script>

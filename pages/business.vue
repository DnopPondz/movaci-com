
<template>
  <div class="p-4 md:p-8">
    <div class="w-full">
      <!-- Background Section -->
      <div class="">
        <img src="/public/img/business/bg-business.png" class="w-full rounded-xl shadow-xl" />
      </div>
  
      <!-- Content Section -->
      <div class="max-w-[1500px] mx-auto px-6 md:px-12 py-12 grid md:grid-cols-2 gap-5 items-start">
        <div class="pr-0 md:pr-10">
          <h1 class="text-3xl font-bold text-blue-800">Solutions for Businesses</h1>
          <p class="mt-5 text-gray-700">
            Bringing expertise and resources to support growth and profitability.
          </p>
          
          <h2 class="mt-8 text-xl font-semibold text-blue-800">Feeling overwhelmed by complexity?</h2>
          <p class="mt-4 text-gray-700">
            Business leaders today experience ever increasing levels of complexity
            because of rapidly changing technologies, cyberthreats, and compliance
            mandates. Your time and resources are stretched to the limits. Keeping
            up with the latest technologies and cybersecurity just isn’t
            happening. The risk of not meeting compliance obligations levied by
            banks, credit card processors, the government, and others is weighing
            heavily on your shoulders.
          </p>

          <h2 class="mt-8 text-xl font-semibold text-blue-800">How are you handling it?</h2>
          <p class="mt-4 text-gray-700">
            You can’t afford to throw up your hands in surrender. So instead, you
            scour the internet looking for packaged software, and you end up
            paying for more than you need. Still, you don’t have time or don’t
            know how to run it, so you rely on a “tech-savvy” employee to try and
            figure it out. To cover the worst-case scenario, you contact your
            insurance carrier for a cyber policy, but the requirements make no
            sense.
          </p>
        </div>
        
        <!-- Image Section -->
        <div class="flex flex-col space-y-6">
          <div class="w-full h-[660px] bg-cover bg-center rounded-lg" 
               style="background-image: url('/img/business/svg/bg-business-1.svg')">
          </div>
        </div>
      
        <div class="md:col-span-2">
          <h2 class="mt-8 text-xl font-semibold text-blue-800">What actions do you need to take?</h2>
          <p class="mt-4 text-gray-700">
            The needed response should be one that requires the least amount of
            change, cost, and operational disruption. Ignoring or sidestepping the
            risk can be as small as lost productivity or as extreme as a data
            breach with significant financial losses. Trusting a software vendor
            in hopes they are better than doing it yourself can give a false sense
            of security. How do you ensure end-to-end security on these diverse
            systems? Enlist a trusted technology partner with a security focus.
          </p>
        </div>
      </div>
    </div>

    <!-- The Solution Section (Improved Responsive Design) -->
    <div class="bg-[#e7f0fc] p-5">
      <div class="w-full bg-white  py-12 px-6 md:px-16 max-w-screen-2xl mx-auto rounded-lg shadow-lg">
  <h2 class="text-3xl font-bold text-blue-800 mb-8 text-center md:text-left">The Solution</h2>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
    <!-- Left Column (2 items) -->
    <div class="lg:col-span-2 flex flex-col space-y-10">
      <div class="flex flex-col sm:flex-row items-start gap-6">
        <img class="w-full sm:w-1/2 lg:w-[450px] object-cover rounded-lg shadow-lg" 
             src="/img/business/business-content-1.png" 
             alt="business content 1" />
        <div class="text-start max-w-lg">
          <p class="text-xl font-semibold text-blue-800">Trusted IT & Security Partner</p>
          <p class="text-gray-700">
            Businesses around the world trust Movaci to keep their global teams productive and secure.
          </p>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row items-start gap-6">
        <img class="w-full sm:w-1/2 lg:w-[450px] object-cover rounded-lg shadow-lg" 
             src="/img/business/business-content-2.png" 
             alt="business content 2" />
        <div class="text-start max-w-lg">
          <p class="text-xl font-semibold text-blue-800">Experienced & Certified Team</p>
          <p class="text-gray-700">
            You need technicians, engineers, and analysts who hold professional certifications across many IT and cybersecurity fields. Movaci can give you what you need to take advantage of the latest and best that technology has to offer.
          </p>
        </div>
      </div>
    </div>
    <!-- Right Column (1 item) -->
    <div class="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
      <img class="w-full object-cover rounded-lg shadow-lg max-w-[450px]" 
           src="/img/business/business-content-3.png" 
           alt="business content 3" />
      <p class="mt-6 text-xl font-semibold text-blue-800">Supported Infrastructure, Users, Security</p>
      <p class="text-gray-700 mt-4">
        There are three main areas where businesses need extra help. Infrastructure is the main backbone of your technology landscape. These components may include Wi-Fi networks, servers, websites, cloud services, workstations, and the applications that run on them. Securing these components can often be overwhelming, but Movaci can simplify it for you. Finally, users need support from technicians who take pride in excellent customer service.
      </p>
    </div>
  </div>
</div>
</div>


    <productFeattureCompoent />
    <seeallsolution />
    <Testimonial3 />
    <Consulting />
  </div>
</template>


<script setup>
import Consulting from "~/components/layout/consulting.vue"
import Testimonial3 from '~/components/layout/testimonial3.vue';
import seeallsolution from '~/components/layout/seeallsolution.vue';
import productFeattureCompoent from '~/components/layout/productFeattureCompoent.vue';


</script>

<template>
  <div>
    <div class="w-full p-4 md:p-8">
      <!-- Background Section -->
      <div class="">
        <img
          src="/public/img/non-profit/bg-non-profit1.png"
          class="w-full rounded-xl shadow-xl"
        />
      </div>

      <!-- Content Section -->
      <div
        class="max-w-[1500px] mx-auto px-6 md:px-12 py-12 grid md:grid-cols-2 gap-5 items-start"
      >
        <div class="pr-0 md:pr-10">
          <h1 class="text-3xl font-bold text-blue-800">
            Solutions for Non-Profits
          </h1>
          <p class="mt-5 text-gray-700">
            Having served nonprofits since our conception, Movaci is acutely
            aware of the challenges organizations are facing.
          </p>

          <h2 class="mt-8 text-xl font-semibold text-blue-800">
            Have you ever faced these problems?
          </h2>
          <p class="mt-4 text-gray-700">
            The first major area of difficulty in maintaining an organization’s
            IT ecosystem is finding qualified professionals that will stay
            long-term. Every time there is a change from one “IT guy” to another
            there is a switching cost because the new guy will do somethings
            differently than the last. The second major pain-point after
            technical staff is technology budgets. Nonprofits often need the
            best that technology has to offer, but rarely have the operational
            budgets to fulfill that need. Finally, nonprofit leaders are focused
            on the mission. Executive and board members often lack the industry
            experience and technical knowhow to meet the ever-growing demand for
            tech.
          </p>

          <h2 class="mt-8 text-xl font-semibold text-blue-800">
            Are you at risk?
          </h2>
          <p class="mt-4 text-gray-700">
            There will always be someone that wants take advantage of your
            organization’s technology weakness. If those weaknesses are
            exploited, the personal and project information of your staff,
            volunteers, donors, and field contacts could be compromised. In some
            cases, a website or social media profile could be hijacked and
            defaced with something detrimental to your mission and donor
            development. It may not be immediately apparent if the threat actor
            is a prankster, seeking to harm your work, or trying to steal data
            for financial gain. Any incident, regardless the intent, will cost
            you time and money to recover including increased premiums for your
            cyber risk insurance. Worst of all, you may lose the trust of your
            donors to handle their personal and financial assets..
          </p>
        </div>

        <!-- Image Section -->
        <div class="flex flex-col space-y-6">
          <div
            class="w-full h-[660px] bg-cover bg-center rounded-lg"
            style="background-image: url('/img/non-profit/svg/bg-non-profit-1.svg')"
          ></div>
        </div>

        <div class="md:col-span-2">
          <h2 class="mt-8 text-xl font-semibold text-blue-800">
            What actions do you need to take?
          </h2>
          <p class="mt-4 text-gray-700">
            The needed response should be one that requires the least amount of
            change, cost, and operational disruption. Ignoring or sidestepping
            the risk can be as small as lost productivity or as extreme as a
            data breach with significant financial losses. Some will turn to
            SaaS (Software as a Service) vendors to try and outsource the
            responsibility of security. Trusting a software vendor in hopes they
            are better than doing it yourself can give false sense of security.
            The fact is that while your data might be safe in their cloud, user
            equipment, web platforms, email systems, file store solutions are
            well outside their control. How do you ensure end-to-end security on
            these diverse systems?
          </p>
        </div>
      </div>
    </div>

      <!-- The Solution Section (Improved Responsive Design) -->
<div class="w-full bg-gray-100 py-12 2xl:px-[350px] px-6 md:px-16">
  <h2 class="text-3xl font-bold text-blue-800 mb-8 text-center md:text-left">The Solution</h2>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
    <!-- Left Column (2 items) -->
    <div class="lg:col-span-2 flex flex-col space-y-10">
      <div class="flex flex-col sm:flex-row items-start gap-6">
        <img class="w-full sm:w-1/2 lg:w-[450px] object-cover rounded-lg shadow-lg" 
             src="/img/non-profit/solution-1.png" 
             alt="business content 1" />
        <div class="text-start max-w-lg">
          <p class="text-xl font-semibold text-blue-800">Trusted IT & Security Partner</p>
          <p class="text-gray-700">
            Nonprofit organizations around the world trust Movaci to keep their global teams productive and secure.
          </p>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row items-start gap-6">
        <img class="w-full sm:w-1/2 lg:w-[450px] object-cover rounded-lg shadow-lg" 
             src="/img/non-profit/solution-2.png" 
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
           src="/public/img/non-profit/solution-3.png" 
           alt="business content 3" />
      <p class="mt-6 text-xl font-semibold text-blue-800">Supported Infrastructure, Users, Security</p>
      <p class="text-gray-700 mt-4">
        There are three main areas where nonprofits need extra help. Infrastructure is the main backbone of your technology landscape. These components may include Wi-Fi networks, servers, websites, cloud services, workstations, and the applications that run on them. Securing these components can often be overwhelming, but Movaci can simplify it for you. Finally, users need support from technicians who take pride in excellent customer service.
      </p>
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
import Consulting from "~/components/layout/consulting.vue";
import Testimonial3 from "~/components/layout/testimonial3.vue";
import seeallsolution from "~/components/layout/seeallsolution.vue";
import productFeattureCompoent from "~/components/layout/productFeattureCompoent.vue";
</script>

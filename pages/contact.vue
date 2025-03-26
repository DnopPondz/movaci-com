<template>
    <div class="p-4 md:p-8">
      <div class="flex flex-wrap lg:flex-nowrap items-start p-6">
        <!-- ภาพด้านซ้าย -->
        <div class="w-full lg:w-1/2">
          <img
            src="/img/contact/contact-1.png"
            alt="Contact"
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
  
        <!-- ฟอร์มด้านขวา -->
        <div class="w-full lg:w-1/2 p-8">
          <h1 class="text-3xl font-bold text-gray-900">Contact Us</h1>
          <p class="text-lg text-gray-600 mt-2">
            Let us know how we can be of assistance to you!
          </p>
          <p class="text-sm text-gray-500">
            Our team of sales associates and sales engineers can provide feedback
            and recommendations on all of the solutions in our portfolio.
          </p>
  
          <!-- ฟอร์ม -->
          <form class="mt-6 space-y-4" @submit.prevent="sendEmail">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input type="text" v-model="formData.firstName" placeholder="First Name" class="input-field" />
      <input type="text" v-model="formData.lastName" placeholder="Last Name" class="input-field" />
      <input type="email" v-model="formData.email" placeholder="Email" class="input-field" />
      <input type="tel" v-model="formData.phone" placeholder="Phone Number" class="input-field" />
    </div>
    <input type="text" v-model="formData.subject" placeholder="Subject" class="input-field" />
    <textarea v-model="formData.message" placeholder="Message" rows="5" class="input-field"></textarea>

    <button
      type="submit"
      class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition duration-300"
    >
      SEND MESSAGE
    </button>
  </form>

  
          <p class="text-gray-500 text-sm flex items-center gap-2 mt-4">
            <span>⏳</span> On standby 24-hours a day.
          </p>
        </div>
      </div>
      <Consulting />
      
     
      <div class="flex justify-center items-center flex-col lg:flex-row gap-[1px]  p-6">
        <div class="bg-blue-600 text-white p-6 rounded-lg shadow-lg w-full xl:w-[300px]  ">
          <h2 class="text-xl font-bold">Movaci (Chiang Mai)</h2>
          <p>420/11-13 Changklan Rd.<br/>T. Changklan, A. Muang<br/>Chiang Mai 50100, Thailand</p>
          <p>Call : +66 (053) 920 555</p>
          <p>Email : sales@movaci.com</p>
        </div>
        <div class="w-full lg:w-1/2">
          <iframe src="https://www.google.com/maps/embed?..." class="w-full h-[180px] rounded-lg"></iframe>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center sm:flex-col-reverse  lg:flex-row gap-[1px] p-6">
      <div class="w-full lg:w-1/2">
        <iframe src="https://www.google.com/maps/embed?..." class="w-full h-[180px] rounded-lg"></iframe>
      </div>
      <div class="bg-blue-600 text-white p-6 rounded-lg shadow-lg w-full lg:w-[300px]">
        <h2 class="text-xl font-bold">Movaci (USA)</h2>
        <p>539 W. Commerce St #4353<br/>Dallas, TX 75208 USA</p>
        <p>Call : +1 (972) 525 0699</p>
        <p>Email : sales@movaci.com</p>
      </div>
    </div>
    </div>
  </template>
  
  <style scoped>
  .input-field {
    @apply w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none;
  }
  </style>
  
  <script setup>
  import Consulting from "@/components/layout/consulting.vue";
  import axios from 'axios';
  import { reactive } from 'vue';
  
  const formData = reactive({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const sendEmail = async () => {
    try {
      await axios.post('http://localhost:5000/send-email', formData);
      alert('Email sent successfully!');
      // รีเซ็ตฟอร์ม
      Object.keys(formData).forEach(key => formData[key] = '');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email. Please try again.');
    }
  };
  </script>
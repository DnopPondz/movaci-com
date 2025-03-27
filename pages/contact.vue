<template>
  <div class="p-4 md:p-8">
    <div class="flex flex-wrap items-stretch p-6 bg-gray-50 rounded-lg shadow-lg">
  <!-- ภาพด้านซ้าย (แสดงเฉพาะในจอขนาด xl ขึ้นไป) -->
  <div class="w-full xl:w-1/2 xl:block hidden min-h-full">
    <img
      src="/img/contact/contact-1.png"
      alt="Contact"
      class="w-full h-full object-cover rounded-l-lg shadow-md"
    />
  </div>

  <!-- ฟอร์มด้านขวา -->
  <div class="w-full xl:w-1/2 p-8 bg-white rounded-r-lg max-sm:rounded-lg max-xl:rounded-xl shadow-md min-h-full flex flex-col justify-between">
    <h1 class="text-3xl font-bold text-gray-900">Contact Us</h1>
    <p class="text-lg text-gray-600 mt-2">
      Let us know how we can assist you!
    </p>
    <p class="text-sm text-gray-500">
      Our team of experts can provide feedback and recommendations on all solutions in our portfolio.
    </p>

    <!-- ฟอร์ม -->
    <form class="mt-6 space-y-6 flex-1" @submit.prevent="sendEmail">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          v-model="formData.firstName"
          placeholder="First Name"
          class="input-field p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          v-model="formData.lastName"
          placeholder="Last Name"
          class="input-field p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          v-model="formData.email"
          placeholder="Email"
          class="input-field p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="tel"
          v-model="formData.phone"
          placeholder="Phone Number"
          class="input-field p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <input
        type="text"
        v-model="formData.subject"
        placeholder="Subject"
        class="input-field p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        v-model="formData.message"
        placeholder="Message"
        rows="5"
        class="input-field p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>

      <button
        type="submit"
        class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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

 


    <div class="bg-[#e7f0fc] rounded-t-xl">
  <!-- Section for Movaci (Chiang Mai) -->
  <div class="flex flex-col lg:flex-row justify-center items-center gap-[1px] p-6">
    <!-- Card for Movaci (Chiang Mai) -->
    <div class="bg-blue-600 text-white p-6 rounded-l-lg max-sm:rounded-lg max-lg:rounded-lg shadow-lg w-full lg:w-[300px] h-auto py-[70px]">
      <h2 class="text-xl font-bold mb-4">Movaci (Chiang Mai)</h2>
      <p class="text-sm">
        420/11-13 Changklan Rd.<br />
        T. Changklan, A. Muang<br />
        Chiang Mai 50100, Thailand
      </p>
      <p class="text-sm mt-2">Call : +66 (053) 920 555</p>
      <p class="text-sm mt-2">Email : sales@movaci.com</p>
    </div>

    <!-- Map iframe for Movaci (Chiang Mai) -->
    <div class="w-full lg:w-1/2 h-[250px] lg:h-[300px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7555.234693658724!2d98.996263!3d18.766887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a7cfa15f9b9%3A0xb1345eaf82a358d8!2sMovaci!5e0!3m2!1sth!2sth!4v1710000000000"
        class="w-full h-full rounded-r-lg max-sm:rounded-lg max-lg:rounded-lg"
      ></iframe>
    </div>
  </div>

  <!-- Section for Movaci (USA) -->
  <div class="flex flex-col lg:flex-row-reverse  justify-center items-center gap-[1px] p-6">
    <!-- Card for Movaci (USA) -->
    <div class="bg-blue-600 text-white p-6  rounded-r-lg max-sm:rounded-lg max-lg:rounded-lg   shadow-lg w-full lg:w-[300px] h-auto  py-[80px]  ">
      <h2 class="text-xl font-bold mb-4">Movaci (USA)</h2>
      <p class="text-sm">
        539 W. Commerce St #4353<br />
        Dallas, TX 75208 USA
      </p>
      <p class="text-sm mt-2">Call : +1 (972) 525 0699</p>
      <p class="text-sm mt-2">Email : sales@movaci.com</p>
    </div>

    <!-- Map iframe for Movaci (USA) -->
    <div class="w-full lg:w-1/2 h-[250px] lg:h-[300px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.369661314711!2d-96.8354914847432!3d32.773257481091276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e99623917f035%3A0x6103252cfa863a2b!2zNTM5IFcgQ29tbWVyY2UgU3QgIzQzNTMsIERhbGxhcywgVFggNzUyMDgg4Liq4Lir4Lij4Lix4LiQ4Lit4LmA4Lih4Lij4Li04LiB4Liy!5e0!3m2!1sen!2sth!4v1677899097414!5m2!1sen!2sth"
        class="w-full h-full rounded-l-lg max-sm:rounded-lg max-lg:rounded-xl"
      ></iframe>
    </div>
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
import axios from "axios";
import { reactive } from "vue";

const formData = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});

const sendEmail = async () => {
  try {
    await axios.post("http://localhost:5000/send-email", formData);
    alert("Email sent successfully!");
    // รีเซ็ตฟอร์ม
    Object.keys(formData).forEach((key) => (formData[key] = ""));
  } catch (error) {
    console.error("Error sending email:", error);
    alert("Error sending email. Please try again.");
  }
};
</script>

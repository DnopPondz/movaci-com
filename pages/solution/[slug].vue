<template>
  <div class="bg-gray-100 min-h-screen p-6">
    <div v-if="service" class="max-w-7xl mx-auto bg-white p-8 rounded-t-lg shadow-lg">
      <!-- Hero Image -->
      <img
        v-if="service && service.assetsPath && service.bgMain"
        :src="service.assetsPath + service.bgMain"
        alt="Service Image"
        class="w-full rounded-lg shadow-md object-cover h-96"
      />

      <!-- Title & Description -->
      <div class="mt-6">
        <h1 v-if="service.title" class="text-4xl font-extrabold text-blue-700">
          {{ service.title }}
        </h1>
        <p v-if="service.subDetail" class="text-lg text-gray-600 mt-3">
          {{ service.subDetail }}
        </p>
      </div>

      <!-- Main Details -->
      <div v-if="Array.isArray(service.mainDetail) && service.mainDetail.length" class="mt-6">
        <h2 class="text-2xl font-semibold text-gray-800">Details</h2>
        <ul class="list-disc pl-6 mt-4 text-gray-700">
          <li v-for="(detail, index) in service.mainDetail" :key="index" class="mt-2">
            {{ detail }}
          </li>
        </ul>
      </div>

      <!-- Description Sections -->
      <div
        v-if="Array.isArray(service.description) && service.description.length"
        class="mt-6 space-y-6"
      >
        <div v-for="(section, index) in service.description" :key="index">
          <h2 class="text-2xl font-semibold text-gray-800">{{ section.title }}</h2>
          <ul v-if="Array.isArray(section.item) && section.item.length" class="list-disc pl-6 text-gray-700">
            <li v-for="(item, i) in section.item" :key="i">{{ item }}</li>
          </ul>

          <div v-if="section.title === 'Why Choose Movaci?'">
            <div v-for="(subsection, index) in section.list" :key="index" class="mt-4">
              <h3 v-if="subsection.detailsTitle" class="text-lg font-semibold text-gray-800">{{ subsection.title }}</h3>
              <div v-for="(detail, idx) in subsection.details" :key="idx" class="mt-2">
                <p v-if="detail.content" class="text-gray-700">{{ detail.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Icon List -->
      <div v-if="Array.isArray(service.iconList) && service.iconList.length" class="mt-6">
        <h2 v-if="service.iconTitle" class="text-2xl font-semibold text-gray-800">
          {{ service.iconTitle }}
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          <div v-for="icon in service.iconList" :key="icon.title" class="flex flex-col items-center text-center">
            <img v-if="icon.icon" :src="icon.icon" :alt="icon.title" class="w-16 h-16" />
            <h1 class="text-gray-700 mt-2">{{ icon.title }}</h1>
            <p class="text-gray-700 text-sm">{{ icon.item }}</p>
          </div>
        </div>
      </div>

      <!-- Managed Security Services -->
      <div v-if="Array.isArray(service.managedServicesList) && service.managedServicesList.length" class="mt-8 space-y-6">
        <div v-for="(category, index) in service.managedServicesList" :key="index">
          <h2 class="text-2xl font-bold text-gray-900">{{ category.managedServicesTitle }}</h2>
          <div class="mt-4 space-y-4">
            <div v-for="(serviceItem, i) in category.managedServices" :key="i">
              <h3 class="text-lg font-semibold text-gray-800">{{ serviceItem.title }}</h3>
              <p class="text-gray-700 mt-2">{{ serviceItem.detail }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Movaci Internet Services Summary -->
      <div v-if="service.internetServices" class="mt-8">
        <h2 class="text-3xl font-bold text-blue-700 text-center">
          {{ service.internetServices.internet_title[0] }}
        </h2>

        <div class="overflow-x-auto mt-6">
          <table class="min-w-full border border-gray-300 bg-white shadow-md">
            <thead>
              <tr class="bg-gray-200">
                <th class="p-4 text-left font-semibold text-gray-700">
                  {{ service.internetServices.title[0].name }} <br />
                  <span class="text-sm text-gray-500">{{ service.internetServices.title[0].sub }}</span>
                </th>
                <th class="p-4 bg-blue-100 font-semibold text-blue-700">
                  {{ service.internetServices.title[1].name }}
                </th>
                <th class="p-4 bg-blue-300 font-semibold text-white">
                  {{ service.internetServices.title[2].name }}
                </th>
                <th class="p-4 bg-blue-500 font-semibold text-white">
                  {{ service.internetServices.title[3].name }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in service.internetServices.details" :key="index" class="border-t">
                <td class="p-4 font-semibold text-gray-700">{{ row[0] }}</td>
                <td class="p-4 text-gray-700 text-center">
                  <span v-if="typeof row[1] === 'boolean'">{{ row[1] ? '✔️' : '❌' }}</span>
                  <span v-else>{{ row[1] }}</span>
                </td>
                <td class="p-4 text-gray-700 text-center">
                  <span v-if="typeof row[2] === 'boolean'">{{ row[2] ? '✔️' : '❌' }}</span>
                  <span v-else>{{ row[2] }}</span>
                </td>
                <td class="p-4 text-gray-700 text-center">
                  <span v-if="typeof row[3] === 'boolean'">{{ row[3] ? '✔️' : '❌' }}</span>
                  <span v-else>{{ row[3] }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Movaci Internet Services Tips Section -->
      <div v-if="service.internetServices && service.internetServices.tips && service.internetServices.tips.length" class="mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-blue-700 text-center mb-4">
          Service Tips & Information
        </h2>

        <div class="grid md:grid-cols-2 gap-6">
          <div v-for="(tip, index) in service.internetServices.tips" :key="index" class="flex items-start bg-white p-4 rounded-lg shadow">
            <img v-if="tip.icon" :src="tip.icon" alt="Tip Icon" class="w-8 h-8 mr-3" />
            <div>
              <h3 class="text-lg font-semibold text-gray-800">{{ tip.title }}</h3>
              <p class="text-gray-600">{{ tip.text }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Pricing Plans -->
      <div v-if="Array.isArray(service.plansPricing) && service.plansPricing.length" class="mt-8">
        <h2 class="text-2xl font-bold text-gray-900">Pricing Plans</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          <div
            v-for="plan in service.plansPricing"
            :key="plan.id"
            class="border p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200"
          >
            <h3 class="text-lg font-semibold">{{ plan.hosting }} Hosting</h3>
            <p class="text-gray-600">Storage: {{ plan.space }} GB</p>
            <p class="text-gray-600">Accounts: {{ plan.account }}</p>
            <p class="text-gray-600">SQL DB: {{ plan.sql_db }}</p>
            <p class="text-blue-700 font-bold mt-2">
              ${{ plan.price }} / month
            </p>
            <a
              v-if="plan.link"
              :href="plan.link"
              class="block bg-blue-600 text-white text-center p-3 rounded-lg mt-4 hover:bg-blue-700 transition duration-200"
            >Order Now</a>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <p class="text-center text-gray-600">Loading service details...</p>
    </div>

    <Consulting class=" rounded-none" />
    <OtherSolution />
  </div>

</template>




<script>
import Consulting from "~/components/layout/consulting.vue";
import OtherSolution from "~/components/layout/otherSolution.vue";
export default {
  components: {
    Consulting, // อย่าลืมลงทะเบียนที่นี่
    OtherSolution,
  },
  data() {
    return {
      // Mockup data for available services
      services: [
        // id 1
        {
          id: 1,
          assetsPath: "/img/products_services/product&services",
          img: "/thumbnail.webp",
          bgMain: "/bg-secure-hosting.webp",
          title: "Secure Web Hosting",
          slug: "secure-web-hosting",
          subDetail: "Secure your web hosting with our reliable data centers.",
          metaTitle: "Secure Web Hosting",
          metaDescription: "",
          mainDetail: [
            "Unveiling Movaci's Secure Hosting Services: Where Reliability Meets Fortified Security",
            "In a digital landscape where downtime, data breaches, and compliance fines can wreak havoc on your business, finding a web hosting service that prioritizes security isn’t just a luxury; it's a necessity. Movaci proudly introduces our Secure Hosting Services, a solution where robust security measures harmonize with unparalleled performance and reliability, making your digital assets both impervious and highly accessible.",
          ],
          description: [
            {
              title:
                "Global Reach, Local Expertise: Data Centers Across Continents",
              item: [
                "Don’t limit your audience due to geographic constraints. With data centers strategically positioned in the United States and Thailand—and a Universal Coverage (UC) footprint extending to multiple countries—we bring your content closer to your international audience, ensuring faster load times and higher availability.",
              ],
            },
            {
              title: "Layers of Redundancy: Because One Backup Isn't Enough",
              item: [
                "Data loss isn’t just an inconvenience; it’s a business continuity issue. That's why we've engineered our Secure Hosting Services with multiple layers of redundancy. From data backups to failover systems, our architecture is designed to keep your website operational and your data intact—even in the face of unexpected disruptions.",
              ],
            },
            {
              title: "Stringent Security Protocols: Encryption and Compliance",
              item: [
                "Security isn’t just about keeping the bad guys out; it's also about making sure your data is handled with the utmost care and discretion. Our secure hosting solutions adhere to rigorous international standards, including PCI DSS, HIPAA, ISO 27001, and GDPR. We implement stringent data management, isolation, and encryption protocols, making sure your website remains spam-and-virus-free and continually online.",
              ],
            },
            {
              title:
                "Best-of-Breed Partnerships: CloudFlare, Plesk, CloudLinux, and CrowdStrike",
              item: [
                "Why settle for good when you can have the best? We’ve partnered with industry-leading solutions like CloudFlare for performance and security optimization, Plesk for simplified website management, CloudLinux for reliable and isolated hosting environments, and CrowdStrike for cutting-edge cybersecurity solutions. Together, these partnerships amplify the robustness and efficiency of our Secure Hosting Services.",
              ],
            },
            {
              title:
                "Why Choose Security-Oriented Hosting? The Benefits Detailed",
              item: [],
              list: [
                {
                  title: "",
                  detailsTitle: true,
                  listStyle: "circle",
                  details: [
                    {
                      title: "Regulatory Compliance:",
                      content:
                        "Hosting that aligns with international compliance standards, safeguarding you from hefty fines and legal consequences.",
                    },
                    {
                      title: "Data Protection: ",
                      content:
                        "Advanced encryption and multi-layered security protocols keep your sensitive data under lock and key.",
                    },
                    {
                      title: "High Availability: ",
                      content:
                        "Redundancy and failover systems ensure that your website is always up, providing a seamless user experience.",
                    },
                    {
                      title: "Enhanced Performance: ",
                      content:
                        "Partnering with leading-edge solutions ensures that your website is not only secure but also blazing fast, delivering an unmatched user experience.",
                    },
                  ],
                },
              ],
            },
            {
              title: "Secure Your Digital World with Movaci",
              item: [
                "A secure hosting environment isn't just an add-on; it’s a fundamental layer in your cybersecurity strategy. By choosing Movaci’s Secure Hosting Services, you’re not just buying server space—you’re investing in peace of mind, safeguarding your digital assets, and securing a sustainable future for your online endeavors. Experience the difference that a focus on security can make; become a part of Movaci’s Secure Hosting ecosystem today.",
              ],
            },
          ],
          plansPricing: [
            {
              id: 1,
              hosting: 5,
              pricing: 120,
              space: 5,
              account: 5,
              sql_db: 1,
              popular: false,
              link: "https://my.movaci.com/cart.php?a=add&pid=99",
            },
            {
              id: 2,
              hosting: 10,
              pricing: 220,
              space: 10,
              account: 10,
              sql_db: 2,
              popular: false,
              link: "https://my.movaci.com/cart.php?a=add&pid=111",
            },
            {
              id: 3,
              hosting: 20,
              pricing: 360,
              space: 20,
              account: 20,
              sql_db: 4,
              popular: false,
              link: "https://my.movaci.com/cart.php?a=add&pid=100",
            },
            {
              id: 4,
              hosting: 50,
              pricing: 600,
              space: 50,
              account: 50,
              sql_db: 8,
              popular: true,
              link: "https://my.movaci.com/cart.php?a=add&pid=101",
            },
          ],
        },
        // id 2
        {
          id: 2,
          assetsPath: "/img/products_services/product&services/cloud-servers",
          img: "/thumbnail.webp",
          bgMain: "/bg-cloud-servers.webp",
          type: ["service", "product"],
          title: "Cloud Servers",
          slug: "cloud-servers",
          subDetail:
            "Secure virtual servers that are private and that have flexible OS options.",
          metaTitle: "Cloud Servers",
          metaDescription: "",
          titleBar: [
            { id: "description", name: "Description" },
            { id: "pricing", name: "Pricing" },
          ],
          mainDetail: [
            "Elevate Your Digital Experience with Movaci Cloud Servers: Where Stability Meets Agility.",
            "Welcome to the future of effortless hosting: Movaci Cloud Servers. Crafted to perfection, our cloud-based virtual servers are engineered to provide you with a computing environment that is not just stable and fast, but also exceptionally secure. Whether you're looking to run Linux or Microsoft Windows, our platform accommodates your specific needs, allowing you to focus on your core business rather than worrying about server uptime or security.",
          ],
          description: [
            {
              title: "Cutting-Edge Infrastructure for Unbeatable Performance",
              item: [
                "At the heart of our Cloud Servers lies Movaci’s robust, high-availability infrastructure, built on industry-leading KVM and VMware technologies. This cutting-edge framework ensures that your server experiences minimal downtime and maximizes operational efficiency. It's an architecture designed not just to meet expectations, but to exceed them.",
              ],
            },
            {
              title: "Unmatched Security: Because Your Data Deserves the Best",
              item: [
                "Security isn't just an add-on for us; it's an integral part of our server design. From hardware firewalls to encrypted data storage, we’ve fortified our Cloud Servers with state-of-the-art security features. This means you can enjoy peace of mind knowing that your data and applications are protected around the clock by layers of proactive security measures.",
              ],
            },
            {
              title: "Versatility at Your Fingertips",
              item: [
                "Whether you’re planning to host a high-traffic website, an SQL database, or a complex custom system, our Cloud Servers are engineered to handle a diverse range of workloads. The flexibility of our platform allows you to scale resources seamlessly as your needs evolve, making it a future-proof solution for businesses of all sizes.",
              ],
            },
            {
              title: "24/7 Expert Support: We're Always Here for You",
              item: [
                "What sets us apart is our unwavering commitment to customer service. Our team of highly qualified technical professionals diligently monitors and maintains your Cloud Servers 24/7. Whether it’s a minor glitch or a major issue, we’re always on standby to provide timely, effective solutions to ensure your operations continue to run smoothly.",
              ],
            },
          ],
        },
        // id 3
        {
          id: 3,
          assetsPath: "/img/products_services/product&services/microsoft365",
          img: "/thumbnail.webp",
          bgMain: "/bg-microsoft365.webp",
          type: ["service"],
          title: "Microsoft 365",
          slug: "microsoft-365",
          subDetail:
            "Movaci provides custom Microsoft solutions in the following areas",
          metaTitle: "Microsoft 365",
          metaDescription: "",
          titleBar: [{ id: "description", name: "Description" }],
          mainDetail: [
            "Unlock the Power of Next-Gen Business Solutions with Movaci's Microsoft 365 Services: Where Expertise Meets Excellence.",
            "In an ever-changing digital landscape, the need for robust, flexible, and scalable IT solutions has never been more vital. At Movaci, we've spent years perfecting the art of deploying Microsoft technologies to empower businesses like yours. As a proud Microsoft Gold Partner for the past eight years, we've solidified our reputation as a leading authority in implementing Microsoft solutions that are as unique as your business. Our team is replete with Microsoft Certified Solutions Experts and Microsoft 365 Certified staff, each committed to driving innovation, ensuring confidentiality, maintaining integrity, and maximizing availability for your business.",
          ],
          description: [
            {
              title:
                "Microsoft 365: The All-In-One Solution for Modern Businesses",
              item: [
                "Microsoft 365 is more than a suite of office applications—it's a holistic ecosystem designed to meet the complex demands of today's businesses. Whether you're in healthcare, finance, retail, or any other sector, we customize Microsoft 365 to fit your industry-specific needs.",
              ],
            },
            {
              title: "Unite Your Teams with Microsoft Teams",
              item: [
                "In today's remote work environment, seamless communication is crucial for success. Microsoft Teams offers an all-in-one unified communications platform that combines chat, video conferencing, file storage and sharing, and application integration. Its compatibility with both Office 365 and third-party applications means your teams can collaborate more efficiently, keeping your productivity at its peak.",
              ],
            },
            {
              title: "Azure Cloud: Turn Ideas Into Reality",
              item: [
                "Why settle for ordinary when you can reach for the cloud? Azure Cloud is your trusted partner for unmatched productivity and security. Our Azure solutions enable you to transform your ideas into tangible outcomes faster than ever before, all while ensuring the highest level of security compliance.",
              ],
            },
            {
              title: "Streamlined Collaboration with SharePoint",
              item: [
                "SharePoint isn't just another data storage solution; it's a robust, secure platform for intracompany collaboration. Whether it's team-based or cross-departmental, SharePoint facilitates seamless communication, document storage, and retrieval within an environment fortified by enterprise-grade security and compliance features.",
              ],
            },
            {
              title: "Exchange: Beyond Business-Class Email",
              item: [
                "Optimize your workflow with Exchange, the business-class email solution designed to make your life easier. From a personalized inbox to advanced search capabilities, Exchange empowers you to manage your internal and external communications more efficiently.",
              ],
            },
            {
              title: "EntraID Services: Your Gateway to Unmatched Security",
              item: [
                "Formerly known as Azure AD, EntraID Services offers state-of-the-art features for user account management, access control, and security policy enforcement across all devices and platforms.",
              ],
            },
            {
              title: "The Movaci Advantage",
              item: [
                "When you partner with Movaci, you're not just getting a service provider; you're gaining a strategic ally committed to advancing your business objectives. We stand behind the pillars of confidentiality, integrity, and availability, ensuring that your Microsoft 365 services are not just robust but impeccably secure.",
              ],
            },
          ],
          iconList: [
            {
              icon: "/img/products_services/product&services/microsoft365/word.svg",
              title: "Word",
              item: "",
            },
            {
              icon: "/img/products_services/product&services/microsoft365/excel.svg",
              title: "Excel",
              item: "",
            },
            {
              icon: "/img/products_services/product&services/microsoft365/power-point.svg",
              title: "PowerPoint",
              item: "",
            },
            {
              icon: "/img/products_services/product&services/microsoft365/outlook.svg",
              title: "Outlook",
              item: "",
            },
            {
              icon: "/img/products_services/product&services/microsoft365/onenote.svg",
              title: "OneNote",
              item: "",
            },
            {
              icon: "/img/products_services/product&services/microsoft365/onedrive.svg",
              title: "OneDrive",
              item: "",
            },
          ],
        },
        // id 4
        {
          id: 4,
          assetsPath:
            "/img/products_services/product&services/managed-online-backup",
          img: "/thumbnail.webp",
          bgMain: "/bg-managed-online-backup.webp",
          type: ["service"],
          title: "Managed Online Backup",
          slug: "managed-online-backup",
          subDetail:
            "Guarantee your last line of defense against a data breach with Movaci’s help.",
          metaTitle: "Managed Online Backup",
          metaDescription: "",
          titleBar: [
            {
              id: 1,
              name: "description",
            },
          ],
          mainDetail: [
            "Unveil the Ultimate Safety Net for Your Data with Movaci's Managed Online Backup (MOB): Where Redundancy Meets Compliance",
            "In today's data-centric landscape, your information is your most valuable asset, and its security is non-negotiable. However, even the most fortified systems are not invulnerable to threats or failures. That’s where Movaci’s Managed Online Backup (MOB) comes into play—acting as your robust safety net, capable of recovering your critical data and ensuring business continuity when you need it the most.",
          ],
          description: [
            {
              title:
                "Redundancy Done Right: Dual Copies for Extra Peace of Mind",
              item: [
                "In an uncertain world where data integrity is paramount, redundancy is not an extravagance; it's a necessity. Movaci's MOB goes the extra mile by securely replicating your data to Movaci’s cloud infrastructure, ensuring that two copies of your backup are available at all times. This dual-layer protection guarantees that your data is not just secure but doubly so, providing an added cushion against data loss.",
              ],
            },
            {
              title: "Industry-Standard Compliance: Certified and Verified",
              item: [
                "Operating in a regulated industry? We've got you covered. Movaci’s MOB adheres to the most stringent global standards, including PCI DSS, HIPAA, ISO 27001, and GDPR. Our commitment to compliance ensures that your data not only meets but exceeds the security requirements laid down by regulatory bodies, making MOB a prime choice for businesses that demand the highest levels of data protection.",
              ],
            },
            {
              title: "Multi-Layered Defense: The Pinnacle of Backup Solutions",
              item: [
                "At its core, MOB is more than just a backup service; it's a comprehensive, fully managed solution meticulously engineered to offer 24x7 monitoring and support. Leveraging advanced recovery technologies, MOB allows you to restore data directly to any platform—be it hardware or a virtual instance—ensuring seamless transition and minimal downtime during critical recovery operations.",
              ],
            },
            {
              title: "Bulletproof Encryption: Security You Can Trust",
              item: [
                "Your data's confidentiality is our top priority. That’s why our MOB service comes equipped with military-grade encryption protocols that safeguard your data both in transit and at rest. Rest easy knowing that your business-critical information is shielded from unauthorized access at every stage of the backup process.",
              ],
            },
          ],
          iconTitle: "Key Features at a Glance:",
          iconList: [
            {
              icon: "/img/products_services/product&services/managed-online-backup/mob-1.svg",
              title: "24x7 Monitoring and Support:",
              item: "Our dedicated support team is always on standby to address your concerns and offer immediate assistance.",
            },
            {
              icon: "/img/products_services/product&services/managed-online-backup/mob-2.svg",
              title: "Advanced Recovery Options:",
              item: "Restore data directly to your chosen platform, ensuring minimal disruption to your operations.",
            },
            {
              icon: "/img/products_services/product&services/managed-online-backup/mob-3.svg",
              title: "Dual Copy Assurance:",
              item: "Benefit from the added security of having two copies of your data, securely stored and easily accessible.",
            },
            {
              icon: "/img/products_services/product&services/managed-online-backup/mob-4.svg",
              title: "End-to-End Encryption:",
              item: "Robust encryption safeguards your data from unauthorized access, upholding its integrity and confidentiality.",
            },
          ],
        },
        // id 5
        {
          id: 5,
          assetsPath: "/img/products_services/product&services/mail-guard",
          img: "/thumbnail.webp",
          bgMain: "/bg-mail-guard.webp",
          type: ["service", "product"],
          title: "MailGuard",
          slug: "mail-guard",
          subDetail:
            "Avoid any email threats with our powerful security solution.",
          metaTitle: "MailGuard",
          metaDescription: "",
          titleBar: [
            {
              id: "description",
              name: "description",
            },
          ],

          mainDetail: [
            "Introducing Movaci MailGuard: The Next-Gen Mail Security Solution that Redefines Email Safety ",
            "In an increasingly interconnected world, email is more than just a communication tool—it's the backbone of your business. However, this essential medium is also one of the most vulnerable channels for cyber threats such as spam, phishing attacks, malware, and more. Enter Movaci MailGuard, a pioneering email security solution architected to safeguard your email infrastructure from the myriad of digital dangers lurking in the online realm.",
          ],
          description: [
            {
              title: "The Magic of Real-Time Protection",
              item: [
                "What sets MailGuard apart is its proactive, real-time monitoring capabilities. The moment a malicious threat manifests—be it a Trojan, virus, or phishing attempt—MailGuard instantly detects and isolates it. This real-time response minimizes risk, prevents data breaches, and ensures that your email communications flow smoothly and securely at all times.",
              ],
            },
            {
              title: "The Promise of High Availability",
              item: [
                "Downtime is not an option when it comes to business-critical communication. That’s why MailGuard features a high-availability clustering system, designed to ensure that your email infrastructure remains operational, come what may. Should one server falter, another seamlessly takes over, guaranteeing continuous protection and uninterrupted service.   Embrace the future of worry-free, secure email communication with Movaci MailGuard. Don't just protect your inbox; safeguard the integrity, confidentiality, and continuity of your entire email ecosystem. Upgrade to Movaci MailGuard today and experience email security as it should be—uncompromising, proactive, and exceptionally reliable.",
              ],
            },
            {
              title:
                "A Multi-Faceted Defense Mechanism: Much More Than an Antivirus",
              item: [
                "At the core of MailGuard is an advanced, two-tier antivirus engine, meticulously designed to identify and neutralize threats before they infiltrate your system. But that's just the tip of the iceberg. With a potent array of security features including a spam-filtering gateway, cutting-edge messaging tracking center, and a high-availability clustering system, MailGuard offers a multi-layered defense strategy that adapts to the ever-changing threat landscape.",
              ],
            },
            {
              title:
                "Seamless Compatibility: Universal Protection Across Platforms",
              item: [
                "Whether you're using Microsoft Exchange Online or any other major on-premises or hosted email solution, MailGuard effortlessly integrates with your existing setup. This seamless compatibility ensures that no matter what email system you're operating on, your communications are consistently secure and your business stays protected.",
              ],
            },
            {
              title:
                "Comprehensive Messaging Tracking: Know What's Happening, When It Happens",
              item: [
                "With our innovative messaging tracking center, you gain unprecedented insight into your email traffic. This powerful feature allows you to monitor, trace, and audit email activities in real-time, providing a granular level of visibility that empowers you to preempt potential risks and fine-tune your email security policies accordingly.",
              ],
            },
          ],
        },
        // id 6
        {
          id: 6,
          assetsPath:
            "/img/products_services/product&services/managed-services",
          img: "/thumbnail.webp",
          bgMain: "/bg-managed-services.webp",
          type: ["service"],
          title: "Managed Services",
          slug: "managed-services",
          subDetail:
            "Let Movaci help your business grow through our industry-leading managed IT support services.",
          metaTitle: "Managed Services",
          metaDescription: "",
          titleBar: [
            {
              id: "description",
              name: "description",
            },
            {
              id: "services",
              name: "services",
            },
          ],

          mainDetail: [
            "A comprehensive range of Managed Services, encompassing the roles of Managed Services Provider (MSP), Managed Security Services Provider (MSSP), and Managed Detection and Response (MDR) provider is available, catering to the diverse and evolving landscape of IT needs.",
          ],
          description: [
            {
              title: "",
              item: "",
            },
          ],
          managedServicesList: [
            {
              managedServicesTitle: "Managed Services",
              managedServices: [
                {
                  title: "Infrastructure",
                  detail:
                    "Movaci’s infrastructure management team has some of the most impressive credentials in the IT vendor landscape. We have not only executed complex global IT transformation exercises but have also helped run efficient IT infrastructure services for some of the world’s leading companies. Our customers recognize us as a leader in core IT infrastructure management services. Movaci has a proven track record in high-complexity deliveries, customer satisfaction, and innovative solutions.",
                  content: [],
                },
                {
                  title: "Backup and Recovery ",
                  detail:
                    "A managed backup system is the last line of defense in the ability to successfully recover from a breach in your system and data. Having consistent and timely backups of your critical infrastructure stored at an offsite facility is the best way to be prepared for recovering from almost any incident. With Movaci’s Managed Online Backup (MOB) your business receives managed remote data backups with the added feature of encryption to ensure that your data is protected.",
                  content: [],
                },
                {
                  title: "User & System Support ",
                  detail:
                    "Movaci’s Global Service Desk (GSD) is a worldwide service that is available 24/7 to every Movaci customer. Our ITIL-certified staff are qualified to support all desktop, mobile, and wireless users with any trouble or question concerning Movaci services and products. We are dedicated to significantly reducing the complexities and obstacles involved in your IT organization.",
                  content: [],
                },

                {
                  title: "Cloud Services",
                  detail:
                    "Leverage managed cloud solutions with remote monitoring technologies that provide problem recognition and diagnosis quickly and efficiently. ",
                  content: [],
                },
              ],
            },
            {
              managedServicesTitle: "Managed Security Services",
              managedServices: [
                {
                  title: "Firewall",
                  detail:
                    "Managed Firewall provides administration, monitoring and maintenance of firewall infrastructure, thus freeing clients from the burden of policy management, upgrades and patch deployment. This service takes care of the day-to-day management of your firewall operations, providing improved availability and guaranteeing continuity.",
                  content: [],
                },
                {
                  title: "Patch Management",
                  detail:
                    "We provide a complete patch management solution within a single, easy-to-use web console, helping ensure we don’t need multiple tools to keep your third-party programs current.We can manually approve patches in batch across sites, networks, servers, and workstations.",
                  content: [],
                },
                {
                  title: "Endpoint Security",
                  detail:
                    "As a managed security services provider (MSSP), our suite of information security services provides your organization with comprehensive security solutions that align with your business and information security goals. From IT security assessments and critical asset protection to professional remediation and security program development, we work with you through the entire Cybersecurity Intelligence Lifecycle (CSIL) to design a solution that fits your objectives and budget.",
                  content: [],
                },

                {
                  title: "Email Security",
                  detail:
                    "Email Security services are designed to provide robust protection for your business communications. Leveraging advanced threat detection technologies, these services scan incoming and outgoing emails for malware, phishing attempts, and other cyber threats, ensuring that your company's data remains secure. The system also includes spam filtering capabilities to keep inboxes free from unwanted clutter.",
                  content: [],
                },
              ],
            },
            {
              managedServicesTitle: "Managed Detection and Response",
              managedServices: [
                {
                  title: "24/7 Monitoring",
                  detail:
                    "Movaci’s Managed EDR uses artificial intelligence to stop advanced threats and malware at the most vulnerable point – the endpoint. We monitor network and endpoint events and store the information on a centralized database for further analysis, investigation, or reporting. Powered by SentinelOne, Movaci’s EDR service provides advanced security protection by using multiple AI engines which provide complete visibility into all activity and even roll back threats with a single agent. As a result, customers gain operational efficiencies by not having to manage multiple products, technologies along with signatures, polices, and deployments.",
                  content: [],
                },
                {
                  title: "Advanced Threat Detection",
                  detail:
                    "Our multi-layered approach includes continuous monitoring, real-time threat detection, and effective incident response. We leverage commercial and open-source threat intelligence, integrating this data into our proactive defense strategies.",
                  content: [],
                },
                {
                  title: "Incident Response and Forensics",
                  detail:
                    "These services provide an essential safeguard for businesses in the digital age. In the event of a cyber attack or security breach, Our team of experts swiftly engages to mitigate the impact, containing the threat and preserving critical data. Utilizing state-of-the-art forensic tools, they meticulously analyze the incident to determine its source, extent, and the compromised data. Movaci's service emphasizes minimizing downtime, ensuring legal compliance, and helping businesses recover with confidence, while providing detailed insights for preventing future incidents.",
                  content: [],
                },

                {
                  title: "Threat Intelligence",
                  detail:
                    "A crucial component of our cybersecurity offerings, designed to provide businesses with advanced insights into potential cyber threats. This service leverages a vast repository of current and historical threat data, enabling Movaci to identify and understand emerging cyber threats rapidly. By continuously gathering and analyzing data from multiple sources, including global threat databases, dark web scans, and industry-specific feeds. This proactive approach not only aids in the early detection of new types of malware and sophisticated attack tactics but also enhances the overall effectiveness of Movaci's MDR services.",
                  content: [],
                },
              ],
            },
          ],
        },
        //  id 7
        {
          id: 7,
          assetsPath:
            "/img/products_services/product&services/security-auditing-and-testing",
          img: "/thumbnail.webp",
          bgMain: "/bg-security-auditing-and-testing.webp",
          bgContent: ["/bg-security-auditing-and-testing-content-1.svg"],
          type: ["service"],
          title: "Security Auditing and Testing",
          slug: "security-auditing-and-testing",
          subDetail:
            "Our security services are designed to meet the needs of small to mid-sized businesses and organizations.",
          metaTitle: "Security Auditing and Testing",
          metaDescription: "",
          titleBar: [
            {
              id: "description",
              name: "description",
            },
          ],

          mainDetail: [
            "Movaci's Security Auditing and Testing Services: The Pinnacle of Digital Resilience",
            "In a digital ecosystem rife with evolving threats, proactively securing your organization's network and systems is no longer optional—it's imperative. At Movaci, we specialize in delivering a complete portfolio of Security Auditing and Testing services, meticulously crafted to safeguard your enterprise assets. Whether you are a small business or a mid-size organization, our services are tailored to fortify your digital landscape, ensuring that you not only meet but exceed global compliance standards.",
          ],
          description: [
            {
              title: "Unveiling Our Security Service Suite",
              item: "",
              list: [
                {
                  title: "On-site Audits",
                  detailsTitle: false,
                  listStyle: "circle",
                  details: [
                    "Through a meticulous review of your on-site security measures, we assess vulnerabilities in your physical infrastructure. Our audits identify potential risks and offer actionable solutions to fortify your environment.",
                  ],
                },
                {
                  title: "Policy and Procedure Reviews",
                  listStyle: "circle",
                  detailsTitle: false,
                  listStyle: "circle",
                  details: [
                    "We scrutinize your organization’s security policies and procedures to ensure they are robust and in-line with global best practices and standards, such as PCI DSS, HIPAA, ISO 27001, and GDPR.",
                  ],
                },
                {
                  title: "Automated Remote Vulnerability Testing",
                  detailsTitle: false,
                  listStyle: "circle",
                  details: [
                    "Our cutting-edge remote vulnerability testing services offer an unobtrusive yet rigorous examination of your network for any weak points that could be exploited by attackers. We provide a detailed report, complete with recommended remedial actions.",
                  ],
                },
                {
                  title: "Security Operations Center (SOC)",
                  detailsTitle: false,
                  listStyle: "circle",
                  details: [
                    "Our SOC is the fortress where continuous monitoring happens in real-time, providing instantaneous alerts and automated responses to any security incidents. This level of vigilance is crucial for effective threat detection and prevention.",
                  ],
                },
                {
                  title: "Security Gap Assessment",
                  detailsTitle: false,
                  listStyle: "circle",
                  details: [
                    "Where are the loopholes in your security architecture? Our Security Gap Assessment pinpoints these vulnerabilities, helping you make informed decisions on improvements and resource allocation.",
                  ],
                },
                {
                  title: "Vulnerability Assessment",
                  detailsTitle: false,
                  listStyle: "circle",
                  details: [
                    "We conduct an exhaustive assessment of your system vulnerabilities, from software bugs to configuration errors. Our aim is to provide a prioritized list of weaknesses along with proposed fixes.",
                  ],
                },
                {
                  title: "Penetration Testing",
                  detailsTitle: false,
                  listStyle: "circle",
                  details: [
                    "Our certified professionals simulate real-world attacks on your systems to identify vulnerabilities that are often overlooked by automated scans. The objective is not just to find weak spots, but to understand how these vulnerabilities can be chained together by an attacker to compromise your system.",
                  ],
                },
              ],
              itemAfter: "",
            },
            {
              title:
                "The Movaci Advantage: World-Class Talent and Certifications",
              item: [
                "When it comes to security, expertise matters, and ours is second to none. Our team boasts professionals with esteemed certifications, including ISC2 CISSP, CISA, CompTIA CASP, EC-Council CEH, CompTIA PenTest+, and Offensive Security OSCP. With years of hands-on experience in auditing, penetration testing, and compliance, our staff provides unparalleled insight into the security posture of your organization.",
              ],
              list: [],
              itemAfter: "",
            },
            {
              title:
                "Why Choose Movaci's Security Auditing and Testing Services?",
              item: "",
              list: [
                {
                  title: "",
                  detailsTitle: true,
                  listStyle: "circle",
                  details: [
                    {
                      title: "Multi-layered Approach:",
                      content:
                        " Our services employ a combination of redundancy, encryption, and strict adherence to international security standards.",
                    },
                    {
                      title: "In-depth Analysis: ",
                      content:
                        "Beyond identifying vulnerabilities, we offer specific recommendations for fortification and best practices.",
                    },
                    {
                      title: "Holistic View:",
                      content:
                        " From policy reviews to hands-on penetration testing, we provide a 360-degree perspective on your organization's security posture.",
                    },
                  ],
                },
              ],
              itemAfter:
                "Fortify your defenses, mitigate risks, and achieve unparalleled digital resilience with Movaci's Security Auditing and Testing services. Because when it comes to security, compromise is not an option. Secure your digital realm with Movaci today.",
            },
          ],
          managedServicesTitle: "Security Operations Center",
          managedServices: [
            {
              title: "Real-time analysis",
              position: "left",
              detail: "",
              content: {
                contentTitle: "",
                levels: [
                  "Movaci’s Security Operations Center (SOC) is a service that facilitates ongoing real-time monitoring of any information security system. Our highly-trained team monitors and analyzes your organization’s security posture on an ongoing basis. We use advanced technology, provide transparency, and enforce productivity in order to guarantee a secure data flow environment for you.",
                  "With new attacks constantly being unleashed into the wild, organizations like yours need the insight and the fast, effective responses which Movaci’s SOC team provides. Not only will Movaci shield your company from the constant risk of threats to your security system, but our team also aids with any compliance issues your business may require.",
                ],
              },
            },
            {
              title: "Security Gap Assessment",
              position: "left",
              detail:
                "Our Security Gap Assessment provides your business with an in-depth look at your current security posture and provides a customized strategic roadmap comprised of short- and long-term milestones, as well as a plan of action to achieve your security goals. Conducted by certified security professionals, this comprehensive assessment evaluates your environment based on 23 unique points of inspection across 5 holistic categories.",
              content: {},
            },
            {
              title: "Vulnerability Assessment",
              position: "center",
              detail:
                "Enhanced transparency into the internal and external perimeters of your network is critical in determining where your security needs to be strengthened. With our Vulnerability Assessment, you receive a valuable baseline for determining appropriate defenses and remediation activities to further secure your network, as well as a customized report outlining key actions.",
              content: {},
            },
            {
              title: "With Movaci’s SOC service, you get the following:",
              position: "right",
              detail: "",
              content: {},
              contentli: {
                levels: [
                  "24×7 access to the SOC team",
                  "Customized and flexible support for your business’ unique situation",
                  "Expert security monitoring and compliance assurance",
                  "Full cloud-based monitoring and management with no additional hardware costs",
                  "Real-time updates from 3+ sources",
                  "Best-in-class encryption based on ISO methodologies",
                ],
              },
            },
            {
              title: "Here’s a basic rundown of our process:",
              position: "right",
              detail: "",
              content: {},
              contentli: {
                levels: [
                  "We create an initial baseline of your information security landscape tailored to your business requirements and objectives",
                  "We conduct an evaluation of the core infrastructure’s susceptibility to external access or disruption",
                  "We compare how your environment stacks up with your industry’s standards and best practices",
                  "We provide the results of a Personally Identifiable Information (PII) scan",
                  "We provide numerical security maturity scores",
                  "We share with you our prioritized recommendations and roadmap for success",
                ],
              },
            },
          ],
          securityAuditing: [
            {
              title: "Vulnerability Assessment",
              position: "center",
              content: {
                contentTitle: "",
                levels: [
                  "Enhanced transparency into the internal and external perimeters of your network is critical in determining where your security needs to be strengthened. With our Vulnerability Assessment, you receive a valuable baseline for determining appropriate defenses and remediation activities to further secure your network, as well as a customized report outlining key actions.",
                ],
                iconList: [
                  {
                    icon: "/security-auditing-and-testing-1.svg",
                    title: "Scan for external and internal vulnerabilities",
                    item: "",
                  },
                  {
                    icon: "/security-auditing-and-testing-2.svg",
                    title: "Perform a firewall security audit",
                    item: "",
                  },
                  {
                    icon: "/security-auditing-and-testing-3.svg",
                    title: "Perform system patch audits",
                    item: "",
                  },
                  {
                    icon: "/security-auditing-and-testing-4.svg",
                    title: "Compare results to system hardening benchmarks",
                    item: "",
                  },
                  {
                    icon: "/security-auditing-and-testing-5.svg",
                    title:
                      "Use the industry-standard Common Vulnerability Scoring System (CVSS) for comparison",
                    item: "",
                  },
                ],
              },
            },
            {
              title: "WHITE BOX TESTING",
              position: "left",
              content: {
                contentTitle: "",
                levels: [
                  "We have full access to your infrastructure when testing. This type of testing will simulate an attacker who has been collecting information about your company and may have gained access through various methods, including an undisclosed or new and unpatched (zero-day) vulnerability. This test will highlight weaknesses in your defense-in-depth strategy, monitoring systems, patching policies, and system/networking configurations.",
                ],
              },
            },
            {
              title: "GRAY BOX TESTING",
              position: "left",
              content: {
                contentTitle: "",
                levels: [
                  "We have partial knowledge of your infrastructure when testing. Grey box testing is a hybrid approach to the white box and black box testing paradigms. This testing simulates a threat that has gathered information about your company and network from an attacker with a moderate skill set and amount of time. This test will highlight weaknesses in your defense-in-depth strategy, perimeter security, and information leakage.",
                ],
              },
            },
            {
              title: "BLACK BOX TESTING",
              position: "right",
              content: {
                contentTitle: "",
                levels: [
                  "We test your network without having any knowledge of your IT. Black box testing allows us to simulate a threat that has little information regarding your business and infrastructure. This testing highlights what information a company is unintentionally leaking which could allow an attacker to map and attack the target network.",
                ],
              },
            },
          ],
        },
        // id 8
        {
          id: 8,
          assetsPath: "/img/products_services/product&services/it-consulting",
          img: "/thumbnail.webp",
          bgMain: "/bg-it-consulting.webp",
          bgContent: ["/bg-it-consulting-content-1.svg"],
          type: ["service"],
          title: "IT Consulting",
          slug: "it-consulting",
          subDetail:
            "Professional and custom-tailored IT consultation services.",
          metaTitle: "IT Consulting",
          metaDescription: "",
          titleBar: [
            {
              id: "description",
              name: "description",
            },
          ],

          mainDetail: [
            "Discover the Future of Strategic IT Consultancy with Movaci: Where Innovation Meets Business Acumen",
            "Movaci IT Consulting Services—the linchpin of digital transformation for enterprises, large or small. In a digital era where technology plays an indispensable role in shaping business landscapes, our custom-tailored IT solutions aim to redefine the way your organization navigates the complex matrix of IT challenges. With Movaci as your trusted IT partner, say goodbye to mundane distractions and inefficiencies that hamper your core business processes. Instead, embrace a future of unparalleled security, efficiency, and innovation.",
          ],
          description: [
            {
              title:
                "Virtual CIO and vCISO: Pioneering Cybersecurity Solutions",
              item: [
                "In a world of escalating cyber threats, keeping your business secure is not a luxury—it’s a necessity. Recognizing the acute scarcity of skilled cybersecurity professionals, Movaci steps in to fill this critical gap. Our highly specialized security consultants and Virtual Chief Information Security Officer (vCISO) services provide unparalleled expertise across all facets of cybersecurity.",
              ],
              list: [
                {
                  title:
                    "What can you expect from our vCISO and Security Consulting services?",
                  detailsTitle: true,
                  listStyle: "circle",
                  details: [
                    {
                      title: "Strategic Security Program Development:",
                      content:
                        "We don't just point out vulnerabilities; we help you architect a robust, risk-based security program that aligns with your business goals.",
                    },
                    {
                      title: "Expert Oversight:",
                      content:
                        "Already have a security program in place? Our experts can conduct in-depth reviews to identify potential weak spots and optimize your existing systems for peak performance.",
                    },
                    {
                      title: "Guidance on Key Security Elements:",
                      content:
                        "From compliance to data protection to risk mitigation, we offer comprehensive insights and actionable plans that elevate your entire security posture.",
                    },
                  ],
                },
              ],
            },
            {
              title: "The Movaci Advantage: More Than Just Consultants",
              item: [
                "At Movaci, we don’t just offer advice; we align ourselves as strategic partners committed to propelling your business into its next phase of growth. Our IT strategies are meticulously designed, rigorously tested, and seamlessly integrated, ensuring you not only adapt to the fast-evolving technological landscape but also thrive within it.",
              ],
            },
            {
              title: "IT Assessment: The Gold Standard in Industry Insights",
              item: [
                "Our IT assessments stand unparalleled in breadth and depth. Promising not just surface-level scrutiny but a deep, analytical dive, we offer the most comprehensive view of your IT infrastructure, its strengths, and its opportunities for improvement. When we say we deliver the broadest insights, we mean it—guaranteed!",
              ],
            },
            {
              title: "Comprehensive Service Offerings: End-to-End IT Support",
              item: [
                "Beyond Virtual CIO, vCISO, and IT Assessments, our portfolio of services spans the entire spectrum of IT needs. From network architecture to cloud migration, from enterprise software solutions to Business Continuity Planning, we have the expertise and the tools to handle it all.",
                "Choose Movaci, and you’re not just selecting an IT consulting firm; you’re aligning with a partner who is as committed to your success as you are. Let us help you turn your IT challenges into strategic advantages. Unlock the future of business technology with Movaci IT Consulting Services today.",
              ],
            },
          ],
          managedServicesTitle:
            "Professional and custom-tailored IT consultation services.",
          managedServices: [
            {
              title: "Virtual CIO",
              position: "left",
              detail:
                "According to CSO Online, the threat landscape is growing, which means that there is an increased need for security programs. However, there aren’t enough skilled cybersecurity professionals to fill the current demand. Movaci’s security consultants and virtual Chief Information Security Officer (vCISO) offer a solution to this problem by providing cybersecurity consulting services throughout the security lifecycle. We help with strategy, planning, and ongoing program improvement.",
              content: {},
            },
            {
              title:
                "Disaster Recovery andBusiness Continuity Consulting (DRBC) Planning",
              position: "left",
              detail: "",
              content: {
                levels: [
                  "A successful disaster recovery plan is about building a good foundation for business resilience. Unfortunately, many middle market and small organizations have incomplete or untested plans, or they don’t have a plan at all.",
                  "According to the Federal Emergency Management Agency (FEMA), more than 40% of businesses never reopen after a disaster, and for those that do, only 29% continue to operate after two years. Additionally, companies that lose their information technology for nine days or more after a disaster are bankrupt within a year.",
                  "Our team has served the unique needs of organizations of all sizes in nearly every industry sector. This experience provides our team with a deep understanding of the unique characteristics, requirements, and drivers associated with each industry. We build business continuity and IT disaster recovery plans which are aligned with the best professional practices.",
                ],
              },
              contentli: {},
            },
            {
              title: "IT Assessment",
              position: "right",
              detail:
                "Movaci provides one of the most comprehensive IT assessments in the industry. We will give your organization the broadest insights of any IT assessment module, guaranteed!",
              content: {},
              contentli: {
                levels: [
                  "RISK REPORT",
                  "NETWORK MANAGEMENT PLAN",
                  "SITE DIAGRAM",
                  "FULL DETAIL REPORT",
                  "ASSET DETAIL REPORT",
                  "FULL DETAIL CHANGE REPORT",
                  "IT SWOT ANALYSIS",
                  "BACKUP AND DISASTER RECOVERY NEEDS ANALYSIS REPORT",
                  "EXCEL ANALYSIS REPORT",
                  "EXCEL ANALYSIS REPORT",
                  "OPTIONAL QUARTERLY BUSINESS REPORT",
                ],
              },
            },
          ],
        },
        //  id 9 
        {
          id: 9,
          assetsPath:
            "/img/products_services/product&services/training-services",
          img: "/thumbnail.webp",
          bgMain: "/bg-training-services.webp",
          bgContent: "",
          type: ["service"],
          title: "Training Services",
          slug: "training-services",
          subDetail:
            "Push your business to the next level with skills and certifications Movaci provided.",
          metaTitle: "Training Services",
          metaDescription: "",
          titleBar: [
            {
              id: "description",
              name: "description",
            },
          ],

          mainDetail: [
            "Unveiling Movaci's Premium Training Services: Where Excellence Meets Education",
            "In the fast-paced world of technology, staying ahead of the curve is not just an advantage—it's a necessity. At Movaci, we understand the value of empowering your team with the knowledge and skills they need to excel in an ever-evolving digital landscape. Our top-of-the-line training services span across a multitude of domains, meticulously designed to suit various organizational needs. From Microsoft Certified Training to Security Awareness Programs, we've got you covered.",
          ],
          description: [
            {
              title: "",
              item: [],
              img: "/img/products_services/product&services/svg/bg-secure-hosting-1.svg",
            },
            {
              title: "Why Choose Movaci's Training Services?",
              item: null,
              list: [
                {
                  title: "",
                  detailsTitle: true,
                  details: [
                    {
                      title: "Expert-Led Courses:",
                      content:
                        "Our trainers aren't just teachers; they are certified experts in their respective fields, bringing real-world insights into the classroom.",
                    },
                    {
                      title: "Customizable Curriculum:",
                      content:
                        "Our flexible courses can be adapted to fit your specific needs, whether you require beginner-level guidance or advanced technical training.",
                    },
                    {
                      title: "Dynamic Learning Environment:",
                      content:
                        "Whether at our state-of-the-art training facilities or at your location, we ensure an interactive, hands-on learning experience.",
                    },
                  ],
                },
              ],
            },
          ],
          iconList: [
            {
              icon: "/img/products_services/product&services/training-services/training-services-1.webp",
              title: "Microsoft Certified Training",
              item: [
                "Delivered by our staff of Microsoft Certified Trainers (MCT), our Microsoft training courses provide an exhaustive understanding of technologies ranging from elementary application management to intricate server and cloud administration. Stay ahead of your competition by mastering the latest Microsoft technologies tailored to your business needs.",
              ],
            },
            {
              icon: "/img/products_services/product&services/training-services/training-services-2.webp",
              title: "CompTIA Certified Training",
              item: [
                "Unlock your organization's full potential with our CompTIA training programs. Ranging from foundational to advanced courses, we cover every aspect of technology, ensuring that you and your team are equipped to add unprecedented value to your operations.",
              ],
            },
            {
              icon: "/img/products_services/product&services/training-services/training-services-3.webp",
              title: "ITIL Axelos Training",
              item: [
                "We offer comprehensive training in ITIL Axelos, a globally recognized framework for IT Service Management. Through these courses, your directors, managers, and IT staff will garner invaluable insights into optimizing service organization and implementation, thereby enhancing accountability, communication, and overall efficiency.",
              ],
            },
            {
              icon: "/img/products_services/product&services/training-services/training-services-4.webp",
              title: "CertiProf",
              item: [
                "Pioneers in the field, we are the first CertiProf® Authorized Training Partner in Asia. Established in the United States in 2015, CertiProf offers an array of certifications designed to cultivate professional excellence.",
              ],
            },
            {
              icon: "/img/products_services/product&services/training-services/training-services-5.webp",
              title: "HIPAA Training",
              item: [
                "With a focus on Privacy and Security Rules, our HIPAA training programs are tailored to the unique needs of your organization. Whether you're a healthcare provider or a business associate, our courses elucidate the intricacies of Protected Health Information (PHI) and electronic PHI (ePHI) handling.",
              ],
            },
            {
              icon: "/img/products_services/product&services/training-services/training-services-6.webp",
              title: "Security Awareness Training",
              item: [
                "Your employees may be your most valuable asset, but they can also be your weakest link when it comes to security. Our Security Awareness Training aims to transform your team into the first line of defense against cyber threats, fostering a culture of security mindfulness.",
              ],
            },
            {
              icon: "/img/products_services/product&services/training-services/training-services-7.webp",
              title: "EC-Council Training",
              item: [
                "Given the escalating cybersecurity threats, the importance of skilled cybersecurity personnel cannot be overstated. Our EC-Council Training courses offer a comprehensive approach to mastering the critical skills required in today’s cybersecurity landscape.",
                "Sharpen your edge, elevate your workforce, and redefine excellence with Movaci’s Premium Training Services. Where other training programs end, we're just getting started. Prepare to transcend traditional boundaries and soar to new heights with Movaci.",
              ],
            },
          ],
        },
        // id 10
        {
      "id": 10, 
      "assetsPath": "/img/products_services/product&services/internet-services-summary",
      "img": "/thumbnail.webp",
      "bgMain": "/bg.webp",
      "bgContent": "",
      "type": ["service"],
      "title": "Internet Services",
      "slug": "internet-services",
      "subDetail": "Business internet designed for reliability and tailored for your connectivity needs.",
      "metaTitle": "Internet Services",
      "metaDescription": "",
      "titleBar": [
        {
          "id": "services",
          "name": "Services"
        }
      ], 
      "mainDetail": [
        "Business Internet Solutions by Movaci",
        "We understand the critical role that reliable internet service plays in the success of modern businesses. Our range of business internet solutions is meticulously designed to meet the diverse needs of Thai businesses, both large and small. With three distinct plans available, we ensure that your business receives the perfect level of connectivity to thrive in today’s digital landscape. "
      ],
      "description": [
        {
          "title": "ProNet",
          "item": [
            "ProNet is tailored specifically for small businesses seeking affordable yet high-quality internet service. This plan not only includes superior internet services but also provides access to Movaci's award-winning support team, ensuring that your business always remains connected and operational. ProNet is ideal for startups and small enterprises that require reliable internet connectivity without the high costs associated with larger plans."
          ]
        },
        {
          "title": "SmartNet",
          "item": [
            "SmartNet is engineered for small to medium-sized businesses that need more than just basic internet service. This plan includes a business-grade dedicated MPLS fiber connection, ensuring high-speed and reliable internet access tailored to support the needs of growing businesses."
          ]
        },
        {
          "title": "MetroNet",
          "item": [
            "MetroNet represents the pinnacle of our internet service offerings, designed for corporate and enterprise users who demand the highest levels of reliability and performance. This premier service includes up to two dedicated MPLS fiber connections—primary and backup—to ensure high availability and uninterrupted service. Each connection is continuously monitored by Movaci’s Network Operations Center, staffed 24/7 by expert technicians ready to address any issues immediately."
          ]
        },
        {
          "title": "Business Connectivity in the U.S.A.",
          "item": [
            "Movaci extends its expertise in internet service provisioning to businesses and nonprofits in the USA, offering unparalleled reliability and value. Our business internet solutions in the U.S. are designed to provide your organization with a stable and reliable internet connection, surpassing the offerings of your current ISP in both quality and price."
          ]
        }
      ],
      "internetServices": {
        "internet_title": ["Movaci Internet Services Summary"],
        "title": [
          {
            "name": "Compare plans",
            "sub": "Choose your organisational plan"
          },
          {
            "name": "ProNet",
            "sub": ""
          },
          {
            "name": "SmartNet",
            "sub": ""
          },
          {
            "name": "MetroNet",
            "sub": ""
          }
        ],
        "details": [
          ["Designed For", "Small Business", "Business", "Enterprise"],
          [
            "Connection Type",
            "Shared GPON Fiber Connection",
            "Dedicated Metro-E Fiber Connection",
            "Dedicated Metro-E Fiber Connection"
          ],
          [
            "Connection Options",
            "200/200, 500/500",
            "By Request",
            "By Request"
          ],
          ["Internet Ratio", "1:20", "1:5", "1:1"],
          ["Equipment", "Fiber Router", "Managed Router", "Managed Router"],
          ["QOS", false, true, true],
          ["Static IP", false, "One (1) Static IP", "By Request"],
          [
            "SLA",
            "Next Business Day",
            "99.9%, 6 hrs",
            "99.9%, 24x7x365, 4 hrs"
          ],
          [
            "Monitoring",
            "Yes, Basic",
            "Yes, PRTG and SMS",
            "Yes, PRTG and SMS"
          ],
          ["Contract", "1 year", "1 or 2 years", "1 or 2 years"],
          [
            "Support Hours",
            "9 am - 6 pm (Mon - Fri)",
            "9 am - 6 pm (Mon - Fri)",
            "24 x 7 x 365"
          ]
        ],
        "tips": [
          {
            "icon": "/icons/start.svg",
            "title": "For more information",
            "text": " please visit our website at www.movaci.com, email sales@movaci.com or phone (053) 920 555 and speak with our sales team."
          },
          {
            "icon": "",
            "title": "ProNet",
            "text": "is designed for affordable small business use and includes quality Internet services and Movaci’s award-winning support team."
          },
          {
            "icon": "",
            "title": "SmartNet",
            "text": "is designed for small to medium business use and includes a business-grade dedicated MPLS fiber connection, static IP address/es, managed router and dedicated high-quality bandwidth."
          },
          {
            "icon": "",
            "title": "MetroNet",
            "text": "is our premier Internet service for corporate and enterprise use. MetroNet includes up to two dedicated MPLS fiber connections, primary and backup, with high availability. Each MetroNet connection is monitored by Movaci’s Network Operations Centerwhich is available 24 hours a day."
          }
        ]
      }
        },
        // id 11
        {
      "id": 11, 
      "assetsPath": "/img/products_services/product&services/hardware&software-procurement-services",
      "img": "/thumbnail.webp",
      "bgMain": "/bg.webp",
      "bgContent": "",
      "type": ["service"],
      "title": "Hardware & Software Procurement Services",
      "slug": "hardware-software-procurement-services",
      "subDetail": "Top-tier products from industry leading brands.",
      "metaTitle": "Movaci Hardware Software Procurement Services for Industry Leading Brands.",
      "metaDescription": "Movaci is a certified reseller of the leading technology and cybersecurity brands in hardware and software products.",
      "titleBar": [
        {
          "id": "description",
          "name": "description"
        }
      ],
      
      "mainDetail": [
        "Welcome to Movaci's Hardware & Software Procurement Services.",
        "We simplify your technology needs with top-tier solutions from industry-leading brands, tailored to support your business's success. Whether you're based in the US or Thailand, we ensure you have access to the highest quality products to keep your operations running smoothly and efficiently."
      ],
      "description": [
        {
          "title": "",
          "item": [],
          "img": "/img/products_services/product&services/svg/bg-secure-hosting-1.svg"
        },
        {
          "title": "Why Choose Movaci?",
          "item": null,
          "list": [
            {
              "title": "",
              "detailsTitle": true,
              "details": [
                {
                  "title": "",
                  "content": "At Movaci, we know that the right technology is essential for achieving your business goals. Our procurement services save you time and money by providing a wide range of hardware and software solutions customized to your needs."
                }
              ]
            }
          ]
        }
      ],
      "iconList": [
        {
          "icon": "/img/products_services/product&services/hardware&software-procurement-services/hardware&software-procurement-services-1.png",
          "title": "DELL",
          "item": "Reliable desktops, laptops, servers, and accessories."
        },
        {
          "icon": "/img/products_services/product&services/hardware&software-procurement-services/hardware&software-procurement-services-2.png",
          "title": "Apple",
          "item": 
            "Innovative MacBooks, iPads, and accessories to boost creativity and productivity."
          
        },
        {
          "icon": "/img/products_services/product&services/hardware&software-procurement-services/hardware&software-procurement-services-3.png",
          "title": "Logitech",
          "item": 
            "High-quality peripherals, including keyboards, mice, webcams, and conference equipment."
          
        },
        {
          "icon": "/img/products_services/product&services/hardware&software-procurement-services/hardware&software-procurement-services-4.png",
          "title": "CISCO",
          "item": 
            "Advanced routers, switches, and security devices for robust networking solutions."
          
        },
        {
          "icon": "/img/products_services/product&services/hardware&software-procurement-services/hardware&software-procurement-services-5.png",
          "title": "Ubiquiti",
          "item":"Scalable and reliable wireless networking solutions."
        },
        {
          "icon": "/img/products_services/product&services/hardware&software-procurement-services/hardware&software-procurement-services-6.png",
          "title": "HP",
          "item": 
            "Comprehensive range of printers, desktops, laptops, and servers."
          
        },
        {
          "icon": "/img/products_services/product&services/hardware&software-procurement-services/hardware&software-procurement-services-7.png",
          "title": "Intel",
          "item": "State-of-the-art processors and computing solutions."
        },
        {
          "icon": "/img/products_services/product&services/hardware&software-procurement-services/hardware&software-procurement-services-8.png",
          "title": "Microsoft",
          "item": 
            "Productivity-enhancing software, including Windows, Office 365, and enterprise solutions"
          
        },
        {
          "icon": "",
          "title": "",
          "item": 
            "Movaci is a reseller for over 300 brands. Contact us for product specific information."
          
        }
      ],
      "content2": [
        {
          "listType": "decimal",
          "title": "Our Process",
          "list": [
            {
              "mainText": "Consultation : ",
              "text": "We start by understanding your unique business needs and objectives. Our team works closely with you to identify the best products and solutions."
            },
            {
              "mainText": "Selection : ",
              "text": "We scrutinize your organization’s security policies and procedures to ensure they are robust and in-line with global best practices and standards, such as PCI DSS, HIPAA, ISO 27001, and GDPR."
            },
            {
              "mainText": "Procurement : ",
              "text": "We manage the entire procurement process, ensuring you receive the best prices and timely delivery."
            },
            {
              "mainText": "Support : ",
              "text": " Our service doesn’t end with the purchase. We offer ongoing support to ensure your new technology integrates seamlessly into your operations."
            }
          ]
        },
        {
          "listType": "circle",
          "title": "The Movaci Advantage",
          "list": [
            {
              "mainText": "Expertise : ",
              "text": "Our knowledgeable and experienced sales team is committed to finding the perfect solutions for your business."
            },
            {
              "mainText": "Competitive Pricing : ",
              "text": "We offer competitive pricing on all products, ensuring you get the best value for your investment."
            },
            {
              "mainText": "Customer Service : ",
              "text": "We pride ourselves on exceptional customer service, providing personalized support every step of the way."
            }
          ]
        }
      ],
      "content3": [
        {
          "title": "Get Started Today",
          "contents": [
            "Transform your business with the right technology solutions from Movaci. Contact our sales team to learn more about our hardware and software procurement services.",
            "Let Movaci be your trusted partner in technology procurement, and experience the difference that quality, expertise, and dedicated support can make for your business."
          ]
        }
      ]
        },
        // id 12
        {
      "id": 12,
      "assetsPath": "/img/products_services/product&services/secure-email-services",
      "img": "/thumbnail.webp",
      "bgMain": "/bg-main.webp",
      "bgContent": "",
      "type": ["service"],
      "title": "Secure Email Services",
      "slug": "secure-email-services",
      "subDetail": "Ensure the confidentiality, integrity, and availability of your email communications.",
      "metaTitle": "Secure Email Services",
      "metaDescription": "Ensure the confidentiality, integrity, and availability of your email communications.",
      "titleBar": [
        {
          "id": "description",
          "name": "description"
        }
      ],
      "mainDetail": [
        "Movaci’s Secure Email service offers a state-of-the-art, highly secure communication solution tailored for businesses seeking top-tier email security. This service is designed to ensure the confidentiality, integrity, and availability of your email communications, aligning with today's stringent IT security standards."
      ],
      "content1": [
        {
          "listType": "circle",
          "title": "Key Features",
          "list": [
            {
              "title": "End-to-End Encryption",
              "mainText": [],
              "text": [
                "Utilizes advanced encryption protocols (AES-256, RSA-2048) for both in-transit and at-rest data.",
                "Offers end-to-end encryption, ensuring emails are readable only by the intended recipients.",
                "Supports Secure/Multipurpose Internet Mail Extensions (S/MIME) for message signing and encryption."
              ]
            },
            {
              "title": "Compliance and Auditing",
              "mainText": [],
              "text": [
                "Meets compliance requirements for GDPR, HIPAA, and other regulatory frameworks.",
                "Detailed logging and auditing capabilities for tracking and analyzing email activities."
              ]
            },
            {
              "title": "Secure Protocols",
              "mainText": [],
              "text": [
                "Implements industry-standard protocols including TLS (Transport Layer Security) for secure email transmission.",
                "Supports Internet Message Access Protocol Secure (IMAPS) and Post Office Protocol 3 Secure (POP3S) for encrypted email retrieval.",
                "Employs DomainKeys Identified Mail (DKIM) and Sender Policy Framework (SPF) for email authentication."
              ]
            },
            {
              "title": "User-Friendly Interface",
              "mainText": [],
              "text": [
                "Intuitive web interface for seamless user experience.",
                "Easy integration with existing email clients (Outlook, Thunderbird, Apple Mail)."
              ]
            },
            {
              "title": "Two-Factor Authentication",
              "mainText": [],
              "text": [
                "Integrates 2FA to add an extra layer of security for user access.",
                "Compatible with various 2FA methods including SMS, email, and authenticator apps."
              ]
            },
            {
              "title": "Customizable Settings",
              "mainText": [],
              "text": [
                "Ability to set email policies and rules tailored to specific business needs.",
                "Options for email retention, archiving, and eDiscovery."
              ]
            },
            {
              "title": "Anti-Spam and Anti-Phishing Protection",
              "mainText": [],
              "text": [
                "Advanced filtering systems to protect against spam, phishing, and malicious email content.",
                "Regularly updated threat intelligence databases to stay ahead of emerging email-based threats."
              ]
            },
            {
              "title": "Dedicated Support",
              "mainText": [],
              "text": [
                "24/7 customer support from Movaci’s team of IT and security experts.",
                "Regular updates and maintenance to ensure the highest level of security."
              ]
            },
            {
              "title": "Data Loss Prevention (DLP)",
              "mainText": [],
              "text": [
                "Features DLP policies to prevent sensitive information from being sent outside the corporate network.",
                "Customizable rules based on data types, keywords, and sender/recipient identity."
              ]
            }
          ]
        }
      ],
      "content2": [
        {
          "listType": "",
          "title": "Security Highlights",
          "list": [
            {
              "title": "Data Encryption",
              "mainText": [],
              "text": [
                "AES-256 for data at rest; RSA-2048 and TLS for data in transit."
              ]
            },
            {
              "title": "Protocols",
              "mainText": [],
              "text": ["TLS, IMAPS, POP3S, S/MIME."]
            },
            {
              "title": "Authentication",
              "mainText": [],
              "text": [
                "2FA, SPF, DKIM, and DMARC for email authentication and integrity."
              ]
            },
            {
              "title": "DLP Features",
              "mainText": [],
              "text": [
                "Customizable content filtering and data protection policies."
              ]
            },
            {
              "title": "Compliance",
              "mainText": [],
              "text": ["GDPR, HIPAA, and more."]
            },
            {
              "title": "Anti-Spam & Anti-Phishing",
              "mainText": [],
              "text": ["Advanced filtering and threat intelligence."]
            }
          ]
        }
      ],
      "content3": [
        {
          "listType": "circle",
          "title": "Ideal for Businesses",
          "list": [
            {
              "title": "",
              "mainText": [],
              "text": [
                "Handle sensitive information and require stringent email security.",
                "Need to comply with various regulatory standards.",
                "Prioritize the confidentiality and integrity of communication.",
                "Seek a robust, user-friendly secure email solution."
              ]
            }
          ],
          "bgImage": true
        }
      ],
      "content4": [
        {
          "title": ["About Movaci"],
          "texts": [
            "Movaci is a leading provider in IT Services and IT Security, committed to delivering cutting-edge solutions. Our expertise in cybersecurity and IT infrastructure ensures that our Secure Email service is not just a product but a guarantee of security, efficiency, and reliability."
          ],
          "contacts": [
            {
              "text": "For more information, visit",
              "type": "link",
              "path": "www.movaci.com",
              "value": "https://movaci.com"
            },
            {
              "text": "or contact our sales team at",
              "type": "email",
              "path": "sales@movaci.com",
              "value": "sales@movaci.com"
            }
          ]
        }
      ],
      "plansPricing": [
        {
          "title": "Secure Email",
          "contentListStyle": "dash",
          "contents": [
            "Secure POP3/IMAP-SSL Access",
            "Secure Webmail Access",
            "Email Security (Spam, Antivirus, Phishing, Malware)"
          ],
          "offering": [
            {
              "listType": "circle",
              "texts": ["10 GB Email Disk Space", "5 Email Aliases"]
            }
          ],
          "pricing": [
            {
              "price": "$35.00USD",
              "hint": "Annually"
            }
          ],
          "url": "https://my.movaci.com/index.php/store/movaci-secure-email/secure-email"
        },
        {
          "title": "Secure Email - Private Domain",
          "contentListStyle": "dash",
          "contents": [
            "Secure POP3/IMAP-SSL Access",
            "Secure Webmail Access",
            "Email Security (Spam, Antivirus, Phishing, Malware)"
          ],
          "offering": [
            {
              "listType": "circle",
              "texts": ["10 GB Email Disk Space", "5 Email Aliases"]
            }
          ],
          "pricing": [
            {
              "price": "$35.00USD",
              "hint": "Annually"
            }
          ],
          "url": "https://my.movaci.com/index.php/store/movaci-secure-email/secure-email-private-domain"
        }
      ]
        },
        // id 13
        {
      "id": 13,
      "assetsPath": "/img/products_services/product&services/next-cloud",
      "img": "/thumbnail.webp",
      "bgMain": "/bg-main.webp",
      "bgContent": "",
      "type": ["service"],
      "title": "Movaci Next Cloud",
      "slug": "next-cloud",
      "subDetail": "Robust, secure, and scalable private cloud solution to manage and share data seamlessly.",
      "metaTitle": "Movaci Next Cloud",
      "metaDescription": "Robust, secure, and scalable private cloud solution to manage and share data seamlessly.",
      "titleBar": [
        {
          "id": "description",
          "name": "description"
        }
      ],
      "mainDetail": [
        "Movaci NextCloud provides a robust, secure, and scalable private cloud solution that empowers businesses to manage and share their data seamlessly.Designed for organizations that require stringent data privacy and control, Movaci NextCloud ensures that all data is hosted within a dedicated environment, fully owned, and managed by the customer.Movaci’s Cloud Platform Specialists handle the setup, maintenance, and security, so clients can focus on their business without worrying about the integrity or accessibility of their data"
      ],
      "description": [
        {
          "title": "NextCloud 1 TB",
          "item": [
            "Suitable for larger organizations, this package offers 1 TB of storage with all the features of the previous packages, plus additional customization options. Clients can opt for advanced security features, dedicated server hosting, and hybrid cloud setups, with comprehensive monitoring and support from Movaci’s Cloud Platform Specialists."
          ],
          "img": ""
        },
        {
          "title": "NextCloud 100 GB",
          "item": [
            "Ideal for small teams and businesses, this package includes 100 GB of total storage. It covers core cloud features like secure file sharing, basic user management, and data encryption, with standard support from Movaci Cloud Platform Specialists."
          ],
          "img": ""
        },
        {
          "title": "NextCloud 500 GB",
          "item": [
            "Designed for growing businesses, this package provides 500 GB of storage, along with advanced features such as more granular user management, enhanced data-sharing controls, and integration capabilities. Customers receive priority support, ensuring quick assistance whenever needed."
          ],
          "img": ""
        }
      ],
      "ncIconList": [
        {
          "icon": "/next-cloud-1.svg",
          "title": "Encrypted Private Cloud Platform",
          "item": [
            "Every file stored and shared through Movaci NextCloud is encrypted, ensuring that sensitive information remains secure during transfer and at rest. The encryption protocols meet industry standards to protect against unauthorized access."
          ]
        },
        {
          "icon": "/next-cloud-2.svg",
          "title": "Granular Folder and File Sharing Settings",
          "item": [
            "Movaci NextCloud offers detailed control over how files and folders are shared within and outside the organization. Administrators and users can set permissions on a per-file or per-folder basis, including options for read-only access, editing, sharing, and link expiration."
          ]
        },
        {
          "icon": "/next-cloud-3.svg",
          "title": "Industry-Compliant User Identity and Access Management (IAM)",
          "item": [
            "Movaci NextCloud integrates robust IAM controls, including multi-factor authentication (MFA), LDAP, and Active Directory (AD) support. This ensures only authorized users have access to critical data, helping businesses meet compliance requirements, such as GDPR, HIPAA, and other regulatory frameworks."
          ]
        },
        {
          "icon": "/next-cloud-4.svg",
          "title": "Desktop and Mobile Sync Applications",
          "item": [
            "Users can sync their files across multiple devices, ensuring they have access to their data whether they're in the office or on the go. Movaci NextCloud’s applications are compatible with Windows, macOS, Linux, iOS, and Android, providing a consistent and reliable experience."
          ]
        },
        {
          "icon": "/next-cloud-5.svg",
          "title": "Single Sign-On (SSO) Integration Options",
          "item": [
            "Seamlessly integrate with existing SSO solutions to simplify the user experience. Users can securely log in to Movaci NextCloud using their existing credentials, reducing the need for multiple passwords and enhancing security across the organization."
          ]
        },
        {
          "icon": "/next-cloud-6.svg",
          "title": "Data Sovereignty, Multiple Hosting Locations",
          "item": [
            "Movaci understands the importance of data sovereignty. With multiple hosting locations, clients can choose where their data resides, ensuring compliance with local data residency laws and standards. Whether hosted on-premises, in Movaci’s secure data centers, or in a hybrid environment, customers have full control over their data’s location."
          ]
        },
        {
          "icon": "/next-cloud-7.svg",
          "title": "Individual Private User Data Storage",
          "item": [
            "Every user gets their own secure storage space, ensuring personal data remains isolated and protected. Movaci NextCloud’s flexible storage policies allow administrators to assign and manage individual storage quotas."
          ]
        },
        {
          "icon": "/next-cloud-8.svg",
          "title": "Comprehensive Backup and Disaster Recovery",
          "item": [
            "Movaci NextCloud includes automated backups and robust disaster recovery options to ensure that your data is always protected. In the event of accidental deletion or system failure, data can be restored quickly, minimizing downtime and data loss."
          ]
        },
        {
          "icon": "/next-cloud-9.svg",
          "title": "Flexible Per User Data Limit Settings",
          "item": [
            "Control data usage across the organization with customizable user data limits. Admins can set storage quotas per user, ensuring fair resource distribution and efficient storage utilization."
          ]
        },
        {
          "icon": "/next-cloud-10.svg",
          "title": "Collaboration Tools and Productivity Features",
          "item": [
            "Movaci NextCloud is more than just storage. Integrated collaboration tools, such as shared calendars, document editing, and task management, make it easy for teams to work together in real-time. These features enhance productivity and ensure that all project files and communications are accessible from one platform."
          ]
        },
        {
          "icon": "/next-cloud-11.svg",
          "title": "Scalability to Support Growing Businesses",
          "item": [
            "Designed to grow with your business, Movaci NextCloud can scale to support a handful of users or thousands. Whether you need more storage or enhanced security features, Movaci’s Cloud Platform Specialists can customize the service to meet your evolving needs."
          ]
        },
        {
          "icon": "",
          "title": "",
          "item": [],
          "bgImage": "/dot-image.svg"
        }
      ],
      "plansPricing": [
        {
          "id": 3,
          "headerContent": {
            "title": "NextCloud",
            "space": 1,
            "spaceType": "TB",
            "pring": 45,
            "typeDate": "monthly"
          },
          "contents": {
            "detailAccount": "1-10 User - User Account",
            "detailStorage": "- Storage"
          },
          "popular": true,
          "link": "https://my.movaci.com/index.php/store/movaci-nextcloud/nextcloud-1-tb"
        },
        {
          "id": 2,
          "headerContent": {
            "title": "NextCloud",
            "space": 500,
            "spaceType": "GB",
            "pring": 25,
            "typeDate": "monthly"
          },
          "contents": {
            "detailAccount": "1-5 User - User Account",
            "detailStorage": "- Storage"
          },
          "popular": false,
          "link": "https://my.movaci.com/index.php/store/movaci-nextcloud/nextcloud-500-gb"
        },
        {
          "id": 1,
          "headerContent": {
            "title": "NextCloud",
            "space": 100,
            "spaceType": "GB",
            "pring": 10,
            "typeDate": "monthly"
          },
          "contents": {
            "detailAccount": "1 User - User Account",
            "detailStorage": "- Storage"
          },
          "popular": false,
          "link": "https://my.movaci.com/index.php/store/movaci-nextcloud/nextcloud-100-gb"
        }
      ]
        },
        // id 14
        {
      "id": 14,
      "assetsPath": "/img/products_services/product&services/authorized-pearson-vue-testing-center",
      "img": "/thumbnail.webp",
      "bgMain": "/bg-main.webp",
      "bgContent": "",
      "type": ["service"],
      "title": "Authorized Pearson VUE Testing Center",
      "slug": "authorized-pearson-vue-testing-center",
      "subDetail": "State-of-the-art, air-conditioned testing center in Chiang Mai.",
      "metaTitle": "Authorized Pearson VUE Testing Center",
      "metaDescription": "Ensure the confidentiality, integrity, and availability of your email communications.",
      "mainDetail": [
        "Movaci – Authorized Pearson VUE Testing Center in Chiang Mai",
        "Movaci is proud to offer a state-of-the-art, air-conditioned Pearson VUE testing center right here in Chiang Mai, Thailand. Whether you're advancing your career or pursuing a new qualification, our clean and comfortable facility is designed to help you succeed."
      ],
      "content1": {
        "title": "Why Choose Movaci?",
        "list": [
          {
            "title": "Extensive Exam Options",
            "details": [
              "We offer exams from top companies such as Microsoft, Cisco, CompTIA, ISC2, Oracle, VMware, Amazon Web Services (AWS), GMAC (GMAT), GED, and more. With Pearson VUE’s global reach, you can access over 100 certification vendors, all in one place."
            ]
          },
          {
            "title": "Modern, Comfortable Facilities",
            "details": [
              "Our testing center is equipped with the latest technology to ensure a smooth, distraction-free experience. Enjoy air conditioning and professional amenities as you focus on your exam."
            ]
          },
          {
            "title": "Convenient Hours",
            "details": [
              "Open Monday to Friday from 9:00 AM to 5:00 PM, we provide flexible scheduling to fit your needs."
            ]
          },
          {
            "title": "Certified Support",
            "details": [
              "Our staff is trained and certified by Pearson VUE to ensure that your exam process is secure and meets global standards."
            ]
          }
        ]
      },
      "content2": {
        "title": "Certification Vendors We Offer",
        "list": [
          {
            "img": "auth-pearson-vue-1.svg",
            "title": "GED",
            "details": [
              "Earn your high school equivalency diploma in a secure and comfortable environment."
            ]
          },
          {
            "img": "auth-pearson-vue-2.svg",
            "title": "GMAC (GMAT)",
            "details": [
              "Prepare for business school by taking the GMAT exam at our testing center."
            ]
          },
          {
            "img": "auth-pearson-vue-3.svg",
            "title": "TOEFL",
            "details": [
              "Prove your English proficiency for academic or professional purposes with the TOEFL exam"
            ]
          },
          {
            "img": "auth-pearson-vue-4.svg",
            "title": "Microsoft",
            "details": [
              "Certify your expertise in cloud services, software development, and more."
            ]
          },
          {
            "img": "auth-pearson-vue-5.svg",
            "title": "Cisco",
            "details": ["Gain industry-recognized networking certifications."]
          },
          {
            "img": "auth-pearson-vue-6.svg",
            "title": "CompTIA",
            "details": [
              "From entry-level A+ to advanced Security+ certifications for IT professionals."
            ]
          },
          {
            "img": "auth-pearson-vue-7.svg",
            "title": "ISC2",
            "details": [
              "Demonstrate your skills in cybersecurity with CISSP, CCSP, SSCP, CC, and other leading certifications."
            ]
          },
          {
            "img": "auth-pearson-vue-8.svg",
            "title": "Amazon Web Services (AWS)",
            "details": [
              "Validate your cloud computing expertise with AWS certifications."
            ]
          },
          {
            "img": "auth-pearson-vue-9.svg",
            "title": "Additional IT and Professional Certifications",
            "details": [
              "We also offer academic, financial, and healthcare certifications from a variety of providers."
            ]
          }
        ]
      },
      "content3": {
        "title": "",
        "list": [
          {
            "img": "/dot-image.svg",
            "title": "",
            "details": []
          },
          {
            "img": "",
            "title": "Book Your Exam",
            "details": [
              "To schedule your certification exam at Movaci, visit <a href='https://www.pearsonvue.com/' target='_blank' style='color:#316FB7;font-weight: 700;line-height: normal;text-decoration-line: underline;text-decoration-style: solid;text-decoration-skip-ink: none;text-decoration-thickness: auto;text-underline-offset: auto;'>Pearson VUE’s website</a> and select \"Movaci\" as your test center. We’re here to make your testing experience smooth and successful."
            ]
          }
        ]
      }
    }
      ],
      service: null, // Holds the selected service based on the route
    };
  },
  mounted() {
    // Get the slug from the route params
    const slug = this.$route.params.slug;
    // Find the matching service from the services array
    this.service = this.services.find((s) => s.slug === slug);
  },
};
</script>

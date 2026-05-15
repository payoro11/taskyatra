import { motion } from "framer-motion";
import { Lock, Eye } from "lucide-react";

export default function Privacy() {
  const sections = [
    {
      title: "1. Introduction",
      content: "Nexaroot Technology India Pvt Ltd ('we', 'our', or 'us') operates TaskYatra, a cloud-based business automation platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Services. We are committed to protecting your privacy and handling your data with transparency and care."
    },
    {
      title: "2. Information We Collect",
      content: "We collect information you provide directly, including: Account registration details (name, email, phone number, company name), Employee and HR data entered into the system (names, salaries, attendance records, documents), Billing and payment information, Communications you send us, and Device and usage data collected automatically (IP address, browser type, pages visited, time spent)."
    },
    {
      title: "3. How We Use Your Information",
      content: "We use the information we collect to: Provide, operate, and maintain our Services; Process transactions and send related information including purchase confirmations and invoices; Send administrative information such as updates, security alerts, and support messages; Respond to your comments, questions, and requests; Monitor and analyze trends, usage, and activities in connection with our Services; Detect, investigate, and prevent fraudulent transactions and other illegal activities."
    },
    {
      title: "4. Data Storage and Security",
      content: "Your data is stored on secure servers with industry-standard encryption. We implement appropriate technical and organizational security measures designed to protect the security of your personal information. However, no electronic transmission or storage of information can be guaranteed to be 100% secure. We use SSL/TLS encryption, access controls, and regular security audits to protect your data."
    },
    {
      title: "5. Data Sharing and Disclosure",
      content: "We do not sell, trade, or rent your personal information to third parties. We may share your information with: Service providers who assist us in operating our platform (under strict confidentiality agreements); Law enforcement or government agencies when required by law; Business partners with your explicit consent. We ensure all third-party partners adhere to equivalent privacy standards."
    },
    {
      title: "6. Employee Data",
      content: "As an HR and payroll platform, we process sensitive employee data on behalf of our business customers. This data is processed as a 'data processor' under the direction of our customers (the 'data controllers'). We process such data only in accordance with customer instructions and applicable law. Employee data is never used for any purpose other than delivering our Services."
    },
    {
      title: "7. Cookies and Tracking",
      content: "We use cookies and similar tracking technologies to track activity on our Services. Cookies are files with small amounts of data stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Services."
    },
    {
      title: "8. Data Retention",
      content: "We retain your personal information for as long as your account is active or as needed to provide you services. You may request deletion of your data at any time. We will retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements. Payroll and financial records may be retained for the period required by Indian tax and labor laws."
    },
    {
      title: "9. Your Rights",
      content: "You have the right to: Access the personal information we hold about you; Request correction of inaccurate data; Request deletion of your personal data (subject to legal requirements); Object to our processing of your personal information; Request restriction of processing; Data portability. To exercise any of these rights, please contact us at sales@nexaroot.in."
    },
    {
      title: "10. Children's Privacy",
      content: "Our Services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete such information. If you become aware that a child has provided us with personal information, please contact us."
    },
    {
      title: "11. Changes to This Policy",
      content: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last updated' date. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."
    },
    {
      title: "12. Contact Us",
      content: "If you have any questions or concerns about this Privacy Policy or our data practices, please contact our Data Protection team: Nexaroot Technology India Pvt Ltd, 2nd Floor Vindawashni Trader Building, Plot No 1173/K46, near Amba Check Post, NH-139, Amba, Aurangabad (Bihar), India, 824111. Email: sales@nexaroot.in | Phone: +91 9998422334"
    },
  ];

  return (
    <div className="w-full bg-white pb-24">
      <div className="bg-gradient-to-b from-[#EEF5FF] to-white pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-primary text-sm font-semibold mb-6"
          >
            <Lock className="w-4 h-4" />
            Legal Document
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-4"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-base"
          >
            Last updated: January 1, 2025 &nbsp;&bull;&nbsp; Nexaroot Technology India Pvt Ltd
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-10 flex gap-4 items-start"
        >
          <Eye className="w-6 h-6 text-primary shrink-0 mt-0.5" />
          <p className="text-blue-800 text-sm leading-relaxed">
            Your privacy is important to us. This policy describes how Nexaroot Technology India Pvt Ltd collects, uses, and protects your personal and business information when you use TaskYatra.
          </p>
        </motion.div>

        <div className="space-y-8">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="border-b border-gray-100 pb-8 last:border-0"
            >
              <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">{section.title}</h2>
              <p className="text-gray-600 leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

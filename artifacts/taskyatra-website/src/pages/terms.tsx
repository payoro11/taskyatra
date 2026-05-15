import { motion } from "framer-motion";
import { Shield, FileText } from "lucide-react";

export default function Terms() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing or using TaskYatra's services, website, or software (collectively, the 'Services'), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our Services. These Terms apply to all users, visitors, and others who access or use the Services."
    },
    {
      title: "2. Description of Services",
      content: "TaskYatra is a cloud-based business automation platform offered by Nexaroot Technology India Pvt Ltd. The Services include HR management, payroll processing, attendance tracking, CRM, task management, and billing — all accessible through a centralized dashboard. We reserve the right to modify, suspend, or discontinue any part of the Services at any time."
    },
    {
      title: "3. User Accounts",
      content: "You must create an account to use certain features. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account. Nexaroot Technology India Pvt Ltd cannot and will not be liable for any loss or damage arising from your failure to comply with this section."
    },
    {
      title: "4. Subscription and Payments",
      content: "TaskYatra offers both free and paid subscription plans. Paid plans are billed monthly or annually as selected. All fees are exclusive of applicable taxes including GST as per government norms. We reserve the right to modify pricing with 30 days advance notice. Refunds are processed as per our refund policy, which is available upon request."
    },
    {
      title: "5. Acceptable Use",
      content: "You agree not to misuse the Services or help anyone else do so. Prohibited activities include: using the Services for any unlawful purpose, transmitting any harmful, offensive, or disruptive content, attempting to gain unauthorized access to any part of the Services, interfering with the proper functioning of the platform, and reverse engineering or attempting to extract the source code."
    },
    {
      title: "6. Data Privacy",
      content: "Your use of our Services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. We are committed to protecting your personal and business data in accordance with applicable Indian data protection laws. By using our Services, you consent to our collection and use of data as described in our Privacy Policy."
    },
    {
      title: "7. Intellectual Property",
      content: "The Services and all content, features, and functionality (including but not limited to all information, software, text, displays, images, and the design) are owned by Nexaroot Technology India Pvt Ltd and are protected by Indian and international copyright, trademark, patent, trade secret, and other intellectual property laws."
    },
    {
      title: "8. Limitation of Liability",
      content: "To the maximum extent permitted by applicable law, Nexaroot Technology India Pvt Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of or inability to use the Services."
    },
    {
      title: "9. Termination",
      content: "We may terminate or suspend your account and access to the Services immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive."
    },
    {
      title: "10. Governing Law",
      content: "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Aurangabad, Bihar, India."
    },
    {
      title: "11. Changes to Terms",
      content: "We reserve the right to modify these Terms at any time. We will provide notice of significant changes by updating the date at the top of this page and, where appropriate, notifying you via email. Your continued use of the Services after any changes constitutes your acceptance of the new Terms."
    },
    {
      title: "12. Contact Us",
      content: "If you have any questions about these Terms, please contact us at: Nexaroot Technology India Pvt Ltd, 2nd Floor Vindawashni Trader Building, Plot No 1173/K46, near Amba Check Post, NH-139, Amba, Aurangabad (Bihar), India, 824111. Email: sales@nexaroot.in | Phone: +91 9998422334"
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
            <FileText className="w-4 h-4" />
            Legal Document
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-4"
          >
            Terms & Conditions
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
          <Shield className="w-6 h-6 text-primary shrink-0 mt-0.5" />
          <p className="text-blue-800 text-sm leading-relaxed">
            Please read these Terms and Conditions carefully before using TaskYatra. These terms constitute a legally binding agreement between you and Nexaroot Technology India Pvt Ltd governing your use of our Services.
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

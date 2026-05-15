import { motion } from "framer-motion";
import { CheckCircle, Briefcase, FileText, Users, Calculator, CalendarClock, BookUser, PieChart, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Features() {
  const modules = [
    {
      id: "task-management",
      icon: Briefcase,
      title: "Task Management",
      desc: "Manage your projects and talent in one system for empowered teams, satisfied clients, and increased profitability.",
      features: ["Project tracking", "Task assignment & deadlines", "Team collaboration", "Progress monitoring", "Priority management"],
      color: "blue"
    },
    {
      id: "bill-management",
      icon: FileText,
      title: "Manage All Bills",
      desc: "Automate billing and revenue recognition to streamline the contract-to-cash cycle.",
      features: ["Invoice generation", "Payment tracking", "Bill reminders", "Revenue reports", "GST-compliant invoices"],
      color: "orange"
    },
    {
      id: "crm",
      icon: Users,
      title: "CRM (Customer Relationship Management)",
      desc: "Track leads, manage customers and close deals faster with a powerful CRM.",
      features: ["Lead management", "Customer database", "Deal pipeline", "Follow-up reminders", "Sales reports"],
      color: "green"
    },
    {
      id: "payroll",
      icon: Calculator,
      title: "Payroll Management",
      desc: "Automate payroll processing, salary calculations, and statutory compliance.",
      features: ["Automated salary calculation", "PF/ESI/TDS compliance", "Payslip generation", "Bulk salary processing", "Loan & advance management"],
      color: "purple"
    },
    {
      id: "attendance",
      icon: CalendarClock,
      title: "Attendance & Leave Management",
      desc: "Track employee attendance in real-time with geo-location and biometric support.",
      features: ["Real-time attendance tracking", "Geo-location attendance", "Leave application & approval", "Attendance reports", "Holiday calendar"],
      color: "pink"
    },
    {
      id: "hr",
      icon: BookUser,
      title: "HR Management",
      desc: "Centralize all employee data and streamline your HR processes.",
      features: ["Employee database", "Onboarding management", "Document management", "Performance tracking", "Employee self-service portal"],
      color: "teal"
    },
    {
      id: "reports",
      icon: PieChart,
      title: "Reports & Analytics",
      desc: "Get actionable insights with comprehensive reporting dashboards.",
      features: ["Real-time dashboards", "Custom report builder", "Export to Excel/PDF", "Data visualization", "KPI tracking"],
      color: "red"
    },
    {
      id: "multi-company",
      icon: Building2,
      title: "Multi-Company Support",
      desc: "Manage multiple companies and branches from a single account.",
      features: ["Multiple company management", "Branch management", "Role-based access control", "Consolidated reports", "Data isolation"],
      color: "indigo"
    }
  ];

  return (
    <div className="w-full bg-gray-50/50 pb-24">
      {/* Page Header */}
      <div className="bg-primary pt-24 pb-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 max-w-4xl mx-auto leading-tight"
          >
            TaskYatra Features — CRM, Payroll, Attendance & Business Automation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Everything you need to automate your operations, combined into one powerful, easy-to-use platform.
          </motion.p>
        </div>
      </div>

      {/* Modules Grid */}
      <div className="container mx-auto px-4 md:px-6 -mt-16 relative z-20">
        <div className="grid md:grid-cols-2 gap-8">
          {modules.map((module, i) => (
            <motion.div 
              key={module.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-start gap-5 mb-6">
                <div className={`w-14 h-14 shrink-0 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 text-gray-700`}>
                  <module.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">{module.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{module.desc}</p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">Key Capabilities</h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {module.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="container mx-auto px-4 mt-24 text-center">
        <div className="bg-secondary rounded-3xl p-12 border border-orange-100 max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-4 text-gray-900">Experience the full power of TaskYatra</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">Stop juggling multiple tools and spreadsheets. Bring your entire business onto one unified platform today.</p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full px-10 h-14" asChild>
            <a href="https://app.taskyatra.com">Start Your Free Trial Now</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

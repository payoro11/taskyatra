import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Free Plan",
      price: { monthly: "Free", annual: "Free" },
      billing: "Free forever",
      popular: false,
      color: "from-gray-50 to-white",
      features: {
        users: "2",
        task: true,
        crm: false,
        payroll: false,
        attendance: true,
        hr: false,
        bills: false,
        reports: "Basic",
        support: "Email",
        multiCompany: false,
      }
    },
    {
      name: "Small",
      price: { monthly: "₹149", annual: "₹1,490" },
      billing: "Billed Monthly",
      popular: false,
      color: "from-blue-50 to-white",
      features: {
        users: "5",
        task: true,
        crm: true,
        payroll: true,
        attendance: true,
        hr: false,
        bills: true,
        reports: "Standard",
        support: "Email",
        multiCompany: false,
      }
    },
    {
      name: "Mid Starter",
      price: { monthly: "₹249", annual: "₹2,490" },
      billing: "Billed Monthly",
      popular: true,
      color: "from-blue-600 to-blue-700",
      features: {
        users: "15",
        task: true,
        crm: true,
        payroll: true,
        attendance: true,
        hr: true,
        bills: true,
        reports: "Advanced",
        support: "Priority",
        multiCompany: false,
      }
    },
    {
      name: "Professional",
      price: { monthly: "₹399", annual: "₹3,990" },
      billing: "Billed Monthly",
      popular: false,
      color: "from-orange-50 to-white",
      features: {
        users: "Unlimited",
        task: true,
        crm: true,
        payroll: true,
        attendance: true,
        hr: true,
        bills: true,
        reports: "Custom",
        support: "Dedicated",
        multiCompany: true,
      }
    }
  ];

  return (
    <div className="w-full bg-white pb-24">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-[#EEF5FF] to-white pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Simple, Transparent Pricing
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight"
          >
            Pricing for Every Stage of Growth
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-12"
          >
            Choose a plan that aligns with your business needs and scale with confidence. No hidden costs or complexity.
          </motion.p>

          {/* Eye-catching Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex items-center justify-center mb-16 px-4"
          >
            <div className="relative flex items-center bg-gray-100 rounded-full p-1.5 shadow-inner w-full max-w-xs sm:w-auto sm:max-w-none">
              {/* Animated sliding pill — exactly 50% wide */}
              <motion.div
                className="absolute top-1.5 bottom-1.5 w-[calc(50%-3px)] rounded-full shadow-lg pointer-events-none"
                style={{ background: isAnnual ? "linear-gradient(135deg, #FF8F0B, #e07800)" : "linear-gradient(135deg, #007BFF, #0056cc)" }}
                animate={{ x: isAnnual ? "100%" : "0%" }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
              />
              <button
                onClick={() => setIsAnnual(false)}
                data-testid="toggle-monthly"
                className={`relative z-10 flex-1 sm:flex-none sm:px-8 py-2.5 text-sm font-bold rounded-full transition-colors duration-300 text-center ${!isAnnual ? "text-white" : "text-gray-500 hover:text-gray-700"}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                data-testid="toggle-annually"
                className={`relative z-10 flex-1 sm:flex-none sm:px-8 py-2.5 text-sm font-bold rounded-full transition-colors duration-300 flex items-center justify-center gap-1.5 ${isAnnual ? "text-white" : "text-gray-500 hover:text-gray-700"}`}
              >
                Annually
                <AnimatePresence mode="wait">
                  {isAnnual ? (
                    <motion.span
                      key="saving"
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.6 }}
                      className="bg-white/30 text-white text-xs px-1.5 py-0.5 rounded-full font-bold whitespace-nowrap"
                    >
                      -16%
                    </motion.span>
                  ) : (
                    <motion.span
                      key="save"
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.6 }}
                      className="bg-green-100 text-green-700 text-xs px-1.5 py-0.5 rounded-full font-bold whitespace-nowrap"
                    >
                      -16%
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 120 }}
              className={`relative rounded-3xl border-2 transition-all duration-300 hover:shadow-2xl flex flex-col h-full overflow-hidden ${plan.popular ? "border-primary shadow-2xl shadow-primary/20 scale-105" : "border-gray-100 shadow-sm hover:border-primary/30"}`}
              data-testid={`plan-card-${plan.name.toLowerCase().replace(" ", "-")}`}
            >
              {plan.popular && (
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-accent" />
              )}

              <div className={`p-8 flex-1 flex flex-col ${plan.popular ? "bg-gradient-to-br from-primary to-blue-700 text-white" : "bg-white"}`}>
                {plan.popular && (
                  <div className="inline-flex items-center gap-1.5 self-start mb-4 bg-white/20 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                    <Zap className="w-3 h-3" /> MOST POPULAR
                  </div>
                )}

                <h3 className={`text-xl font-heading font-bold mb-2 ${plan.popular ? "text-white" : "text-gray-900"}`}>{plan.name}</h3>

                <div className="flex items-end gap-1 mb-1 min-h-[56px]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={isAnnual ? "annual" : "monthly"}
                      initial={{ opacity: 0, y: -16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 16 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}
                    >
                      {isAnnual ? plan.price.annual : plan.price.monthly}
                    </motion.span>
                  </AnimatePresence>
                  {plan.price.monthly !== "Free" && (
                    <span className={`font-medium mb-1 text-sm ${plan.popular ? "text-blue-200" : "text-gray-500"}`}>
                      /{isAnnual ? "yr" : "mo"}
                    </span>
                  )}
                </div>
                <p className={`text-sm mb-6 ${plan.popular ? "text-blue-200" : "text-gray-500"}`}>{plan.billing}</p>

                <Button
                  className={`w-full mb-8 h-12 text-base font-semibold rounded-xl ${plan.popular ? "bg-accent hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30" : "bg-primary/10 text-primary hover:bg-primary/20"}`}
                  asChild
                >
                  <a href="https://app.taskyatra.com/register" data-testid={`btn-get-started-${i}`}>Get Started</a>
                </Button>

                <div className="space-y-3 flex-1">
                  <div className={`flex items-center gap-3 pb-3 border-b ${plan.popular ? "border-white/20" : "border-gray-100"}`}>
                    <span className={`text-sm font-semibold ${plan.popular ? "text-blue-100" : "text-gray-500"}`}>Users:</span>
                    <span className={`text-sm font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>{plan.features.users}</span>
                  </div>

                  {[
                    { label: "Task Management", val: plan.features.task },
                    { label: "CRM", val: plan.features.crm },
                    { label: "Payroll", val: plan.features.payroll },
                    { label: "Attendance", val: plan.features.attendance },
                    { label: "HR Management", val: plan.features.hr },
                    { label: "Bill Management", val: plan.features.bills },
                    { label: "Multi-company", val: plan.features.multiCompany },
                  ].map((f, j) => (
                    <div key={j} className="flex items-center gap-3">
                      {f.val ? (
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.popular ? "bg-white/20" : "bg-green-50"}`}>
                          <Check className={`w-3 h-3 ${plan.popular ? "text-white" : "text-green-600"}`} />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-gray-100">
                          <X className="w-3 h-3 text-gray-300" />
                        </div>
                      )}
                      <span className={`text-sm ${f.val ? (plan.popular ? "text-white" : "text-gray-700") : "text-gray-300 line-through"}`}>
                        {f.label}
                      </span>
                    </div>
                  ))}

                  <div className={`pt-3 border-t ${plan.popular ? "border-white/20" : "border-gray-100"}`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs uppercase tracking-wide font-semibold ${plan.popular ? "text-blue-200" : "text-gray-400"}`}>Reports</span>
                      <span className={`text-sm font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>{plan.features.reports}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs uppercase tracking-wide font-semibold ${plan.popular ? "text-blue-200" : "text-gray-400"}`}>Support</span>
                      <span className={`text-sm font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>{plan.features.support}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-gray-400">
          All prices in Indian Rupees (INR). GST applicable as per government norms.
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 mt-24">
        <div className="bg-gradient-to-br from-primary to-blue-800 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
          <div className="relative">
            <h2 className="text-3xl font-heading font-bold text-white mb-4">Have specific requirements?</h2>
            <p className="text-blue-100 text-lg max-w-xl">Our team can help you build a custom plan tailored for your enterprise needs.</p>
          </div>
          <Button size="lg" className="bg-accent hover:bg-orange-600 text-white font-bold px-8 h-14 shrink-0 rounded-full shadow-lg shadow-orange-500/30" asChild>
            <a href="/contact" data-testid="btn-contact-sales">Contact Sales <ArrowRight className="ml-2 w-5 h-5" /></a>
          </Button>
        </div>
      </div>
    </div>
  );
}

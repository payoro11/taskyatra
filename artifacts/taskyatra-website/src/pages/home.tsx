import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Users, BarChart3, Receipt, CalendarCheck, Settings, Shield, Zap, Globe, Clock, IndianRupee, TrendingUp, Award, Star } from "lucide-react";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const clients = [
    { letter: "K", name: "KOSOF TRUST", color: "#007BFF", bg: "#EEF5FF" },
    { letter: "A", name: "Arnav Softech", color: "#FF8F0B", bg: "#FFF3E0" },
    { letter: "C", name: "ClientCare", color: "#6C3FD4", bg: "#F0EBFF" },
  ];

  const stats = [
    { value: "700+", label: "Companies Trust Us", icon: Award },
    { value: "50K+", label: "Employees Managed", icon: Users },
    { value: "99.9%", label: "Uptime Guarantee", icon: TrendingUp },
    { value: "15 Days", label: "Free Trial", icon: Star },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#F0F6FF] py-20 lg:py-32 flex items-center min-h-[90vh]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/6 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="max-w-2xl"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-primary/20 text-primary text-sm font-semibold mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                Cloud-Based Business Automation
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight mb-6">
                All-in-One Platform for HR, CRM, Payroll &{" "}
                <span className="text-primary relative">
                  Workforce Management
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5.5C50 1.5 150 1.5 299 5.5" stroke="#FF8F0B" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg text-gray-600 mb-8 leading-relaxed">
                TaskYatra is a powerful cloud-based business management platform designed to simplify and automate modern workforce operations. Manage your entire workflow from one centralized dashboard.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
                <Button size="lg" className="bg-accent hover:bg-orange-600 text-white font-semibold rounded-full px-8 h-14 text-base shadow-lg shadow-orange-300/40 transition-all hover:scale-105" asChild data-testid="btn-hero-trial">
                  <a href="https://app.taskyatra.com">Start 15 Days Free Trial <ArrowRight className="ml-2 w-5 h-5" /></a>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold rounded-full px-8 h-14 text-base" asChild data-testid="btn-hero-login">
                  <a href="https://app.taskyatra.com/login">Login</a>
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-8 flex items-center gap-6 text-sm text-gray-500 font-medium">
                <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-accent" /> No credit card required</div>
                <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-accent" /> Cancel anytime</div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/30 bg-white/60 backdrop-blur-sm p-4">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl overflow-hidden flex items-center justify-center border border-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                  <div className="text-center p-8 relative z-10">
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-primary/20">
                      <BarChart3 className="w-10 h-10 text-primary" />
                    </div>
                    <p className="text-gray-500 font-semibold text-lg">TaskYatra Dashboard Preview</p>
                    <p className="text-gray-400 text-sm mt-1">All-in-one workspace for your team</p>
                  </div>
                </div>

                <div className="absolute -left-8 top-1/4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600 shrink-0"><CheckCircle className="w-5 h-5" /></div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Payroll Processed</div>
                    <div className="text-xs text-gray-400">Just now</div>
                  </div>
                </div>

                <div className="absolute -right-8 bottom-1/4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-primary shrink-0"><Users className="w-5 h-5" /></div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">New Deal Closed</div>
                    <div className="text-xs text-gray-400">CRM updated</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-10 bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center"
              >
                <stat.icon className="w-6 h-6 text-accent mb-2" />
                <div className="text-2xl md:text-3xl font-heading font-bold text-white">{stat.value}</div>
                <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By — Enhanced */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 text-accent text-sm font-bold mb-4 border border-orange-100">
              <Star className="w-4 h-4 fill-accent" />
              Trusted by the World's Best Teams
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-2">
              Over <span className="text-primary">700+</span> Companies use <span className="text-accent">TaskYatra</span>
            </h2>
            <p className="text-gray-500 mt-3 text-base max-w-xl mx-auto">Businesses across India rely on TaskYatra to power their daily operations, payroll, and growth.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {clients.map((client, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 150 }}
                whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-6 flex items-center gap-4 cursor-pointer transition-all duration-300 hover:border-primary/20 group"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-heading font-bold shrink-0 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: client.bg, color: client.color }}
                >
                  {client.letter}
                </div>
                <div>
                  <div className="font-heading font-bold text-gray-900 text-lg">{client.name}</div>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-3 h-3 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-50 rounded-full border border-gray-200">
              <div className="flex -space-x-2">
                {["#007BFF", "#FF8F0B", "#6C3FD4", "#10B981"].map((color, i) => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-white" style={{ backgroundColor: color }} />
                ))}
              </div>
              <span className="text-sm font-semibold text-gray-700">Join 700+ companies already growing with TaskYatra</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-24 bg-[#F8FAFF]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-primary text-sm font-semibold mb-4">
              <Settings className="w-4 h-4" /> Powerful Modules
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Everything you need to run your business</h2>
            <p className="text-lg text-gray-600">Powerful modules fully integrated into one seamless platform. No more switching between different tools.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Settings, title: "Task Management", desc: "Manage your projects and talent in one system for empowered teams, satisfied clients, and increased profitability.", color: "text-primary", bg: "bg-blue-50 group-hover:bg-primary" },
              { icon: Users, title: "CRM", desc: "Manage customer relationships, track leads, and close deals faster with a unified CRM dashboard.", color: "text-purple-600", bg: "bg-purple-50 group-hover:bg-purple-600" },
              { icon: Clock, title: "Payroll & Attendance", desc: "Automate salary processing and track employee attendance in real-time.", color: "text-green-600", bg: "bg-green-50 group-hover:bg-green-600" },
              { icon: Shield, title: "HR Management", desc: "Centralize employee data, manage onboarding, leaves, and performance all in one place.", color: "text-indigo-600", bg: "bg-indigo-50 group-hover:bg-indigo-600" },
              { icon: Receipt, title: "Bill Management", desc: "Automate billing and revenue recognition to streamline the contract-to-cash cycle.", color: "text-accent", bg: "bg-orange-50 group-hover:bg-accent" },
              { icon: BarChart3, title: "Reports & Analytics", desc: "Get deep insights into your business with real-time reports and analytics dashboards.", color: "text-teal-600", bg: "bg-teal-50 group-hover:bg-teal-600" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white p-8 rounded-2xl shadow-sm border-2 border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group cursor-pointer"
              >
                <div className={`w-14 h-14 ${feature.bg} rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:text-white`}>
                  <feature.icon className={`w-7 h-7 ${feature.color} group-hover:text-white transition-colors`} />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold rounded-full px-8 h-12" asChild data-testid="link-all-features">
              <Link href="/features">View all features in detail <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 text-accent text-sm font-semibold mb-6 border border-orange-100">
                <Zap className="w-4 h-4" /> Why TaskYatra?
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">Built for Modern Indian Businesses</h2>
              <p className="text-lg text-gray-600 mb-10">We built TaskYatra specifically for modern Indian businesses that need robust compliance, speed, and reliability without the enterprise price tag.</p>

              <div className="space-y-5">
                {[
                  { icon: Globe, title: "Cloud-based", desc: "Access from anywhere, anytime on any device.", color: "bg-blue-100 text-primary" },
                  { icon: Zap, title: "Easy to use", desc: "Intuitive interface, zero training needed for your team.", color: "bg-yellow-100 text-yellow-600" },
                  { icon: BarChart3, title: "Scalable", desc: "Grows seamlessly as your business expands.", color: "bg-green-100 text-green-600" },
                  { icon: Shield, title: "Secure", desc: "Enterprise-grade data security and encryption.", color: "bg-purple-100 text-purple-600" },
                  { icon: Clock, title: "24/7 Support", desc: "Always here when you need help, with local support.", color: "bg-teal-100 text-teal-600" },
                  { icon: IndianRupee, title: "Indian Compliance", desc: "Payroll built specifically for Indian tax & labor laws.", color: "bg-orange-100 text-accent" },
                ].map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex gap-4 group"
                  >
                    <div className={`mt-1 flex-shrink-0 w-10 h-10 rounded-xl ${benefit.color} flex items-center justify-center transition-transform group-hover:scale-110`}>
                      <benefit.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-0.5">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm">{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-3xl opacity-10 transform rotate-3"></div>
              <div className="bg-gray-900 rounded-3xl p-8 relative shadow-2xl">
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-3 bg-blue-900/60 rounded w-1/3"></div>
                  <div className="h-3 bg-blue-900/60 rounded w-2/3"></div>
                  <div className="h-20 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl w-full mt-6 border border-primary/10"></div>
                  <div className="grid grid-cols-3 gap-3 mt-2">
                    {["bg-blue-900/40", "bg-orange-900/30", "bg-green-900/30"].map((c, i) => (
                      <div key={i} className={`h-20 ${c} rounded-xl border border-white/5`}></div>
                    ))}
                  </div>
                  <div className="h-2 bg-primary/30 rounded w-3/4"></div>
                  <div className="h-2 bg-accent/30 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-700 to-blue-900"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-2xl" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4 blur-xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-semibold mb-6 border border-white/20">
              <CalendarCheck className="w-4 h-4" /> No credit card required
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Ready to Streamline Your Business?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Join 700+ companies already using TaskYatra to automate their operations, reduce costs, and increase profitability.</p>
            <Button size="lg" className="bg-accent hover:bg-orange-600 text-white font-bold rounded-full px-10 h-16 text-lg shadow-xl shadow-orange-500/30 hover:scale-105 transition-all" asChild data-testid="btn-cta-trial">
              <a href="https://app.taskyatra.com">Start 15 Days Free Trial <ArrowRight className="ml-2 w-6 h-6" /></a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

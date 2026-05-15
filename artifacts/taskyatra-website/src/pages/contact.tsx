import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
  return (
    <div className="w-full bg-white pb-24">
      {/* Header */}
      <div className="bg-secondary/30 pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6 max-w-3xl mx-auto leading-tight"
          >
            Contact TaskYatra — Get In Touch With Nexaroot Technology
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Whether you have a question about features, pricing, need a demo, or anything else, our team is ready to answer all your questions.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-heading font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-200 mb-1">Our Location</h3>
                    <p className="text-gray-400 leading-relaxed">
                      2nd Floor Vindawashni Trader Building,<br />
                      Plot No 1173/K46, near Amba Check Post,<br />
                      NH-139, Amba, Aurangabad (Bihar),<br />
                      India, 824111
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-200 mb-1">Email Us</h3>
                    <p className="text-gray-400">sales@nexaroot.in</p>
                    <p className="text-xs text-gray-500 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-200 mb-1">Call Us</h3>
                    <p className="text-gray-400">+91 9998422334</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-200 mb-1">Business Hours</h3>
                    <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-400">Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 mt-12 pt-8 border-t border-gray-800">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Connect with us</h3>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer border border-gray-700 hover:border-primary">
                  <span className="font-bold text-sm">IN</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer border border-gray-700 hover:border-primary">
                  <span className="font-bold text-sm">FB</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer border border-gray-700 hover:border-primary">
                  <span className="font-bold text-sm">TW</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
          >
            <div className="mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-2">Send us a message</h2>
              <p className="text-gray-600">Fill out the form below and our sales team will get back to you shortly.</p>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700 font-semibold">Your Name *</Label>
                  <Input id="name" placeholder="John Doe" className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-semibold">Your Email *</Label>
                  <Input id="email" type="email" placeholder="john@company.com" className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700 font-semibold">Your Phone <span className="text-gray-400 font-normal">(Optional)</span></Label>
                  <Input id="phone" type="tel" placeholder="+91 98765 43210" className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700 font-semibold">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your requirements..." 
                    className="min-h-[150px] resize-y bg-gray-50 border-gray-200 focus:bg-white transition-colors" 
                    required 
                  />
                </div>
              </div>
              
              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-white font-bold h-14 rounded-xl shadow-lg shadow-accent/20">
                Submit Enquiry <Send className="ml-2 w-5 h-5" />
              </Button>
              
              <p className="text-xs text-center text-gray-500 mt-4">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}

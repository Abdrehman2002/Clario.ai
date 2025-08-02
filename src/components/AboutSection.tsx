import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el, index) => {
              const element = el as HTMLElement;
              element.style.animationDelay = `${index * 0.2}s`;
              element.classList.add('animate-fade-in-up');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-electric-blue/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text neon-underline mb-6">
            The Future of AI Automation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're not just building AI tools — we're architecting the intelligent infrastructure that powers tomorrow's businesses.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left: AI Robot */}
          <div className="animate-on-scroll relative">
            <div className="glass rounded-3xl p-8 hover:shadow-glow transition-all duration-700 hover:-translate-y-3 group">
              <div className="relative w-full h-[400px] bg-gradient-primary rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/d33fff6d-37ce-4b85-a9fd-f7b5ff42c405.png" 
                  alt="Clario AI Robot" 
                  className="w-full h-full object-contain opacity-90 scale-110 group-hover:scale-115 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                <div className="absolute top-4 right-4 glass rounded-full p-2">
                  <div className="w-3 h-3 bg-electric-blue rounded-full animate-glow-pulse"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: Mission & Vision */}
          <div className="space-y-8">
            <div className="animate-on-scroll">
              <h3 className="text-3xl font-bold text-foreground mb-4">Mission & Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Clario AI, we fuse automation and intelligence to supercharge your business operations. 
                From voice agents to custom workflows — we build AI that works for you, 24/7.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Our cutting-edge solutions transform how businesses interact with customers, 
                streamline operations, and scale efficiently. We're not just building AI; 
                we're crafting the future of intelligent automation.
              </p>
            </div>

            {/* Capabilities */}
            <div className="animate-on-scroll space-y-4">
              <h4 className="text-xl font-semibold text-foreground">Core Capabilities</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: '🤖', title: 'AI Voice Agents', desc: 'Natural conversations' },
                  { icon: '⚡', title: 'Workflow Automation', desc: 'Seamless operations' },
                  { icon: '🔗', title: 'System Integration', desc: 'Connected ecosystem' },
                  { icon: '📊', title: 'Real-time Analytics', desc: 'Data-driven insights' }
                ].map((capability, index) => (
                  <div 
                    key={capability.title}
                    className="glass rounded-xl p-4 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-2xl mb-2">{capability.icon}</div>
                    <h5 className="font-semibold text-foreground text-sm">{capability.title}</h5>
                    <p className="text-xs text-muted-foreground">{capability.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="animate-on-scroll mb-20">
          <div className="glass rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-center gradient-text mb-12">By the Numbers</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '99.9%', label: 'Uptime Guarantee', color: 'primary' },
                { number: '60%', label: 'Cost Reduction', color: 'electric-blue' },
                { number: '24/7', label: 'AI Availability', color: 'violet-red' },
                { number: '10x', label: 'Faster Processing', color: 'cyber-purple' }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="text-center group hover:-translate-y-2 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`text-4xl lg:text-5xl font-bold text-${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="animate-on-scroll">
          <h3 className="text-3xl font-bold text-center gradient-text mb-12">Powered By Advanced Technology</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'OpenAI GPT-4', color: 'primary', category: 'AI Core' },
              { name: 'WhatsApp API', color: 'violet-red', category: 'Communication' },
              { name: 'Node.js', color: 'electric-blue', category: 'Runtime' },
              { name: 'n8n Workflows', color: 'primary', category: 'Automation' },
              { name: 'Vercel Edge', color: 'violet-red', category: 'Infrastructure' },
              { name: 'WebRTC', color: 'cyber-purple', category: 'Real-time' }
            ].map((tech, index) => (
              <div 
                key={tech.name}
                className="glass rounded-xl p-4 text-center hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-4 h-4 bg-${tech.color} rounded-full mx-auto mb-3 animate-glow-pulse group-hover:scale-125 transition-transform duration-300`}></div>
                <h5 className="font-semibold text-foreground text-sm mb-1">{tech.name}</h5>
                <p className="text-xs text-muted-foreground">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="animate-on-scroll mt-20 text-center">
          <div className="relative">
            {/* Subtle Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#CCE0FF]/5 via-[#B8C2FF]/3 to-[#CCE0FF]/5 rounded-3xl blur-2xl animate-pulse"></div>
            <div className="absolute top-0 left-1/4 w-2 h-2 bg-[#0066FF] rounded-full animate-ping opacity-30"></div>
            <div className="absolute bottom-0 right-1/4 w-1.5 h-1.5 bg-[#B8C2FF] rounded-full animate-bounce opacity-40" style={{ animationDelay: '0.5s' }}></div>
            
            {/* Main Vision Container */}
            <div className="relative bg-[#FFFFFF] rounded-3xl p-8 lg:p-12 border border-[#CCCCCC] shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden max-w-4xl mx-auto">
              
              {/* Floating Particles */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div 
                  className="absolute top-6 left-12 w-1 h-1 bg-[#0066FF] rounded-full opacity-30"
                  animate={{ 
                    y: [0, -15, 0],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute top-8 right-16 w-1 h-1 bg-[#B8C2FF] rounded-full opacity-40"
                  animate={{ 
                    y: [0, -20, 0],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
                <motion.div 
                  className="absolute bottom-6 left-20 w-1 h-1 bg-[#0066FF] rounded-full opacity-30"
                  animate={{ 
                    y: [0, -18, 0],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>

              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF]/2 via-transparent to-[#0033FF]/2 rounded-3xl"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#0066FF] to-[#0033FF] bg-clip-text text-transparent mb-6">
                    Our Vision
                  </h3>
                </motion.div>
                
                <motion.p 
                  className="text-xl lg:text-2xl text-[#1A1A1A] leading-relaxed mb-8 max-w-3xl mx-auto font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  "To democratize AI automation and make intelligent systems accessible to every business, 
                  regardless of size or technical expertise."
                </motion.p>

                {/* Enhanced Decorative Element */}
                <motion.div 
                  className="flex justify-center items-center space-x-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#0066FF] to-transparent"></div>
                  <motion.div 
                    className="w-3 h-3 bg-gradient-to-r from-[#0066FF] to-[#0033FF] rounded-full shadow-lg"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(0, 102, 255, 0.4)",
                        "0 0 0 10px rgba(0, 102, 255, 0)",
                        "0 0 0 0 rgba(0, 102, 255, 0)"
                      ]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <div className="w-16 h-px bg-gradient-to-r from-[#0066FF] via-transparent to-transparent"></div>
                </motion.div>

                {/* Vision Pillars */}
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  {[
                    { icon: "🌐", title: "Democratize", desc: "Make AI accessible to all" },
                    { icon: "⚡", title: "Automate", desc: "Intelligent workflow systems" },
                    { icon: "🚀", title: "Scale", desc: "Grow without limits" }
                  ].map((pillar, index) => (
                    <motion.div 
                      key={pillar.title}
                      className="bg-[#F8F8F8] border border-[#CCCCCC] rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-3xl mb-3">{pillar.icon}</div>
                      <h4 className="font-semibold text-[#1A1A1A] text-sm mb-1">{pillar.title}</h4>
                      <p className="text-xs text-[#666666]">{pillar.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div 
                  className="mt-8 pt-6 border-t border-[#CCCCCC]/30"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  <p className="text-sm text-[#666666] mb-4">
                    Ready to be part of the future?
                  </p>
                  <motion.button 
                    className="bg-gradient-to-r from-[#0066FF] to-[#0033FF] text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center space-x-2">
                      <span>Join the Revolution</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </span>
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code2, Rocket, Users, Brain, MessageSquare, Github, 
  Linkedin, Twitter, Shield,
  Zap, LineChart, Check, ChevronDown, ArrowRight
} from 'lucide-react';
import { Routes, Route, Link } from 'react-router-dom';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SEO from './components/SEO';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Section = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

const companies = [
  "TechCorp", "InnovateLabs", "FutureAI", "DataFlow", "CloudScale",
  "SmartSys", "QuantumTech", "ByteLogic", "NeuraTech", "VisionAI"
];

const testimonials = [
  { name: "Aarav Sharma", role: "CEO, NexGen Tech", content: "DevForge's innovative solutions have significantly streamlined our operations and boosted efficiency." },
  { name: "Emily Thompson", role: "CTO, DataNova", content: "Their expertise in AI integration has been pivotal in scaling our machine learning capabilities." },
  { name: "Liam O'Connor", role: "Founder, CloudLeap", content: "Working with DevForge was one of the best decisions we made; their technical support is unmatched." },
  { name: "Sophia Martinez", role: "Product Manager, QuantumFlow", content: "The team’s attention to detail and commitment to quality truly sets them apart from other vendors." },
  { name: "Mohammed Ali", role: "Director, InnovateIQ", content: "DevForge consistently delivered beyond our expectations, especially under tight deadlines." },
  { name: "Anya Petrova", role: "CEO, FutureWave", content: "As a startup, having a reliable development partner like DevForge made all the difference in our early growth stages." },
  { name: "James Wilson", role: "CTO, ByteStream", content: "Their technical expertise is world-class, helping us stay ahead in the competitive tech landscape." },
  { name: "Leila Hassan", role: "Founder, NeuralPath", content: "DevForge helped us scale our AI platform seamlessly, ensuring we met our product launch goals." },
  { name: "Rajiv Kumar", role: "Director, SmartGrid Solutions", content: "Exceptional service and outstanding results—DevForge has become an integral part of our success story." },
  { name: "Emma Dubois", role: "Head of R&D, BioLink Labs", content: "Their ability to understand complex problems and deliver tailored solutions is truly remarkable." }
];
const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in a wide range of modern technologies including React, Node.js, Python, AI/ML, Cloud Computing, and Blockchain."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. A typical MVP can take 2-3 months, while larger enterprise solutions may take 6+ months."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer comprehensive maintenance and support packages to ensure your solution continues to perform optimally."
  },
  {
    question: "What is your development process?",
    answer: "We follow an agile methodology with regular sprints, continuous integration, and frequent client communication."
  },
  {
    question: "How do you handle project pricing?",
    answer: "We offer flexible pricing models including fixed-price, time & materials, and retainer-based arrangements."
  }
];

interface Project {
  image: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  results: string[];
}

const projects: Project[] = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    title: "AI Analytics Platform",
    category: "Artificial Intelligence",
    description: "Enterprise-scale data analytics platform powered by advanced AI algorithms.",
    tech: ["React", "Python", "TensorFlow", "AWS"],
    results: ["500% increase in processing speed", "95% accuracy in predictions"]
  },
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Next-generation shopping experience with AI-powered recommendations.",
    tech: ["Next.js", "Node.js", "MongoDB", "Docker"],
    results: ["2M+ monthly active users", "300% increase in sales"]
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    title: "IoT Smart City",
    category: "IoT",
    description: "City-wide IoT implementation for smart infrastructure management.",
    tech: ["Python", "MQTT", "AWS IoT", "React"],
    results: ["30% reduction in energy consumption", "50% improvement in traffic flow"]
  },
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    title: "FinTech Mobile App",
    category: "Mobile Development",
    description: "Revolutionary mobile banking solution with blockchain integration.",
    tech: ["React Native", "Node.js", "Ethereum", "PostgreSQL"],
    results: ["1M+ downloads", "4.8 star rating"]
  },
  {
    image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&w=800&q=80",
    title: "Healthcare ML Platform",
    category: "Healthcare",
    description: "Machine learning platform for medical diagnosis assistance.",
    tech: ["Python", "TensorFlow", "React", "GCP"],
    results: ["99% diagnosis accuracy", "Used by 100+ hospitals"]
  },
  {
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    title: "Supply Chain Platform",
    category: "Enterprise Solutions",
    description: "Blockchain-based supply chain management system.",
    tech: ["Hyperledger", "Node.js", "React", "MongoDB"],
    results: ["40% reduction in logistics costs", "100% transparency"]
  },
  {
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    title: "EdTech Platform",
    category: "Education",
    description: "AI-powered adaptive learning platform for students.",
    tech: ["Vue.js", "Python", "PostgreSQL", "AWS"],
    results: ["500K+ active students", "35% improvement in test scores"]
  },
  {
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80",
    title: "Cybersecurity Suite",
    category: "Security",
    description: "Enterprise security solution with AI threat detection.",
    tech: ["Python", "Elasticsearch", "React", "Kubernetes"],
    results: ["Zero security breaches", "5M+ threats detected"]
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    title: "AR Shopping App",
    category: "Augmented Reality",
    description: "Revolutionary AR-powered shopping experience.",
    tech: ["Unity", "ARKit", "Node.js", "MongoDB"],
    results: ["200% increase in engagement", "45% reduction in returns"]
  }
];

function App() {
  const [, setSelectedProject] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Add state for services carousel
  const [currentService, setCurrentService] = useState(0);
  const services = [
    {
      icon: <Code2 className="h-12 w-12" />,
      title: "Custom Software Development",
      description: "Tailored solutions built with cutting-edge technology that drive innovation. We create scalable, secure, and innovative software solutions for businesses of all sizes."
    },
    {
      icon: <Brain className="h-12 w-12" />,
      title: "AI & Machine Learning",
      description: "Leverage the power of artificial intelligence to transform your business. We build intelligent systems that learn and adapt to your needs, powered by cutting-edge ML models."
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Cybersecurity Solutions",
      description: "Protect your digital assets with our comprehensive security solutions. We provide enterprise-grade security measures to keep your business safe from threats."
    },
    {
      icon: <Rocket className="h-12 w-12" />,
      title: "Digital Transformation",
      description: "Accelerate your business growth with complete digital transformation. We help organizations evolve through innovative technology solutions."
    }
  ];


  // Auto-rotate services
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  // Add these new states at the top with other states
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-[#021711] grid-pattern">
          <SEO />
          {/* Navigation */}
          <div className="fixed w-full px-4 py-4 z-50">
            <nav className="max-w-7xl mx-auto glass rounded-3xl px-8 py-4 border-2 border-primary">
              <div className="flex items-center justify-between gap-8">
                <div className="flex-shrink-0">
                  <img 
                    src="https://ddlppflcekemmdluepik.supabase.co/storage/v1/object/public/images-landing//evolve-x-logo.png" 
                    alt="EvolveX Logo" 
                    className="h-10 w-auto"
                  />
                </div>
                <div className="hidden md:flex items-center justify-center flex-1 space-x-12">
                  <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
                  <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</a>
                  <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Plans</a>
                </div>
                <button 
                  data-cal-link="evolvex/30min"
                  data-cal-namespace="30min"
                  data-cal-config='{"layout":"month_view"}'
                  className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-xl transition-all transform hover:scale-105 whitespace-nowrap"
                >
                  Book a Call Now
                </button>
              </div>
            </nav>
          </div>

          {/* Hero Section */}
          <Section>
            <div className="min-h-[90vh] flex items-center justify-center px-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-30" />
              <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.h1 
                  className="text-6xl md:text-8xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <span className="text-white">Forge the</span>
                  <span className="text-primary"> Future</span>
                </motion.h1>
                <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
                  We craft cutting-edge software solutions that drive innovation and business growth.
                </p>
                <div className="mt-8 flex justify-center space-x-4">
                  <button 
                    data-cal-link="evolvex/30min"
                    data-cal-namespace="30min"
                    data-cal-config='{"layout":"month_view"}'
                    className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full flex items-center space-x-2 transition-all transform hover:scale-105"
                  >
                    <span>Book a Call</span>
                    <ArrowRight className="h-5 w-5 fill-current" />
                  </button>
                  <a 
                    href="#pricing" 
                    className="border border-primary text-primary px-8 py-3 rounded-full hover:bg-primary/10 transition-all"
                  >
                    View Plans
                  </a>
                </div>
              </div>
            </div>
          </Section>

          {/* Company Marquee */}
          <Section>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="overflow-hidden">
                <div className="flex space-x-8 animate-marquee" style={{ animationDuration: '30s', animationIterationCount: 'infinite' }}>
                  {companies.concat(companies).map((company, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center min-w-[180px] h-20 bg-[#021711]/30 rounded-xl border border-primary/20 group hover:border-primary/50 transition-all"
                    >
                      <div className="h-8 w-8 mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                        <Code2 className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{company}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* Stats Section */}
          <Section>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="relative bg-[#021711]/30 rounded-3xl p-12 border border-primary/20 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
                <div className="grid md:grid-cols-3 gap-12 relative z-10">
                  {[
                    { 
                      number: "75+", 
                      label: "AI Agents Deployed",
                      icon: <Brain className="h-8 w-8 text-primary" />
                    },
                    { 
                      number: "400+", 
                      label: "Businesses Served",
                      icon: <Users className="h-8 w-8 text-primary" />
                    },
                    { 
                      number: "50+", 
                      label: "Funded Startups",
                      icon: <Rocket className="h-8 w-8 text-primary" />
                    }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center"
                      whileHover={{ y: -5 }}
                    >
                      <div className="bg-primary/10 w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                        {stat.icon}
                      </div>
                      <h3 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary-dark text-transparent bg-clip-text">{stat.number}</h3>
                      <div className="w-12 h-1 bg-primary/20 mx-auto my-4 rounded-full" />
                      <p className="text-gray-300 text-lg">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* Services Section */}
          <Section>
            <div id="services" className="py-32 px-4 relative">
              {/* Background Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -top-40 -left-40 animate-pulse-slow" />
                <div className="absolute w-[300px] h-[300px] bg-primary/5 rounded-full blur-2xl bottom-20 right-20 animate-float" />
                <div className="absolute w-64 h-64 border border-primary/10 rounded-full top-40 right-[20%] animate-spin-slow" />
              </div>

              <div className="max-w-7xl mx-auto">
                <div className="bg-[#021711]/30 rounded-3xl p-12 border border-primary/20 backdrop-blur-sm relative overflow-hidden">
                  {/* Service Content */}
                  <motion.div
                    key={currentService}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10"
                  >
                    <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
                      <div>
                        <motion.h3 
                          className="text-4xl font-bold text-white mb-4"
                          layoutId="service-title"
                        >
                          {services[currentService].title}
                        </motion.h3>
                      </div>
                      <div>
                        <motion.p 
                          className="text-gray-300 text-lg leading-relaxed"
                          layoutId="service-description"
                        >
                          {services[currentService].description}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Service Icons */}
                  <div className="flex items-center justify-center gap-6 relative">
                    <div className="flex items-center justify-center gap-6">
                      {services.map((service, index) => (
                        <motion.button
                          key={index}
                          onClick={() => setCurrentService(index)}
                          className="relative group"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.div
                            className={`
                              relative w-20 h-20 rounded-2xl flex items-center justify-center
                              transition-all duration-500 transform
                              ${currentService === index 
                                ? 'bg-primary shadow-lg shadow-primary/20' 
                                : 'bg-[#0A1128] border-2 border-primary/20'}
                            `}
                            layoutId={`service-box-${index}`}
                          >
                            {/* Glow effect */}
                            <div className={`
                              absolute inset-0 rounded-2xl transition-opacity duration-500
                              ${currentService === index ? 'opacity-100' : 'opacity-0'}
                              bg-gradient-to-r from-primary/20 to-transparent
                            `} />
                            
                            <motion.div
                              className={`relative z-10 ${currentService === index ? 'text-dark' : 'text-white'}`}
                              layoutId={`service-icon-${index}`}
                            >
                              {service.icon}
                            </motion.div>
                          </motion.div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Portfolio Section */}
          <Section>
            <div id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-white mb-16">Featured Projects</h2>
              <motion.div className="grid md:grid-cols-3 gap-8">
                {projects
                  .slice(
                    currentPage * projectsPerPage,
                    (currentPage + 1) * projectsPerPage
                  )
                  .map((project, index) => (
                    <motion.div
                      key={currentPage * projectsPerPage + index}
                      className="group cursor-pointer h-[400px] relative overflow-hidden rounded-2xl"
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setSelectedProject(currentPage * projectsPerPage + index)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <div className="absolute inset-0 w-full h-full">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-90" />
                      </div>

                      <div className="project-content absolute bottom-0 left-0 right-0 p-8">
                        <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-full mb-4">
                          {project.category}
                        </span>
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.slice(0, 3).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-white/10 text-white/80 px-2 py-1 text-sm rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </motion.div>

              {/* Projects Navigation */}
              <div className="mt-12 flex items-center justify-center gap-4">
                <div className="flex items-center gap-2 bg-[#021711]/30 p-2 rounded-full border border-primary/20">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index)}
                      className={`w-12 h-2 rounded-full transition-all ${
                        currentPage === index ? 'bg-primary' : 'bg-primary/20'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* Benefits Section */}
          <Section>
            <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-white mb-16">Why Choose Us</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Rocket className="h-8 w-8 text-primary" />,
                    title: "Rapid Development",
                    description: "Get your product to market faster with our agile development approach"
                  },
                  {
                    icon: <Shield className="h-8 w-8 text-primary" />,
                    title: "Enterprise Security",
                    description: "Bank-grade security measures to protect your data and users"
                  },
                  {
                    icon: <Users className="h-8 w-8 text-primary" />,
                    title: "Dedicated Team",
                    description: "Expert developers committed to your project's success"
                  },
                  {
                    icon: <Zap className="h-8 w-8 text-primary" />,
                    title: "Cutting-edge Tech",
                    description: "Access to the latest technologies and development practices"
                  },
                  {
                    icon: <LineChart className="h-8 w-8 text-primary" />,
                    title: "Scalable Solutions",
                    description: "Build systems that grow with your business needs"
                  },
                  {
                    icon: <MessageSquare className="h-8 w-8 text-primary" />,
                    title: "24/7 Support",
                    description: "Round-the-clock technical support and maintenance"
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="group relative"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                        <p className="text-gray-300 mt-2">{benefit.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Section>

          {/* Team Section */}
          <Section>
            <div id="team" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-white mb-16">Meet Our Team</h2>
              <div className="grid md:grid-cols-3 gap-12">
                {[
                  {
                    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
                    name: "Sarah Johnson",
                    role: "CEO & Lead Architect",
                    bio: "15+ years of experience in software architecture and AI"
                  },
                  {
                    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
                    name: "Michael Chen",
                    role: "CTO",
                    bio: "Former Google engineer, blockchain expert"
                  },
                  {
                    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
                    name: "Emily Rodriguez",
                    role: "Head of AI",
                    bio: "PhD in Machine Learning, 10+ research papers"
                  }
                ].map((member, index) => (
                  <motion.div
                    key={index}
                    className="group"
                    whileHover={{ y: -10 }}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform"></div>
                      <div className="relative bg-[#021711]/90 p-8 rounded-2xl">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-32 h-32 rounded-full mx-auto ring-4 ring-primary/20"
                        />
                        <div className="text-center mt-6">
                          <h3 className="text-xl font-bold text-white">{member.name}</h3>
                          <p className="text-primary mt-1">{member.role}</p>
                          <p className="text-gray-300 mt-4">{member.bio}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Section>

          {/* Testimonials Section */}
          <Section>
            <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-white mb-16">What Clients Say</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Column 1 - Scroll Up */}
                <div className="testimonial-column">
                  <div className="testimonial-content animate-scroll-up">
                    {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                      <motion.div
                        key={index}
                        className="bg-[#021711]/50 backdrop-blur-sm p-6 rounded-xl border border-primary/20 mb-8"
                      >
                        <p className="text-gray-300">{testimonial.content}</p>
                        <div className="mt-4">
                          <p className="text-white font-semibold">{testimonial.name}</p>
                          <p className="text-primary text-sm">{testimonial.role}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Column 2 - Scroll Down */}
                <div className="testimonial-column">
                  <div className="testimonial-content animate-scroll-down">
                    {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                      <motion.div
                        key={index}
                        className="bg-[#021711]/50 backdrop-blur-sm p-6 rounded-xl border border-primary/20 mb-8"
                      >
                        <p className="text-gray-300">{testimonial.content}</p>
                        <div className="mt-4">
                          <p className="text-white font-semibold">{testimonial.name}</p>
                          <p className="text-primary text-sm">{testimonial.role}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Column 3 - Scroll Up */}
                <div className="testimonial-column">
                  <div className="testimonial-content animate-scroll-up">
                    {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                      <motion.div
                        key={index}
                        className="bg-[#021711]/50 backdrop-blur-sm p-6 rounded-xl border border-primary/20 mb-8"
                      >
                        <p className="text-gray-300">{testimonial.content}</p>
                        <div className="mt-4">
                          <p className="text-white font-semibold">{testimonial.name}</p>
                          <p className="text-primary text-sm">{testimonial.role}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Pricing Section */}
          <Section>
            <div id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-white mb-16">Pricing Plans</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: "One-off",
                    description: "Ideal for making first strong impression -quickly.",
                    features: [
                      "High-converting landing pages",
                      "Mobile Optimized & Fast Loading",
                      "Technical Consultation",
                      "Monthly Updates",
                      "Basic MVP & Beta Testing",
                      "3 Months Support & Maintenance",
                      "AI Agents Implementation - BONUS",
                    ]
                  },
                  {
                    name: "Retained",
                    description: "Perfect for growing startups, marketing teams & product-led brands.",
                    features: [
                      "Up to 6 dedicated developers",
                      "Advanced project management",
                      "Any software within 2 weeks",
                      "Priority support & 6 months maintenance",
                      "Performance optimization",
                      "Everything in One-off plan",
                    ]
                  },
                  {
                    name: "Enterprise",
                    description: "For large-scale applications that require more resources.",
                    features: [
                      "Dedicated team",
                      "24/7 support",
                      "Custom solutions",
                      "Advanced AI implementations",
                      "Unlimited maintenance",
                      "AWS Credits of $150,000",
                      "Technical Architecture Consultation", 
                      "Scaling your App/Websites"
                    ]
                  }
                ].map((plan, index) => (
                  <motion.div
                    key={index}
                    className={`bg-[#021711]/50 rounded-2xl p-8 border ${
                      index === 1
                        ? "border-primary relative overflow-hidden"
                        : "border-primary/20"
                    }`}
                    whileHover={{ y: -10 }}
                  >
                    {index === 1 && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-primary text-white text-sm px-3 py-1 rounded-full">
                          Popular
                        </span>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    <div className="mt-4">
                    </div>
                    <p className="mt-4 text-gray-300">{plan.description}</p>
                    <ul className="mt-8 space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <Check className="h-5 w-5 text-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button 
                      data-cal-link="evolvex/30min"
                      data-cal-namespace="30min"
                      data-cal-config='{"layout":"month_view"}'
                      className={`w-full mt-8 px-6 py-3 rounded-xl transition-all transform hover:scale-105 ${
                        index === 1
                          ? "bg-primary hover:bg-primary-dark text-white"
                          : "border border-primary text-white hover:bg-primary/10"
                      }`}
                    >
                      Book a Call Now
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </Section>

          {/* FAQ Section */}
          <Section>
            <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-white mb-16">Frequently Asked Questions</h2>
              <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-[#021711]/50 rounded-xl border border-primary/20 overflow-hidden"
                  >
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center"
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    >
                      <span className="text-white font-medium">{faq.question}</span>
                      <ChevronDown
                        className={`h-5 w-5 text-primary transform transition-transform ${
                          openFaq === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-300">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Contact Section */}
          <Section>
            <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="bg-[#021711]/50 rounded-3xl p-8 md:p-12 border border-primary/20">
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-white mb-6">Let's Build Something Amazing Together</h2>
                  <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Ready to transform your ideas into reality? Schedule a call with us today and let's discuss how we can help you achieve your goals.</p>
                  <button 
                    data-cal-link="evolvex/30min"
                    data-cal-namespace="30min"
                    data-cal-config='{"layout":"month_view"}'
                    className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-xl transition-all transform hover:scale-105"
                  >
                    Schedule a Call
                  </button>
                </div>
              </div>
            </div>
          </Section>

          {/* Footer */}
          <footer className="bg-[#021711] border-t border-primary/20 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="flex items-center space-x-3">
                  <img 
                    src="https://ddlppflcekemmdluepik.supabase.co/storage/v1/object/public/images-landing//evolve-x-logo.png" 
                    alt="EvolveX Logo" 
                    className="h-8 w-auto"
                  />
                  <span className="text-white font-bold">EvolveX</span>
                </div>
                <div className="flex justify-center space-x-6">
                  <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
                  <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link>
                </div>
                <p className="text-gray-400 text-right">© 2024 EvolveX. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      } />
      <Route path="/privacy-policy" element={
        <>
          <SEO 
            title="Privacy Policy | EvolveX"
            description="Read about EvolveX's privacy policy and how we protect your data. Learn about our commitment to user privacy and data security."
          />
          <PrivacyPolicy />
        </>
      } />
      <Route path="/terms" element={
        <>
          <SEO 
            title="Terms of Service | EvolveX"
            description="Read about EvolveX's terms of service. Learn about our service agreements, user responsibilities, and policies."
          />
          <Terms />
        </>
      } />
    </Routes>
  );
}

export default App;
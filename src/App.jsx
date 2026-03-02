import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// On regroupe les imports pour plus de stabilité
import * as Si from "react-icons/si";
import * as Fa from "react-icons/fa";

export default function App() {
  // CONFIGURATION DU CARROUSEL PROJET 3 (bi1.png à bi5.png)
  const biImages = [
    "/projet3/bi1.png",
    "/projet3/bi2.png",
    "/projet3/bi3.png",
    "/projet3/bi4.png",
    "/projet3/bi5.png"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const allSkills = [
    { name: "Python", icon: <Si.SiPython className="text-[#3776AB]" /> },
    { name: "Java", icon: <Fa.FaJava className="text-[#ED8B00]" /> },
    { name: "C / C++", icon: <Si.SiCplusplus className="text-[#00599C]" /> },
    { name: "SQL", icon: <Si.SiMysql className="text-[#4479A1]" /> },
    { name: "React", icon: <Si.SiReact className="text-[#61DAFB]" /> },
    { name: "Flask", icon: <Si.SiFlask className="text-white" /> },
    { name: "Pandas", icon: <Si.SiPandas className="text-[#150458]" /> },
    { name: "Talend", icon: <Si.SiTalend className="text-[#FF6D70]" /> },
    { name: "Qlik", icon: <Si.SiQlik className="text-[#009845]" /> },
    { name: "Git", icon: <Si.SiGit className="text-[#F05032]" /> },
    { name: "Jira", icon: <Si.SiJira className="text-[#0052CC]" /> },
    { name: "HTML/CSS", icon: <Si.SiHtml5 className="text-[#E34F26]" /> },
  ];
  // Défilement automatique toutes les 4 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % biImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [biImages.length]);

  const scrollReveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="bg-[#050505] text-white font-sans selection:bg-purple-500 selection:text-white scroll-smooth">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/10 px-8 py-4 flex justify-between items-center">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent italic"
        >
          IT.
        </motion.span>
        <div className="flex gap-8 text-sm font-medium text-gray-400">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="z-10"
        >
          <div className="relative mb-12 mt-20 flex justify-center">
            <img src="/me.jpg" alt="Imane Touzani" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.5)]"/>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter italic">
            IMANE <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">TOUZANI</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light mb-10 mx-auto leading-relaxed">
            Data Science & AI Student. Building <span className="text-white font-medium">intelligent systems</span> through data and code.
          </p>
          
          <div className="flex flex-wrap justify-center gap-5">
            <a href="https://github.com/TouzaniImane1" target="_blank" rel="noreferrer" className="px-8 py-3 bg-white text-black rounded-full font-bold hover:scale-105 transition-all shadow-lg">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/imane-touzani-535713220/" target="_blank" className="px-8 py-3 border border-white/20 bg-white/5 rounded-full font-bold hover:bg-white/10 transition-all backdrop-blur-sm">
              LinkedIn
            </a>
            <a href="/CV-ImaneTouzani.pdf" download className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold hover:scale-105 transition-all">
              Download CV
            </a>
          </div>
        </motion.div>
      </section>

      
      {/* --- ENRICHED ABOUT ME (DUT + BACHELOR) --- */}
      <motion.section id="about" {...scrollReveal} className="py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 flex items-center gap-4 italic">
          <span className="w-12 h-[2px] bg-purple-500"></span> About Me
        </h2>
        
        <div className="grid md:grid-cols-5 gap-16 items-start">
          {/* Text Column (60%) */}
          <div className="md:col-span-3 space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              I am a dedicated Data Science and AI student at the <span className="text-white font-medium">Higher School of Technology (EST) in Fez</span>. My journey started with a solid foundation in software engineering, and I am now focusing on building intelligent, data-driven systems.
            </p>
            <p>
              With a <span className="text-white font-medium">DUT in Computer Engineering</span>, I developed a strong background in programming and database management. Currently pursuing my <span className="text-white font-medium">Bachelor's degree in SDIA</span> (Data Science & AI), I am bridging the gap between core software development and advanced analytical modeling.
            </p>
            <p>
              I am passionate about the entire data lifecycle: from designing robust <span className="text-white font-medium">MySQL architectures</span> and handling complex <span className="text-white font-medium">ETL workflows with Talend</span>, to creating insightful <span className="text-white font-medium">Qlik Sense dashboards</span>. My goal is to solve real-world problems by turning raw data into strategic assets.
            </p>
            
            <div className="pt-6 grid grid-cols-2 gap-4">
              <div className="border-l-2 border-purple-500 pl-4">
                <h5 className="text-white font-bold text-sm">Vision</h5>
                <p className="text-xs">Making AI accessible and impactful for business decision-making.</p>
              </div>
              <div className="border-l-2 border-pink-500 pl-4">
                <h5 className="text-white font-bold text-sm">Approach</h5>
                <p className="text-xs">Combining technical rigor with a constant drive for innovation.</p>
              </div>
            </div>
          </div>

          {/* Key Info Column (40%) */}
          <div className="md:col-span-2 space-y-4">
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm shadow-xl">
              <h4 className="text-purple-400 font-bold mb-6 flex items-center gap-2 uppercase tracking-widest text-xs">
                📂 Professional Profile
              </h4>
              <ul className="space-y-4 text-sm">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-500">Current</span>
                  <span className="text-white text-right font-medium">Bachelor SDIA</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-500">Previous</span>
                  <span className="text-white text-right font-medium">DUT Computer Engineering</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-500">Institution</span>
                  <span className="text-white text-right font-medium">EST Fez</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-500">Location</span>
                  <span className="text-white text-right font-medium">Fez, Morocco</span>
                </li>
                <li className="flex justify-between pt-2">
                  <span className="text-gray-500">Languages</span>
                  <span className="text-white text-right font-medium">Arabic, French, English</span>
                </li>
              </ul>
            </div>
            
            {/* Availability Badge */}
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center justify-center gap-3">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs text-green-400 font-bold uppercase tracking-widest">Available for Internships</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* --- SKILLS --- */}
      <section id="skills" className="py-20 bg-white/[0.02] px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 italic border-l-4 border-purple-500 pl-4">Technical Arsenal</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {allSkills.map((skill) => (
              <div key={skill.name} className="p-6 bg-black border border-white/5 rounded-xl flex flex-col items-center hover:border-purple-500/50 transition-all">
                <div className="text-3xl mb-3">{skill.icon}</div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">
        <motion.h2 {...scrollReveal} className="text-3xl font-bold mb-16 italic text-center md:text-left">Featured Projects</motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Project 1 */}
          <motion.div {...scrollReveal} className="group rounded-3xl border border-white/10 bg-white/5 overflow-hidden flex flex-col h-full shadow-lg">
            <div className="h-48 overflow-hidden bg-gray-900">
              <img src="/voice.jpg" alt="Voice AI" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500" />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">AI & Accessibility</span>
              <h3 className="text-xl font-bold mt-2 mb-4 italic">Voice Recognition Assistant</h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">Assistant for visually impaired users. Features real-time speech recognition and voice-controlled navigation.</p>
              <a href="https://github.com/TouzaniImane1" target="_blank" className="text-sm font-bold group-hover:underline underline-offset-4">View on GitHub →</a>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div {...scrollReveal} transition={{ delay: 0.2 }} className="group rounded-3xl border border-white/10 bg-white/5 overflow-hidden flex flex-col h-full shadow-lg">
            <div className="h-48 overflow-hidden bg-gray-900">
              <img src="/airport.jpg" alt="Airport App" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500" />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <span className="text-xs font-bold text-pink-400 uppercase tracking-widest">Mobile Development</span>
              <h3 className="text-xl font-bold mt-2 mb-4 italic">Fez Saïss Airport App</h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">Mobile application for passengers. Real-time flight tracking and airport navigation services.</p>
              <a href="https://github.com/TouzaniImane1" target="_blank" className="text-sm font-bold group-hover:underline underline-offset-4">View on GitHub →</a>
            </div>
          </motion.div>

          {/* Project 3 - CARROUSEL BI (Même taille que les autres) */}
          <motion.div {...scrollReveal} transition={{ delay: 0.4 }} className="group rounded-3xl border border-white/10 bg-white/5 overflow-hidden flex flex-col h-full shadow-2xl">
            <div className="h-48 overflow-hidden bg-black relative">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentImageIndex}
                  src={biImages[currentImageIndex]} 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-contain p-2"
                  style={{ imageRendering: 'auto' }}
                />
              </AnimatePresence>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                {biImages.map((_, i) => (
                  <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === currentImageIndex ? "bg-blue-400" : "bg-white/20"} transition-all`} />
                ))}
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow text-left">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest italic">Business Intelligence & ETL</span>
              <h3 className="text-xl font-bold mt-2 mb-4 italic">Real Estate Data Warehouse</h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                End-to-end BI pipeline: MySQL Modeling → Talend ETL → Qlik Sense Visualization for property market analysis.
              </p>
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:7429978794469416960/" target="_blank" className="text-sm font-bold group-hover:underline underline-offset-4">View Case Study →</a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- CONTACT --- */}
      <motion.section id="contact" {...scrollReveal} className="py-32 text-center border-t border-white/5">
        <h2 className="text-4xl font-bold mb-8 italic">Let's Connect</h2>
        <a href="mailto:imane.touzani3@usmba.ac.ma" className="text-2xl font-medium hover:text-purple-400 transition underline underline-offset-8">imane.touzani3@usmba.ac.ma</a>
      </motion.section>

      <footer className="py-10 text-center text-xs text-gray-600 border-t border-white/5">
        © 2026 Imane Touzani • Data Science Portfolio
      </footer>
    </div>
  );
}
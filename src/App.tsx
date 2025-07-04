import { ChevronDown, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { ThemeToggle } from './components/ThemeToggle';
import { AnimatedSection } from './components/AnimatedSection';
import { SkillCard } from './components/SkillCard';
import { ProjectCard } from './components/ProjectCard';
import { CertificateCard } from './components/CertificateCard';

import iamm from "./assets/iamm.png";
import android from "./assets/Android.png";
import githubIcon from "./assets/GitHub.png";
import html from "./assets/html.png";
import js from "./assets/js.png";
import kotlin from "./assets/Kotlin.png";
import node from "./assets/Node.png";
import python from "./assets/Python.png";
import reactIcon from "./assets/react.png";
import tailwind from "./assets/Tailwind.png";
import vsc from "./assets/vsc.png";

import FruitScan from './assets/aplikasi FruitScan.png';
import Portofolio from './assets/portofolio.png'

import sertifikat1 from './assets/sertifikat/aplikasi pemula android.png'
import sertifikat2 from './assets/sertifikat/dasar ai.png'
import sertifikat3 from  './assets/sertifikat/fundamental android.png'
import sertifikat4 from './assets/sertifikat/intermediate android.png'
import sertifikat5 from './assets/sertifikat/machine learning android.png'
import sertifikat6 from './assets/sertifikat/pemrograman kotlin.png'
import sertifikat7 from './assets/sertifikat/pengembang software.png'
import sertifikat8 from  './assets/bangkit.png'

function App() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = {
    frontend: [
      { name: 'HTML/CSS', icon: html },
      { name: 'JavaScript', icon: js },
      { name: 'React.js', icon: reactIcon },
      { name: 'Tailwind CSS', icon: tailwind },
      { name: 'Kotlin', icon: kotlin },
    ],
    backend: [
      { name: 'Node.js', icon: node },
      { name: 'Python', icon: python },
    ],
    tools: [
      { name: 'Git', icon: githubIcon },
      { name: 'Visual Studio', icon: vsc },
      { name: 'Android Studio', icon: android },
    ],
  };

  const projects = [
    {
      title: "Aplikasi NutriScan",
      description: "Aplikasi Scan Buah untuk mengetahui berapa banyak kalori dalam buah dengan menggunakan Machine Learning",
      image: FruitScan,
      githubUrl: "https://github.com/Capstone-product/NutriScan"
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio website built with React and Tailwind CSS",
      image: Portofolio,
      githubUrl: "https://github.com/ilhamrachmadhani/portofolio-iyamm"
    }
  ];

  const certificates = [
    {
      title: "Sertifikat Aplikasi Android Untuk Pemula",
      description: "Serifikasi pembelajaran tentang dasar dasar aplikasi android",
      image: sertifikat1
    },
    {
      title: "Sertifikasi Dasar AI",
      description: "Pembelajaran AI untuk aplikasi android",
      image: sertifikat2
    },
    {
      title: "Sertifikasi Fundamental Android",
      description: "Pembelajaran tentang fundamental android dengan kotlin",
      image: sertifikat3
    },
    {
      title: "Sertifikasi Intermediate Android",
      description: "pembelajaran pembuatan aplikasi dengan baik dan benar",
      image: sertifikat4
    },
    {
      title: "Sertifikasi Machine Learning untuk Android",
      description: "Pembelajaran penerapan ML ke Android",
      image: sertifikat5
    },
    {
      title: "Sertifikasi Pemrograman dengan Kotlin",
      description: "Pembelajaran dasar dasar dengan Kotlin",
      image: sertifikat6
    },
    {
      title: "Serifikasi Pengembangan Software",
      description: "Sertifikasi dasar dasar menjadi pengembang software",
      image: sertifikat7
    },
    {
      title: "Serifikasi Bangkit 2024",
      description: "Sertifikasi Studi Independen Bangkit 2024",
      image: sertifikat8
    }
  ];

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#certificates", label: "Certificates" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      {/* Header */}
      <header className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <nav className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Portfolio
            </span>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </a>
              ))}
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 dark:bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative text-center px-4 sm:px-6">
          <AnimatedSection animation="fadeIn">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-transparent bg-clip-text animate-pulse">
              Portfolio
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={300}>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-8">
              Welcome to my creative space
            </p>
          </AnimatedSection>
          <AnimatedSection animation="scaleIn" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#about" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore My Work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </a>
            </div>
          </AnimatedSection>
        </div>
        
        <a href="#about" className="absolute bottom-8 animate-bounce">
          <ChevronDown size={32} className="text-gray-600 dark:text-gray-400" />
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <AnimatedSection animation="fadeInLeft" className="lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-2xl opacity-20 transform rotate-6"></div>
                <img 
                  src={iamm}
                  alt="Profile"
                  className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeInRight" className="lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                About Me
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg mb-6">
                Saya mahasiswa semester 6 Sistem Informasi dengan fokus pada pengembangan aplikasi front end dan web developer. Berpengalaman sebagai Front End Web Developer di Universitas Bakrie.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg">
                Dengan latar belakang pemrograman, basis data, analisis sistem, dan manajemen proyek, saya berkomitmen untuk terus berkembang sebagai Front End Developer.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fadeInUp">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Skills & Technologies
            </h2>
          </AnimatedSection>
          
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Frontend Skills */}
            <AnimatedSection animation="fadeInUp" delay={200}>
              <div className="text-center mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  Frontend Development
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                {skills.frontend.map((skill, index) => (
                  <SkillCard 
                    key={skill.name} 
                    name={skill.name} 
                    icon={skill.icon} 
                    delay={index * 100}
                  />
                ))}
              </div>
            </AnimatedSection>

            {/* Backend Skills */}
            <AnimatedSection animation="fadeInUp" delay={400}>
              <div className="text-center mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-green-600 dark:text-green-400 mb-2">
                  Backend Development
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full"></div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                {skills.backend.map((skill, index) => (
                  <SkillCard 
                    key={skill.name} 
                    name={skill.name} 
                    icon={skill.icon} 
                    delay={index * 100}
                  />
                ))}
              </div>
            </AnimatedSection>

            {/* Tools & Technologies */}
            <AnimatedSection animation="fadeInUp" delay={600}>
              <div className="text-center mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
                  Tools & Technologies
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full"></div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                {skills.tools.map((skill, index) => (
                  <SkillCard 
                    key={skill.name} 
                    name={skill.name} 
                    icon={skill.icon} 
                    delay={index * 100}
                  />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fadeInUp">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Featured Projects
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <AnimatedSection key={project.title} animation="fadeInUp" delay={index * 200}>
                <ProjectCard 
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  githubUrl={project.githubUrl}
                  delay={index * 100}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fadeInUp">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Certificates & Achievements
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {certificates.map((certificate, index) => (
              <AnimatedSection key={certificate.title} animation="fadeInUp" delay={index * 100}>
                <CertificateCard 
                  title={certificate.title}
                  description={certificate.description}
                  image={certificate.image}
                  delay={index * 50}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fadeInUp">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Let's Connect
            </h2>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeInUp" delay={300}>
            <div className="flex justify-center space-x-6 sm:space-x-8">
              <a 
                href="https://github.com/ilhamrachmadhani" 
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <Github size={28} className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ilham-rachmadhani/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <Linkedin size={28} className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
              </a>
              <a 
                href="mailto:ilhamrachmadhani00@gmail.com" 
                className="group p-4 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <Mail size={28} className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
              </a>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeInUp" delay={500}>
            <div className="text-center mt-8">
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                Feel free to reach out for collaborations or just a friendly hello!
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © 2024 Portfolio. Made with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
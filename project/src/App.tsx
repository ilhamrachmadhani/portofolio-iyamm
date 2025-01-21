
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
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
import sertifikat3 from  './/assets/sertifikat/fundamental android.png'
import sertifikat4 from './assets/sertifikat/intermediate android.png'
import sertifikat5 from './assets/sertifikat/machine learning android.png'
import sertifikat6 from './assets/sertifikat/pemrograman kotlin.png'
import sertifikat7 from './assets/sertifikat/pengembang software.png'
import sertifikat8 from  './assets/bangkit.png'

function App() {
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

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Header */}
      <header className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold">Portfolio</span>
            <div className="space-x-6">
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#certificates" className="hover:text-blue-400 transition-colors">Certificates</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Portfolio
          </h1>
          <p className="text-xl text-gray-400">Welcome to my creative space</p>
        </div>
        <a href="#about" className="absolute bottom-8 animate-bounce">
          <ChevronDown size={32} />
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src={iamm}
                alt="Profile"
                className="rounded-lg shadow-md mix-blend-normal"
                style={{ backgroundColor: 'transparent' }}
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <p className="text-gray-400 leading-relaxed">
                Saya mahasiswa semester 6 Sistem Informasi dengan fokus pada pengembangan aplikasi front end dan web developer. Berpengalaman sebagai Front End Web Developer di Universitas Bakrie. Dengan latar belakang pemrograman, basis data, analisis sistem, dan manajemen proyek, saya berkomitmen untuk terus berkembang sebagai Front End Developer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="max-w-5xl mx-auto">
            {/* Frontend Skills */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-center mb-8 text-blue-600">Frontend Development</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skills.frontend.map((skill) => (
                  <div key={skill.name} className="bg-gray-700 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform">
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-12 h-12 mx-auto mb-4 mix-blend-normal" 
                      style={{ backgroundColor: 'transparent' }}
                    />
                    <h4 className="font-medium">{skill.name}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-center mb-8 text-green-600">Backend Development</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skills.backend.map((skill) => (
                  <div key={skill.name} className="bg-gray-700 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform">
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-12 h-12 mx-auto mb-4 mix-blend-normal" 
                      style={{ backgroundColor: 'transparent' }}
                    />
                    <h4 className="font-medium">{skill.name}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div>
              <h3 className="text-2xl font-semibold text-center mb-8 text-purple-600">Tools & Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skills.tools.map((skill) => (
                  <div key={skill.name} className="bg-gray-700 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform">
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-12 h-12 mx-auto mb-4 mix-blend-normal" 
                      style={{ backgroundColor: 'transparent' }}
                    />
                    <h4 className="font-medium">{skill.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <img 
                src={FruitScan}
                alt="Project 1"
                className="w-full h-48 object-cover mix-blend-normal"
                style={{ backgroundColor: 'transparent' }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Aplikasi NutriScan</h3>
                <p className="text-gray-400 mb-4">Aplikasi Scan Buah untuk mengetahui berapa banyak kalori dalam buah dengan menggunakan Machine Learning</p>
                <a href="https://github.com/Capstone-product/NutriScan" className="text-blue-400 hover:text-blue-300">View Project →</a>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <img 
                src={Portofolio}
                alt="Project 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
                <p className="text-gray-400 mb-4">My personal portfolio website built with React and Tailwind CSS</p>
                <a href="https://github.com/ilhamrachmadhani/portofolio-iyamm" className="text-blue-400 hover:text-blue-300">View Project →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <img 
                src={sertifikat1}
                alt="Certificate 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sertifikat Aplikasi Android Untuk Pemula</h3>
                <p className="text-gray-400 mb-4">Serifikasi pembelajaran tentang dasar dasar aplikasi android</p>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <img 
                src={sertifikat2}
                alt="Certificate 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sertifikasi Dasar AI</h3>
                <p className="text-gray-400 mb-4">Pembelajaran AI untuk aplikasi android</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <img 
                src={sertifikat3}
                alt="Certificate 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sertifikasi Fundamental Andorid</h3>
                <p className="text-gray-400 mb-4">Pembelajaran tentang fundamental andoroid dengan kotlin</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <img 
                src={sertifikat4}
                alt="Certificate 4"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sertifikasi Intermediate Android</h3>
                <p className="text-gray-400 mb-4">pembelajaran pembuatan aplikasi dengan baik dan benar</p>
              </div>
            </div>


            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <img 
                src={sertifikat5}
                alt="Certificate 5"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sertifikasi Machine Learning untuk Android</h3>
                <p className="text-gray-400 mb-4">Pembelajaran penerapan ML ke Android</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <img 
                src={sertifikat6}
                alt="Certificate 6"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sertifikasi Pemrograman dengan Kotlin</h3>
                <p className="text-gray-400 mb-4">Pembelajaran dasar dasar dengan Kotlin</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <img 
                src={sertifikat7}
                alt="Certificate 7"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Serifikasi Pengembangan Software</h3>
                <p className="text-gray-400 mb-4">Sertifikasi dasar dasar menjadi pengembang software</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <img 
                src={sertifikat8}
                alt="Certificate 8"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Serifikasi Bangkit 2024</h3>
                <p className="text-gray-400 mb-4">Sertifikasi Studi Independen Bangkit 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Contact Me</h2>
          <div className="flex justify-center space-x-8">
            <a href="https://github.com/ilhamrachmadhani" className="text-gray-400 hover:text-blue-400 transition-colors"><Github size={32} /></a>
            <a href="https://www.linkedin.com/in/ilham-rachmadhani/" className="text-gray-400 hover:text-blue-400 transition-colors"><Linkedin size={32} /></a>
            <a href="mailto:https://ilhamrachmadhani00@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors"><Mail size={32} /></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
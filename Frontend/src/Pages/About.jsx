// src/Pages/About.jsx
import React from "react";
import collegeImage from "/college-hero.jpeg"; 
import collegeLogo from "/college-logo.jpeg";
import { FaSearch, FaHandsHelping, FaClock } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      
      {/* Hero Section */}
      <section
        className="relative h-[450px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${collegeImage})` }}
      >
        <div className="bg-black/50 p-8 rounded-xl text-center text-white max-w-3xl">
          <img src={collegeLogo} alt="College Logo" className="h-20 mx-auto mb-4 rounded-full border-4 border-blue-500 shadow-lg" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Lost & Found Portal</h1>
          <p className="text-lg md:text-xl">Helping Students Recover Lost Items Quickly</p>
        </div>
      </section>

      {/* About Portal Section */}
      <section className="max-w-6xl mx-auto px-6 mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">About This Portal</h2>
        <p className="text-gray-700 mb-4 text-lg">
          Our Lost & Found Portal is designed to help students quickly recover lost belongings. Whether you've misplaced a wallet, keys, or other personal items, this portal allows you to report lost items and check for found items reported by others.
        </p>
        <p className="text-gray-700 mb-4 text-lg">
          With an easy-to-use interface and real-time updates, students can ensure their valuable belongings are recovered efficiently and safely. The platform encourages a supportive community and helps maintain campus safety and responsibility.
        </p>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 mt-16 mb-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FaSearch size={40} className="mx-auto mb-3 text-blue-600" />}
            title="Report Lost Items"
            description="Quickly report any item you’ve lost on campus with details and images."
          />
          <FeatureCard
            icon={<FaHandsHelping size={40} className="mx-auto mb-3 text-green-600" />}
            title="Report Found Items"
            description="Found something? Notify the community so the rightful owner can be reached."
          />
          <FeatureCard
            icon={<FaClock size={40} className="mx-auto mb-3 text-purple-600" />}
            title="Real-Time Updates"
            description="Stay updated with the latest lost and found reports across campus."
          />
        </div>
      </section>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition transform hover:-translate-y-2">
      {icon}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

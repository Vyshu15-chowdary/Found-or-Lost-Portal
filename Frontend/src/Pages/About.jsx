// src/Pages/About.jsx
import React from "react";
import collegeImage from "/college-hero.jpeg"; // make sure image exists
import collegeLogo from "/college-logo.jpeg";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
        style={{ backgroundImage: `url(${collegeImage})` }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded text-center text-white">
          <img src={collegeLogo} alt="College Logo" className="h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Lost & Found Portal
          </h1>
          <p className="text-lg md:text-xl">
            Helping Students Recover Lost Items Quickly
          </p>
        </div>
      </section>

      {/* About Portal Section */}
      <section className="max-w-5xl mx-auto px-4 mt-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          About This Portal
        </h2>
        <p className="text-gray-700 text-center mb-6">
          Our Lost & Found Portal is designed to help students quickly recover
          lost belongings. Whether you've misplaced a wallet, keys, or other
          personal items, this portal allows you to report lost items and check
          for found items reported by others.
        </p>
        <p className="text-gray-700 text-center mb-6">
          With an easy-to-use interface and real-time updates, students can
          ensure their valuable belongings are recovered efficiently and safely.
          The platform encourages a supportive community and helps maintain
          campus safety and responsibility.
        </p>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto px-4 mt-12 mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Report Lost Items</h3>
            <p className="text-gray-600">
              Quickly report any item you’ve lost on campus with details and images.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Report Found Items</h3>
            <p className="text-gray-600">
              Found something? Notify the community so the rightful owner can be reached.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Real-Time Updates</h3>
            <p className="text-gray-600">
              Stay updated with the latest lost and found reports across campus.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

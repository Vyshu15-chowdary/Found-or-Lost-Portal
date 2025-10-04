// src/Pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";


export default function Home() {
  return (
   
 
    
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
     
      {/* Hero Section */}
      <section className= "relative bg-cover bg-center bg-no-repeat min-h-[90vh] flex flex-col justify-center items-center text-center"
        style={{
          backgroundImage: "url('/Necn1.jpg')",
         }} >
     <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-pink-400 bg-clip-text text-transparent drop-shadow-[0_3px_10px_rgba(0,0,0,0.7)]">
  Lost & Found Portal
</h1>



      
        <p className="text-lg text-white  max-w-2xl mx-auto mb-8">
          Helping you reunite with your belongings. Post lost items, report found items, and connect with owners quickly.
        </p>
        <div className="space-x-4">
          <Link
            to="/lost"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition"
          >
            Report Lost Item
          </Link>
          <Link
            to="/found"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg transition"
          >
            Report Found Item
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Use Our Portal?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <FeatureCard
            icon="🔍"
            title="Quick Search"
            description="Find items easily with our advanced search and filters."
          />
          <FeatureCard
            icon="🤝"
            title="Community Driven"
            description="Connect with people who have found or lost belongings."
          />
          <FeatureCard
            icon="⚡"
            title="Fast & Reliable"
            description="Instantly share and get notified about lost/found items."
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Ready to get started?
        </h2>
        <Link
          to="/items"
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg shadow-lg transition text-lg"
        >
          View All Items
        </Link>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

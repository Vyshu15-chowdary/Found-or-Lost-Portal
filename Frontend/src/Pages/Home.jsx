// src/pages/Home.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ItemCard from "../components/ItemCard.jsx";


export default function Home() {
  // Dummy data (replace later with backend data from MongoDB)
  const items = [
    {
      id: 1,
      name: "Black Wallet",
      description: "Contains ID card and some cash",
      location: "Library",
      date: "2025-09-29",
      image: "/wallet.jpeg",
      type: "lost",
    },
    {
      id: 2,
      name: "Blue Water Bottle",
      description: "Milton 1L blue bottle",
      location: "Cafeteria",
      date: "2025-09-28",
      image: "/waterbottle.jpeg",
      type: "found",
    },
    {
      id: 3,
      name: "Scientific Calculator",
      description: "Casio fx-991ES PLUS, left in exam hall",
      location: "Exam Hall A",
      date: "2025-09-27",
      image: "/calculator.jpeg",
      type: "lost",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
     
      

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-12 px-6 text-center">
        <img
          src="/college-logo.jpeg"
          alt="College Logo"
          className="mx-auto mb-4 w-24 h-24"
        />
        <h1 className="text-4xl md:text-5xl font-bold">
          College Lost & Found Portal
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200">
          This portal helps students and staff report lost items and return
          found items. Together, let’s make sure nothing important stays lost!
        </p>
      </section>

      {/* Items Section */}
      <section className="flex-grow py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Latest Lost & Found Items
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// src/components/ItemCard.jsx
export default function ItemCard({ item }) {
  if (!item) {
    return (
      <div className="p-4 bg-red-100 text-red-600 rounded-lg">
        ⚠️ No item data passed to ItemCard
      </div>
    );
  }

  return (
    <div className="group relative bg-white/70 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2">
      {/* Item Image */}
      <div className="relative">
        <img
          src={item.image || "/placeholder.png"}
          alt={item.name || "Unknown Item"}
          className="w-full h-48 object-cover"
        />
        <span
          className={`absolute top-3 left-3 px-3 py-1 text-xs rounded-full font-semibold shadow-md ${
            item.type === "lost"
              ? "bg-red-500 text-white"
              : "bg-green-500 text-white"
          }`}
        >
          {item.type === "lost" ? "Lost" : "Found"}
        </span>
      </div>

      {/* Item Content */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition">
          {item.name || "Unnamed Item"}
        </h2>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          {item.description || "No description provided"}
        </p>

        <div className="mt-3 space-y-1 text-sm text-gray-500">
          <p>📍 {item.location || "Unknown Location"}</p>
          <p>📅 {item.date || "Unknown Date"}</p>
        </div>

        {/* Actions */}
        <div className="mt-5 flex justify-between items-center">
          <button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-lg text-sm font-medium shadow hover:opacity-90 transition">
            Contact
          </button>
          <LinkButton type={item.type} />
        </div>
      </div>
    </div>
  );
}

// A small reusable button (just for fun)
function LinkButton({ type }) {
  return (
    <span
      className={`px-3 py-1 text-xs rounded-full font-semibold ${
        type === "lost"
          ? "bg-red-100 text-red-600 border border-red-200"
          : "bg-green-100 text-green-600 border border-green-200"
      }`}
    >
      {type === "lost" ? "Looking for Owner" : "Found Item"}
    </span>
  );
}

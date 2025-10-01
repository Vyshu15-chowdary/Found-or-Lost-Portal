export default function ItemCard({ item }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition p-4">
      {/* Item Image */}
      <img
        src={item.image || "/placeholder.png"}
        alt={item.name}
        className="w-full h-40 object-cover rounded-md"
      />

      {/* Item Info */}
      <div className="mt-3">
        <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
        <p className="text-sm text-gray-600">{item.description}</p>
        <p className="text-sm mt-1 text-gray-500">
          📍 {item.location || "Unknown Location"}
        </p>
        <p className="text-sm mt-1 text-gray-500">
          📅 {item.date || "Unknown Date"}
        </p>
      </div>

      {/* Status Badge */}
      <div className="mt-3 flex justify-between items-center">
        <span
          className={`px-3 py-1 text-xs rounded-full font-semibold ${
            item.type === "lost"
              ? "bg-red-100 text-red-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {item.type === "lost" ? "Lost" : "Found"}
        </span>

        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm">
          Contact
        </button>
      </div>
    </div>
  );
}

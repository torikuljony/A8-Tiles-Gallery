import Link from "next/link";

export default function TileCard({ tile }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col h-full">
      
      {/* Image */}
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={tile.image}
          alt={tile.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        
        {/* Category */}
        <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">
          {tile.category}
        </span>

        {/* Title */}
        <h2 className="text-xl font-medium text-[#2D2D2D] mb-2">
          {tile.title}
        </h2>

        {/* Price */}
        <p className="text-sm text-gray-500 mb-3">
          ${tile.price}
        </p>

        {/* Stock */}
        <p className={`text-xs mb-4 ${tile.inStock ? "text-green-500" : "text-red-500"}`}>
          {tile.inStock ? "In Stock" : "Out of Stock"}
        </p>

        {/* Button */}
        <div className="mt-auto">
          <Link href={`/tiles/${tile.id}`}>
            <button className="w-full bg-[#A0452D] hover:bg-[#8B3A26] text-white py-3 rounded-lg font-medium transition-colors">
              Details
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
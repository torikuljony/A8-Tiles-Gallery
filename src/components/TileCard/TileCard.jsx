import Link from "next/link";

export default function TileCard({ tile }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col h-full">
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={tile.image}
          alt={tile.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">
          {tile.category || "Stone"} 
        </span>
        
        <h2 className="text-xl font-medium text-[#2D2D2D] mb-4">
          {tile.name}
        </h2>

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
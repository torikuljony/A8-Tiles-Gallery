const tiles = [
  {
    id: 1,
    name: "Earth Tones Hex",
    category: "TERRACOTTA",
    price: "$12.99 / sq ft",
    image: "/image.2.png", 
    description: "Hand-crafted natural clay tile with a matte finish, perfect for warm kitchen aesthetics."
  },
  {
    id: 2,
    name: "Carrara Mist",
    category: "STONE",
    price: "$15.00 / sq ft",
    image: "/image.3.png",
    description: "Elegant marble look for modern luxury spaces with subtle veining."
  },
  {
    id: 3,
    name: "Deep Forest Gloss",
    category: "CERAMIC",
    price: "$14.50 / sq ft",
    image: "/image.4.png",
    description: "Rich forest green tones with a glossy finish for a bold look."
  }
];

export default function TileDetails({ params }) {
  
  const tile = tiles.find((t) => t.id == params.id);

  if (!tile) {
    return <h1 className="text-center mt-10 text-2xl font-serif">Tile not found</h1>;
  }

  return (
    <main className="bg-[#f7f6ea] min-h-screen p-8 md:p-20 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
     
        <div className="relative group">
          <div className="overflow-hidden rounded-3xl shadow-xl border border-gray-100 bg-white">
            <img 
              src={tile.image} 
              alt={tile.name} 
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

       
        <div>
          <header className="mb-6">
            <span className="text-[#c05a3c] text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block">
              {tile.category || "COLLECTION"}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
              {tile.name}
            </h1>
          </header>

          <div className="grid grid-cols-2 gap-y-8 gap-x-4 mb-8 pb-8 border-y border-gray-200 py-8">
            <div>
              <h4 className="text-gray-400 text-[10px] font-bold uppercase mb-1 tracking-widest">Price</h4>
              <p className="text-[#c05a3c] text-2xl font-bold">{tile.price}</p>
            </div>
            <div>
              <h4 className="text-gray-400 text-[10px] font-bold uppercase mb-1 tracking-widest">Material</h4>
              <p className="text-gray-800 font-semibold text-lg">Natural Stone</p>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed text-sm mb-10">
            {tile.description}
          </p>

          <div className="flex gap-4">
            <button className="flex-grow bg-[#A0452D] hover:bg-[#8B3A26] text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-[#A0452D]/20">
              🛒 Request Sample
            </button>
            <button className="p-4 border border-gray-300 rounded-xl hover:bg-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
import TileCard from "../../components/TileCard/TileCard";

const tiles = [
  {
    id: 1,
    name: "Earth Tones Hex",
    category: "TERRACOTTA",
    price: "$12.99 / sq ft",
    image: "/image.2.png", 
  },
  {
    id: 2,
    name: "Carrara Mist",
    category: "STONE",
    price: "$15.00 / sq ft",
    image: "/image.3.png",
  },
  {
    id: 3,
    name: "Deep Forest Gloss",
    category: "CERAMIC",
    price: "$14.50 / sq ft",
    image: "/image.4.png",
  },
  {
    id: 4,
    name: "Anthracite Slate",
    category: "PORCELAIN",
    price: "$10.50 / sq ft",
    image: "/image.5.png",
  },
  {
    id: 5,
    name: "Sahara Honed",
    category: "STONE",
    price: "$18.20 / sq ft",
    image: "/image.6.png",
  },
  {
    id: 6,
    name: "Azure Artisan",
    category: "CERAMIC",
    price: "$16.00 / sq ft",
    image: "/image.7.png",
  },
];

export default function TilesPage() {
  return (
    <div className="bg-[#fcfaf2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        
        <header className="text-center mb-12">
           <h1 className="text-4xl md:text-5xl font-serif text-[#2D2D2D] mb-4">
             Explore Our Collection
           </h1>
           <p className="text-gray-500 max-w-xl mx-auto">
             Find the perfect textures and colors to elevate your architectural vision.
           </p>
        </header>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {tiles.map((tile) => (
            <TileCard key={tile.id} tile={tile} />
          ))}
        </div>

      </div>
    </div>
  );
}
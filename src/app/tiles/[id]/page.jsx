const tiles = [
  {
    id: "1",
    name: "Terracotta Earth",
    price: "$12.99 / sq ft",
    image: "https://i.ibb.co/8r1Ny2n/tile1.jpg",
    description: "Warm earthy tones perfect for rustic interiors.",
  },
  {
    id: "2",
    name: "Carrara Mist",
    price: "$15.00 / sq ft",
    image: "https://i.ibb.co/2d9WQ4p/tile2.jpg",
    description: "Elegant marble look for modern luxury spaces.",
  },
  {
    id: "3",
    name: "Slate Stone",
    price: "$10.50 / sq ft",
    image: "https://i.ibb.co/f4yZ5cJ/tile3.jpg",
    description: "Natural stone texture for bold designs.",
  },
];

export default function TileDetails({ params }) {
  const tile = tiles.find((t) => t.id === params.id);

  if (!tile) {
    return <h1 className="text-center mt-10">Tile not found</h1>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      
      <img
        src={tile.image}
        alt={tile.name}
        className="w-full h-[400px] object-cover rounded-lg"
      />

      <h1 className="text-3xl font-bold mt-6">{tile.name}</h1>
      <p className="text-gray-500 mt-2">{tile.price}</p>

      <p className="mt-4 text-gray-700">{tile.description}</p>

      <button className="mt-6 bg-red-500 text-white px-6 py-2 rounded">
        Buy Now
      </button>

    </div>
  );
}
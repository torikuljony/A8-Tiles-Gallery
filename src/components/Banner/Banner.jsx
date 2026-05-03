export default function Banner() {
  return (
    <section className="bg-[#F9F6E5] min-h-125 flex items-center px-8 py-12 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        
        <div className="text-left">
          <span className="bg-[#C1E1C1] text-[#4A6D4A] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Premium Collections 2024
          </span>
          
          <h1 className="mt-6 text-5xl md:text-6xl font-serif text-[#2D2D2D] leading-tight">
            Discover Your <br /> 
            <span className="italic text-[#A0522D]">Perfect Aesthetic</span>
          </h1>

          <p className="mt-6 text-gray-700 text-lg max-w-md leading-relaxed">
            Curated premium tiles for modern living. Elevate your space with
            architectural precision and natural textures.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="bg-[#A0452D] hover:bg-[#8B3A26] text-white px-8 py-3 rounded-lg font-medium transition-all">
              Browse Now
            </button>

            <button className="border-2 border-[#D1CCB9] text-[#2D2D2D] px-8 py-3 rounded-lg font-medium hover:bg-white/50 transition-all">
              View Lookbook
            </button>
          </div>
        </div>

      
        <div className="relative">
  <img 
    src="/image.1.png" 
    alt="Premium Tiles Display"
    className="rounded-[40px] shadow-2xl w-full object-cover h-[450px]"
  />
</div>

      </div>
    </section>
  );
}
export default function Footer() {
  return (
    <footer className="bg-[#F9F6E5] border-t border-[#E0E2D1] py-12 px-8 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
       
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-[#2D2D2D] mb-1">Tiles Gallery</h2>
          <p className="text-xs text-gray-500">
            © 2024 Tiles Gallery. Architectural Precision & Natural Aesthetics.
          </p>
        </div>

      
        <div className="flex gap-6 text-sm text-[#4A4A4A] font-medium">
          <a href="#" className="hover:text-[#A0452D] transition-colors">Contact</a>
          <a href="#" className="hover:text-[#A0452D] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[#A0452D] transition-colors">Pinterest</a>
          <a href="#" className="hover:text-[#A0452D] transition-colors">Catalog</a>
        </div>

      </div>
    </footer>
  );
}
"use client";
import React, { useRef } from "react";
import Link from "next/link";

export default function FeaturedMaterials() {
  const sliderRef = useRef(null);

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const materials = [
    {
      id: 1,
      title: "Terrazzo",
      price: "$50/m²",
      desc: "Organic composite material offering a playful yet sophisticated texture.",
      img: "/image.14.png",
      badge: "NEW",
      badgeClass: "bg-green-600 text-white",
    },
    {
      id: 2,
      title: "Moroccan",
      price: "$95/m²",
      desc: "Hand-glazed Zellige tiles that bring Mediterranean craftsmanship to your home.",
      img: "/image.15.png",
      badge: null,
    },
    {
      id: 3,
      title: "Slate",
      price: "$45/m²",
      desc: "Durable and naturally textured slabs, perfect for high-traffic entryways.",
      img: "/image.16.png",
      badge: null,
    },
    {
      id: 4,
      title: "Marble",
      price: "$150/m²",
      desc: "Timeless Carrara marble with subtle veining for a luxury feel.",
      img: "/image.17.png",
      badge: "FEATURED",
      badgeClass: "bg-[#b24531] text-white",
    },

  ];

  return (
    <section className="bg-[#f7f6ea] px-5 py-16 md:px-10 lg:px-20 font-sans">
      <div className="flex justify-between items-end mb-8">
        <div>
          <span className="text-[#c05a3c] text-xs font-bold tracking-wider uppercase">
            THE COLLECTION
          </span>
          <h2 className="text-3xl md:text-4xl text-gray-800 mt-2 font-serif">
            Featured Materials
          </h2>
        </div>
        <button
          onClick={slideRight}
          className="text-[#557b56] text-sm md:text-base font-medium hover:underline flex items-center gap-1"
        >
          View all collections <span className="text-lg">→</span>
        </button>
      </div>

      <div
        ref={sliderRef}
        className="flex gap-5 overflow-x-auto scroll-smooth pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {materials.map((item) => (
          <div
            key={item.id}
            className="min-w-[280px] md:min-w-[300px] bg-white rounded-xl overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-gray-100 shrink-0"
          >
            <div className="relative h-[220px] bg-gray-200">
              {item.badge && (
                <span
                  className={`absolute top-4 left-4 px-2 py-1 text-[10px] font-bold rounded uppercase ${item.badgeClass}`}
                >
                  {item.badge}
                </span>
              )}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                <span className="text-[#c05a3c] font-bold text-sm">
                  {item.price}
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 h-[60px]">
                {item.desc}
              </p>
              
              
              <Link href={`/tiles/${item.id}`}>
                <button className="w-full py-2.5 border border-gray-300 rounded-lg font-semibold text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
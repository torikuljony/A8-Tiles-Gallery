import React from 'react';

export default function AuthPages() {
  return (
    <div className="min-h-screen bg-[#F9F6E5] flex flex-col items-center justify-center gap-10 py-10 px-4">
      
      {/* - SIGN IN FORM -- */}
      <div className="w-full max-w-[450px] bg-white p-10 rounded-[32px] shadow-sm">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-medium text-[#1A1A1A]">Sign In</h1>
          <p className="text-[#6B6B6B] text-sm mt-3">Access your collection of exquisite textures.</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#6B6B6B] mb-2">Email Address</label>
            <input
              type="email"
              placeholder="hdfy@gmail.com"
              className="w-full px-4 py-3 bg-[#F2F4E6]/50 border border-[#E0E2D1] rounded-xl text-sm outline-none focus:border-[#A0452D]"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#6B6B6B] mb-2">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-[#F2F4E6]/50 border border-[#E0E2D1] rounded-xl text-sm outline-none focus:border-[#A0452D]"
            />
          </div>

          <button className="w-full bg-[#A0452D] hover:bg-[#8B3A26] text-white py-4 rounded-xl font-medium text-sm transition-all shadow-md">
            Login
          </button>
        </form>

        <div className="relative flex items-center my-8">
          <div className="flex-grow border-t border-[#E0E2D1]"></div>
          <span className="flex-shrink mx-4 text-[10px] font-bold uppercase tracking-[2px] text-[#A3A3A3]">Or continue with</span>
          <div className="flex-grow border-t border-[#E0E2D1]"></div>
        </div>

        <button className="w-full border-2 border-[#E0E2D1] py-3 rounded-xl text-sm font-semibold text-[#1A1A1A] flex items-center justify-center gap-2 transition-all hover:bg-gray-50">
          <span className="tracking-[3px] font-light">GOOGLE</span> <span className="font-bold text-lg">Google</span>
        </button>

        <p className="text-sm text-center mt-8 text-[#6B6B6B]">
          Don't have an account? <span className="text-[#A0452D] font-bold cursor-pointer hover:underline">Register</span>
        </p>
      </div>

      {/* --- CREATE ACCOUNT FORM --- */}
      <div className="w-full max-w-[450px] bg-white p-10 rounded-[32px] shadow-sm">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-medium text-[#1A1A1A]">Create Account</h1>
          <p className="text-[#6B6B6B] text-sm mt-3">Join our gallery of premium surface designs.</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#6B6B6B] mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Torikul"
              className="w-full px-4 py-3 bg-[#F2F4E6]/50 border border-[#E0E2D1] rounded-xl text-sm outline-none focus:border-[#A0452D]"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#6B6B6B] mb-2">Email Address</label>
            <input
              type="email"
              placeholder="hdfy@gmail.com"
              className="w-full px-4 py-3 bg-[#F2F4E6]/50 border border-[#E0E2D1] rounded-xl text-sm outline-none focus:border-[#A0452D]"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#6B6B6B] mb-2">Photo URL</label>
            <input
              type="text"
              placeholder="https://image-link.com/profile.jpg"
              className="w-full px-4 py-3 bg-[#F2F4E6]/50 border border-[#E0E2D1] rounded-xl text-sm outline-none focus:border-[#A0452D]"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#6B6B6B] mb-2">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-[#F2F4E6]/50 border border-[#E0E2D1] rounded-xl text-sm outline-none focus:border-[#A0452D]"
            />
          </div>

          <button className="w-full bg-[#A0452D] hover:bg-[#8B3A26] text-white py-4 rounded-xl font-medium text-sm transition-all shadow-md">
            Register
          </button>
        </form>

        <div className="relative flex items-center my-8">
          <div className="flex-grow border-t border-[#E0E2D1]"></div>
          <span className="flex-shrink mx-4 text-[10px] font-bold uppercase tracking-[2px] text-[#A3A3A3]">Or join with</span>
          <div className="flex-grow border-t border-[#E0E2D1]"></div>
        </div>

        <button className="w-full border-2 border-[#E0E2D1] py-3 rounded-xl text-sm font-semibold text-[#1A1A1A] flex items-center justify-center gap-2 transition-all hover:bg-gray-50">
          <span className="tracking-[3px] font-light">GOOGLE</span> <span className="font-bold text-lg">Google</span>
        </button>

        <p className="text-sm text-center mt-8 text-[#6B6B6B]">
          Already a member? <span className="text-[#A0452D] font-bold cursor-pointer hover:underline">Login</span>
        </p>
      </div>

    </div>
  );
}
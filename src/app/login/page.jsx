"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function AuthPages() {
  const router = useRouter();

  // ================= LOGIN STATE =================
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  // ================= REGISTER STATE =================
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    photo: "",
    password: ""
  });

  // ================= INPUT HANDLERS =================
  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value
    });
  };

  // ================= EMAIL LOGIN =================
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const res = await authClient.signIn.email({
      email: loginData.email,
      password: loginData.password,
      rememberMe: true,
    });

    if (res.error) {
      console.log("❌ LOGIN ERROR:", res.error);
      return;
    }

    console.log("✅ LOGIN SUCCESS:", res.data);
    router.push("/");
  };

  // ================= EMAIL REGISTER =================
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    const res = await authClient.signUp.email({
      name: registerData.name,
      email: registerData.email,
      password: registerData.password,
      image: registerData.photo,
    });

    if (res.error) {
      console.log("❌ REGISTER ERROR:", res.error);
      return;
    }

    console.log("✅ REGISTER SUCCESS:", res.data);
    router.push("/");
  };

  // ================= GOOGLE LOGIN (FIXED) =================
  const handleGoogleLogin = async () => {
    try {
      const res = await authClient.signIn.social({
        provider: "google",
      });

      if (res.error) {
        console.log("❌ GOOGLE LOGIN ERROR:", res.error);
        return;
      }

      console.log("✅ GOOGLE LOGIN SUCCESS:", res.data);

      router.push("/");
    } catch (err) {
      console.log("❌ GOOGLE LOGIN FAILED:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9F6E5] to-[#F2E9D8] flex flex-col items-center justify-center gap-10 py-10 px-4">

      {/* ================= LOGIN CARD ================= */}
      <div className="w-full max-w-[450px] bg-white p-10 rounded-3xl shadow-lg">

        <h1 className="text-3xl font-semibold text-center mb-6">Sign In</h1>

        <form onSubmit={handleLoginSubmit} className="space-y-4">

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={loginData.email}
            onChange={handleLoginChange}
            className="w-full p-3 border rounded-xl outline-none focus:border-[#A0452D]"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleLoginChange}
            className="w-full p-3 border rounded-xl outline-none focus:border-[#A0452D]"
          />

          <button className="w-full bg-[#A0452D] text-white py-3 rounded-xl hover:bg-[#8B3A26] transition">
            Login
          </button>

        </form>

        {/* GOOGLE LOGIN */}
        <div className="my-6 flex items-center gap-3">
          <div className="flex-1 h-[1px] bg-gray-300"></div>
          <p className="text-xs text-gray-500">OR</p>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 border py-3 rounded-xl hover:bg-gray-50 transition"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            className="w-5 h-5"
          />
          <span className="font-medium">Continue with Google</span>
        </button>

      </div>

      {/* ================= REGISTER CARD ================= */}
      <div className="w-full max-w-[450px] bg-white p-10 rounded-3xl shadow-lg">

        <h1 className="text-3xl font-semibold text-center mb-6">Create Account</h1>

        <form onSubmit={handleRegisterSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={registerData.name}
            onChange={handleRegisterChange}
            className="w-full p-3 border rounded-xl outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={registerData.email}
            onChange={handleRegisterChange}
            className="w-full p-3 border rounded-xl outline-none"
          />

          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            value={registerData.photo}
            onChange={handleRegisterChange}
            className="w-full p-3 border rounded-xl outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={registerData.password}
            onChange={handleRegisterChange}
            className="w-full p-3 border rounded-xl outline-none"
          />

          <button className="w-full bg-[#A0452D] text-white py-3 rounded-xl hover:bg-[#8B3A26] transition">
            Register
          </button>

        </form>

        {/* GOOGLE REGISTER */}
        <button
          onClick={handleGoogleLogin}
          className="w-full mt-6 flex items-center justify-center gap-3 border py-3 rounded-xl hover:bg-gray-50 transition"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            className="w-5 h-5"
          />
          <span className="font-medium">Sign up with Google</span>
        </button>

      </div>

    </div>
  );
}
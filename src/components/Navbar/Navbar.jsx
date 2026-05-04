"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [user, setUser] = useState(null);

  // ================= GET USER =================
  useEffect(() => {
    const fetchUser = async () => {
      const session = await authClient.getSession();
      setUser(session?.data?.user || null);
    };

    fetchUser();
  }, []);

  // ================= LOGOUT =================
  const handleLogout = async () => {
    await authClient.signOut();
    setUser(null);
    router.push("/login");
  };

  const linkStyle = (path) =>
    `px-3 py-1 text-sm ${
      pathname === path
        ? "text-red-500 border-b-2 border-red-400"
        : "text-gray-600 hover:text-black"
    }`;

  return (
    <div className="w-full border-b bg-[#f3efe6]">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">

        {/* LOGO */}
        <h1 className="text-lg font-semibold text-red-500">
          Tiles Gallery
        </h1>

        {/* NAV LINKS */}
        <div className="flex items-center gap-6">
          <Link href="/" className={linkStyle("/")}>Home</Link>
          <Link href="/tiles" className={linkStyle("/tiles")}>All Tiles</Link>
          <Link href="/profile" className={linkStyle("/profile")}>My Profile</Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* SEARCH */}
          <div className="flex items-center border px-2 py-1 rounded-md bg-white">
            <FiSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none px-2 text-sm"
            />
          </div>

          {/* ================= AUTH BUTTON ================= */}
          {user ? (
            <button
              onClick={handleLogout}
              className="border px-4 py-1 text-sm rounded-md hover:bg-gray-100"
            >
              Logout
            </button>
          ) : (
            <Link href="/login">
              <button className="border px-4 py-1 text-sm rounded-md hover:bg-gray-100">
                Login
              </button>
            </Link>
          )}

        </div>
      </div>
    </div>
  );
}
"use client";

import React, { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);

  const router = useRouter();

  // ================= LOAD SESSION =================
  useEffect(() => {
    const loadUser = async () => {
      try {
        const session = await authClient.getSession();
        const currentUser = session?.data?.user;

        if (!currentUser) {
          router.push("/login");
          return;
        }

        setUser(currentUser);
      } catch (error) {
        console.log("SESSION ERROR:", error);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [router]);

  // ================= UPDATE USER =================
  const handleUpdate = async () => {
    try {
      const res = await authClient.updateUser({
        name: user.name,
        image: user.image,
      });

      if (res.error) {
        console.log("UPDATE ERROR:", res.error);
        return;
      }

      console.log("UPDATED:", res.data);
      setUser(res.data.user);
      setEditing(false);
    } catch (err) {
      console.log("UPDATE FAILED:", err);
    }
  };

  // ================= LOADING =================
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 animate-pulse">Loading profile...</p>
      </div>
    );
  }

  if (!user) return null;

  // ================= SAFE IMAGE =================
  const hasValidImage =
    user?.image &&
    typeof user.image === "string" &&
    user.image.startsWith("http");

  return (
    <div className="min-h-screen bg-[#f5f1e8] flex items-center justify-center px-4">

      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md p-8">

        <h2 className="text-2xl font-semibold text-center mb-8">
          My Profile
        </h2>

        <div className="flex flex-col md:flex-row gap-8">

          {/* ================= LEFT ================= */}
          <div className="flex flex-col items-center md:w-1/3">

            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-red-200 shadow mb-4 bg-gray-100 flex items-center justify-center">

              {hasValidImage ? (
                <Image
                  src={user.image}
                  alt="profile"
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              ) : (
                <CgProfile size={90} className="text-gray-400" />
              )}

            </div>

            {/* NAME EDIT */}
            {editing ? (
              <input
                className="border p-2 rounded text-center"
                value={user.name || ""}
                onChange={(e) =>
                  setUser({ ...user, name: e.target.value })
                }
              />
            ) : (
              <h3 className="text-lg font-bold">
                {user.name || "No Name"}
              </h3>
            )}

            <p className="text-sm text-gray-500 mb-4">
              {user.email}
            </p>

            {/* BUTTONS */}
            {editing ? (
              <div className="flex gap-2">
                <button
                  onClick={handleUpdate}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Save
                </button>

                <button
                  onClick={() => setEditing(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setEditing(true)}
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md"
              >
                Edit Profile
              </button>
            )}

          </div>

          {/* ================= RIGHT ================= */}
          <div className="md:w-2/3 space-y-4">

            <div className="flex justify-between border p-3 rounded-md">
              <span className="text-gray-600">Name</span>
              <span className="font-medium">{user.name || "N/A"}</span>
            </div>

            <div className="flex justify-between border p-3 rounded-md">
              <span className="text-gray-600">Email</span>
              <span className="font-medium">{user.email || "N/A"}</span>
            </div>

            <div className="flex justify-between border p-3 rounded-md">
              <span className="text-gray-600">Photo</span>
              <span className="truncate max-w-[200px]">
                {user.image || "No Image"}
              </span>
            </div>

            <div className="flex justify-between border p-3 rounded-md">
              <span className="text-gray-600">Member Since</span>
              <span>
                {user.createdAt
                  ? new Date(user.createdAt).toLocaleDateString()
                  : "N/A"}
              </span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
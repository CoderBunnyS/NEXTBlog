"use client";
import React from "react";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
  return (
    <div className="bg-gray-800 text-white p-5">
      <h1
        className="text-4xl font-bold cursor-pointer"
        onClick={() => {
          router.push("/");
        }}
      >
        Bunny Blog NEXT
      </h1>
    </div>
  );
}

export default Header;

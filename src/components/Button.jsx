import React from "react";

export default function Button({ styles }) {
  return (
    <button
      className={`px-6 py-4 bg-blue-gradient font-poppins font-medium text-lg text-primary outline-none rounded-[10px] ${styles}`}
    >
      Get Started
    </button>
  );
}

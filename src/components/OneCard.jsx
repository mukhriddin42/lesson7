import React from "react";
import { NavLink } from "react-router-dom";

const OneCard = () => {
  return (
    <div className="bg-gray-100 text-gray-900 px-16 py-6 min-h-screen">
      <NavLink to="/"
        href="#"
        class="inline-flex items-center gap-2 px-6 py-2 bg-white shadow rounded hover:bg-gray-100"
      >
        <span>←</span>
        Back
      </NavLink>
      <div class="mt-16 grid md:grid-cols-2 gap-16 items-center">
        <img
          src="https://flagcdn.com/w640/be.png"
          alt="Belgium Flag"
          class="w-full h-auto rounded shadow"
        />

        <div>
          <h1 class="text-3xl font-extrabold mb-6">Belgium</h1>
          <div class="grid sm:grid-cols-2 gap-6 text-sm">
            <div class="space-y-2">
              <p>
                <strong>Native Name:</strong> België
              </p>
              <p>
                <strong>Population:</strong> 11,319,511
              </p>
              <p>
                <strong>Region:</strong> Europe
              </p>
              <p>
                <strong>Sub Region:</strong> Western Europe
              </p>
              <p>
                <strong>Capital:</strong> Brussels
              </p>
            </div>
            <div class="space-y-2">
              <p>
                <strong>Top Level Domain:</strong> .be
              </p>
              <p>
                <strong>Currencies:</strong> Euro
              </p>
              <p>
                <strong>Languages:</strong> Dutch, French, German
              </p>
            </div>
          </div>

          <div class="mt-10">
            <p class="font-semibold mb-2">Border Countries:</p>
            <div class="flex flex-wrap gap-2">
              <span class="bg-white shadow px-4 py-1 rounded text-sm">
                France
              </span>
              <span class="bg-white shadow px-4 py-1 rounded text-sm">
                Germany
              </span>
              <span class="bg-white shadow px-4 py-1 rounded text-sm">
                Netherlands
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneCard;

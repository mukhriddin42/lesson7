import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import axios from "axios";

const Main = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        console.log(res.data.slice(0, 20));
        setCountries(res.data.slice(0, 20));
      })
      .catch((err) => {
        console.log("Error fetching countries: ", err);
      });
  }, []);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-16 py-6 gap-4">
        <div className="relative w-full md:w-1/4">
          <input
            placeholder="Search for a country..."
            className="w-full px-5 py-3 pl-10 rounded shadow-sm border border-gray-300 focus:outline-none"
            type="text"
          />
          <span className="absolute left-3 top-3.5 text-gray-400">
            <i className="bx bx-search-alt-2"></i>
          </span>
        </div>
        <div className="relative">
          <select
            className="px-4 py-3 rounded shadow-sm border border-gray-300 focus:outline-none"
            name=""
            id=""
          >
            <option>Filter by Region</option>
            <option>Africa</option>
            <option>America</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>
          </select>
        </div>
      </div>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-16 py-6">
        {countries.map((country) => (
          <NavLink
          key={country.name.common}
            to="/onecard"
            className="bg-white shadow rounded overflow-hidden"
          >
            <img
              src="https://flagcdn.com/w320/de.png"
              alt="Germany"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="font-bold text-lg mb-2">{country.name.common}</h2>
              <p>
                <strong>Population:</strong> 81,770,900
              </p>
              <p>
                <strong>Region:</strong> Europe
              </p>
              <p>
                <strong>Capital:</strong> Berlin
              </p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Main;

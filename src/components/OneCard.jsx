import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const OneCard = () => {
  const { id } = useParams();
  console.log(id);
  const [oneCountry, setCountry] = useState([]);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((res) => {
        console.log(res.data[0].name);
        setCountry(res.data[0]);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, [id]);
  if (!oneCountry || !oneCountry.name) {
    return <div className="p-6 text-center">Loading...</div>;
  }
  return (
    <div className="bg-gray-100 text-gray-900 px-16 py-6 min-h-screen">
      <NavLink
        to="/"
        href="#"
        className="inline-flex items-center gap-2 px-6 py-2 bg-white shadow rounded hover:bg-gray-100"
      >
        <span>←</span>
        Back
      </NavLink>
      {
        <div className="mt-16 grid md:grid-cols-2 gap-16 items-center">
          <img
            src={oneCountry.flags.png}
            alt="Belgium Flag"
            className="w-full h-auto rounded shadow"
          />

          <div>
            <h1 className="text-3xl font-extrabold mb-6">
              {oneCountry.name.common}
            </h1>
            <div className="grid sm:grid-cols-2 gap-6 text-sm">
              <div className="space-y-2">
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
              <div className="space-y-2">
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

            <div className="mt-10">
              <p className="font-semibold mb-2">Border Countries:</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white shadow px-4 py-1 rounded text-sm">
                  France
                </span>
                <span className="bg-white shadow px-4 py-1 rounded text-sm">
                  Germany
                </span>
                <span className="bg-white shadow px-4 py-1 rounded text-sm">
                  Netherlands
                </span>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default OneCard;

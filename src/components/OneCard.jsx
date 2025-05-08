import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const OneCard = () => {
  const { id } = useParams();
  const [oneCountry, setCountry] = useState(null);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((res) => {
        setCountry(res.data[0]);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, [id]);
  if (!oneCountry) {
    return <div className="p-6 text-center">Loading...</div>;
  } else {
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
              alt="Flag"
              className="w-full h-auto rounded shadow"
            />
  
            <div>
              <h1 className="text-3xl font-extrabold mb-6">
                {oneCountry.name.common}
              </h1>
              <div className="grid sm:grid-cols-2 gap-6 text-sm">
                <div className="space-y-2">
                  <p>
                    <strong>Native Name:</strong>{" "}
                    {Object.values(oneCountry.name.nativeName)[0]?.common}
                  </p>
                  <p>
                    <strong>Population:</strong> {oneCountry.population}
                  </p>
                  <p>
                    <strong>Region:</strong> {oneCountry.region}
                  </p>
                  <p>
                    <strong>Sub Region:</strong> {oneCountry.subregion}
                  </p>
                  <p>
                    <strong>Capital:</strong> {oneCountry.capital || "N/A"}
                  </p>
                </div>
                <div className="space-y-2">
                  <p>
                    <strong>Top Level Domain:</strong> {oneCountry.tld?.join(", ")}
                  </p>
                  <p>
                    <strong>Currencies:</strong> {Object.values(oneCountry.currencies)[0]?.name}
                  </p>
                  <p>
                    <strong>Languages:</strong>{" "}
                    {Object.values(oneCountry.languages).map(([code, lan]) => {
                      return <span key={code}>{lan}, </span>;
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
};

export default OneCard;

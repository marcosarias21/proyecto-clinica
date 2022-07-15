import "../Areas/areas.css";
import React from "react";
import { useState, useEffect } from "react";
import AreasCards from "../AreasCards/AreasCards";

const Areas = () => {
  const urlBE = process.env.REACT_APP_URL_BE 

  const [data, getadata] = useState([]);


  const getAreas = async () => {
    const res = await fetch(`${urlBE}/areas`);
    const json = await res.json();
    getadata(json.areas);
  };

  useEffect(() => {
    getAreas();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div id="areas">
      <section className="bg-white py-4">
        <div className="container  pb-4">
          <h1 className="text-center text-black text-bolder my-2 display-2 pb-4 py-3">
            Especialidades
          </h1>
          <div
            className=" w-100 "
            id="galleryAmenisties"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <div className="  d-flex flex-wrap justify-content-center w-100">
              {data.map((item) => (
                <AreasCards imagen={item.imagen} nombre={item.nombre} key={item._id}/>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Areas;

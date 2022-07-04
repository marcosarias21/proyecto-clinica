import "../Areas/areas.css";
import React from "react";
import { useState, useEffect } from "react";
import AreasCards from "../AreasCards/AreasCards";

const Areas = () => {

  const [data, getadata] = useState([]);


  const getAreas = async () => {
    const res = await fetch("http://localhost:8000/areas");
    const json = await res.json();
    getadata(json.areas);
  };

  useEffect(() => {
    getAreas();
  }, []);

  return (
    <div id="areas">
      <section class="bg-white py-4">
        <div class="container  pb-4">
          <h1 class="text-center text-black text-bolder my-2 display-2 pb-4 py-3">
            Especialidades
          </h1>
          <div
            class=" w-100 "
            id="galleryAmenisties"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <div className="  d-flex flex-wrap justify-content-center w-100">
              {data.map((item) => (
                <AreasCards imagen={item.imagen} nombre={item.nombre} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Areas;

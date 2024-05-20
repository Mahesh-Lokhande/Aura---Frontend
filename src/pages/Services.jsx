import React from "react";
import ServiceCard from "../components/ItemCard";
import "../assets/css/Home.css";
import Carousel from "../components/Carousel";
import Hair from "../assets/images/Services/hairstyle4.jpeg";
import Waxing from "../assets/images/Services/waxing4.jpg";
import Facial from "../assets/images/Services/clean4.jpg";
import Bridal from "../assets/images/Services/makeup4.jpg";
import Package from "../assets/images/Services/Packages.jpg";

export function Services() {
  return (
    <>

      <div>
        <h1 className="products">Services</h1>
      </div>

      <Carousel />
      <br />
      <br />

      <div className="container" style={{ marginTop: "10px" }}>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <ServiceCard
            image={Package}
            title="Packages"
            text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          />
          <ServiceCard
            image={Bridal}
            title="Bridal Makeup"
            text="This is a short card."
          />
          <ServiceCard
            image={Waxing}
            title="Waxing"
            text="This is a longer card with supporting text below as a natural lead-in to additional content."
          />
          <ServiceCard
            image={Facial}
            title="Facial & Cleanup"
            text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          />
          <ServiceCard
            image={Hair}
            title="Hair-Styles"
            text="This is a longer card with supporting text below as a natural lead-in to additional content."
          />
        </div>
      </div>
    </>
  );
}

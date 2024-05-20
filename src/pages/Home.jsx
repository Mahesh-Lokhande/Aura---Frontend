import React from "react";
import Carousel from "../components/Carousel";
import "../assets/css/Global.css";
import "../assets/css/Home.css";
import { AboutUS } from "./AboutUs";
import { SERVICES_ROUTE } from "../constants/AppRoutes";
import { Link } from "react-router-dom";
import { Testimonial } from "../components/Testimonial";

export function Home() {
  return (
    <>
      <br />
      <section id="hero">
        <div className="hero-content">
          <h1>Welcome to AURA</h1>
          <p>Where Beauty Meets Tranquility</p>
          <button className="cta">Book Your Appointment Today</button>
        </div>
      </section>

      <Carousel />
      <br />
      <br />
      <AboutUS />

      <section id="services">
        <h1>Our Services</h1>
        <div className="service-category">
          <h3>Hair</h3>
          <p>Styling, coloring, and treatments...</p>
        </div>
        <div className="service-category">
          <h3>Nails</h3>
          <p>Manicures, pedicures, and more...</p>
        </div>
        <Link to={SERVICES_ROUTE} className="view-all">View All Services</Link>
      </section>

      <Testimonial/>

    </>
  );
}

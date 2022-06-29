import React from "react";
import Review from "./Review";
import ImageSlider from "./ImageSlider";
import logo from "../images/edited/logos/logo.jpeg";
import { ReviewData } from "../data/ReviewData";

export default function About() {
  return (
    <div className="about--main_container">
      <main className="about--main">
        <h1 className="about--main_title">About Us</h1>
        <p className="about--main_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et.
        </p>
      </main>
      <section className="about--section">
        <div className="about--section_block">
          <p className="about--section_text">
            <span className="text-accent">Advanced Dental Solutions</span> is
            more than just a name. It is what we believe in. It is what we do.
            Lorem ipsum lorem ipsum. Porta lorem mollis aliquam ut
          </p>
        </div>
      </section>
      {/* <section className="about--reviews">
        <Review />
        <Review />
        <Review />
      </section> */}

      <section>
        <ImageSlider slides={ReviewData} />
      </section>
    </div>
  );
}

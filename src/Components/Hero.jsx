import React from "react";
import "./Hero.css";
import pics1 from "./images/text1.jpg";
import pics2 from "./images/text2.jpg";
import pics3 from "./images/text3.jpg";

function Hero() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={pics1} class="d-block w-100" alt="..." />
            <div class="carousel-caption ">
              <h5>Arunachal Pradesh</h5>
              <p>The Land of Rising Sun</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={pics2} class="d-block w-100" alt="..." />
            <div class="carousel-caption ">
              <h5>Home For Many Differnt Ethnicity</h5>
              <p>Purest Love that you might never Forget.!</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={pics3} class="d-block w-100" alt="..." />
            <div class="carousel-caption ">
              <h5>Places that create memories for Infinity</h5>
              <p>Tawang,Arunachal Pradesh</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
export default Hero;

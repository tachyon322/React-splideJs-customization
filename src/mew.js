import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./mew.css";

const SplideSlider = () => {
  return (
    <section className="main">

      <Splide
        hasTrack={false}
        aria-label="..."
        options={{
          pagination: "splide__pagination splide__pagination--custom",
          type: "loop",
          width: 800,
          height: 400,
        }}>
        <ul
          class="splide__pagination splide__pagination--custom"
          style={{ position: "absolute", bottom: "-20px" }}></ul>
        <SplideTrack>
          <SplideSlide>
            <img
              style={{
                width: "100%",
                height: "100vh",
              }}
              src={require("./imgs/1.jpg")}
            />
          </SplideSlide>
          <SplideSlide>
            <img
              style={{
                width: "100%",
                height: "100vh",
              }}
              src={require("./imgs/2.jpg")}
            />
          </SplideSlide>
          <SplideSlide>
            <img
              style={{
                width: "100%",
                height: "100vh",
              }}
              src={require("./imgs/3.jpg")}
            />
          </SplideSlide>
        </SplideTrack>
        <div
          className="splide__arrows"
          style={{
            position: "absolute",
            top: "-20px",
            left: "50px",
          }}>
          <button
            className="splide__arrow splide__arrow--prev abra"
            style={{
              backgroundColor: "red",
              borderRadius: "0",
            }}>
            Prev
          </button>

          <button
            className="splide__arrow splide__arrow--next kadabra"
            style={{
              backgroundColor: "red",
              borderRadius: 0,
            }}>
            Next
          </button>
        </div>
      </Splide>
    </section>
  );
};

export default SplideSlider;

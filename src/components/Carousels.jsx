import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import StarRatings from "react-star-ratings";

const Carousels = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get(`https://fakestoreapi.com/products`).then((getData) => {
      setApiData(getData.data);
    });
  };
  return (
    <div id="carousel">
      <h2>All Products</h2>
      <section>
        <article>
          <Carousel
            showArrows={true}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={2000}
            infiniteLoop={true}
            autoPlay={true}
          >
            {apiData.map((i) => (
              <div key={i.id} className="carouselItem">
                <img src={i.image} alt={i.title} />
                <aside>
                  <h3>{i.title}</h3>
                  <p className="pprice">${i.price}</p>
                  <p className="description">${i.description}</p>
                  <small>{i.category}</small>
                  <a href="#home" target="blank">
                    Add to Cart
                  </a>

                  <StarRatings
                    rating={i.rating.rate}
                    starRatedColor="gold"
                    starEmptyColor="lightgray"
                    starDimension="20px"
                    starSpacing="2px"
                  />
                </aside>
              </div>
            ))}
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Carousels;

import "../Home.css";
import Header from "./Header";
import React, { useEffect, useState } from "react";
import "../Home.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/")
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Header />
      {product.map((item) => {
        return (
          <>
          <div className="product-container">
              <Link to={`/check/${item.id}`}>
                
                <div class="photo">
                  <img src={item.image} alt="" />
                </div>
              </Link>
              <div class="description">
              <h2>{item.title}</h2>
               
                <h1>${item.price}</h1>
                
              </div>
            </div>

   
          </>
        );
      })}
    </>
  );
}

export default Home;

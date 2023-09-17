import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import "../Pricing.css";

function Pricing() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1); // Initial quantity is 1

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [id]);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (error) {
    return <div>Error fetching product: {error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  // Calculate the total price
  const totalPrice = (quantity * product.price);

  return (
   
    <div className="pricebox">
      <img src={product.image} alt={product.title} className="im"/>
      <div className="detail">
      <h2 className="productbrand">{product.title}</h2>
     
      <span className="productprice">Total Price: ${totalPrice}</span>
      <span className="productactual-price">$200</span>
      <span className="productdiscount">( 50% off )</span>
      <div className="quantitycontrol">
        <button className="btnm" onClick={handleDecreaseQuantity}>-</button>
        <span className="count">{quantity}</span>
        <button className="btnp" onClick={handleIncreaseQuantity}>+</button>
      </div>
<Link to ='/congratulations'><button class="btncartbtn">Buy</button></Link>
      </div>
    </div>
  );
}

export default Pricing;

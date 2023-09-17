import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


import Header from './Header';
import '../Card.css'
import FAQ from './FAQ';



function ProductCard() {
  const { id } = useParams(); // Invoke useParams to get the id
  const [data,setData] = useState({})

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((result) => result.json())
      .then((res) => {
        console.log(res);
        setData(res)                  // You can set the product data to a state variable here if needed
      })
      .catch((error) => {
        console.log("Error fetching product:", error);
      });
  }, [id]);

  return (
    <>
    <Header/>
  
    <div class="card">
 
 <div class="photo">
   <img src={data.image} alt=''/>
 </div>
 <div class="description">
   <h2>{data.title}</h2>
   

   <p>{data.description}</p>
   <h1>Price:{data.price}$</h1>
   {/* <span>{}</span><span>{data.rating.count}</span> */}
   <div class="bank-offers">
    <h3>Bank Offers:</h3>
    <ul>
      <li>Get 10% cashback with yes Bank</li>
      <li>EMI options available with DBS Bank</li>
      <li>Bank Offer10% Instant Discount on ICICI Bank Debit Card and EMI Txns, up to ₹500, on orders of ₹5000 and above</li>
      <li>Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000</li>
     
    </ul>
  </div>
   
   
 </div>
 <Link to={`/price/${data.id}`}> <button >Buy</button></Link>
</div>

<FAQ/>


  </>
  );
}

export default ProductCard;

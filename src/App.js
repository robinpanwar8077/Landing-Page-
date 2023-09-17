import React, { useState } from 'react';

import Home from './components/Home';
import ProductCard from './components/ProductCard';
import {  BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Pricing from './components/Pricing';
import Cong from './components/Cong';

function App() {


  return (
 <>
 
 <Router>
<Routes> 
<Route path="/" element={<Home/>} />
<Route path="/price/:id" element={<Pricing/>}/>
<Route path="/check/:id" element={<ProductCard/>} />
<Route path="/congratulations" element={<Cong/>} />

</Routes>
     
        

 </Router>
 
 
 
  </>
  );
}

export default App;

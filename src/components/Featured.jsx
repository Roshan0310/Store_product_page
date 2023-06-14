import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import {motion} from "framer-motion"


const Featured = () => {

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    getData();
  }, []);


  const getData = () => {
    axios.get(`https://fakestoreapi.com/products`).then((getData) => {
      setApiData(getData.data);
    });
  };

  const animations = {
    whileInview:{
      x:0,y:0,opacity:1
    },
    one:{
      opacity:0,
      x:"-100%"
    },
    two:{
      opacity:0,
      y:"+100%"
    },
    three:{
      opacity:0,
      x:"-100%"
    },
    four:{
      opacity:0,
      y:"+100%"
    },
  }
  return (
    <div id='featured'>
         <h2>Featured Products</h2>
        <div className='section2'>



        <motion.div class="card" whileInView={animations.whileInview} initial={animations.one}>
      
      {apiData[0] &&  <img src={apiData[0].image} alt="Denim Jeans"  />}

        {apiData[0] &&<h1>{apiData[0].title}</h1>}

    {apiData[0] && <p class="price">${apiData[0].price}</p>}
    <div className="descContainer">
    {apiData[0] && <p className='desc'>{apiData[0].description}</p>}
    </div>
{ apiData[0] &&    <StarRatings
              rating={apiData[0].rating.rate}
              starRatedColor="gold"
              starEmptyColor="lightgray"
              starDimension="20px"
              starSpacing="2px"
            />}

    
       </motion.div>


       <motion.div class="card" whileInView={animations.whileInview}initial={animations.two}>
      
      {apiData[1] &&  <img src={apiData[1].image} alt="Denim Jeans"  />}

        {apiData[1] &&<h1>{apiData[1].title}</h1>}

    {apiData[1] && <p class="price">${apiData[1].price}</p>}
    <div className="descContainer">
    {apiData[1] && <p className='desc'>{apiData[1].description}</p>}
    </div>
   {apiData[1] &&   <StarRatings
              rating={apiData[1].rating.rate}
              starRatedColor="gold"
              starEmptyColor="lightgray"
              starDimension="20px"
              starSpacing="2px"
            />}
       </motion.div>


       <motion.div class="card" whileInView={animations.whileInview}initial={animations.three}>
      
      {apiData[2] &&  <img src={apiData[2].image} alt="Denim Jeans"  />}

        {apiData[2] &&<h1>{apiData[2].title}</h1>}

    {apiData[2] && <p class="price">${apiData[2].price}</p>}
    <div className="descContainer">
    {apiData[2] && <p className='desc'>{apiData[2].description}</p>}
    </div>
   {apiData[2] &&  <StarRatings
              rating={apiData[2].rating.rate}
              starRatedColor="gold"
              starEmptyColor="lightgray"
              starDimension="20px"
              starSpacing="2px"
            />}

       </motion.div>



       <motion.div class="card" whileInView={animations.whileInview} initial={animations.four}>
      
      {apiData[8] &&  <img src={apiData[8].image} alt="Denim Jeans"  />}

        {apiData[8] &&<h1>{apiData[8].title}</h1>}

    {apiData[8] && <p class="price">${apiData[8].price}</p>}
    <div className="descContainer">
    {apiData[8] && <p className='desc'>{apiData[8].description}</p>}
    </div>
   {apiData[8] &&  <StarRatings
              rating={apiData[8].rating.rate}
              starRatedColor="gold"
              starEmptyColor="lightgray"
              starDimension="20px"
              starSpacing="2px"
            />}
  

       </motion.div>



  

     
       
        </div>
    </div>
  )
}

export default Featured
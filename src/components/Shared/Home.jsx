import React from 'react';
import ChefUser from '../ChiefStaap/ChefUser';
import Chiefs from '../ChiefStaap/Chiefs';
import Banner from '../Banner/Banner';
import Catagory from '../Catagory/Catagory';
import ChefsCatagory from '../ChefsCategory/ChefsCatagory';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
     <div> 
        <Banner></Banner>
        <Catagory></Catagory>
        <ChefsCatagory></ChefsCatagory>
        <Slider></Slider>
  
     </div>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import ShowDetailsChiefs from './ShowDetailsChiefs';

const ChefDetails = () => {

    const {id} = useParams();
    const datas = useLoaderData();
    const data = datas.find((d) => d.id === parseInt(id))

    return (
        <div className='container mx-auto'>
      
          <Link to='/'><button className='p-5 border font-bold text-2xl container mx-auto'>Back to Home</button> </Link>
      
           <ShowDetailsChiefs 
           data = {data}
           ></ShowDetailsChiefs>


        </div>
    );
};

export default ChefDetails;
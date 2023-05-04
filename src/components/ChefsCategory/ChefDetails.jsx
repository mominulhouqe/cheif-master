import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ShowDetailsChiefs from './ShowDetailsChiefs';

const ChefDetails = () => {

    const {id} = useParams();
    const datas = useLoaderData();
    const data = datas.find((d) => d.id === parseInt(id))

    return (
        <div>
           This is Details 
           <ShowDetailsChiefs 
           data = {data}
           ></ShowDetailsChiefs>


        </div>
    );
};

export default ChefDetails;
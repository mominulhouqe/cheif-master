import React from 'react';
import img1 from '../../assets/element-1.png'
import img2 from '../../assets/menu-single-1.jpg'
import img3 from '../../assets/hero-1.jpg'
import img4 from '../../assets/category-bg-1.jpg'


import Banners from '../Banner/Banners.css'
import Button from 'react-bootstrap/Button';
import { BsFillArrowDownRightSquareFill } from 'react-icons/bs';

const Banner = () => {
    return (
       

        <div className='banner container mx-auto flex justify-between flex-wrap items-center'>
            <div className='mx-5'>
            <h1 className='text-7xl font-black mb-5' >Crispy <br /> Chicken Burgers</h1>
            <p className='font-thin mb-4'>Sit amet consectetur adipiscing Malesuada morbigrave  <br /> ullamore alesuada nec pulvinar nisle</p>
            <Button className='btn btn-primary' variant="primary"> <BsFillArrowDownRightSquareFill  className='mx-3'></BsFillArrowDownRightSquareFill> Order Now</Button>{' '}
            </div>
            <div>
                <img src={img1} alt="" />
            </div>

        </div>
        
       



    );
};

export default Banner;
import React from 'react';
import img1 from '../../assets/element-1.png'
import Banners from '../Banner/Banners.css'

const Banner = () => {
    return (
        <div  className='d-flex lg-container banner p-lg-5 align-items-center flex-grow-1 justify-content-between flex-wrap gap-5'>
            <div className='mx-5'>
            <h1>Crispy <br /> Chicken Burgers</h1>
            <p>Sit amet consectetur adipiscing Malesuada morbigrave ullamore alesuada nec pulvinar nisle</p>
            <button>Order now</button>
            </div>
            <div>
                <img src={img1} alt="" />
            </div>

        </div>
    );
};

export default Banner;
import React from 'react';
import img1 from '../../assets/element-1.png'
import Banners from '../Banner/Banners.css'
import Button from 'react-bootstrap/Button';
import { BsFillArrowDownRightSquareFill} from 'react-icons/bs';

const Banner = () => {
    return (
        <div  className='d-flex lg-container banner p-lg-5 align-items-center flex-grow-1 justify-content-lg-between flex-wrap gap-5 .justify-content-sm-center'>
            <div className='mx-5'>
            <h1>Crispy <br /> Chicken Burgers</h1>
            <p className='text-light'>Sit amet consectetur adipiscing Malesuada morbigrave ullamore alesuada nec pulvinar nisle</p>
            <Button className='fw-bold' variant="primary"> <BsFillArrowDownRightSquareFill ></BsFillArrowDownRightSquareFill> Order Now</Button>{' '}
            </div>
            <div>
                <img src={img1} alt="" />
            </div>

        </div>
    );
};

export default Banner;
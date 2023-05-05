import React from 'react';
import img1 from '../../assets/icon-1.png'
import img2 from '../../assets/icon-2.png'
import img3 from '../../assets/icon-3.png'
import img4 from '../../assets/icon-4.png'
import img5 from '../../assets/icon-5.png'
import img6 from '../../assets/icon-6.png'

import { BsFillArrowDownRightSquareFill } from 'react-icons/bs';


const Catagory = () => {
    return (
        <div className='container mt-10 bg-orange-600 p-16 mx-auto'>
            <div className='text-center  text-white mb-10'>
                <h1 className='mb-5 font-mono font-extrabold  text-4xl'>Our Services</h1> <hr />
                <p>WHAT WE OFFER</p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">

                <div className="card card-side bg-base-100 shadow-xl">
                    <figure>
                        <img src={img1} alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Pizza</h2>
                        <p>Food can be categorized into different groups .</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">
                                <BsFillArrowDownRightSquareFill ></BsFillArrowDownRightSquareFill>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure>
                        <img src={img2} alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Burger!</h2>
                        <p>Food refers to any substance that is consumed by living  of tissues. </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">    <BsFillArrowDownRightSquareFill ></BsFillArrowDownRightSquareFill></button>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure>
                        <img src={img3} alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Bread!</h2>
                        <p>Different cultures around the world have their own unique ces. .</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">    <BsFillArrowDownRightSquareFill ></BsFillArrowDownRightSquareFill></button>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure>
                        <img src={img4} alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Seafoods</h2>
                        <p>
                            Food also plays an important role, and gatherings..</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">    <BsFillArrowDownRightSquareFill ></BsFillArrowDownRightSquareFill></button>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure>
                        <img src={img5} alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Coffee </h2>
                        <p>food is a fundamental aidentity..</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">    <BsFillArrowDownRightSquareFill ></BsFillArrowDownRightSquareFill></button>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure>
                        <img src={img6} alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Chicken</h2>
                        <p>Fats are another source of energy and can be found s.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">    <BsFillArrowDownRightSquareFill ></BsFillArrowDownRightSquareFill></button>
                        </div>
                    </div>
                </div>


            </div>



        </div>
    );
};

export default Catagory;
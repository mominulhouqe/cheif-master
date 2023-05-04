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
        <div className='container mx-auto'>
            <h1>OUT POPULAR FOOD</h1>
            <p>Best Category Foods Menu</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">

                <div className="card card-side bg-base-100 shadow-xl">
                    <figure>
                        <img src={img1} alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Pizza</h2>
                        <p>Click the button to watch on Jetflix app.</p>
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
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
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
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
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
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
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
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
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
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
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
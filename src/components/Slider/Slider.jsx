import React from 'react';

const Slider = () => {
    return (
        <div className='container mx-auto bg-orange-600 p-8'>
            <div className='text-center   text-white font-mono font-extrabold mb-10'>
                <h1 className='mb-5 font-extrabold  text-4xl'>OUR POPULAR FOOD</h1> <hr />
                <p>Best Category Foods Menu</p>
            </div>

            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://images.unsplash.com/photo-1576867757603-05b134ebc379?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="w-full  h-96" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://images.unsplash.com/photo-1682423199837-e1f233a13de0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" className="w-full h-96" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://images.unsplash.com/photo-1592417817038-d13fd7342605?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="w-full h-96" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="w-full h-96 bg-cover" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Slider;
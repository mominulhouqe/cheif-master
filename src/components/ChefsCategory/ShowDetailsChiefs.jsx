import React, { useState } from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import Rating from 'react-rating';
import { BsFillArrowDownRightSquareFill } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img1 from '../../assets/icon-1.png'
import img2 from '../../assets/icon-2.png'
import img3 from '../../assets/icon-3.png'

const ShowDetailsChiefs = ({ data }) => {
    const [love, setLove] = useState(false)
    const handleFavorit = () => {

        if (!love) {
            setLove(true)
            toast("You added your favorit list")
        }
        
    }


    const { id, chefName, experience, rating, recipes, likes, chefPicture, description, ingredients, cookingMethods } = data;
    return (
        <div>
            <section className="bg-white rounded-lg shadow-lg mx-auto container p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="md:col-span-1 lg:col-span-2">
                        <img src={chefPicture} alt={name} className=" rounded-lg shadow-lg mb-6" />
                        <h2 className="text-2xl font-bold">{chefName}</h2>
                        <div className="flex items-center mb-4">
                            {/* <FaStar className="text-yellow-500 mr-1" /> */}
                            {/* <p className="text-lg">{rating} ({reviews} reviews)</p> */}
                        </div>
                        <p className="text-lg mb-4">{description}</p>
                        <div className='flex'>
                            <button onClick={handleFavorit} className='btn btn-success  mx-5'>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="w-6 h-6">
                                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                </svg>

                                {likes[1].count} </button>

                            <ToastContainer />

                            <div className="rating rating-lg">

                                <input type="radio" name="rating-9" className="rating-hidden" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                            </div>
                        </div>
                        <div className='mt-10'>
                            <li className="mb-2 font-bold">
                                <span className="font-bold">Expreience : </span>
                                {experience} Years
                            </li>
                            <li className="mb-2 font-bold">
                                <span className="font-bold">Recipes : </span>
                                {recipes} Itmes
                            </li>
                        </div>
                    </div>

                    <div className="md:col-span-1 lg:col-span-1">
                        <h3 className="text-xl font-bold mb-4">Popular Dishes</h3>
                        <ul className="list-none">
                            <li className="mb-6">

                                <div className="card  mb-5 bg-indigo-500 text-primary-content">
                                    <div className="card-body">
                                        <img src={img2} className='w-80' alt="" />
                                        <h2 className="card-title">{cookingMethods[0].name}</h2>
                                        <p>{cookingMethods[0].description} </p>
                                        <li className="mb-2">
                                            <span className="font-bold">Ingredients:</span>
                                            <div className="overflow-x-auto">
                                                <table className="table text-black w-full">
                                                    {/* head */}
                                                    <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th>Name</th>
                                                            <th>quantity</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {/* row 1 */}
                                                        <tr>
                                                            <th>1</th>
                                                            <td>{ingredients[0].name}</td>
                                                            <td> {ingredients[0].quantity}</td>

                                                        </tr>
                                                        {/* row 2 */}
                                                        <tr>
                                                            <th>2</th>
                                                            <td>{ingredients[1].name}</td>
                                                            <td>{ingredients[1].quantity}</td>

                                                        </tr>
                                                        {/* row 3 */}
                                                        <tr>
                                                            <th>3</th>
                                                            <td>{ingredients[2].name}</td>
                                                            <td>{ingredients[2].quantity}</td>

                                                        </tr>
                                                        <tr>
                                                            <th>4</th>
                                                            <td>{ingredients[3].name}</td>
                                                            <td> {ingredients[4].quantity}</td>

                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                        </li>
                                        <div className="card-actions justify-end">
                                            <button className="btn ">details <FaArrowAltCircleRight className='mx-2'></FaArrowAltCircleRight> </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="card mb-5  bg-slate-800 text-primary-content">
                                    <div className="card-body">
                                        <img src={img3} className=' h-80 ' alt="" />
                                        <h2 className="card-title">{cookingMethods[1].name}</h2>
                                        <p>{cookingMethods[1].description} </p>
                                        <li className="mb-2">
                                            <span className="font-bold">Ingredients:</span>
                                            <div className="overflow-x-auto">
                                                <table className="table text-black w-full">
                                                    {/* head */}
                                                    <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th>Name</th>
                                                            <th>quantity</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {/* row 1 */}
                                                        <tr>
                                                            <th>1</th>
                                                            <td>{ingredients[0].name}</td>
                                                            <td> {ingredients[0].quantity}</td>

                                                        </tr>
                                                        {/* row 2 */}
                                                        <tr>
                                                            <th>2</th>
                                                            <td>{ingredients[1].name}</td>
                                                            <td>{ingredients[1].quantity}</td>

                                                        </tr>
                                                        {/* row 3 */}
                                                        <tr>
                                                            <th>3</th>
                                                            <td>{ingredients[2].name}</td>
                                                            <td>{ingredients[2].quantity}</td>

                                                        </tr>
                                                        <tr>
                                                            <th>4</th>
                                                            <td>{ingredients[3].name}</td>
                                                            <td> {ingredients[4].quantity}</td>

                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                        </li>

                                        <div className="card-actions justify-end">
                                            <button className="btn">details <FaArrowAltCircleRight className='mx-2'></FaArrowAltCircleRight> </button>
                                        </div>
                                    </div>
                                </div>


                                <div className="card bg-primary text-primary-content">
                                    <div className="card-body">
                                        <img src={img2} alt="" className=' h-80 ' />
                                        <h2 className="card-title ">{cookingMethods[2].name}</h2>
                                        <p>{cookingMethods[2].description} </p>

                                        <li className="mb-2">
                                            <span className="font-bold">Ingredients:</span>
                                            <div className="overflow-x-auto">
                                                <table className="table text-black w-full">
                                                    {/* head */}
                                                    <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th>Name</th>
                                                            <th>quantity</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {/* row 1 */}
                                                        <tr>
                                                            <th>1</th>
                                                            <td>{ingredients[0].name}</td>
                                                            <td> {ingredients[0].quantity}</td>

                                                        </tr>
                                                        {/* row 2 */}
                                                        <tr>
                                                            <th>2</th>
                                                            <td>{ingredients[1].name}</td>
                                                            <td>{ingredients[1].quantity}</td>

                                                        </tr>
                                                        {/* row 3 */}
                                                        <tr>
                                                            <th>3</th>
                                                            <td>{ingredients[2].name}</td>
                                                            <td>{ingredients[2].quantity}</td>

                                                        </tr>
                                                        <tr>
                                                            <th>4</th>
                                                            <td>{ingredients[3].name}</td>
                                                            <td> {ingredients[4].quantity}</td>

                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                        </li>

                                        <div className="card-actions justify-end">

                                            <button className="btn"> Details
                                                <FaArrowAltCircleRight className='mx-2'></FaArrowAltCircleRight> </button>
                                        </div>
                                    </div>
                                </div>


                            </li>





                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ShowDetailsChiefs;
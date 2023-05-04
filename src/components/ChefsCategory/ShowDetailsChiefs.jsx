import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const ShowDetailsChiefs = ({ data }) => {
    console.log(data);
    const { id, chefName, experience, recipes, likes, chefPicture, description, ingredients, cookingMethods } = data;
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
                        <button className='btn btn-primary mx-5'>love {likes[1].count} </button>
                        <button className="btn btn-primary">Rating </button>
                    </div>
                    <div className="md:col-span-1 lg:col-span-1">
                        <h3 className="text-xl font-bold mb-4">Popular Dishes</h3>
                        <ul className="list-none">
                            <ol>
                                <li className="mb-2">
                                    <span className="font-bold">Ingredients:</span>
                                    <div className="overflow-x-auto">
                                        <table className="table w-full">
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
                            </ol>
                            <li className="mb-2 font-bold">
                                <span className="font-bold">Expreience : </span> 
                              {experience} Years
                            </li>
                            <li className="mb-2 font-bold">
                                <span className="font-bold">Recipes : </span> 
                              {recipes} Itmes
                            </li>
                            <li className="mb-2">
                                <span className="font-bold mb-5 mt-4">Cooking Method : </span>

                                <div className="card w-96 bg-primary text-primary-content">
                                    <div className="card-body">

                                        <h2 className="card-title">{cookingMethods[0].name}</h2>
                                        <p>{cookingMethods[0].description} </p>

                                        <h2 className="card-title">{cookingMethods[1].name}</h2>
                                        <p>{cookingMethods[1].description} </p>

                                        <h2 className="card-title">{cookingMethods[2].name}</h2>
                                        <p>{cookingMethods[2].description} </p>



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
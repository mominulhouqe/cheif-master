import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';


const SignUp = () => {
    
const {createrUser} = useContext(AuthContext);
const [error, setError ] = useState();
const [sucess, setSucess] = useState();



    return (
        <div>
            <div className="w-full max-w-md mx-auto mt-10 mb-10">
                <form  className="bg-white rounded-lg px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Name
                        </label>

                        <input
                            className="form-input rounded-lg w-full py-2  px-4 leading-tight border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            id="name"
                            type="name"
                            placeholder="Enter your Name "
                        />

                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Photo URL
                        </label>

                        <input
                            className="form-input rounded-lg w-full py-2  px-4 leading-tight border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            id="photo"
                            type="photo"
                            placeholder="Enter your Photo URL"
                        />

                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            Email address
                        </label>
                        <input
                            className="form-input rounded-lg w-full py-2  px-4 leading-tight border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="form-input rounded-lg w-full py-2 px-4 leading-tight border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                        />
                    </div>

                   
                    <div className="flex items-center justify-between">
                        <button className="daisy-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Register
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default SignUp;
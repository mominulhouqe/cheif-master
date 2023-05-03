import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from 'daisyui';

const Login = () => {
 
    return (
        <form className="max-w-md mx-auto mt-10 mb-10 container bg-white rounded-lg overflow-hidden shadow-md p-8">
        <h2 className="text-xl font-semibold mb-6">Log in to your account</h2>
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
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Log In
        </button>
      </form>
      
 
    );
};

export default Login;
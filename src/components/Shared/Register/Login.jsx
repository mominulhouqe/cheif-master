import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from 'daisyui';

const Login = () => {
 
    return (
        <form class="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md p-8">
        <h2 class="text-xl font-semibold mb-6">Log in to your account</h2>
        <div class="mb-6">
          <label class="block text-gray-700 font-bold mb-2" for="email">
            Email address
          </label>
          <input
            class="form-input rounded-lg w-full py-2 px-4 leading-tight border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            id="email"
            type="email"
            placeholder="Enter your email address"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 font-bold mb-2" for="password">
            Password
          </label>
          <input
            class="form-input rounded-lg w-full py-2 px-4 leading-tight border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            id="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Log In
        </button>
      </form>
      
 
    );
};

export default Login;
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Input, Button } from 'daisyui';
import { AuthContext } from '../../../provider/AuthProvider';

const Login = () => {
  const [error, setError] = useState();
    const [success, setSucces] = useState();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!/[a-zA-Z\d]{6,}/.test(password)) {
      setError('The password is less than 6 characters.')
      return;
    }

    setError('');
    setSucces('');

    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true })


        if (loggedUser) {
          setSucces('Login succesfully done !!')
        }
        form.reset();
      })
      .catch(error => {
        setError(error.message);
      })
  }


  return (
    <div className="w-full max-w-md mx-auto mt-10 mb-10">
      <form onSubmit={handleLogin} className="bg-white rounded-lg px-8 pt-6 pb-8 mb-4">
        
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email address
          </label>
          <input
            className="form-input rounded-lg w-full py-2  px-4 leading-tight border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            id="email"
            name='email'
            type="email"
            required
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
            name='password'
            required
            placeholder="Enter your password"
          />
        </div>
        <p className='my-5 font-semibold  text-success'>{success}</p>
        <p className='my-5 text-warning font-semibold '>{error}</p>

        <div className="flex items-center justify-between">
          <button className="daisy-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            login
          </button>

        </div>
      </form>

    </div>


  );
};

export default Login;
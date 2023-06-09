import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { BsFacebook, BsFillArrowDownRightSquareFill, BsGithub, BsGoogle } from 'react-icons/bs';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const { createUser, signInGoogle,signInGithub } = useContext(AuthContext);
    const [user, setUser] = useState(null);
    const [error, setError] = useState();
    const [success, setSuccess] = useState();

    const navigate = useNavigate();
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        setError('');
        setSuccess('');

        if (!/[a-zA-Z\d]{6,}/.test(password)) {
            setError('Password should have at least one lowercase letter.');
            return;
        }

    
        // Call the createUser function from the AuthContext to create a new user with the entered data
        createUser(email, password, name, photo)
            .then(result => {
                const createdUser = result.user;

                if (createdUser) {
                    setSuccess('Register Successfully done !!');
                 
                }
                navigate('/login')
                form.reset('');
            })
            .catch(error => {
                setError(error.message);
            })
    }



const handleGooglePopup =()=>{
    signInGoogle()
    .then(result => {
        const loggedUser = result.user;
        setUser(loggedUser);
        navigate('/')
        
    })
    .catch((error) =>{
        setError(error.message)
    } )
}
const handleGithub = () =>{
    signInGithub()
    .then(result => {
        const loggedUser = result.user;
        setUser(loggedUser);
        navigate('/')
       
        
    })
    .catch((error) =>{
        setError(error.message)
    } )
}

    return (

        <div className="w-full max-w-md container mx-auto mt-10 mb-10">
            <form onSubmit={handleRegister} className="bg-white rounded-lg px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Name
                    </label>
                    <input
                        className="form-input rounded-lg w-full py-2  px-4 leading-tight border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        id="name"
                        type="name"
                        name='name'
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
                        name='photoURL'
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
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <p className='my-5 font-semibold text-success'>{success}</p>
                <p className='my-5 font-semibold text-warning'>{error}</p>

                <div className="flex items-center justify-between">
                    <button className="daisy-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Register
                    </button>

                </div>
                    <p>Already Have an account? Please <Link to="/login" className='text-accent font-bold underline'>Login here !!</Link> </p>

            </form>
                <div className='flex text-center justify-center flex-wrap gap-5'>

                <button onClick={handleGooglePopup} className='btn flex gap-2 bg-blue-500 '>Continue with Google <BsGoogle className=''></BsGoogle> </button>

                <button onClick={handleGithub} className='btn flex gap-2  bg-blue-500'>Continue with Github <BsGithub className=''></BsGithub> </button>

                </div>

        </div>


    );
};

export default SignUp;
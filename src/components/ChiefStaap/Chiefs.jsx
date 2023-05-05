import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Chiefs = ({ user }) => {
  const { id, chefName, experience, recipes, likes, chefPicture } = user;
  const [likeCount, setLikeCount] = useState(likes[0].count);
  
  const liked = () => {
    setLikeCount(likeCount + 1);
    toast("You added Liked");
  };

  return (
    <div>
      <div className="card md:w-2/2 lg:w-3/3 bg-base-100 shadow-xl">
        <figure><img className='w-full' src={chefPicture} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{chefName} </h2>
          <p>Experience : {experience} Years</p>
          <p>Number Of Recipes: {recipes} </p>
          <button  onClick={liked} className='btn gap-3'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
            
            {likeCount}
            <ToastContainer></ToastContainer>
          </button>
    
          <div className="card-actions justify-end">
            <Link
              to={`/views/${id}`}
            >
              <button className="btn btn-primary">View Recipes</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chiefs;

import React from 'react';
import { Link } from 'react-router-dom';

const Chiefs = ({ user }) => {
  const { id, chefName, experience, recipes, likes, chefPicture } = user;

  return (
    <div>
      <div className="card md:w-2/2 lg:w-3/3 bg-base-100 shadow-xl">
        <figure><img className='w-full' src={chefPicture} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{chefName} </h2>
          <p>Experience : {experience} Years</p>
          <p>Number Of Recipes: {recipes} </p>
          <p>Like : {likes[0].count} </p>
          <div className="card-actions justify-end">
            <Link
              to={{
                pathname: `/views/${id}`,
                state: { user }
              }}
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

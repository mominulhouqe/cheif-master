import React, { useEffect, useState } from 'react';
import Chiefs from '../ChiefStaap/Chiefs';

const ChefsCatagory = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch('http://localhost:5000/datas')
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(error => console.log(error));
    }, []);
    

  return (
    <div className='bg-orange-100 p-10 container mx-auto'>
      <div className='text-center text-orange-500 font-mono font-extrabold mb-10'>
        <h1 className='mb-5'>OUR POPULAR CHIEF</h1> <hr />
        <p>Best Category Foods Menu </p>
     
      </div>
      {/* <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Deatils</button>
          </div>
        </div>
      </div> */}
   <div className="grid grid-cols-3 gap-10">
        {users.map(user => (
          <Chiefs
            key={user.id}
            user={user}
          />
        ))}
      </div>

    </div>
  );
};

export default ChefsCatagory;

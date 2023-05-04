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
     
   <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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

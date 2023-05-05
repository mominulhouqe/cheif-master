import React, { useEffect, useState } from 'react';
import Chiefs from '../ChiefStaap/Chiefs';

const ChefsCatagory = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch('https://chef-master-server-blond.vercel.app/datas')
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(error => console.log(error));
    }, []);
    

  return (
    <div className='bg-orange-100 p-10 container mx-auto'>
      <div className='text-center text-orange-500 font-mono font-extrabold mb-10'>
        <h1 className='mb-5 font-extrabold  text-4xl'>OUR POPULAR CHIEF</h1> <hr />
        <p className='text-2xl'>Best Chief  </p>
     
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

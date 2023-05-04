import React, { useEffect, useState } from 'react';

const ChefDetails = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch('http://localhost:5000/datas')
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(error => console.log(error));
    }, []);
    

    return (
        <div>
            hi {users.length}



            
        </div>
    );
};

export default ChefDetails;
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ChefUser from './ChefUser';

const Chiefs = () => {
  const [user, setUser] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/datas')
    .then(res => res.json())
    .then(data => setUser(data))
  },[])


  return (
    <div>
       {
        user.map(data => <ChefUser
        key={data.id}
        data = {data}

          ></ChefUser> )
       }
    </div>
  );
};

export default Chiefs;
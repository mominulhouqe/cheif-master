import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ChefUser from './ChefUser';

const Chiefs = () => {
  const [user, setUser] = useState([]);

  useEffect(()=>{
    fetch('https://chef-master-server-mominulhouqe.vercel.app/datas')
    .then(res => res.json())
    .then(data => setUser(data))
  },[])


  return (
    <div>
       <ChefUser user ={user} ></ChefUser>
    </div>
  );
};

export default Chiefs;
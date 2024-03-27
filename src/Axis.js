import { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';

const Axis = () => {
    const [user1, setUser1] = useState([]);

    useEffect(() => {
      Axios.get('https://dummyapi.online/api/users')
        .then(res => {
          setUser1(res.data); 
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    },[user1])

    return (
      <div className="axis">
        {user1.map(e => (
        <>
            <p>{e.id}</p>
            <p>{e.name}</p>
            <p>{e.username}</p>
            <p>{e.email}</p>
        </>
        ))}
    </div>
  )
}

export default Axis

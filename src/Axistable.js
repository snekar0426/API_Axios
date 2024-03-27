import { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';
import Table  from 'react-bootstrap/Table';

const Axistable = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
      Axios.get('https://65fa91aa3909a9a65b1abaf0.mockapi.io/user')
        .then(res => {
          setUser(res.data); 
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    },[user])
    return (
      <div className="axis_table">
     <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
        {user.map(e => (
          <tr>
          <td>{e.id}</td>
          <td>{e.name}</td>
          <td>{e.title}</td></tr>
      ))}
        </tbody>
      </Table>
      
      </div>
    );
}

export default Axistable


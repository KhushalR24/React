import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap'
import axios from 'axios';
import { Link } from 'react-router-dom';


const Read = () => {

  const [data, setData] = useState([])
  function getData() {
    axios.get('https://6629ef4e67df268010a20307.mockapi.io/curddata')
      .then((res) => {
        setData(res.data)
        // console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleDelete(id) {
    axios.delete(`https://6629ef4e67df268010a20307.mockapi.io/curddata/${id}`)
      .then(() => {
        getData()
      })
    console.log(id);
  }


  const setToLocal = (id, name, email) => {
    localStorage.setItem('id', id),
    localStorage.setItem('name', name),
    localStorage.setItem('email', email)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Container>
      <div className='pt-5 d-flex align-items-center justify-content-between'>
        <h1 >User Data </h1>
        <Link to='/'>
          <Button style={{ width: '118px', height: '44px' }} variant="warning">Create User</Button>
        </Link>
      </div>
      <Table hover variant="dark" >
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Email</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        {data.map((data, index) => {
          return (
            <tbody key={data.id} >
              <tr >
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>
                  <Link to="/update"> <Button onClick={() => setToLocal(data.id, data.name, data.email)} variant="success">Edit</Button> </Link>
                </td>
                <td> <Button variant="danger" onClick={() => handleDelete(data.id)}>Delete</Button> </td>
              </tr>
            </tbody>
          )
        })

        }
      </Table>
    </Container>
  )
}

export default Read


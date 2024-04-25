import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom'

const Update = () => {

    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem('id'))
        setName(localStorage.getItem('name'))
        setEmail(localStorage.getItem('email'))
    }, [])


    function handleUpdate(e) {
        e.preventDefault()
        axios.put(`https://6629ef4e67df268010a20307.mockapi.io/curddata/${id}`, {
            name: name,
            email: email
        }).then(() => {
            navigate('/read')
        }
        )

    }


    return (
        <Container>
            <h1 className='mt-5'>Update User Here</h1>
            <Form>
                <Form.Group className="mb-3 name" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name" />
                </Form.Group>


                <Form.Group className="mb-3 email" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                </Form.Group>

                <div className='d-flex align-items-center justify-content-between'>

                    <Button onClick={handleUpdate} variant="warning" type="submit">
                        Update
                    </Button>

                    <Link to="/read">
                        <Button variant="warning" type="submit">
                            Back To User Data
                        </Button>
                    </Link>
                </div>
            </Form>
        </Container>
    )
}

export default Update
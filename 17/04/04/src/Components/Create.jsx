import axios from 'axios';
import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'



const Create = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const history = useNavigate();

    const handleSubmit = (e) => {

        // console.log('Clicked');
        e.preventDefault()
        if (!name || !email) {
            alert('Please fill all the fields')
        } else {
            axios.post('https://6629ef4e67df268010a20307.mockapi.io/curddata', {
                name: name,
                email: email
            })
                .then(() => {
                    history('/read')
                }
                )
        }

    }


    return (
        <Container>
            <div className='pt-5 d-flex align-items-center justify-content-between'>
                <h1 >Create User Here </h1>
                <Link to='/read'>
                    <Button style={{ width: '118px', height: '44px' }} variant="warning">Users Details</Button>
                </Link>
            </div>
            <Form>
                <Form.Group className="mb-3 name" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name" />
                </Form.Group>


                <Form.Group className="mb-3 email" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                </Form.Group>


                <Button onClick={handleSubmit} variant="warning" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default Create
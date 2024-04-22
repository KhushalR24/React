import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Dis = () => {
    const [products, getProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then(result => getProducts(result))
    }, [])
    const card = products.map(product => (
        <div className="col-md-3" style={{ marginBottom: '10px' }}>
            <Card key={product.id} className='h-100'>
                <div className="text-center">
                    <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px', paddingTop: '10px' }} />
                </div>
                <Card.Body className='text-center'>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        INR : {product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='text-center' style={{ backgroundColor: 'white' }}>
                    <Button variant="primary">Add To Cart</Button>
                </Card.Footer>

            </Card>
        </div>
    ))
    return (
        <div className="row">
            {card}
        </div>
    )
}

export default Dis
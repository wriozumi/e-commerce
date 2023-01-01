import React from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card, ListGroupItem } from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';
import { useParams } from 'react-router-dom';

const ProductScreen = () => {
    const { id } = useParams();
    const product = products.find((p) => p._id === id);

    return (
    <div>
        <Link to='/' className='btn btn-light my-3'>Go back</Link>
        <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroupItem>
                        <h3>{ product.name }</h3>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825 '}/>
                    </ListGroupItem>
                    <ListGroupItem>
                        Price: ${product.price}
                    </ListGroupItem>
                    <ListGroupItem>
                        Description: {product.description}
                    </ListGroupItem>
                </ListGroup>
            </Col> 
            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <Row>
                                <Col>
                                    Price: 
                                </Col>
                                <Col>
                                    <strong>${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>
                                    Status: 
                                </Col>
                                <Col>
                                    {product.countInStock > 0 ? 'In stock' : 'Out of stock'}
                                </Col>
                            </Row>
                        </ListGroupItem> 
                        <ListGroupItem>
                            <Button disabled={product.countInStock === 0} className='btn-block' type='button'>Add to cart</Button>
                        </ListGroupItem> 
                    </ListGroup>
                </Card>
            </Col>
          </Row>
      </div>
    )
}

export default ProductScreen

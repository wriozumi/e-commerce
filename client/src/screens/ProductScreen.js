import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card, ListGroupItem } from 'react-bootstrap';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useParams } from "react-router-dom";

import { listProductDetails } from '../actions/productActions'

const ProductScreen = () => {
    const { id } = useParams();
    
    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const {
        loading,
        error,
        product
    } = productDetails;

    useEffect(() => {
        dispatch(listProductDetails(id))
    }, [dispatch, id]); 

    return ( 
    <div>
        <Link to='/' className='btn btn-light my-3'>Go back</Link>
        {
            loading ? <Loader />
                : error
                    ? <Message variant='danger'>{error}</Message>
                        :  <Row>
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
        }
    </div>
    )
}

export default ProductScreen

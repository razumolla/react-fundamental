import './ReactModal.css'
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ReactModal = (props) => {
    console.log(props.product);
    const { title, image, price, description,category } = props.product;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Details
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                   
                    <Modal.Title> {title} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <img className='w-50' src={image} alt="" />
                    <p className='price'> Price: $ {price} </p>
                    <h4> Category: {category} </h4>
                    {description}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ReactModal;
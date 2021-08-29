import React from 'react';
import { Button } from '../components/button/Button';
import { Modal, Form } from 'react-bootstrap';

function SignINModal({ modal_Show, modal_Hide }) {                 /* SignINModal({ props }) { */

    return (
        <Modal                                                     /* <Modal  */
            show={modal_Show}                                      /* show= {props.modal_Show}> */
            onHide={modal_Hide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header
                closeButton
                style={{ backgroundColor: "lightgrey" }}>
                <Modal.Title id="contained-modal-title-vcenter">
                    Welcome! Let's Sign IN
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button> */}
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button
                    className='btns'
                    buttonStyle='btn-black-box'
                    buttonSize='btn-medium'
                    onClick={modal_Hide}
                >
                    Sign IN
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SignINModal;



// const onssubmit (()=> {
    //     // hsahdiud
    //     props.onHide();
    // })
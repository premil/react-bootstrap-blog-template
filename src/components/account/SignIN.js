import React from 'react';
import { Button } from '../button/Button';
import { Modal, Form } from 'react-bootstrap';

function SignINModal({ show, onHide }) {
    // const onssubmit (()=> {
    //     // hsahdiud
    //     props.onHide();
    // })
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton style={{ backgroundColor: "lightgrey" }}>
                <Modal.Title id="contained-modal-title-vcenter">
                    Sign IN Account
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
                    onClick={onHide}
                >
                    Sign IN
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

function SignIN() {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>
            <Button
                className='btns'
                buttonStyle='btn-black-curve'
                buttonSize='btn-small'
                onClick={() => setModalShow(true)}
            >
                Sign IN
            </Button>

            <SignINModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

        </div>
    );
}

export default SignIN;

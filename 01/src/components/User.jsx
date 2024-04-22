import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

function User(props) {
    const [text, setText] = useState('Enter Your Text Here');

    const handleUpCLick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowCLick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleReset = () => {
        let newText = "";
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    } 
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <Form className="Form">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control value={text} onChange={handleOnChange} as="textarea" rows={8} />
                    </Form.Group>
                </Form>
                <div className="butn">
                    <button className="btn btn-primary" onClick={handleUpCLick}>Upper Case</button>
                    <button className="btn btn-primary" onClick={handleLowCLick}>Lower Case</button>
                    <button className="btn btn-primary" onClick={handleReset}>Reset</button>
                </div>
            </div>
            <div className="container my-3" >
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} Words And {text.length} Characters </p>
                <p>{0.008 * text.split(" ").length} Minutes To Read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
           
        </>
    )
}

export default User

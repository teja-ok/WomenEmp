import React from 'react'
import { useEffect, useState } from "react"
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import NavAdmin from '../NavAdmin';
import { addSchemes } from '../../Actions/SchemeActions';


function Scheme() {
    //  const [date, setDate] = useState(new Date());
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const initialValues = {
        schemeName: "", schemeType: "", schemeEligibility: "", launchDate: "", schemeObjective: ""
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues))
        setIsSubmit(true);
    }
    useEffect(() => {
        console.log(formErrors)
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            dispatch(addSchemes((formValues)));
            alert("Scheme Added!")
            navigate(`/admin/schemes`)

            // if (Object.keys(formErrors).length === 0 && isSubmit) {
            //     axios
            //         .post(`http://localhost:8202/api/Schemes`, formValues)
            //         .then((data) => {
            //             document.getElementById('submitAfter').innerHTML = 'Scheme added Successfully'
            //             console.log(data.data)

            //             Navigate('/schemes')
            //         })
            //         .catch((error) => {
            //             console.log('====================================');
            //             console.log(error);
            //             console.log('====================================');
            //         });
        }
    }, [formErrors])

    const validate = (value) => {
        const errors = {}
        if (!value.schemeName) {
            errors.schemeName = "Please provide scheme name"
        }
        if (!value.schemeType) {
            errors.schemeType = "Please provide scheme Type"
        }
        if (!value.schemeEligibility) {
            errors.schemeEligibility = "Please provide scheme Eligibility"
        }
        if (!value.schemeObjective) {
            errors.schemeObjective = "Please provide scheme Objective"
        }
        if (!value.launchDate) {
            errors.launchDate = "Please provide scheme date"
        }


        return errors;
    }
    return (
        <div data-testid = "schemeTest">
            <NavAdmin />

            <Form onSubmit={handleSubmit} className="container">
                {/*Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className="ui message success">Signed in successfully</div>
            ) : (
                <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
            )*/}
                <Form.Group as={Row} className="mb-3" controlId="schemeName">
                    <Form.Label column sm="2">Scheme Name</Form.Label>
                    <Form.Control type="text" placeholder="Scheme Name" name="schemeName"
                        onChange={handleChange} />
                </Form.Group>
                <p>{formErrors.schemeName}</p>
                <Form.Group as={Row} className="mb-3" controlId="schemeType">
                    <Form.Label column sm="2">Scheme Type</Form.Label>
                    <Form.Control type="text" placeholder="Scheme Type"
                        name="schemeType"
                        onChange={handleChange} />

                </Form.Group>
                <p>{formErrors.schemeType}</p>
                <Form.Group as={Row} className="mb-3" controlId="schemeObjective">
                    <Form.Label column sm="2">Scheme Objective</Form.Label>
                    <Form.Control type="text" placeholder="Scheme Objective"
                        name="schemeObjective"
                        onChange={handleChange} />

                </Form.Group>
                <p>{formErrors.schemeObjective}</p>
                <Form.Group as={Row} className="mb-3" controlId="schemeEligibility">
                    <Form.Label column sm="2">Scheme Eligibility</Form.Label>
                    <Form.Control type="text" placeholder="Scheme Eligibility"
                        name="schemeEligibility"
                        onChange={handleChange} />

                </Form.Group>
                <p>{formErrors.schemeEligibility}</p>
                <Form.Group as={Row} >
                    <Form.Label column sm="2">Scheme Launch Date </Form.Label>

                    <Form.Control
                        type="date"
                        name="launchDate"
                        max={new Date().toISOString().split("T")[0]}
                        placeholder="DateRange"
                        onChange={handleChange}
                    />
                </Form.Group>
                <p>{formErrors.launchDate}</p>

                <Button variant="primary" type="submit">Submit</Button>{' '}
                <div id='submitAfter'></div>
            </Form>
        </div>
    );

}


export default Scheme
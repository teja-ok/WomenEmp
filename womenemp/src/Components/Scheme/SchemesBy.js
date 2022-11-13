import React, { useEffect } from 'react'

import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';

function SchemesBy({ data }) {

    return (

        <div className="mx-auto" style={{ width: "500px" }}>
            <Card>
                <Card.Body>
                    <Card.Title>Scheme Search Details</Card.Title>

                    <ListGroup className="List-group-flush">
                        <ListGroup.Item>Scheme Id : {data.schemeId}</ListGroup.Item>
                        <ListGroup.Item>Scheme Name : {data.schemeName}</ListGroup.Item>
                        <ListGroup.Item>Scheme Type : {data.schemeType}</ListGroup.Item>
                        <ListGroup.Item>Scheme Objective : {data.schemeObjective}</ListGroup.Item>
                        <ListGroup.Item>Scheme Eligibility: {data.schemeEligibility}</ListGroup.Item>
                        <ListGroup.Item>Scheme Launch Date : {data.launchDate}</ListGroup.Item>

                    </ListGroup>
                </Card.Body>
            </Card>
            {/* 
              <ListGroup.Item>Training Course Provided : {data.trainingCourse.courseName}</ListGroup.Item>

        <button className='buttonBlue' onClick={handleUpdate}>Update</button>
        <button className='buttonBlue' onClick={handleDelete} style={{backgroundColor:"Red"}}>Delete</button> */}

        </div>)
}
export default SchemesBy;
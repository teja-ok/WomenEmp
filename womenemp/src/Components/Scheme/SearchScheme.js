import React from 'react'

import SchemesBy from './SchemesBy';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchSchemesById, fetchSchemesByType, fetchSchemesByLaunchDate } from "../../Actions/SchemeActions";
import Nav from "../Nav";
import NavAdmin from '../NavAdmin';

function SearchScheme() {
    const schemes = useSelector((state) => state.allSchemes.schemes);
    const dispatch = useDispatch();
    //  const schemeName= document.getElementById("schemeName");
    const [isSubmit, setIsSubmit] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const search = document.getElementById("searchoption");
    const schemeId = document.getElementById("search");
    const schemeType = document.getElementById("search");
    const schemeLaunchDate = document.getElementById("search");
    const item = schemes[0];

    useEffect(() => {
        if (isSubmit && search.value === "By Scheme ID" && schemeId.value)
            dispatch(fetchSchemesById(schemeId.value))
                .then(() => {
                    console.log(schemes)

                })
                .catch((err) => {
                    alert("Scheme not found")
                })
        if (isSubmit && search.value === "By Scheme Type" && schemeType.value)
            dispatch(fetchSchemesByType(schemeType.value))
                .then(() => {
                    console.log(item)
                })
                .catch(() => {
                    alert(" scheme not present for this type");
                })
        if (isSubmit && search.value === "By Launch Date") {
            dispatch(fetchSchemesByLaunchDate(schemeLaunchDate.value))
                .then(console.log(item))
                .catch(() => {
                    alert("scheme not present on this launch date ");
                })
        }
    }, [formErrors]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(schemes));
        setIsSubmit(true);
        document.getElementById("feedid")

    }
    const validate = (value) => {
        const errors = {}
        if (!value.schemeId) {
            errors.feedbackId = "Please provide Scheme Id"
        }
        if (!value.schemeType) {
            errors.schemeName = "Please provide Scheme Type"
        }
        if (!value.schemeLaunchDate) {
            errors.schemeName = "Please provide Scheme's LAunch Date "
        }
        return errors;
    }


    return (
        <div>
            <NavAdmin />
            <div >
                <h2>Search Scheme</h2> 
                <select
                    required
                    id="searchoption">
                    <option value="" disabled selected hidden>Select your option</option>
                    <option>By Scheme ID</option>
                    <option>By Scheme Type</option>
                    <option>By Launch Date</option>
                </select>
                <input type="text" id="search" placeholder="Search what you want ">
                </input>
                <button onClick={handleSubmit}>Search</button>
            </div>
            {/* <div id="feedid">{feedbacks && isSubmit && <FeedbackBy data={feedbacks} />}
        </div> */}
            <div id="feedid"> {isSubmit && (item ? (<SchemesBy data={item} />) : (<SchemesBy data={schemes} />))}</div>
        </div>

    )
}

export default SearchScheme
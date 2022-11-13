import React from 'react'
import { useEffect } from "react";
import SchemesView from "../SchemesView";
import { useSelector, useDispatch } from "react-redux";
import { fetchSchemesById } from "../../Actions/SchemeActions"


function SchemeIndividual() {
    const schemes = useSelector((state) => state.schemeById.schemes)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchSchemesById())
    }, []);
    return (
        <div>
            <SchemesView schemes={schemes} />

        </div>
    );
}

export default SchemeIndividual
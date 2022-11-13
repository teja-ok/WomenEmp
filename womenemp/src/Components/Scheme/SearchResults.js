import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function SearchResults() {
    const [scheme, setScheme] = useState({
        schemeId: "",
        schemeName: "",
        schemeType: "",
        schemeEligibility: "",
        launchDate: "",
        schemeObjective: ""

    });

    const { schemeType } = useParams();

    useEffect(() => {
        loadScheme();
    }, []);

    const loadScheme = async () => {
        const result = await axios.get(`http://localhost:8202/api/Schemes/schemeType/${schemeType}`);
        setScheme(result.data[0]);
        alert("Search Complete")
    };

    return (
        <div className="container">

            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Scheme Details</h2>

                    <div className="card">
                        <div className="card-header">
                            Scheme : {scheme.schemeName}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Scheme Id :</b>
                                    {scheme.schemeId}
                                </li>
                                <li className="list-group-item">
                                    <b>Scheme Type :</b>
                                    {scheme.schemeType}
                                </li>
                                <li className="list-group-item">
                                    <b>Scheme Objective : </b>
                                    {scheme.schemeObjective}
                                </li>
                                <li className="list-group-item">
                                    <b>Scheme Eligibility : </b>
                                    {scheme.schemeEligibility}
                                </li>
                                <li className="list-group-item">
                                    <b>Scheme Launch Date :</b>
                                    {scheme.launchDate}
                                </li>

                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/admin/search-scheme"}>
                        Back to Schemes!
                    </Link>
                </div>
            </div>
        </div>
    );
}

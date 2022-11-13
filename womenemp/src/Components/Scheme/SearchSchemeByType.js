import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchSchemeByType() {

    const [user, setUser] = useState({
        schemeType: ""
    });

    const { schemeType } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                <h1>Search(by Scheme):</h1>
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter Scheme type"
                                name="schemeType"
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <Link to={`/admin/search-scheme-by-type/${schemeType}`} className="btn btn-outline-primary">
                            Search
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
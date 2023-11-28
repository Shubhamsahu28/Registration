import React from "react";

export default function Greet(props) {
    return(
        <div className="container card p-3 mt-2 text-center">
            <h3>{props.name}</h3>
            <h3>You are Registered</h3>
            <h3>Verification send to {props.email}</h3>
        </div>

    );
}
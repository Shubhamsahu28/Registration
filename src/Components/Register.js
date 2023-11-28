 import React from "react";
 import Styled from 'styled-components';

 export default function Register(props) {
    const btnStyle = {
        backgroundColor: "green",
        color: "white",
    };
    let btnText,passBoxType;
    if(props.showPass == true ) {
        btnStyle.backgroundColor = "red";
        btnText = "Hide Password";
        passBoxType="text";
    }else{
        btnText ="show password";
        passBoxType="password";

        }
        const StyledButton =Styled.button`
        display:block;
        padding:10px 5px;
        background-color:${(props) => props.bgcolor};
        border:none;
        color:white;
        width:${(props) => (props.flag ? "45%" : "100%")};
        margin:5px;
        `;

    
    return (
    <div className="container card p-3 mt-2 register-container" >
        <h1 className="text-center" ><i>Registration form</i></h1>
        <form onSubmit={props.submit}>
            <div className="form-group">
            <label
                htmlFor="name">Name </label>
                <input type="text" name="name" required className="form-control"/>
                </div>
                <div className="form-group">
            <label
                htmlFor="email">Email </label>
                <input type="email" name="email" required className="form-control"/>
                </div>
                <div className="form-group">
            <label
                htmlFor="password">Password</label>
                <input type={passBoxType} name="password" required className="form-control"/>
                </div>
                <button type="summit" className="btn btn-primary m-1">Register</button>
                <button type="button" className="btn m-1" onClick={props.click} style={btnStyle}>{btnText}</button>
                <br/>
                <StyledButton type="button" flag="1" bgcolor="orange">Login</StyledButton>
                <StyledButton type="button" flag="1" bgcolor="blue">Login with Google</StyledButton>

        </form>

    </div>
    );
 }
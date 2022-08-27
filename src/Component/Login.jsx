import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import Getcookies from "./Getcookies";
import Setcookies from "./Setcookies";
import Removecookies from "./Removecookies";
function Login() {
    let [password, setPassword] = useState("");
    let [email, setEmail] = useState("");
    let navigate = useNavigate();

    function submit(e) {
        e.preventDefault();
        let login;
        let users = new Array();
        if (localStorage.getItem("users") != null)
            users = JSON.parse(localStorage.getItem("users"));


        users.forEach(user => {
            if (user.email === email && user.password === password) {
                // localStorage.setItem("email", email)
                // localStorage.setItem("password", password)
                // login=true;
                // navigate("/users")
                Setcookies('userin', JSON.stringify('user'));
                login = true;
                navigate("/users")
            }
        })
        if (login) {
            alert("Login Successfull");
        }
        else {
            alert("Login failed")
        }


    }

    return (
        <>
            <div className="container-fluid mt-5 ">
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 border m-5 p-5">
                        <h3> Login Form</h3>
                        <br />

                        <label>Email:</label><br />
                        <input type="email" id="email" className="form-control " onChange={(e) => { setEmail(e.target.value) }} /><br />
                        <label>Password:</label><br />
                        <input type="password" id="password" className="form-control" onChange={(e) => { setPassword(e.target.value) }} /><br />

                        <button type="submit" className="btn btn-primary" onClick={(e) => { submit(e) }}>Sign in</button>
                        <br />
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>

        </>
    )

}
export default Login
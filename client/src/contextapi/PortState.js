import React from 'react'
import Portcon from './Portfoliocontext'
export default function PortState(props) {


    const createuser = async (formData) => {
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "email": formData.email, "password": formData.password, "username": formData.username })
        });
        const json = await response.json();
        if (json.success) {
            alert("Account created successfully and logged-in....", "success");
            localStorage.setItem('token', json.authtoken)
            return true;

        }
        else {

            alert(json.error);
            return false;
        }
    };


    const login = async (formData) => {
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "email": formData.email, "password": formData.password })
        });
        const json = await response.json();
        if (json.success) {
            alert("Login Success", "success");
            localStorage.setItem('token', json.authtoken)
            return true;

        }
        else {

            alert(json.error);
            return false;
        }
    };





    return (
        <>
            <Portcon.Provider value={{ createuser, login }}>
                {props.children}
            </Portcon.Provider>
        </>
    )
}

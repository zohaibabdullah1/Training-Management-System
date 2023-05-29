import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectAdmin = (props) => {
    const navigate = useNavigate();
    const { Component } = props;
    useEffect(() => {
        const token = localStorage.getItem("aptoken");
        if (!token) {
            navigate("/adminlogin");
        }
    });

    return (
        <div>
            <Component />
        </div>
    );
};

export default ProtectAdmin;

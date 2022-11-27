import React, { useEffect } from "react";
import apiClient from "../api/apiClient";
import { useNavigate } from "react-router-dom";

export default function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        apiClient.post("/auth/jwt/blacklist/", {
            refresh: localStorage.getItem("refresh"),
        });
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        localStorage.removeItem("username");
        localStorage.removeItem("userId");
        apiClient.defaults.headers["Authorization"] = null;
        navigate("/");
    });

    return <div>Logout</div>;
}

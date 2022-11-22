import apiClient from "../api/apiClient";
import React from "react";
import { Box, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        apiClient.post("/auth/jwt/token/", data).then((res) => {
            localStorage.setItem("access", res.data.access);
            localStorage.setItem("refresh", res.data.refresh);
            localStorage.setItem("username", res.data.username);
            localStorage.setItem("userId", res.data.username);
            apiClient.defaults.headers["Authorization"] =
                "JWT " + localStorage.getItem("access");
            navigate(`/${res.data.username}`);
        });
    };

    return (
        <Box
            sx={{
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
            >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
            </Box>
        </Box>
    );
}

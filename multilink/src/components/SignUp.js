import apiClient from "../api/apiClient";
import React, { useState } from "react";
import { Box, TextField, Button, Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
    const [open, setOpen] = useState(false);
    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        apiClient.post("/auth/users/", { data }).then((res) => {
            navigate("/");
            setOpen(true);
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
            <Snackbar
                open={open}
                autoHideDuration={6000}
                message="You account has been register, you can now sign in."
            />
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
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
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
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="re_password"
                    label="Confirm Password"
                    type="password"
                    id="re_password"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign Up
                </Button>
            </Box>
        </Box>
    );
}

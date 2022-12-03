import React from "react";
import {
    Container,
    Card,
    CardContent,
    Typography,
    Avatar,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

export default function ProfileBio({ profile, editable }) {
    return (
        <Container maxWidth="md">
            <Card sx={{ backgroundColor: "#353535" }}>
                <CardContent>
                    <Grid2 container spacing={2}>
                        <Grid2 container item xs={12} spacing={2}>
                            <Grid2
                                item
                                xs={12}
                                md={2}
                                sx={{
                                    justifyContent: "center",
                                    display: "flex",
                                }}
                            >
                                <Avatar
                                    alt={`${profile.first_name} ${profile.last_name}`}
                                    src={profile.profile_picture}
                                    sx={{
                                        width: 100,
                                        height: 100,
                                    }}
                                />
                            </Grid2>
                            <Grid2 item xs={12} md={10}>
                                <Typography variant="h3" component="h1">
                                    {profile.first_name} {profile.last_name}
                                </Typography>
                                <Typography variant="subtitle1">
                                    @{profile.username}
                                </Typography>
                            </Grid2>
                            <Grid2 item xs={12} md={8} mdOffset={2}>
                                <Typography variant="body2">
                                    {profile.bio}
                                </Typography>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </CardContent>
            </Card>
        </Container>
    );
}

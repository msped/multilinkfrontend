import React from "react";
import {
    Skeleton,
    Box,
    Container,
    Card,
    CardContent,
    Grid,
    Avatar,
    Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

export default function ProfileSkeleton() {
    return (
        <Box my={3}>
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
                                    <Skeleton
                                        width={100}
                                        height={100}
                                        variant="rounded"
                                    >
                                        <Avatar />
                                    </Skeleton>
                                </Grid2>
                                <Grid2 item xs={12} md={10}>
                                    <Typography variant="h3" component="h1">
                                        <Skeleton />
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        <Skeleton />
                                    </Typography>
                                </Grid2>
                                <Grid2 item xs={12} md={8} mdOffset={2}>
                                    <Typography variant="body2">
                                        <Skeleton height={50} />
                                    </Typography>
                                </Grid2>
                            </Grid2>
                        </Grid2>
                    </CardContent>
                </Card>
            </Container>
            <Box my={3}>
                <Container maxWidth="sm">
                    <Grid container spacing={2}>
                        {[...Array(5)].map((_, i) => (
                            <Grid item xs={12} key={i}>
                                <Card sx={{ backgroundColor: "#353535" }}>
                                    <CardContent>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Typography
                                                    variant="h6"
                                                    component="h3"
                                                    sx={{ textAlign: "center" }}
                                                >
                                                    <Skeleton />
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}

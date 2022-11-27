import React from "react";
import {
    Grid,
    Card,
    CardActionArea,
    CardContent,
    Typography,
    Link as MuiLink,
} from "@mui/material";

export default function Link({ link, editable }) {
    return (
        <Grid item key={link.network.name} xs={12}>
            <Card sx={{ backgroundColor: "#353535" }}>
                <CardActionArea
                    component={MuiLink}
                    target="_blank"
                    rel="noopener"
                    href={link.link}
                >
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography
                                    variant="h6"
                                    component="h3"
                                    sx={{ textAlign: "center" }}
                                >
                                    {link.network.name}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}

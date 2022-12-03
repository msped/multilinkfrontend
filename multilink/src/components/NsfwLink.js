import React, { useState } from "react";
import {
    Grid,
    Card,
    CardActionArea,
    CardContent,
    Typography,
    Slide,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    DialogContentText,
    Box,
    Button,
    Link as MuiLink,
    Stack,
    Chip,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Link({ link, editable }) {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <Dialog
                fullWidth={true}
                maxWidth="sm"
                open={open}
                onClose={handleClick}
                TransitionComponent={Transition}
            >
                <DialogTitle>Are you sure you want to continue?</DialogTitle>
                <DialogContent>
                    <DialogContentText color="#fff">
                        This link has been designated as NFSW (Not Safe For
                        Work) and may contain adult material not suitable for
                        all users.
                    </DialogContentText>
                    <Box
                        noValidate
                        component="form"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            m: "auto",
                            width: "fit-content",
                        }}
                    ></Box>
                </DialogContent>
                <DialogActions p={1}>
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" onClick={handleClick}>
                            Close
                        </Button>
                        <Button
                            variant="contained"
                            component={MuiLink}
                            target="_blank"
                            rel="noopener"
                            href={link.link}
                            onClick={handleClick}
                        >
                            Continue
                        </Button>
                    </Stack>
                </DialogActions>
            </Dialog>
            <Grid item key={link.network.name} xs={12}>
                <Card sx={{ backgroundColor: "#353535" }}>
                    <CardActionArea onClick={handleClick}>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        sx={{ textAlign: "center" }}
                                    >
                                        {link.network.name}{" "}
                                        <Chip
                                            label="nsfw"
                                            variant="outlined"
                                            size="small"
                                            sx={{
                                                marginX: 1,
                                                color: "rgb(255, 88, 91)",
                                                borderColor: "rgb(255, 88, 91)",
                                            }}
                                        />
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </>
    );
}

import React from "react";
import { Grid, Container } from "@mui/material";
import Link from "../components/Link";
import NsfwLink from "../components/NsfwLink";

export default function Links({ links, editable }) {
    return (
        <Container maxWidth="sm">
            <Grid container spacing={2}>
                {links.map((link) =>
                    editable ? (
                        <Link
                            link={link}
                            key={link.network.name}
                            editable={editable}
                        />
                    ) : link.nsfw ? (
                        <NsfwLink link={link} key={link.network.name} />
                    ) : (
                        <Link
                            link={link}
                            key={link.network.name}
                            editable={editable}
                        />
                    )
                )}
            </Grid>
        </Container>
    );
}

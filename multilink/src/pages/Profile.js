import React from "react";
import { Box } from "@mui/material";
import ProfileBio from "../components/ProfileBio";
import Links from "../components/Links";
import useGetProfile from "../hooks/useGetProfile";

export default function Profile() {
    const { profile, isLoading } = useGetProfile(
        localStorage.getItem("username")
    );
    return isLoading ? (
        <div>Loading..</div>
    ) : (
        <Box my={3}>
            <ProfileBio profile={profile} editable={true} />
            <Box my={3}>
                <Links links={profile.links} editable={true} />
            </Box>
        </Box>
    );
}

import React from "react";
import { Box } from "@mui/material";
import ProfileBio from "../components/ProfileBio";
import Links from "../components/Links";
import useGetProfile from "../hooks/useGetProfile";
import { useParams } from "react-router-dom";

export default function UserProfile() {
    const { username } = useParams();

    const { profile, isLoading } = useGetProfile(username);
    return isLoading ? (
        <div>Loading..</div>
    ) : (
        <Box my={3}>
            <ProfileBio profile={profile} editable={false} />
            <Box my={3}>
                <Links links={profile.links} editable={false} />
            </Box>
        </Box>
    );
}

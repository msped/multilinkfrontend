import { useState, useEffect } from "react";
import getProfileService from "../api/getProfileService";

export default function useGetProfile(username) {
    const [profile, setProfile] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDataFromService = async () => {
            await getProfileService(username).then(setProfile);
            setIsLoading(false);
        };
        fetchDataFromService();
    }, [username]);

    return { profile, isLoading };
}

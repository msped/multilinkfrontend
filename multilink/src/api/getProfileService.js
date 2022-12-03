import apiClient from "./apiClient";

export default function getProfileService(username) {
    return apiClient.get(`/links/${username}/`).then((res) => res.data);
}

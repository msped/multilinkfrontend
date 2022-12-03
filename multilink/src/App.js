import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";

import CustomTheme from "./theme";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import UserProfile from "./pages/UserProfile";
import Logout from "./pages/Logout";

function App() {
    return (
        <ThemeProvider theme={CustomTheme()}>
            <CssBaseline />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/me" element={<Profile />} />
                <Route path="/:username" element={<UserProfile />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;

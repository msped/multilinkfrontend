import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { Route, Routes } from 'react-router-dom'

import CustomTheme from './theme';

import RedirectRoute from './Routes/RedirectRoute'

import Home from './pages/Home'
import Profile from './pages/Profile'

function App() {
  return (
    <ThemeProvider theme={CustomTheme()}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={
        <RedirectRoute>
          <Home />
        </RedirectRoute>
        }/>
        <Route path="/:username" element={
          <RedirectRoute>
            <Profile />
          </RedirectRoute>
        }/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

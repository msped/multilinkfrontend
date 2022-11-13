import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { Route, Routes } from 'react-router-dom'

import CustomTheme from './theme';

import Home from './pages/Home'
import Profile from './pages/Profile'

function App() {
  return (
    <ThemeProvider theme={CustomTheme()}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:username" element={<Profile />}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

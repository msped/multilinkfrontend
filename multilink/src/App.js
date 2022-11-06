import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { Route, Routes } from 'react-router-dom'

import CustomTheme from './theme';

import Home from './pages/Home.js'

function App() {
  return (
    <ThemeProvider theme={CustomTheme()}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

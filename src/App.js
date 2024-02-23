import { ThemeProvider } from '@mui/material';
import './App.css';
import NavBar from './components/NavBar'
import Dashboard from './pages/Dashboard';
import { createTheme } from '@mui/material';
import { useState } from 'react';
import Widget from './components/Widget';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const theme = createTheme({
  typography: {
    fontFamily: [
      "Inter",
      'sans-serif',
    ].join(','),
  },
});

function App() {

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <>
                <NavBar open={open} handleOpen={handleOpen} />
                <Dashboard />
                <Widget open={open} handleClose={handleClose} />
              </>
            }>
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;

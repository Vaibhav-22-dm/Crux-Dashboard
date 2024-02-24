import { ThemeProvider } from '@mui/material';
import './App.css';
import NavBar from './components/NavBar'
import Dashboard from './pages/Dashboard';
import { createTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import Widget from './components/Widget';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/styles.css";


const theme = createTheme({
  typography: {
    fontFamily: [
      "Inter",
      'sans-serif',
    ].join(','),
  },
});

function App() {

  useEffect(() => {
    if (!localStorage.getItem("widgets")) localStorage.setItem("widgets", JSON.stringify(new Array))
  }, [])


  const [open, setOpen] = useState(false)
  const [widgets, setWidgets] = useState(JSON.parse(localStorage.getItem("widgets")))

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={
              <>
                <NavBar open={open} handleOpen={handleOpen} />
                <Dashboard widgets={widgets}/>
                <Widget open={open} handleClose={handleClose} setWidgets={setWidgets} />
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

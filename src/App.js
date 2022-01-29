
import React, {Fragment} from 'react'

import './App.css';

//pages
import Chat from './pages/Chat'
import Login from './pages/Login'
import Feed from './pages/Feed'
import Home from './pages/Home'

// MUI
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';

let theme = createTheme({
  palette: {
    primary: {
      main: '#b2ebf2',
      // black
      contrastText: '#006064'
    },
    secondary: {
      main: '#ef5350',
      // red dark
      contrastText: '#fff'
    }
  }
  
})



function App() {


  return (
    <ThemeProvider theme={theme}>
      <Fragment>


        <Chat/>
      
      
      </Fragment>
     
    </ThemeProvider>
  );
}

export default App;

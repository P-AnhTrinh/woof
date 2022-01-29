
import React, {Fragment} from 'react'

import './App.css';

// Redux
import {Provider} from 'react-redux';
import store from './redux/store';

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
       <Provider store={store}>
        <Fragment>
          <Feed/>
        </Fragment>
      </Provider>
    </ThemeProvider>
  );
}

export default App;


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
import Signup from './pages/Signup'

import Header from './components/Header';
import Profile from './pages/Profile'

// MUI
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';

let theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
      contrastText: '#ffffff'
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
          <Header/>
          <Chat/>
          <Feed/>
          <Login/>
          <Signup/>
          <Profile/>
          <Home/>
        </Fragment>
      </Provider>
    </ThemeProvider>
  );
}

export default App;

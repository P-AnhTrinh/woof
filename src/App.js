
import React, {Fragment, useState} from 'react'

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
import Brightness6Icon from '@mui/icons-material/Brightness6';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { IconButton } from '@mui/material';

// let theme = createTheme({
//   palette: {
//     primary: {
//       main: '#3f51b5',
//       contrastText: '#ffffff'
//     },
//     secondary: {
//       main: '#ef5350',
//       // red dark
//       contrastText: '#fff'
//     }
//   }
  
// })

export const light = {
  palette: {
    type: 'light',
    primary: {
      main: '#3f51b5',
      contrastText: '#ffffff',
      toggleButton: '#000',
    },
    secondary: {
      main: '#ef5350',
      contrastText: '#fff',
      contrastText: '#000',
    },
    background: {
      default: '#E1EEC3',
    }
  }
}

export const dark = {
  palette: {
    type: 'dark',
    primary: {
      main: '#d32f2f',
      contrastText: '#ffffff',
      toggleButton: '#fff',
    },
    secondary: {
      main: '#43a047',
      contrastText: '#ffffff',
    },
    background: {
      default: "#ffcc80", 
    },
  },
}



function App() {
  const [theme, setTheme] = useState(true);
  const icon = theme ? <Brightness6Icon sx={{ color: "white", mt: 1.5, mr: 3}} /> : <Brightness4Icon sx={{ color: "black", mt: 1.5, mr: 3}} />;
  const appliedTheme = createTheme(theme ? light : dark);

  return (
    <ThemeProvider theme={appliedTheme}>
       <Provider store={store}>
        <Fragment>
          <Header/>
          <IconButton
            style={{position: 'absolute', right: '0', top: '0', width: '50px', height: '50px'}}
            onClick={() => setTheme(!theme)}
          >
            {icon}
          </IconButton>
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

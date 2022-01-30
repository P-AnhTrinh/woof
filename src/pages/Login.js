import React, {Fragment, useState, useEffect} from 'react';

import {db, auth} from '../firebaseConfig';
import {signInWithEmailAndPassword} from 'firebase/auth'

import {
	FormControl,
	TextField,
	FormLabel,
	FormHelperText,
	Button,
    Box,
    Grid,
    CssBaseline,
    Paper,
    Typography, 
    CircularProgress
} from '@mui/material';

//Redux
import {updateCurrentPage, setLoading, setUserId} from '../redux/dataActions'
import {connect} from 'react-redux'

let Login = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false)
    const {data: {currentPage, loading}} = props;
   
    let handleChange = (event) => {
        if (event.target.name === 'email'){
            setEmail(event.target.value)
        } else if (event.target.name === 'password'){
            setPassword(event.target.value)
        }
    }

    let handleSubmit = (event) => {
        event.preventDefault()
        props.setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user.uid)
            props.setUserId(user.uid)
            props.updateCurrentPage(3)
            props.setLoading(false)
            setEmail('')
            setPassword('')
            
        })
        .catch((error) => {
            console.log(error)
            alert("An Error occured. Please Try Again")
            props.setLoading(false)
            setEmail('')
            setPassword('')
        });
        
    }

    useEffect(()=> {
        if (currentPage == 2){
            setShow(true)
        } else {
            setShow(false)
        }

    }, [currentPage])


    if (show) {
	return (
        <Fragment>
            <Grid container  sx={{ height: '90vh', alignItems: 'center', justifyContent: 'center', mt: -7}}>
                <CssBaseline />
            
                <Grid item xs={12} sm={8} md={5} lg={4} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Log In
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate  sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                autoComplete="email"
                                id="email"
                                label="Email"
                                name="email"
                                value={email} 
                                onChange={handleChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                type="password"
                                label="Password"
                                autoComplete="Password"
                                name="password"
                                value={password} 
                                onChange={handleChange}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                color="primary"
                                variant="contained"
                                sx={{ mt: 3, mb: 2, p: 1}}
                            >
                
                            {loading ? 
                                (<CircularProgress size={30} color="inherit" />): ( 
                                    <Typography variant="body1">
                                        Sign In
                                    </Typography> 
                                )
                            }
                
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Fragment>
	)
    } else {
        return (
            <Fragment></Fragment>
        )
    }
};

const mapStateToProps = (state) => ({
    data: state.data 
})

const mapActionsToProps = {
    updateCurrentPage, setLoading, setUserId
}

export default connect(mapStateToProps, mapActionsToProps)(Login);

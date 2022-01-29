
import React, {Fragment, useEffect, useState} from 'react';

//Redux
import { updateCurrentPage} from '../redux/dataActions'
import {connect} from 'react-redux'

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

import {
    Grid, 
    Paper, 
    Typography,
    CssBaseline, 
    TextField, 
    Box,
    CircularProgress, 
    Button,
    InputAdornment, 
    Icon
} from '@mui/material'

let Signup = (props) => {

    let [fullName, setFullName] = useState('')
    let [dogName, setDogName] = useState('')
    let [email, setEmail] = useState('')
    let [city, setCity] = useState('')
    let [password, setPassword] = useState('')
    let [confirmPassword, setConfirmPassword] = useState('')
    let [imagePresent, setImagePresent] = useState(false)

    let {data: {currentPage, loading}} = props;

    let handleSubmit = () => {

    }

    let handleChange = () => {

    }

    let handleImage = (e) => {

        if (e.target.files[0]){
            setImagePresent(true)


        } else {
            setImagePresent(false)
        
        
        }

    }

    const [show, setShow] = useState(false)
    useEffect(()=> {
        if (currentPage == 1){
            setShow(true)
        } else {
            setShow(false)
        }

    }, [currentPage])

    if (show) {
    return (
        <Fragment>
        <Grid container  sx={{ height: '90vh', alignItems: 'center', justifyContent: 'center', mt: 2}}>
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
                        Sign Up Today
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate  sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            autoComplete="full-name"
                            id="fullName"
                            label="Full Name of the Owner"
                            name="fullName"
                            value={fullName} 
                            onChange={handleChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="DogName"
                            label="Dog Name"
                            autoComplete="Dog-name"
                            name="DogName"
                            value={dogName} 
                            onChange={handleChange}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="breed"
                            label="Breed"
                            autoComplete="Dog Breed"
                            name="breed"
                            value={dogName} 
                            onChange={handleChange}
                        />
                        
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            type="number"
                            minValue={0}
                            id="age"
                            label="Age"
                            autoComplete="Age"
                            name="age"
                            value={dogName} 
                            onChange={handleChange}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="weight"
                            label="Weight"
                            name="weight"
                            
                            InputProps={{
                              startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                            }}
                            value={dogName} 
                            onChange={handleChange}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="bio"
                            multiline
                            rows={4}
                            label="Little Description"
                            autoComplete="Bio"
                            name="bio"
                            value={dogName} 
                            onChange={handleChange}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            autoComplete="email"
                            label="Email Address"
                            name="email"
                            type="email"
                            value={email} 
                            onChange={handleChange}
                            
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            autoComplete="chosen-password"
                            id="password"
                            value={password} 
                            onChange={handleChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            autoComplete="confirm-password"
                            id="confirmPassword"
                            value={confirmPassword} 
                            onChange={handleChange}
                            
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="city"
                            label="City"
                            autoComplete="City"
                            name="city"
                            value={city} 
                            onChange={handleChange}
                            sx={{mb: 3}}
                        />
                        
                        <Button
                            variant="contained"
                            component="label"
                            color="secondary"
                           
                            >
                            Upload Profile Picture
                            <input
                                type="file"
                                id="imageUpload"
                                onChange={handleImage}
                                hidden
                            />
                        
                            
                        </Button>
                        
                        <Icon sx={{ ml: 1}}>
                        {imagePresent? (
                                <CheckCircleOutlineIcon fontSize='medium' color="success"/>
                            ): (
                                <CircleOutlinedIcon fontSize='medium' color="success"/>
                            )
                        }
                        </Icon>
                      
                            

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
                                    Sign Up
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



}

const mapStateToProps = (state) => ({
    data: state.data 
})

const mapActionsToProps = {
    updateCurrentPage
}

export default connect(mapStateToProps, mapActionsToProps)(Signup);

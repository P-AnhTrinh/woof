
import React, {Fragment, useEffect, useState} from 'react';
import {db, storage, auth} from '../firebaseConfig';
import {collection, addDoc, setDoc, doc} from 'firebase/firestore';
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import { createUserWithEmailAndPassword } from "firebase/auth";


//Redux
import { updateCurrentPage, setLoading} from '../redux/dataActions'
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

    //const userCollectionRef = collection(db, "users")
    let [fullName, setFullName] = useState('')
    let [dogName, setDogName] = useState('')
    let [email, setEmail] = useState('')
    let [age, setAge] = useState('')
    let [weight, setWeight] = useState('')
    let [breed, setBreed] = useState('')
    let [bio, setBio] = useState('')
    let [city, setCity] = useState('')
    let [password, setPassword] = useState('')
    let [confirmPassword, setConfirmPassword] = useState('')
    let [imagePresent, setImagePresent] = useState(false);

    let [image, setImage] = useState('')

    let {data: {currentPage, loading}} = props;


    let addData = (url, id) => {

        setDoc(doc(db, "users", id), {
            emai: email, 
            dogName: dogName, 
            fullName, fullName, 
            age: age, 
            weight: weight, 
            breed: breed, 
            bio: bio, 
            city: city,
            image: url           
        })
        .then(() => {
            props.setLoading(false)
            props.updateCurrentPage(2)
    
            setFullName('')
            setDogName('')
            setEmail('')
            setAge('')
            setWeight('')
            setBreed('')
            setBio('')
            setCity('')
            setPassword('')
            setConfirmPassword('')
            setImagePresent(false);
            setImage('')
    
        })
        .catch((err) => console.log(err))

       
    }

    let createUser = () => {

        props.setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            let id = user.uid
            let storageRef = ref(storage, `images/${image.name}`)
            const uploadTask = uploadBytesResumable(storageRef, image)
            uploadTask.on(
                "state_changed",
                snapshot => {}, 
                error => {
                    console.log(error)
                }, 
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        addData(downloadURL, id)
                    });
                }
            )
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });     
    }

    let handleSubmit = (event) => {
        event.preventDefault()

        if (password !== confirmPassword) {
            alert("The passwords need to match")
        } else if (password === "" || confirmPassword === "" || age === "" || bio === "" || 
            weight === "" || city === "" || breed === "" || dogName === "" || fullName === "" || email === "" || image === ""){
            alert("Please fill all the fields")
        } else {
            createUser()
        }
        console.log(image)
    }

    let handleChange = (event) => {
        if (event.target.name === 'email'){
            setEmail(event.target.value)
        } else if (event.target.name === 'password'){
            setPassword(event.target.value)
        }  else if (event.target.name === 'confirmPassword'){
            setConfirmPassword(event.target.value)
        } else if (event.target.name === 'fullName'){
            setFullName(event.target.value)
        } else if (event.target.name === 'dogName'){
            setDogName(event.target.value)
        } else if (event.target.name === 'age'){
            setAge(event.target.value)
        } else if (event.target.name === 'weight'){
            setWeight(event.target.value)
        } else if (event.target.name === 'bio'){
            setBio(event.target.value)
        } else if (event.target.name === 'city'){
            setCity(event.target.value)
        } else if (event.target.name === 'breed'){
            setBreed(event.target.value)
        }
    }


    let handleImage = (e) => {

        if (e.target.files[0]){
            setImagePresent(true)
            setImage(e.target.files[0])

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
                            name="dogName"
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
                            value={breed} 
                            onChange={handleChange}
                        />
                        
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            type="number"
                            id="age"
                            label="Age"
                            autoComplete="Age"
                            name="age"
                            value={age} 
                            onChange={handleChange}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="weight"
                            label="Weight"
                            name="weight"
                            type="number"
                            InputProps={{
                              startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                            }}
                            value={weight} 
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
                            value={bio} 
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
    updateCurrentPage, setLoading
}

export default connect(mapStateToProps, mapActionsToProps)(Signup);

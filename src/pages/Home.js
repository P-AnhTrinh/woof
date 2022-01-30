import React, {Fragment, useState, useEffect} from 'react';
import { Typography, Grid, Paper, Box }from '@mui/material';

import Dog1 from '../static/pic-dog-1.jpeg'
import Dog2 from '../static/puppy.jpg'
import Dog3 from '../static/dog.jpg'

//Redux
import {connect} from 'react-redux'

let Home = (props) =>  {
    let {data: {currentPage}} = props;

    const [show, setShow] = useState(false)
    useEffect(()=> {
        if (currentPage == 0){
            setShow(true)
        } else {
            setShow(false)
        }

    }, [currentPage])

    if (show) {

    return(
        <Fragment>
    
        <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${Dog1})`,
                height: '600px'
                
            }}
            >
            <Box
                sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                backgroundColor: 'rgba(0,0,0,.3)',
                }}
            />
            <Grid container>
                <Grid item md={6}>
                <Box
                    sx={{
                    position: 'relative',
                    p: { xs: 3, md: 6 },
                    pr: { md: 0 },
                    }}
                >
                    <Typography variant="h3" color="inherit" gutterBottom>
                        Woofmee
                    </Typography>
                    <Typography variant="h4" color="primary" >
                        Friendly neighbourhood dog play-date app
                    </Typography>
                </Box>
                </Grid>
            </Grid>
            </Paper>
            <Paper sx={{backgroundColor: 'white', p: 5, pb: 5}}>
                <Grid container sx={{alignItems: 'center'}}>
                    <Grid item sx={{alignItems: 'center', 
                        justifyContent: 'center', 
                        backgroundImage: `url(${Dog2})`,
                        minHeight: '400px',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        }} xs={12} sm={5} >
                      
                    </Grid>
                    <Grid item sx={{alignItems: 'center', justifyContent: 'center', ml: 1}} xs={12} sm={6}>
                        <Typography fontSize={25} color="primary" sx={{ml: 4, mt: 4}}>
                            As a parent, letting your dogs alone can be stressful. 
                        </Typography>
                        <Typography fontSize={24} color="primary" sx={{ml: 4, mt: 3}}>
                            Don't worry, we have you covered! 
                        </Typography>
                        <Typography fontSize={23} color="primary" sx={{ml: 4, mt: 3}}>
                            With Woofmee, you can arrange play dates for your dogs with other registered owners in your area.
                        </Typography>
                        <Typography fontSize={22} color="primary" sx={{ml: 4, mt: 3}}>
                            And of course... no need to matching! Yay, let's register!
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
            <br></br>
            <Paper sx={{backgroundColor: 'white', p: 5, pb: 25}}>
                <Grid container sx={{alignItems: 'center'}}>
                <Grid item sx={{alignItems: 'center', justifyContent: 'center', ml: 1, mb: 5}} xs={12} sm={6}>
                        
                        <Typography fontSize={25} color="primary" sx={{ml: 1, mt: 4}}>
                            Who are we?
                        </Typography>
                        <Typography fontSize={23} color="primary" sx={{ml: 1, mt: 3, mr: 5}}>
                            We are students from 3 different univerities there to make a difference for 
                            the livelihoods of dogs.
                        </Typography>
                        <Typography fontSize={22} color="primary" sx={{ml: 1, mt: 4, mr: 5}}>
                           We built this app with love during ConUHacks 2022
                        </Typography>
                    </Grid>
                    <Grid item sx={{alignItems: 'center', 
                        justifyContent: 'center', 
                        backgroundImage: `url(${Dog3})`,
                        minHeight: '400px',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        }} xs={12} sm={5} >
                      
                    </Grid>
                
                </Grid>
            </Paper>

            <br></br>
            <br></br>

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
  
}

export default connect(mapStateToProps, mapActionsToProps)(Home);
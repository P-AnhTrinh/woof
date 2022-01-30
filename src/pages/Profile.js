
import React, { useState, useEffect, Fragment } from 'react'
//Redux
import {connect} from 'react-redux';

import MultiActionAreaCard from '../components/Card';

import Box from '@mui/material/Box'

let Profile = (props) => {

    let {data: {user, currentPage}} = props;
    let [show, setShow] = useState(false)

    useEffect(()=> {
        if (currentPage == 6){
            setShow(true)
        } else {
            setShow(false)
        }

    }, [currentPage])

    if (show) {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent:"center",
            p: 2,
            flexWrap: 'wrap',
            flexDirection: 'column',
            alignItems: 'center',
            }}>
            <MultiActionAreaCard  
            key={'profile1'} alt="Cute Dog" age={user.age} dog={user.dogName} breed={user.breed} owner={user.fullName} 
            profile={true} image={user.image} weight={user.weight} title={user.title} bio={user.bio} id={user.id} city={user.city}
            />
        </Box>
    )
    }
    else {
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

export default connect(mapStateToProps, mapActionsToProps)(Profile);
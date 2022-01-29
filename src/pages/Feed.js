import React, {Fragment, useEffect, useState} from 'react';
import MultiActionAreaCard from '../components/Card';
import Box from '@mui/material/Box';

//Redux
import {updateCurrentPage} from '../redux/dataActions'
import {connect} from 'react-redux'

let Feed = (props) =>  {
    const data = [1, 2, 3, 4, 5];
  

    const {data: {currentPage}} = props;

    const [show, setShow] = useState(false)
    useEffect(()=> {
        if (currentPage == 2){
            setShow(true)
        } else {
            setShow(false)
        }

    }, [currentPage])

    if (show) {
    
    return(
        <Box sx={{
            display: 'flex',
            justifyContent:"center",
            p: 2,
            flexWrap: 'wrap',
            flexDirection: 'column',
            alignItems: 'center',
            }}>
        {
            data.map((item, index) =>{
                return(
                    <MultiActionAreaCard key={index} image={item.image} title={item.title} description={item.description} id={item.id}
                    />
                )
            })
        }
            <br/>
        </Box>
        
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

export default connect(mapStateToProps, mapActionsToProps)(Feed);
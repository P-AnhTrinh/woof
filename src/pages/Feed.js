import * as React from 'react';
import MultiActionAreaCard from '../components/Card';
import Box from '@mui/material/Box';


let Feed = (props) =>  {
    const data = [1, 2, 3, 4, 5];
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
}


export default (Feed);
import * as React from 'react';
import MultiActionAreaCard from '../components/Card';
import Box from '@mui/material/Box';
import svg from '../static/bg.svg';

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
             backgroundColor: '#F1EEE9',
             backgroundImage: `url(${svg})}`,
             backgroundRepeat: 'repeat',
             }}>
        {
            data.map((item, index) =>{
                return(
                    <MultiActionAreaCard key={index} image={item.image} title={item.title} description={item.description}
                    />
                )
            })
        }
        </Box>
        
    )
}


export default (Feed);
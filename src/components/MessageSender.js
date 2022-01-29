
import React from 'react'

import Typography from '@mui/material/Typography'

let MessageSender = (props) => {

    return (
        
        <div style={{display:'flex', justifyContent: 'flex-start', marginLeft: '30px', marginTop: '7px', marginBottom: '3px'}}>
            <div style={{backgroundColor: "#e8d100",  borderRadius: '30px', maxWidth: '250px'}}>
                <Typography sx={{m: 1, p: 1}} color="#0024b3">
                   {props.text}
                </Typography>
            </div>
        </div>

    )

}

export default MessageSender;
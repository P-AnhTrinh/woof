
import React from 'react'

import Typography from '@mui/material/Typography'

let MessageReceiver = (props) => {

    return (
        <div style={{display:'flex', justifyContent: 'flex-end', marginRight: '30px', marginTop: '7px', marginBottom: '3px'}}>
            <div style={{backgroundColor: "#0024b3", borderRadius: '30px', maxWidth: '250px'}}>
                <Typography sx={{m: 1, p: 1}} color="white">
                   {props.text}
                </Typography>
            </div>
        </div>

    )

}

export default MessageReceiver;
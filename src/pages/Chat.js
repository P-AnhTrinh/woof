
import React from 'react'

// MUI

import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import { TextField, Button } from '@mui/material';

let Chat = (props) =>  {

    return(
        <div style={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
            <Paper style={{maxWidth: '700', alignItems: 'center'}} sx={{mt: 5}}>
                <Typography sx={{mx: 5, mt: 2}} variant="h6">
                    Chat with Hilly
                </Typography>
                <hr style={{marginBottom: '15px'}}/>
                <div style={{ maxWidth: "500px", maxHeight: "600px", width: "80vw", height: "60vh", display: "flex",flexDirection: "column", position: "relative", overflowY: 'scroll'}}>

                    <div style={{display:'flex', justifyContent: 'flex-end', marginRight: '30px', marginTop: '7px', marginBottom: '3px'}}>
                        <div style={{backgroundColor: "#0024b3", borderRadius: '30px', maxWidth: '250px'}}>
                            <Typography sx={{m: 1, p: 1}} color="white">
                                Nice to meet yyyyyyyyyy  jrjrr jrj rejre jrj rj rejreyyyyyyyyy yyp ypypy ypypyp yp yppypyp ypyp pypypypy y you
                            </Typography>
                        </div>
                    </div>

                    <div style={{display:'flex', justifyContent: 'flex-start', marginLeft: '30px', marginTop: '7px', marginBottom: '3px'}}>
                        <div style={{backgroundColor: "#e8d100",  borderRadius: '30px', maxWidth: '250px'}}>
                            <Typography sx={{m: 1, p: 1}} color="#0024b3">
                                Nice to m   utu tutut tm,ddfm .df. df    ntntnt nt ntnt nt nt ntnt teet youu
                            </Typography>
                        </div>
                    </div>
                   
                </div>
                <hr/>
                <form noValidate style={{display: 'flex', margin: 1}} > 
                    <TextField sx={{m: 1}} style={{width: '82%'}}/>
                    <Button variant="contained" color="primary" style={{width: '25px', height: '40px'}} sx={{mt: 1.7, mr: 1}}>Send</Button>
                </form>
            </Paper>
        </div>
    )

}


export default (Chat);
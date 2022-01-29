
import React, { useEffect, useRef } from 'react'

// MUI

import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import { TextField, Button } from '@mui/material';

import MessageReceiver from '../components/MessageReceiver';
import MessageSender from '../components/MessageSender';

import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
let Chat = (props) =>  {

    let chatRef = useRef()

    let scrollToBottom = () => {
        chatRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start"
        });
    }

    useEffect(()=> {
        scrollToBottom()
    }, [chatRef]);

    return(
        <div style={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
      
            <Paper style={{maxWidth: '700', alignItems: 'center'}} sx={{mt: 5}}>
                <div style={{display: 'flex'}}>
                    <Button style={{width: '5px'}} sx={{mt: 1.4}}><ArrowBackIosIcon fontSize='medium' color="secondary"/></Button>
                    <Typography sx={{ml: 1, mt: 2}} variant="h6" >
                        Hilly
                    </Typography>
                </div>
               
                <hr style={{marginBottom: '15px'}}/>
                <div id="chat" style={{ maxWidth: "500px", maxHeight: "600px", width: "80vw", height: "60vh", display: "flex",flexDirection: "column", position: "relative", overflowY: 'scroll'}} >

                    <MessageReceiver text="Nice to meet yyyyyyyyyy  jrjrr jrj rejre j"/>
                    <MessageSender text="Nice to m   utu tutut tm,ddfm .df. df    ntntnt nt ntnt nt nt ntnt teet youu"/>
                    <MessageReceiver text="Nice to meet yyyyyyyyyy  jrjrr jrj rejre j"/>
                    <MessageSender text="Nice to m   utu tutut tm,ddfm .df. df    ntntnt nt ntnt nt nt ntnt teet youu"/>
                   
                    <MessageReceiver text="Nice to meet yyyyyyyyyy  jrjrr jrj rejre j"/>
                    <MessageSender text="Nice to m   utu tutut tm,ddfm .df. df    ntntnt nt ntnt nt nt ntnt teet youu"/>
                   
                    <MessageReceiver text="Nice to meet yyyyyyyyyy  jrjrr jrj rejre j"/>
                    <MessageSender text="Nice to m   utu tutut tm,ddfm .df. df    ntntnt nt ntnt nt nt ntnt teet youu"/>

                    <div ref={chatRef}></div>
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
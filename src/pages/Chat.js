
import React, { useEffect, useRef, Fragment, useState} from 'react';

import { onSnapshot, collection, doc, setDoc,  updateDoc, arrayUnion, getDoc} from 'firebase/firestore';
import {db, storage, auth} from '../firebaseConfig';

// MUI

import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import { TextField, Button } from '@mui/material';

import MessageReceiver from '../components/MessageReceiver';
import MessageSender from '../components/MessageSender';

import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

//Redux
import { updateCurrentPage, setChatId} from '../redux/dataActions'
import {connect} from 'react-redux'


let Chat = (props) =>  {

    let {data: {currentPage, chatId, userId}} = props;
    let [message, setMessage] = useState('')
    let [list, setList] = useState([])
    // const messageRef = db.collection('messages')
    // const query = messageRef.orderBy('createdAt').limit(25)


    let chatRef = useRef()

    let scrollToBottom = () => {
        chatRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start"
        });

    }

    let handleChange = (event) => {
        if (event.target.name === 'message'){
            setMessage(event.target.value)
         
        }
        
    }

    useEffect(()=> {

        if (userId !== null && chatId !== null){
            let msgId;
            if (userId > chatId.id){
                msgId = `${userId}&&&&&${chatId.id}`
            } else {
                msgId = `${chatId.id}&&&&&${userId}`
            }


            const unsub = onSnapshot(doc(db, "messages", msgId), (doc) => {

                let data = doc.data()

                if (data !== undefined){
                    setList(data.messages)
                    scrollToBottom()
                    
                }
                
                
            });
        }
        

    }, [chatId])

    useEffect(()=> {

        if (currentPage == 4){
            scrollToBottom()
        }
      
    }, [currentPage]);

    let handleGoBack = () => {
        props.updateCurrentPage(3)
        props.setChatId(null)
        setList([])
    }

    let handleSend = (event) => {
        event.preventDefault()
      
        if (message !== ''){
            addMesg()
        }
       
    }

    let addMesg = async() => {
        let msgId;
        let today = new Date()
        today = today.toISOString()

        if (userId > chatId.id){
            msgId = `${userId}&&&&&${chatId.id}`
        } else {
            msgId = `${chatId.id}&&&&&${userId}`
        }

        let messagesRef = doc(db, "messages", msgId);
        let docSnap = await getDoc(messagesRef);
   
    
        if (docSnap.exists()){
            await updateDoc(messagesRef, {
                messages: arrayUnion({
                    createdAt: today, 
                    id: userId, 
                    msg: message
                })
            });
        } else {
            await setDoc(doc(db, "messages", msgId), {
                messages: [
                    {
                        createdAt: today, 
                        id: userId, 
                        msg: message
                    }
                ]
            });
        }
   
        scrollToBottom()
        setMessage('')
    }

    if (currentPage == 4){

    
    return(
        <div style={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
      
            <Paper style={{maxWidth: '700', alignItems: 'center'}} sx={{mt: 2}}>
                <div style={{display: 'flex'}}>
                    <Button style={{width: '5px'}} sx={{mt: 1.4}} onClick={handleGoBack}><ArrowBackIosIcon fontSize='medium' color="secondary"/></Button>
                    <Typography sx={{ml: 1, mt: 2}} variant="h6" >
                        {chatId.name}
                    </Typography>
                </div>
               
                <hr style={{marginBottom: '15px'}}/>
                <div id="chat" style={{ maxWidth: "500px", maxHeight: "600px", width: "80vw", height: "60vh", display: "flex",flexDirection: "column", position: "relative", overflowY: 'scroll'}} >

                    {
                        list.map(msg => (
                            <MessageReceiver text={msg.msg} id ={msg.id}/>
                        ))
                    }

                    <div ref={chatRef}></div>
                </div>
                <hr/>
                <form onSubmit={handleSend} noValidate style={{display: 'flex', margin: 1}} > 
                    <TextField sx={{m: 1}} style={{width: '82%'}} 
                        fullWidth
                        id="message"
                        name="message"
                        value={message} 
                        onChange={handleChange}/>
                    <Button type="submit" variant="contained" color="primary" style={{width: '25px', height: '40px'}} sx={{mt: 1.7, mr: 1}}>Send</Button>
                </form>
            </Paper>
        </div>
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
    updateCurrentPage, setChatId
}

export default connect(mapStateToProps, mapActionsToProps)(Chat);

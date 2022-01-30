import React, {Fragment, useEffect, useState} from 'react';
import MultiActionAreaCard from '../components/Card';
import Box from '@mui/material/Box';

import {db} from '../firebaseConfig';
import {collection, getDocs} from 'firebase/firestore';

//Redux
import {updateCurrentPage, setUser} from '../redux/dataActions'
import {connect} from 'react-redux'

let Feed = (props) =>  {
    const [dogs, setDogs] = useState([])

    const {data: {currentPage, userId}} = props;

    const [show, setShow] = useState(false)

    const usersCollectionRef = collection(db, 'users')

    useEffect(() => {
        if (currentPage > 1){
            const getPuppies = async () => {
                
                const data = await getDocs(usersCollectionRef);
                setDogs(data.docs.map((doc) => ({...doc.data(), id: doc.id})))

                props.setUser(dogs.filter(dog => dog.id == userId )[0])
            }
            getPuppies()
        }
    }, [currentPage])


    useEffect(()=> {
        if (currentPage == 3){
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
                dogs.map((item, index) =>{

                    if (item.id !== userId){
                        return(
                            <MultiActionAreaCard 
                                key={index} alt="Cute Dog" age={item.age} dog={item.dogName} breed={item.breed} owner={item.fullName} 
                                profile={false} image={item.image} weight={item.weight} title={item.title} bio={item.bio} id={item.id} city={item.city}
                            />
                        )
                    }
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
    updateCurrentPage, setUser
}

export default connect(mapStateToProps, mapActionsToProps)(Feed);
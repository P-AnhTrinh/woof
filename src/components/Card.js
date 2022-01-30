import React, {Fragment} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Container } from '@mui/material';

//Redux
import { setChatId, updateCurrentPage,} from '../redux/dataActions'
import {connect} from 'react-redux';


let MultiActionAreaCard = (props) => {

    let handleClick = (event) => {
        props.setChatId({id: event.target.id, name:  event.target.name})
        props.updateCurrentPage(4)
    }

    return (
        <Card
            sx={{
                maxWidth: {
                    xs: '300px',
                    sm: '300px',
                    md: '600px',
                    lg: '650px',
                    xl: '800px',
                },
                minWidth: {
                    xs: '300px',
                    sm: '300px',
                    md: '600px',
                    lg: '650px',
                    xl: '800px',
                },
                boxShadow: 1,
                m: 1,
                display: 'flex',
                flexDirection: {
                    xs: 'column',
                    sm: 'column',
                    md: 'row',
                    lg: 'row',
                    xl: 'row',
                },
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255,255,255,.75)',
            }}>
            <CardMedia
                component="img"
                image={props.image ? props.image : 'https://source.unsplash.com/random'}
                alt={props.alt ? props.alt : 'Random Image'}
                sx={{
                    width: {
                        xs: '100%',
                        sm: '100%',
                        md: '50%',
                        lg: '45%',
                    },
                    height: {
                        xs: '250px',
                        sm: '250px',
                        md: 'auto',
                    },
                }}
            />
            <Container sx={{
                display: 'flex',
                position: 'relative',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'end',
                minHeight: '100%',
                padding: '4px 0 !important',
            }}>
                <CardActionArea sx=
                    {{
                        padding: 1,
                        height: '100%',
                    }}>
                    <CardContent
                        sx=
                        {{
                            padding: 0,
                        }}>
                        <Typography gutterBottom variant="h4" component="div">
                            {props.dog ? props.dog : 'Max'}
                        </Typography>
                        <hr/>
                        <Typography gutterBottom variant="body1" component="div"
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: '0px 25px',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                            }}>
                            <div>Owner: </div>
                            {props.owner ? props.owner : 'John Doe'}
                        </Typography>
                        <Typography gutterBottom variant="body1" component="div"
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: '0px 25px',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                            }}>
                            <div>Breed: </div>
                            {props.breed ? props.breed : 'Labrador'}
                        </Typography>
                        <Typography gutterBottom variant="body1" component="div"
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: '0px 25px',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                            }}>
                            <div>Weight: </div>
                            {props.weight ? props.weight + ' kg' : '15 kg'}
                        </Typography>
                        <Typography gutterBottom variant="body1" component="div"
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: '0px 25px',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                            }}>
                            <div>Age: </div>
                            {props.age ? props.age : ' 42'}
                        </Typography>
                        <Typography gutterBottom variant="body1" component="div"
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: '0px 25px',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                            }}>
                            <div>City: </div>
                            {props.city ? props.city : ' Earth'}
                        </Typography>
                        <hr></hr>
                        <Typography variant="body1" color="text.primary" fontWeight='bold' my={1}>
                            Bio
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.bio ? props.bio : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                {
                    !props.profile ? (
                        <CardActions
                        sx={{
                            display: 'flex',
                            justifyContent: 'end',
                        }}>
                        <Button size="medium"
                            color="primary"
                            id={props.id}
                            name={props.dog}
                            
                            onClick={handleClick}
                            sx={{
                                boxShadow: 1
                            }}>
                            Chat
                        </Button>
                    </CardActions>
                    ) : (
                        <Fragment></Fragment>
                    )
                }
            
            </Container>
        </Card>
    );
}

const mapStateToProps = (state) => ({
    data: state.data 
})

const mapActionsToProps = {
    setChatId, updateCurrentPage
}

export default connect(mapStateToProps, mapActionsToProps)(MultiActionAreaCard);


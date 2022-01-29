import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Container } from '@mui/material';
export default function MultiActionAreaCard(props) {
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
                            {props.petName ? props.petName : 'Max'}
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
                            {props.ownerName ? props.ownerName : 'Jhon Doe'}
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
                            {props.weight ? props.weight + ' lbs' : '15 lbs'}
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
                        <hr></hr>
                        <Typography variant="body2" color="text.primary" fontWeight='bold' my={1}>
                            Descripton:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.description ? props.description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions
                    sx={{
                        display: 'flex',
                        justifyContent: 'end',
                    }}>
                    <Button size="medium"
                        sx={{
                            boxShadow: 1,
                            bgcolor: 'primary.main',
                            color: '#000',
                            background: 'rgb(38,212,149)',
                            background: 'linear-gradient(54deg, rgba(38,212,149,1) 0%, rgba(103,170,191, .6) 50%, rgba(184,110,196,1) 100%)', 
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-5px)',
                                opacity: [0.9, 0.8, 0.7],
                            }
                        }}>
                        Chat
                    </Button>
                </CardActions>
            </Container>
        </Card>
    );
}

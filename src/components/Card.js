import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard(props) {
  return (
    <Card 
    sx={{ 
        maxWidth: 400,
        boxShadow: 1,
        m: 1,
     }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="225"
          image={props.image ? props.image : 'https://source.unsplash.com/random'}
          alt={props.alt ? props.alt : 'Random Image'}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title ? props.title : 'Green Iguana'}
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
        <Button size="small" color="secondary"
        sx={{
            boxShadow: 1,
            bgcolor: 'primary.main',
            color: '#000',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
                backgroundColor: 'primary.dark',
                color: '#fff',
                transform: 'translateY(-5px)',
                opacity: [0.9, 0.8, 0.7],
              }
            }}>
          Chat
        </Button>
      </CardActions>
    </Card>
  );
}

import React from 'react'
import {Container} from '@mui/material'
import image from '../image.jpg'
// Material icons
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function Project(props) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }} className='project'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.pname}
          </Typography>
          <Typography variant="body2">
            {props.description}
          </Typography>
        
        </CardContent>
      </CardActionArea>
      <div className='flex project_svg'>
                <LinkIcon></LinkIcon>
                <GitHubIcon></GitHubIcon>
                <FavoriteBorderIcon></FavoriteBorderIcon>
          </div>
    </Card>
        
    </div>
  )
}

import React from 'react'
import {Container} from '@mui/material'

// Material icons
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
export default function Project(props) {
  return (
    <div>
        <Container>
            <h1>{props.pname}</h1>
            <p>{props.description}</p>
            <div className='flex'>
                <LinkIcon></LinkIcon>
                <GitHubIcon></GitHubIcon>
                <FavoriteBorderIcon></FavoriteBorderIcon>
            </div>
        </Container>
    </div>
  )
}

import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function SocialLinks(props) {
  return (
    <div className='social_links flex'>
        <GitHubIcon></GitHubIcon>
        <LinkedInIcon></LinkedInIcon>
        <FacebookIcon></FacebookIcon>
        <TwitterIcon></TwitterIcon>
    </div>
  )
}

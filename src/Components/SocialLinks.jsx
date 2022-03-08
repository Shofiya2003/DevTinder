import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function SocialLinks(props) {
  const {github,linkedin,instagram,twitter}=props.socialLinks
  return (
    <div className='social_links flex'>
      <a href={github} target="_blank" rel="noopener noreferrer"><GitHubIcon></GitHubIcon></a>
      <a href={linkedin} target="_blank" rel="noopener noreferrer"><LinkedInIcon></LinkedInIcon></a>
      <a href={instagram} target="_blank" rel="noopener noreferrer"> <FacebookIcon></FacebookIcon></a>
      <a href={twitter} target="_blank" rel="noopener noreferrer"> <TwitterIcon></TwitterIcon></a>
        
       
       
       
    </div>
  )
}

import React from 'react'
import { Avatar, Container, Typography, Button, Tooltip } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Hero = () => {
  return (
    <Container maxWidth="lg" sx = {{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    }}>
        <Avatar src='./src/assets/my-photo.jpg' alt='My Photo' sx = {{ 
            width: '300px', 
            height:'300px',
            marginTop: '100px',
            marginBottom: '50px'
            }}>

        </Avatar>
        <Typography variant='h3' align='center'>
            Hello, I'm Cindy. <br></br>
        </Typography>
        <Typography variant='h4' align='center'>
            I'm a final year Computer Science student at University of Canterbury, NZ. <br></br>
            After graduation, I want to work in Software Development or GIS role.
        </Typography>
        <Container sx= {{ display: 'flex', flexDirection: 'inline', justifyContent:'center', alignContent:'center', gap: 5}}>
            <Tooltip title ='Link to https://github.com/cindybond'>
                <Button href = 'https://github.com/cindybond' target='_blank' sx= {{ 
                    background: 'linear-gradient(270deg,  #430089, #ed3299)',
                    padding:'15px', 
                    borderRadius:'30px',
                    marginTop:'50px',
                    color:'white',
                    gap: 1,
                    '&:hover': {backgroundColor: '#f55baf' , color: 'black'}
                }}> <GitHubIcon/> GITHUB </Button>
            </Tooltip>
            
            <Tooltip title = 'Link to https://www.linkedin.com/in/cindy-bond/'>
                <Button href='https://www.linkedin.com/in/cindy-bond/' target='_blank' sx= {{ 
                    background: 'linear-gradient(270deg, #0007DB, #430089)',
                    padding:'15px', 
                    borderRadius:'30px',
                    marginTop:'50px',
                    color:'white',
                    gap:1,
                    '&:hover': {backgroundColor: '#f55baf' , color: 'black'}
                }}> <LinkedInIcon /> LinkedIn </Button>
            </Tooltip>           
        </Container>
    </Container>
        
  )
}

export default Hero
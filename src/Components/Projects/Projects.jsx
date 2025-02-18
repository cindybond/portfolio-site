import React from 'react'
import { Container, Typography, Card, CardActions, CardMedia, CardContent, Button, Box} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';


const Projects = () => {
  return (
    <Container id='projects' maxWidth="lg" sx={{marginTop:'150px', marginBottom:'150px'}}>
        <Typography variant='h4' align='center' sx={{marginBottom:'50px'}}>
            My Projects
        </Typography>
        <Card sx={{ display: 'flex', marginBottom:'50px', padding:'10px', border:'3px solid', height: { xs: 'auto', sm: '500px' }, 
            flexDirection: { xs: 'column', sm: 'row' },
            '&:hover': {borderColor: '#f55baf'}
        }}>
            <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5" sx={{fontWeight:500}}>
                    Christchurch Christmas Parade
                </Typography>
                <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ color: 'text.secondary', marginTop:'50px', marginBottom:'50px' }}
                >
                    Website I created for local parade during my internship. 
                    I learned about translating non-technical requirements and turning it into visually appealing and user-friendly website. 
                </Typography>
                <Button disabled sx={{color: 'black', backgroundColor:'#e3e1e6', margin:'10px',borderRadius:'20px', opacity: 1, '&.Mui-disabled': { color:'black' }}}>
                    WordPress
                </Button>
                <Button disabled sx={{color: 'black', backgroundColor:'#e3e1e6', margin:'10px',borderRadius:'20px', opacity: 1, '&.Mui-disabled': { color:'black' }}}>
                    JavaScript
                </Button>
                <Button disabled sx={{color: 'black', backgroundColor:'#e3e1e6', margin:'10px',borderRadius:'20px', opacity: 1, '&.Mui-disabled': { color:'black' }}}>
                    CSS
                </Button>
                </CardContent>
                <CardActions>
                    <Button variant="contained" href='https://christmasshowparade.co.nz/' target='_blank' sx= {{backgroundColor: '#ed3299', gap:1, '&:hover': {backgroundColor: '#f55baf' , color: 'black'}}}>
                        <LanguageIcon /> WEBSITE
                    </Button>
                </CardActions>
            </Box>
            <CardMedia
                component="img"
                sx={{ maxWidth: 600 }}
                image="./src/assets/Christmas-parade.png"
                alt="Christchurch Christmas Parade Website"
            />
        </Card>
        <Card sx={{ display: 'flex', height:'500px', marginBottom:'50px', padding:'10px', border:'3px solid', height: { xs: 'auto', sm: '500px' }, 
            flexDirection: { xs: 'column', sm: 'row' }, '&:hover': {borderColor: '#f55baf'}
        }}>
            <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5" sx={{fontWeight:500}}>
                    Petition Website
                </Typography>
                <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ color: 'text.secondary', marginTop:'50px', marginBottom:'50px' }}
                >
                    This full-stack petition website allows users to create, support, and track petitions. It also features user registration, user authentication and secure login. User passwords are securely hashed with bcrypt before storing them in the datase. RESTful API is designed for communication between front and back-end.
                </Typography>
                <Button disabled sx={{color: 'black', backgroundColor:'#e3e1e6', margin:'10px',borderRadius:'20px', opacity: 1, '&.Mui-disabled': { color:'black' }}}>
                    React
                </Button>
                <Button disabled sx={{color: 'black', backgroundColor:'#e3e1e6', margin:'10px',borderRadius:'20px', opacity: 1, '&.Mui-disabled': { color:'black' }}}>
                    Node.JS
                </Button>
                <Button disabled sx={{color: 'black', backgroundColor:'#e3e1e6', margin:'10px',borderRadius:'20px', opacity: 1, '&.Mui-disabled': { color:'black' }}}>
                    MySQL
                </Button>
                </CardContent>
                <CardActions>
                    
                    <Button variant="contained" href=
                    'https://github.com/cindybond/petition-website' target='_blank' sx= {{backgroundColor: '#ed3299', gap:1, '&:hover': {backgroundColor: '#f55baf' , color: 'black'}}}>
                        <GitHubIcon/> GitHub
                    </Button>
                </CardActions>
            </Box>
            <CardMedia
                component="img"
                sx={{ maxWidth: 600, objectFit:'contain'}}
                image="./src/assets/petition.png"
                alt="Petition Website"
            />
        </Card>
       
    </Container>
    
  )
}

export default Projects
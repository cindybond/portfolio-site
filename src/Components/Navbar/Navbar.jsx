import React, { useState } from 'react';
import { Container, Toolbar, Button, Tooltip, AppBar, Drawer, List, ListItem, ListItemText, IconButton, useMediaQuery, useTheme } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import MenuIcon from '@mui/icons-material/Menu';

const StyledButton = ({ href, children }) => {
    return (
        <Button variant='text' href={href} sx={{
            color: 'white',
            fontSize: '20px',
            paddingLeft: '30px', 
            paddingRight: '30px',
            borderRadius: '30px',
            cursor: 'pointer',
            '&:hover': {backgroundColor: '#f55baf', color: 'black'}
        }}>
            {children}
        </Button>
    );
};

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Check if screen is small

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const links = (
        <>
            <StyledButton href='#home'>Home</StyledButton>
            <StyledButton href='#projects'>Projects</StyledButton>
            <Tooltip title='Click to download my resume'>
                <Button variant='text' href='/resume.pdf' target='_blank' sx={{
                    color: 'white',
                    fontSize: '20px',
                    paddingLeft: '30px',
                    paddingRight: '30px',
                    borderRadius: '30px',
                    cursor: 'pointer',
                    '&:hover': {backgroundColor: '#f55baf', color: 'black'}
                }}>
                    Resume <DownloadIcon />
                </Button>
            </Tooltip>
            <StyledButton href='#contact'>Contact</StyledButton>
        </>
    );

    const drawerLinks = (
        <List>
            <ListItem button onClick={() => setDrawerOpen(false)}>
                <a href="#home" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItemText primary="Home" />
                </a>
            </ListItem>
            <ListItem button onClick={() => setDrawerOpen(false)}>
                <a href="#projects" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItemText primary="Projects" />
                </a>
            </ListItem>
            <ListItem button onClick={() => setDrawerOpen(false)}>
                <a href="/resume.pdf" target='_blank' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItemText primary="Resume" />
                </a>
            </ListItem>
            <ListItem button onClick={() => setDrawerOpen(false)}>
                <a href="#contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItemText primary="Contact" />
                </a>
            </ListItem>
        </List>
    );

    return (
        <React.Fragment>
            {/* Hamburger menu for mobile */}
            {isMobile ? (
                <IconButton 
                    color="inherit" 
                    onClick={handleDrawerToggle} 
                    sx={{
                        position:'fixed',
                        zIndex: 1000,
                        margin:'20px',
                        backgroundColor: '#ed3299',  
                        padding: '8px',  
                        borderRadius: '5px', 
                        '&:hover': { backgroundColor: '#f55baf' },
                    }}
                >
                    <MenuIcon />
                </IconButton>
            ) : (
                // AppBar for larger screens
                <AppBar position='sticky' sx={{ 
                    backgroundColor: '#ed3299',
                    borderRadius: '30px',
                    maxWidth: '960px',
                    width: '100%',
                    margin: '30px auto',
                    boxShadow: 'none',
                }}>
                    <Toolbar sx={{ 
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '20px'
                    }}>
                        {links}  {/* Display navigation links on larger screens */}
                    </Toolbar>
                </AppBar>
            )}

            {/* Drawer for mobile */}
            <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
                {drawerLinks}
            </Drawer>

            <Toolbar id="home" /> {/* Anchor for scrolling to the home section */}
        </React.Fragment>
    );
};

export default Navbar;

import React, { useState } from 'react';
import { Typography, Container, Box, TextField, Button, Snackbar, Alert } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [inputs, setInputs] = useState({ email: '', message: '' });
    const [snack, setSnack] = useState({ open: false, message: '', severity: 'success' });

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!inputs.email || !inputs.message) {
            setSnack({ open: true, message: 'Please fill in all fields', severity: 'warning' });
            return;
        }

        if (!isValidEmail(inputs.email)) {
            setSnack({ open: true, message: 'Please enter a valid email address', severity: 'error' });
            return;
        }

        const serviceID = "service_4kazs4b"; 
        const templateID = "template_xhjau47"; 
        const publicKey = "p3OVVzGbSoV7iFYoZ"; 

        emailjs.send(serviceID, templateID, inputs, publicKey)
            .then(() => {
                setSnack({ open: true, message: 'Email sent successfully!', severity: 'success' });
                setInputs({ email: '', message: '' });
            })
            .catch((error) => {
                console.error(error);
                setSnack({ open: true, message: 'Failed to send email', severity: 'error' });
            });
    };

    return (
        <Container id='contact' maxWidth="md" sx={{ marginTop: '150px', marginBottom: '150px', justifyItems: 'center' }}>
            <Typography variant='h4' align='center' sx={{ marginBottom: '50px' }}>
                Contact Me
            </Typography>
            <Typography variant='body1' align='center'>
                Please fill the form below or email me at cindyinside81@gmail.com to get in touch.
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{
                marginTop: '20px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 2
            }}>
                <TextField 
                    fullWidth 
                    id="email" 
                    label="Your Email" 
                    name="email"
                    variant="outlined" 
                    value={inputs.email}
                    onChange={handleChange} 
                    sx={{ backgroundColor: 'white' }} 
                />
                <TextField
                    fullWidth 
                    id="message" 
                    label="Your Message" 
                    name="message"
                    variant="outlined"
                    multiline 
                    rows={4} 
                    value={inputs.message}
                    onChange={handleChange}
                    sx={{ backgroundColor: 'white' }} 
                />
                <Button 
                    type='submit'
                    variant="contained" 
                    sx={{ maxWidth: '100px', backgroundColor: '#ed3299', gap: 1,
                        '&:hover': { backgroundColor: '#f55baf', color: 'black' }
                    }}>
                    <SendIcon /> SEND
                </Button>
            </Box>
            
            {/* Snackbar with Alert */}
            <Snackbar
                open={snack.open}
                autoHideDuration={4000}
                onClose={() => setSnack({ ...snack, open: false })}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert 
                    onClose={() => setSnack({ ...snack, open: false })} 
                    severity={snack.severity} 
                    variant="filled"
                >
                    {snack.message}
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default Contact;

'use client'

import './homepage.css'
import Image from 'next/image'
import homePicture from '../images/me.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Button from '@mui/material/Button';
import CallIcon from '@mui/icons-material/Call';

export const Homepage = () => {

    const imageStyle = {
        borderRadius: '50%',
        border: '5px solid #000',
        padding: '10px'
    }

    const buttonStyle = {
        border: '2px solid',
        fontWeight: 'bold',
        '&:hover': {
            transform: 'scale(1.1)',
            transition: 'transform .2s',
            border: '2px solid',
        }
    }
    
    const WIDTH = 300
    
    return (
        <div className="home-page-container">
            <div className='top-panel'>
                <div className='left'>
                    <Image
                        src={homePicture}
                        width={WIDTH}
                        height={WIDTH}
                        alt="Denuke Dissanayake"
                        style={imageStyle}
                    />
                </div>
                <div className='right'>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <span className='name'>Hello! I'm Denuke Dissanayake</span>
                    <span className='title'>Software Engineer</span>
                    <div className='button-div'>
                        <Button
                            variant="outlined"
                            sx={buttonStyle}
                        >
                            Check My Blog
                        </Button>
                        <Button
                            variant="outlined"
                            sx={buttonStyle}
                            endIcon={<CallIcon />}
                        >
                            Contact Me
                        </Button>
                    </div>
                    
                </div>
            </div>
            <div className='bottom-panel'>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p>I'm a passionate and creative software engineer with a knack for turning ideas into reality through code</p>
                <div className='social-media'>
                    <FacebookIcon fontSize='large' sx={{cursor: 'pointer'}}/>
                    <EmailIcon fontSize='large' sx={{cursor: 'pointer'}}/>
                    <LinkedInIcon fontSize='large' sx={{cursor: 'pointer'}}/>
                    <InstagramIcon fontSize='large'sx={{cursor: 'pointer'}}/>
                </div>
            </div>
        </div>
    )
}
/* eslint-disable react/no-unescaped-entities */
'use client'

import Image from 'next/image'
import homePicture from '../../../public/images/me.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import CallIcon from '@mui/icons-material/Call';

export default function Home() {

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
        <div className='h-[calc(100dvh-40px)] grid grid-rows-3 items-center justify-center'>
            <div className='grid items-center justify-center row-span-2 gap-y-8 xl:grid-cols-4 xl:gap-x-10'>
                <div className='xl:col-span-1 flex items-center justify-center'>
                    <Image
                        src={homePicture}
                        width={WIDTH}
                        height={WIDTH}
                        alt="Denuke Dissanayake"
                        style={imageStyle}
                    />
                </div>
                <div className='flex flex-col xl:items-start items-center justify-center gap-y-4 xl:col-span-3 '>
                    <span
                        style={{ fontFamily: 'Courier New, Courier, monospace' }}
                        className='text-xl md:text-4xl'>
                        Hello! I'm Denuke Dissanayake
                    </span>
                    <span
                        style={{ fontFamily: 'Georgia, Times New Roman, Times, serif' }}
                        className='text-xl font-bold md:text-7xl'>
                        Software Engineer
                    </span>
                    <div className='flex gap-x-8 pt-2'>
                        <Button
                            variant="outlined"
                            sx={buttonStyle}
                            onClick={() => window.open('/documents/cv.pdf', '_blank')}
                        >
                            Check My CV
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
            <div className='flex flex-col items-center items-center gap-y-8 row-span-1'>
                <p
                    style={{ fontFamily: 'Georgia, Times New Roman, Times, serif' }}
                    className='text-xl text-center md:text-2xl'>
                    I'm a passionate and creative software engineer with a knack for turning ideas into reality through code
                </p>
                <div className='flex gap-x-4'>
                    <FacebookIcon fontSize='large' sx={{ cursor: 'pointer' }} />
                    <EmailIcon fontSize='large' sx={{ cursor: 'pointer' }} />
                    <LinkedInIcon fontSize='large' sx={{ cursor: 'pointer' }} />
                    <InstagramIcon fontSize='large' sx={{ cursor: 'pointer' }} />
                    <GitHubIcon fontSize='large' sx={{ cursor: 'pointer' }} />
                </div>
            </div>
        </div>
    )
}
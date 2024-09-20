/* eslint-disable react/no-unescaped-entities */
'use client'

import Image from 'next/image'
import { buttonStyle, imageStyle } from '../styles';
import homePicture from '../../../public/images/me.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import BookIcon from '@mui/icons-material/Book';
import WorkIcon from '@mui/icons-material/Work';
import Link from 'next/link';

export default function Home() {
    const WIDTH = 300

    return (
        <div className='h-full lg:h-dvh section-height grid md:grid-rows-3 gap-y-4 items-center justify-center'>
            <div className='grid items-center justify-center row-span-2 lg:gap-y-8 xl:grid-cols-3 xl:gap-x-10'>
                <div className='xl:col-span-1 flex items-center justify-center py-4 lg:py-0'>
                    <Image
                        src={homePicture}
                        width={WIDTH}
                        height={WIDTH}
                        alt="Denuke_Dissanayake"
                        style={imageStyle}
                    />
                </div>
                <div className='flex flex-col xl:items-start items-center justify-center md:gap-y-4 xl:col-span-2 '>
                    <span
                        className='text-xl md:text-4xl font-courier'>
                        Hello! I'm Denuke Dissanayake
                    </span>
                    <span
                        className='text-xl font-bold md:text-7xl font-georgia'>
                        Software Engineer
                    </span>
                    <div className='flex flex-col gap-y-4 md:flex-row md:gap-x-8 pt-4'>
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
                            endIcon={<BookIcon />}
                        >
                            Check My Blog
                        </Button>
                        <Link href="/projects" passHref>
                            <Button
                                variant="outlined"
                                sx={buttonStyle}
                                endIcon={<WorkIcon />}
                            >
                                Project Portfolio
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center gap-y-4 md:gap-y-8 row-span-1'>
                <p className='text-lg text-center md:text-2xl font-mono px-4'>
                    I'm a passionate and creative software engineer with a knack for turning ideas into reality through code
                </p>
                <div className='flex gap-x-4 pb-8 md:pb-0'>
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
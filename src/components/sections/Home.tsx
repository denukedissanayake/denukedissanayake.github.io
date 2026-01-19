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
import WorkIcon from '@mui/icons-material/Work';
import DownloadIcon from '@mui/icons-material/Download';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';

// TODO: Replace these with your actual profile URLs
const socialLinks = {
    facebook: "https://facebook.com/",
    email: "mailto:your.email@example.com",
    linkedin: "https://linkedin.com/in/",
    instagram: "https://instagram.com/",
    github: "https://github.com/denukedissanayake"
};

export default function Home() {
    const WIDTH = 300

    return (
        <section className='min-h-dvh bg-white flex items-center justify-center py-12 px-6'>
            <div className='max-w-5xl w-full'>
                {/* Hero Content */}
                <div className='flex flex-col lg:flex-row items-center gap-16 lg:gap-24'>
                    {/* Profile Image */}
                    <div className='flex-shrink-0'>
                        <Image
                            src={homePicture}
                            width={WIDTH}
                            height={WIDTH}
                            alt="Denuke Dissanayake - Software Engineer"
                            className='rounded-full border-4 border-slate-100 shadow-lg'
                            priority
                        />
                    </div>

                    {/* Introduction */}
                    <div className='flex flex-col items-center lg:items-start text-center lg:text-left'>
                        <span className='text-slate-500 text-xl mb-3'>
                            Hello, I'm
                        </span>
                        <h1 className='text-5xl md:text-6xl font-bold text-slate-800 mb-3'>
                            Denuke Dissanayake
                        </h1>
                        <p className='text-2xl md:text-3xl text-blue-600 font-medium mb-6'>
                            Software Engineer
                        </p>

                        <p className='text-slate-600 text-lg leading-relaxed mb-8 max-w-xl'>
                            A passionate software engineer focused on building scalable solutions
                            with modern technologies. Turning complex problems into elegant code.
                        </p>

                        {/* Action Buttons */}
                        <div className='flex flex-col sm:flex-row gap-4'>
                            <Button
                                variant="outlined"
                                startIcon={<DownloadIcon />}
                                onClick={() => window.open('/documents/cv.pdf', '_blank')}
                                sx={{
                                    fontFamily: 'inherit',
                                    fontWeight: 600,
                                    borderWidth: 2,
                                    borderColor: '#334155',
                                    color: '#334155',
                                    '&:hover': {
                                        borderWidth: 2,
                                        backgroundColor: '#f8fafc',
                                    }
                                }}
                            >
                                Download CV
                            </Button>
                            <Link href="/projects" passHref>
                                <Button
                                    variant="contained"
                                    endIcon={<WorkIcon />}
                                    sx={{
                                        fontFamily: 'inherit',
                                        fontWeight: 600,
                                        backgroundColor: '#1e40af',
                                        '&:hover': {
                                            backgroundColor: '#1e3a8a',
                                        }
                                    }}
                                >
                                    View Projects
                                </Button>
                            </Link>
                        </div>

                        {/* Social Links */}
                        <div className='flex gap-2 mt-8'>
                            {[
                                { icon: <LinkedInIcon />, label: "LinkedIn", href: socialLinks.linkedin },
                                { icon: <GitHubIcon />, label: "GitHub", href: socialLinks.github },
                                { icon: <EmailIcon />, label: "Email", href: socialLinks.email },
                                { icon: <FacebookIcon />, label: "Facebook", href: socialLinks.facebook },
                                { icon: <InstagramIcon />, label: "Instagram", href: socialLinks.instagram },
                            ].map((social) => (
                                <IconButton
                                    key={social.label}
                                    aria-label={social.label}
                                    href={social.href}
                                    target={social.href.startsWith('mailto') ? undefined : '_blank'}
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: '#64748b',
                                        '&:hover': {
                                            color: '#1e40af',
                                            backgroundColor: '#f1f5f9',
                                        }
                                    }}
                                >
                                    {social.icon}
                                </IconButton>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
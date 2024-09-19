"use client"

import CodeIcon from '@mui/icons-material/Code';
import HtmlIcon from '@mui/icons-material/Html';
import LaptopIcon from '@mui/icons-material/Laptop';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import StorageIcon from '@mui/icons-material/Storage';
import GitHubIcon from '@mui/icons-material/GitHub';
import ApiIcon from '@mui/icons-material/Api';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { blue } from '@mui/material/colors';

export const Expertise = () => {

    const buttonStyle = {
        border: '2px solid',
        fontWeight: 'bold',
        '&:hover': {
            transform: 'scale(1.1)',
            transition: 'transform .2s',
            border: '2px solid',
        }
    }

    return (
        <div className='section-height-xl flex flex-col items-center justify-center gap-y-8 xl:w-full mb-12 xl:mb-0'>
            <h1 className='font-bold text-2xl xl:text-4xl'>Technologies and Tools</h1>
            <TechnologiesGrid />
            <Button
                variant="outlined"
                sx={buttonStyle}
                endIcon={<ArrowForwardIcon />}
            >
                View Full Profile
            </Button>
        </div>
    )
}


const TechnologiesGrid = () => {
    const ICON_SIZE = 80;
    const ICON_COLOR = blue[500];

    const itemList = [
        {
            "data": "JavaScript, TypeScript, Java, Scala, Python",
            "topic": "Programming Languages",
            "icon": CodeIcon
        },
        {
            "data": "HTML, CSS, SCSS",
            "topic": "Web Technologies",
            "icon": HtmlIcon
        },
        {
            "data": "React, Next, Express, Akka, http4s",
            "topic": "Libraries & Frameworks",
            "icon": LaptopIcon
        },
        {
            "data": "React Native, Flutter",
            "topic": "Mobile App Development",
            "icon": SmartphoneIcon
        },
        {
            "data": "SQL, MySQL, PostgreSQL",
            "topic": "Database Management",
            "icon": StorageIcon
        },
        {
            "data": "Git, GitHub",
            "topic": "Version Control",
            "icon": GitHubIcon
        },
        {
            "data": "Jira, Confluence, ClickUp",
            "topic": "Project Management",
            "icon": AccountTreeIcon
        },
        {
            "data": "Agile Development",
            "topic": "Software Engineering",
            "icon": ApiIcon
        },
    ]

    return (
        <div className=''>
            <div className='grid md:grid-cols-3'>
                {itemList.map(item =>
                    <div className='p-4' key={item?.topic}>
                        <div className='flex items-center gap-x-8'>
                            <div className=''>
                                <item.icon sx={{ fontSize: ICON_SIZE, color: ICON_COLOR }} />
                            </div>
                            <div className=''>
                                <span style={{ fontFamily: 'Courier New, Courier, monospace' }}>{item?.data}</span>
                                <h3
                                    className='font-bold'
                                    style={{ fontFamily: 'Georgia, Times New Roman, Times, serif' }}>
                                    {item?.topic}
                                </h3>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
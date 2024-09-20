import { buttonStyle } from '@/components/styles';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Link from 'next/link';

export default function Projects() {
    return (
        <div className='p-8 flex flex-col'>
            <div className="flex items-center justify-between mb-8">
                <Link href="/" passHref>
                    <Button
                        variant="outlined"
                        sx={{
                            display: {
                                xs: 'none',
                                md: 'inline-flex',
                            },
                            ...buttonStyle
                        }}
                        startIcon={<ArrowBackIosNewIcon />}
                    >
                        Back to Home
                    </Button>
                </Link>
                <h1 className='text-4xl text-center justify-center flex-grow font-bold font-serif self-center text-brand-blue1'>Discover What I’ve Been Working On</h1>
            </div>
            <ProjectsGrid />
        </div>
    )
}

const ProjectsGrid = () => {

    const projectList = [
        {
            title: "Acceleration of Dynamic Time Warping algorithm for real-time nanopore selective sequencing using GPUs",
            description: "The project aims to optimize the Dynamic Time Warping (DTW) algorithm and accelerate it using Graphics Processing Units (GPUs), So that algorithm can be executed in a GPU-equipped laptop or a GPU-equipped embedded device like NVIDIA Jetson, rather than connecting to a massive server.",
            technologies: "C, CUDA Programming",
            concepts: "Hardware Programming, Algorithm Optimization, GPU Programming",
            gitHub: "",
            webSite: "https://cepdnaclk.github.io/e16-4yp-Acceleration-of-DTW-algorithm-for-real-time-nanopore-selective-sequencing-using-GPUs/",
            notes: "University Final Year Project"
        },
        {
            title: "AgriBot - Autonomous Agricultural Robot",
            description: "AgriBot is the best solution for modern Greenhouses because those are full covered areas which have sensitive sensors all over the place. Because in greenhouses every condition which plant will depend, is measured and controlled accurately and another thing is there are tap lines all over the place. For areas like this, you can’t use heavy machinery or drones to seed plants and AgriBot is the perfect solution.",
            technologies: "Java, MQQT, Arduino",
            concepts: "Mobile Application Development, Hardware Development",
            gitHub: "https://github.com/cepdnaclk/e16-3yp-agribot",
            webSite: "https://cepdnaclk.github.io/e16-3yp-agribot/",
            notes: "University Third Year Project"
        }
    ]

    return (
        <div className='grid md:grid-cols-2 gap-8'>
            {projectList.map(item => (
                <div key={item.title} className='p-4 shadow-md rounded-md font-sans text-center'>
                    <div className='mb-4'>
                        <span className='text-2xl font-bold text-brand-blue font-mono'>{item.title}</span> <br />
                        {item?.notes && <span>({item.notes})</span>}
                    </div>
                    <div className='mb-2'>
                        <span className='font-semibold'>Concepts: </span> <span>{item?.concepts}</span>
                    </div>
                    <div className='mb-2'>
                        <span className='font-semibold'>Technologies: </span> <span>{item?.technologies}</span>
                    </div>
                    <div className='mb-2 text-justify break-words'>
                        {item?.description}
                    </div>
                    <div>
                        <div className='flex gap-x-8 pt-2 justify-center'>
                            <Button
                                variant="outlined"
                                sx={buttonStyle}
                                href={item?.gitHub}
                                target="_blank"
                                endIcon={<GitHubIcon />}
                            >
                                Code
                            </Button>
                            <Button
                                variant="outlined"
                                sx={buttonStyle}
                                href={item?.webSite}
                                target="_blank"
                                endIcon={<LanguageTwoToneIcon />}
                            >
                                Web Site
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
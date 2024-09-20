import { buttonStyle } from '@/components/styles';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Link from 'next/link';

/* type Project = {
    title: String,
    description: String,
    technologies: String,
    concepts: String,
    gitHub: String,
    webSite: String,
    notes: String,
} */

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
            title: "SL-CINEMA Mobile Application",
            description: `SL-CINEMA is a platform designed to create a comprehensive database of Sri Lankan Movies, Teledramas, Web Series, and Short Films. Through the mobile app, users can easily search for and discover content. They can also leave reviews, add ratings, and save favorites to revisit later. This project aims to keep users informed about ongoing and upcoming teledramas, movies, web series, and cinema releases, ensuring they don’t miss out on anything. Not only is SL-CINEMA ideal for movie and cinema enthusiasts, but it also serves as a valuable tool for directors and producers to promote their creations and add more visibility to their work.`,
            technologies: "Flutter & Dart",
            concepts: "Mobile Application Development",
            gitHub: "https://github.com/denukedissanayake/Drama-Review-App",
            webSite: "",
            notes: "University Software Engineering Project"
        },
        {
            title: "Acceleration of Dynamic Time Warping algorithm for real-time nanopore selective sequencing using GPUs",
            description: "The project aims to optimize the Dynamic Time Warping (DTW) algorithm and accelerate its performance using Graphics Processing Units (GPUs). This optimization will enable the algorithm to run efficiently on GPU-equipped laptops or embedded devices like the NVIDIA Jetson, eliminating the need for connection to a large server.",
            technologies: "C, CUDA Programming",
            concepts: "Hardware Programming, Algorithm Optimization, GPU Programming",
            gitHub: "",
            webSite: "https://cepdnaclk.github.io/e16-4yp-Acceleration-of-DTW-algorithm-for-real-time-nanopore-selective-sequencing-using-GPUs/",
            notes: "University Final Year Project"
        },
        {
            title: "AgriBot - Autonomous Agricultural Robot",
            description: `AGRI BOT is an automated robotic system designed for planting seeds in agricultural fields. It consists of three major components: the Robot, a Mobile Application, and a Web Server. The Mobile Application allows users to issue initial commands to the robot (Start, Stop, Pause) and provide essential data to initiate the seeding process (such as the number of rows, number of seeds, row gap, etc.). Based on these inputs, the robot can fully automate the seeding task. Additionally, the mobile app displays real-time data from the robot, including temperature and humidity readings, for user monitoring. The AWS Web Server facilitates communication between the robot and the mobile app. It receives data from the robot and allows users to send commands and initial parameters remotely. MQTT is used to establish this connection, ensuring seamless communication between the robot and the mobile application.`,
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
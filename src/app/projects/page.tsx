import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Chip from '@mui/material/Chip';
import Link from 'next/link';

export default function Projects() {
    return (
        <div className='min-h-screen bg-gradient-to-b from-white to-slate-50'>
            {/* Header */}
            <div className='max-w-6xl mx-auto px-6 py-12'>
                <div className="flex items-center justify-between mb-12">
                    <Link href="/" passHref>
                        <Button
                            variant="outlined"
                            sx={{
                                display: { xs: 'none', md: 'inline-flex' },
                                fontWeight: 600,
                                borderColor: '#334155',
                                color: '#334155',
                                '&:hover': { backgroundColor: '#f8fafc' }
                            }}
                            startIcon={<ArrowBackIosNewIcon />}
                        >
                            Back to Home
                        </Button>
                    </Link>
                    <div className='flex-grow text-center'>
                        <h1 className='text-3xl md:text-4xl font-bold text-slate-800'>
                            My Projects
                        </h1>
                        <p className='text-slate-500 mt-2'>
                            A selection of work I've done
                        </p>
                        <div className='w-16 h-1 bg-blue-600 mx-auto mt-4'></div>
                    </div>
                    <div className='hidden md:block w-[140px]'></div>
                </div>
                <ProjectsGrid />
            </div>
        </div>
    )
}

const ProjectsGrid = () => {
    const projectList = [
        {
            title: "SL-CINEMA Mobile Application",
            description: `A platform for Sri Lankan Movies, Teledramas, Web Series, and Short Films. Users can search, discover, review, rate, and save favorites.`,
            technologies: ["Flutter", "Dart"],
            concepts: ["Mobile App Development"],
            gitHub: "https://github.com/denukedissanayake/Drama-Review-App",
            webSite: "",
            notes: "University Software Engineering Project"
        },
        {
            title: "GPU-Accelerated DTW Algorithm",
            description: "Optimization of the Dynamic Time Warping (DTW) algorithm using CUDA for real-time nanopore selective sequencing on GPU-equipped devices.",
            technologies: ["C", "CUDA"],
            concepts: ["GPU Programming", "Algorithm Optimization"],
            gitHub: "",
            webSite: "https://cepdnaclk.github.io/e16-4yp-Acceleration-of-DTW-algorithm-for-real-time-nanopore-selective-sequencing-using-GPUs/",
            notes: "University Final Year Project"
        },
        {
            title: "AgriBot - Autonomous Agricultural Robot",
            description: `An automated robotic system for planting seeds with mobile app control, real-time monitoring, and AWS-powered MQTT communication.`,
            technologies: ["Java", "MQTT", "Arduino"],
            concepts: ["IoT", "Hardware Development"],
            gitHub: "https://github.com/cepdnaclk/e16-3yp-agribot",
            webSite: "https://cepdnaclk.github.io/e16-3yp-agribot/",
            notes: "University Third Year Project"
        }
    ]

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {projectList.map((item) => (
                <div
                    key={item.title}
                    className='bg-white p-6 rounded-lg shadow-sm border border-slate-100 
                               hover:shadow-md transition-shadow flex flex-col'
                >
                    {/* Project badge */}
                    {item.notes && (
                        <span className='inline-block text-xs font-medium text-blue-600 
                                        bg-blue-50 px-2 py-1 rounded mb-3 w-fit'>
                            {item.notes}
                        </span>
                    )}

                    {/* Title */}
                    <h2 className='text-lg font-semibold text-slate-800 mb-3'>
                        {item.title}
                    </h2>

                    {/* Description */}
                    <p className='text-slate-600 text-sm leading-relaxed mb-5 flex-grow'>
                        {item.description}
                    </p>

                    {/* Technologies */}
                    <div className='mb-4'>
                        <span className='text-xs font-medium text-slate-500 uppercase tracking-wide'>
                            Tech Stack
                        </span>
                        <div className='flex flex-wrap gap-2 mt-2'>
                            {item.technologies.map(tech => (
                                <Chip
                                    key={tech}
                                    label={tech}
                                    size="small"
                                    sx={{
                                        backgroundColor: '#f1f5f9',
                                        color: '#475569',
                                        fontWeight: 500,
                                        fontSize: '0.75rem'
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Concepts */}
                    <div className='mb-5'>
                        <span className='text-xs font-medium text-slate-500 uppercase tracking-wide'>
                            Concepts
                        </span>
                        <div className='flex flex-wrap gap-2 mt-2'>
                            {item.concepts.map(concept => (
                                <Chip
                                    key={concept}
                                    label={concept}
                                    size="small"
                                    variant="outlined"
                                    sx={{
                                        fontSize: '0.75rem',
                                        borderColor: '#cbd5e1'
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className='flex gap-3 pt-4 border-t border-slate-100'>
                        {item.gitHub && (
                            <Button
                                variant="contained"
                                size="small"
                                href={item.gitHub}
                                target="_blank"
                                startIcon={<GitHubIcon />}
                                sx={{
                                    backgroundColor: '#1e293b',
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    '&:hover': { backgroundColor: '#0f172a' }
                                }}
                            >
                                Code
                            </Button>
                        )}
                        {item.webSite && (
                            <Button
                                variant="outlined"
                                size="small"
                                href={item.webSite}
                                target="_blank"
                                startIcon={<LanguageTwoToneIcon />}
                                sx={{
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    borderColor: '#1e40af',
                                    color: '#1e40af'
                                }}
                            >
                                Demo
                            </Button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}
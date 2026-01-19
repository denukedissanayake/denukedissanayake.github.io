"use client"

import CodeIcon from '@mui/icons-material/Code';
import HtmlIcon from '@mui/icons-material/Html';
import LaptopIcon from '@mui/icons-material/Laptop';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import StorageIcon from '@mui/icons-material/Storage';
import GitHubIcon from '@mui/icons-material/GitHub';
import ApiIcon from '@mui/icons-material/Api';
import CloudIcon from '@mui/icons-material/Cloud';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const skillCategories = [
    {
        skills: ["JavaScript", "TypeScript", "Java", "Scala", "Python"],
        topic: "Programming Languages",
        icon: CodeIcon
    },
    {
        skills: ["HTML5", "CSS3", "SCSS", "Tailwind"],
        topic: "Web Technologies",
        icon: HtmlIcon
    },
    {
        skills: ["React", "Next.js", "Express", "Akka"],
        topic: "Frameworks",
        icon: LaptopIcon
    },
    {
        skills: ["React Native", "Flutter"],
        topic: "Mobile Development",
        icon: SmartphoneIcon
    },
    {
        skills: ["PostgreSQL", "MySQL", "MongoDB"],
        topic: "Databases",
        icon: StorageIcon
    },
    {
        skills: ["Git", "GitHub", "GitLab"],
        topic: "Version Control",
        icon: GitHubIcon
    },
    {
        skills: ["AWS", "Docker", "Kubernetes"],
        topic: "Cloud & DevOps",
        icon: CloudIcon
    },
    {
        skills: ["Agile", "Scrum", "CI/CD"],
        topic: "Methodologies",
        icon: ApiIcon
    },
]

export const Expertise = () => {
    return (
        <section className='bg-slate-50 py-12 px-6'>
            <div className='max-w-6xl mx-auto'>
                {/* Section Header */}
                <div className='text-center mb-10'>
                    <h2 className='text-3xl md:text-4xl font-bold text-slate-800 mb-2'>
                        Technologies & Tools
                    </h2>
                    <div className='w-12 h-1 bg-blue-600 mx-auto'></div>
                </div>

                {/* Skills Grid */}
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {skillCategories.map((category) => (
                        <div
                            key={category.topic}
                            className='bg-white rounded-lg p-4 border border-slate-100 shadow-sm'
                        >
                            {/* Icon */}
                            <div className='inline-flex p-2.5 rounded-lg bg-slate-100 mb-3'>
                                <category.icon sx={{ color: '#1e40af', fontSize: 26 }} />
                            </div>

                            {/* Topic */}
                            <h3 className='text-base font-semibold text-slate-800 mb-2'>
                                {category.topic}
                            </h3>

                            {/* Skills */}
                            <div className='flex flex-wrap gap-1'>
                                {category.skills.map(skill => (
                                    <span
                                        key={skill}
                                        className='text-sm px-2.5 py-1 rounded bg-slate-100 text-slate-600'
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className='text-center mt-8'>
                    <Button
                        variant="outlined"
                        href="https://linkedin.com/in/"
                        target="_blank"
                        endIcon={<LinkedInIcon />}
                        sx={{
                            fontWeight: 600,
                            borderColor: '#334155',
                            color: '#334155',
                            '&:hover': {
                                backgroundColor: '#f8fafc',
                            }
                        }}
                    >
                        View Full Profile
                    </Button>
                </div>
            </div>
        </section>
    )
}
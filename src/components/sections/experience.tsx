/* eslint-disable react/no-unescaped-entities */
"use client"

import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Typography from '@mui/material/Typography';

// TODO: Update with your actual work experience details
const workExperiences = [
    {
        title: "Software Engineer",
        company: "Pagero - Sri Lanka",
        period: "2023 - Present",
        description: "Add your job responsibilities and achievements here. Focus on impact and technologies used."
    },
    {
        title: "Software Engineer - Intern",
        company: "Different Technologies",
        period: "2022 - 2023",
        description: "Add your internship responsibilities and key learnings here."
    }
];

const educationHistory = [
    {
        degree: "Bachelor of Science in Engineering",
        specialization: "Computer Engineering",
        institution: "University of Peradeniya",
        achievement: "Second Class Honours (Upper Division)"
    },
    {
        degree: "Diploma in Information Technology",
        institution: "ESOFT Metro Campus - Gampaha"
    },
    {
        degree: "G.C.E Advanced Level",
        institution: "Royal College - Colombo 07",
        stream: "Physical Science",
        results: "Physics(A), Chemistry(A), Mathematics(B)"
    },
    {
        degree: "G.C.E Ordinary Level",
        institution: "Royal College - Colombo 07",
        results: "Passed with 8As and B"
    }
];

const timelineStyles = {
    [`& .${timelineItemClasses.root}:before`]: {
        flex: 0,
        padding: 0,
    },
};

export const Experience = () => {
    return (
        <section className='bg-white py-12 px-6 border-t border-slate-100'>
            <div className='max-w-6xl mx-auto'>
                {/* Section Header */}
                <div className='text-center mb-10'>
                    <h2 className='text-2xl md:text-3xl font-bold text-slate-800 mb-2'>
                        Experience & Education
                    </h2>
                    <div className='w-12 h-1 bg-blue-600 mx-auto'></div>
                </div>

                {/* Two Column Layout */}
                <div className='grid lg:grid-cols-2 gap-8'>
                    {/* Work Experience */}
                    <div>
                        <h3 className='text-lg font-semibold text-slate-700 mb-4 flex items-center gap-2'>
                            <LaptopMacIcon sx={{ color: '#1e40af' }} />
                            Work Experience
                        </h3>
                        <Timeline sx={timelineStyles}>
                            {workExperiences.map((exp, index) => (
                                <TimelineItem key={index}>
                                    <TimelineSeparator>
                                        <TimelineConnector sx={{ bgcolor: '#cbd5e1' }} />
                                        <TimelineDot sx={{ bgcolor: '#1e40af' }}>
                                            <LaptopMacIcon sx={{ fontSize: 16 }} />
                                        </TimelineDot>
                                        <TimelineConnector sx={{ bgcolor: index === workExperiences.length - 1 ? 'transparent' : '#cbd5e1' }} />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: 2, px: 3 }}>
                                        <div className='bg-white rounded-lg p-4 shadow-sm border border-slate-100'>
                                            <Typography variant="h6" sx={{ fontWeight: 600, color: '#1e293b' }}>
                                                {exp.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: '#475569', fontWeight: 500 }}>
                                                {exp.company}
                                            </Typography>
                                            <Typography variant="caption" sx={{ color: '#94a3b8', display: 'block', mb: 1 }}>
                                                {exp.period}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.6 }}>
                                                {exp.description}
                                            </Typography>
                                        </div>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </Timeline>
                    </div>

                    {/* Education */}
                    <div>
                        <h3 className='text-lg font-semibold text-slate-700 mb-4 flex items-center gap-2'>
                            <AutoStoriesIcon sx={{ color: '#059669' }} />
                            Education
                        </h3>
                        <Timeline sx={timelineStyles}>
                            {educationHistory.map((edu, index) => (
                                <TimelineItem key={index}>
                                    <TimelineSeparator>
                                        <TimelineConnector sx={{ bgcolor: '#cbd5e1' }} />
                                        <TimelineDot sx={{ bgcolor: '#059669' }}>
                                            <AutoStoriesIcon sx={{ fontSize: 16 }} />
                                        </TimelineDot>
                                        <TimelineConnector sx={{ bgcolor: index === educationHistory.length - 1 ? 'transparent' : '#cbd5e1' }} />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: 2, px: 3 }}>
                                        <div className='bg-white rounded-lg p-4 shadow-sm border border-slate-100'>
                                            <Typography variant="h6" sx={{ fontWeight: 600, color: '#1e293b' }}>
                                                {edu.degree}
                                            </Typography>
                                            {edu.specialization && (
                                                <Typography variant="body2" sx={{ color: '#475569', fontWeight: 500 }}>
                                                    {edu.specialization}
                                                </Typography>
                                            )}
                                            <Typography variant="body2" sx={{ color: '#64748b' }}>
                                                {edu.institution}
                                            </Typography>
                                            {edu.stream && (
                                                <Typography variant="caption" sx={{ color: '#94a3b8', display: 'block' }}>
                                                    {edu.stream}
                                                </Typography>
                                            )}
                                            {edu.results && (
                                                <Typography variant="body2" sx={{ color: '#059669', fontWeight: 500, mt: 0.5 }}>
                                                    {edu.results}
                                                </Typography>
                                            )}
                                            {edu.achievement && (
                                                <Typography variant="body2" sx={{ color: '#059669', fontWeight: 500, mt: 0.5 }}>
                                                    {edu.achievement}
                                                </Typography>
                                            )}
                                        </div>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </Timeline>
                    </div>
                </div>
            </div>
        </section>
    )
}
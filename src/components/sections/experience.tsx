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

export const Experience = () => {

    return <div className='lg:h-dvh grid gap-y-8 md:grid-cols-2 items-center md:justify-center mb-12'>
        <div className='flex flex-col items-center justify-center md:gap-y-12'>
            <h1 className='text-2xl xl:text-4xl font-bold font-serif'>Work Experiences</h1>
            <ProfQualificationTimeLine />
        </div>
        <div className='flex flex-col items-center justify-center md:gap-y-12'>
            <h1 className='text-2xl xl:text-4xl font-bold font-serif'>Academic Qualifications</h1>
            <EduQualificationTimeLine />
        </div>
    </div>
}

const ProfQualificationTimeLine = () => (
    <div className=''>
        <Timeline
            sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
            }}
        >
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography
                        variant="h5"
                        fontFamily="Georgia, 'Times New Roman', Times, serif"
                        fontWeight="bold"
                    >
                        Software Engineer
                    </Typography>
                    <Typography
                        variant="h6"
                        fontFamily="Georgia, 'Times New Roman', Times, serif"
                    >
                        Pagero - Sri Lanka
                    </Typography>
                    <Typography
                        fontFamily="Georgia, 'Times New Roman', Times, serif"
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography
                        variant="h5"
                        fontFamily="Georgia, 'Times New Roman', Times, serif"
                        fontWeight="bold"
                    >
                        Software Engineer - Intern
                    </Typography>
                    <Typography
                        variant="h6"
                        fontFamily="Georgia, 'Times New Roman', Times, serif"
                    >
                        Different Technologies
                    </Typography>
                    <Typography
                        fontFamily="Georgia, 'Times New Roman', Times, serif"
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    </div>
)

const EduQualificationTimeLine = () => (
    <div className=''>
        <Timeline
            sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
            }}
        >
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <AutoStoriesIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography
                        variant="h5"
                        fontFamily="Georgia, 'Times New Roman', Times, serif"
                        fontWeight="bold"
                    >
                        Bachelor of the Science of Engineering
                    </Typography>
                    <Typography
                        variant="h6"
                        fontWeight="bold"
                        fontFamily="Georgia, 'Times New Roman', Times, serif"
                    >
                        Specialized in Computer Engineering
                    </Typography>
                    <Typography
                        fontFamily="Georgia, 'Times New Roman', Times, serif"
                    >
                        University of Peradeniya
                    </Typography>
                    <Typography
                        fontFamily="Georgia, 'Times New Roman', Times, serif"
                    >
                        Graduated with Second Class Honours(Upper Division)
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <AutoStoriesIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography
                        variant="h5"
                        fontFamily="Georgia, 'Times New Roman', Times, serif"
                        fontWeight="bold"
                    >
                        Diploma in Information Technology
                    </Typography>
                    <Typography
                        variant="h6"
                        fontFamily="Georgia, 'Times New Roman', Times, serif"
                    >
                        ESOFT Metro Campus - Gampaha
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <AutoStoriesIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography
                        variant="h5"
                        fontFamily="Georgia, 'Times New Roman', Times, serif"
                        fontWeight="bold"
                    >
                        G.C.E Advanced Level
                    </Typography>
                    <Typography
                        variant="h6"
                        fontFamily="Georgia, 'Times New Roman', Times, serif"
                    >
                        Royal College - Colombo 07
                    </Typography>
                    <Typography
                        fontFamily="Georgia, 'Times New Roman', Times, serif"
                    >
                        Physical Science
                    </Typography>
                    <Typography
                        fontFamily="Georgia, 'Times New Roman', Times, serif"
                    >
                        Physics(A), Chemistry(A), Mathematics(B)
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <AutoStoriesIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography
                        variant="h5"
                        fontFamily="Georgia, 'Times New Roman', Times, serif"
                        fontWeight="bold"
                    >
                        G.C.E Ordinary Level
                    </Typography>
                    <Typography
                        variant="h6"
                        fontFamily="Georgia, 'Times New Roman', Times, serif"
                    >
                        Royal College - Colombo 07
                    </Typography>
                    <Typography
                        fontFamily="Georgia, 'Times New Roman', Times, serif"
                    >
                        Passed with 8As and B
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    </div>
)
import { ReactNode } from 'react';
import { FaLaptopCode, FaPaintBrush, FaGlobe, FaGraduationCap } from 'react-icons/fa';

export interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  description: string[];
  icon: ReactNode;
}

export const experienceData: ExperienceEntry[] = [
  {
    title: 'Intern – Vision-Based Systems',
    company: 'Macs Info Solution',
    period: 'Dec 2022 – Jan 2023',
    description: [
      'Built and tested image processing pipelines using OpenCV',
      'Implemented motion detection and face recognition',
      'Worked on ESP32-CAM embedded vision projects',
    ],
    icon: <FaLaptopCode size={30} color="#6B46C1" />,
  },
  {
    title: 'Frontend Intern – UI/UX Design',
    company: 'TVS',
    period: 'Jun 2023 – Jul 2023',
    description: [
      'Created interactive mockups in Figma',
      'Implemented HTML/CSS front-end designs',
      'Collaborated with UI/UX teams for design alignment',
    ],
    icon: <FaPaintBrush size={30} color="#6B46C1" />,
  },
  {
    title: 'Web Developer Intern',
    company: 'Bolsius India',
    period: 'Jun 2024 – Jul 2024',
    description: [
      'Built a WordPress site for product showcasing',
      'Improved layout/navigation for better UX',
      'Integrated brand-aligned visual design',
    ],
    icon: <FaGlobe size={30} color="#6B46C1" />,
  },
  {
    title: 'Academic Project Developer',
    company: 'R.M.K Engineering College',
    period: 'Oct 2021 – Mar 2025',
    description: [
      'Built Face Lock System with Python & OpenCV',
      'Developed C# + MongoDB client tool',
      'Created motion-sensitive night light automation with ESP32-CAM',
    ],
    icon: <FaGraduationCap size={30} color="#6B46C1" />,
  },
];

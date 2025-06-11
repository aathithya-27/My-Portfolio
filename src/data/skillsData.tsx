import { ReactNode } from 'react';
import { SiC, SiPython, SiWordpress, SiHtml5, SiCss3, SiJavascript, SiFigma, SiGithub, SiMongodb, SiGit, SiBlender, SiTailwindcss, SiLinux } from 'react-icons/si';

export const skillsData: Record<string, { name: string; icon: ReactNode; level: number }[]> = {
  frontend: [
    { name: 'HTML', icon: <SiHtml5 size={40} color="#E34F26" />, level: 90 },
    { name: 'CSS', icon: <SiCss3 size={40} color="#1572B6" />, level: 85 },
    { name: 'JavaScript', icon: <SiJavascript size={40} color="#F7DF1E" />, level: 80 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} color="#38B2AC" />, level: 75 },
    { name: 'Figma', icon: <SiFigma size={40} color="#F24E1E" />, level: 70 },
  ],
  backend: [
    { name: 'C', icon: <SiC size={40} color="#A8B9CC" />, level: 70 },
    { name: 'Python', icon: <SiPython size={40} color="#3776AB" />, level: 80 },
    { name: 'MongoDB', icon: <SiMongodb size={40} color="#47A248" />, level: 65 },
    { name: 'Git', icon: <SiGit size={40} color="#F05032" />, level: 85 },
    { name: 'GitHub', icon: <SiGithub size={40} color="#181717" />, level: 90 },
  ],
  cms: [
    { name: 'WordPress', icon: <SiWordpress size={40} color="#21759B" />, level: 75 },
  ],
  tools: [
    { name: 'Blender', icon: <SiBlender size={40} color="#F5792A" />, level: 60 },
    { name: 'Linux', icon: <SiLinux size={40} color="#FCC624" />, level: 70 },
  ],
};
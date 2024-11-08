import React from 'react';
import Section from '../Section';
import ProjectCard from '../ProjectCard';

interface Project {
  title: string;
  description: string;
  image: string;
  techStack?: string[];
  stats?: {
    users?: string;
    stars?: number;
  };
  workflow?: string[];
  problemStatement?: string;
  features?: string[];
  futurePlans?: string[];
  githubUrl?: string;
  demoUrl?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "F1nsight",
      description: "An open-source platform providing in-depth analysis and interactive visualization of Formula 1 race data, including telemetry, AR models, and more.",
      image: '/assets/animation-grid_1.gif',
      techStack: ["React", "Recharts", "Tailwind", "Three.js"],
      stats: { users: "200+", stars: 13 },
      workflow: [
        "Connect to multiple F1 telemetry and data APIs for live data",
        "Data preprocessing to enhance accuracy and visualization",
        "Create interactive visualizations with Recharts and Three.js",
        "Design real-time data display and telemetry insights",
        "Integrate AR support for select 3D F1 car models",
        "Implement continuous deployment for seamless updates"
      ],
      problemStatement: "F1 fans lack a unified, comprehensive tool that provides all race insights in one place. With multiple sources offering only partial data, fans struggle to access historical comparisons, live telemetry, and in-depth race metrics, especially with real-time and immersive views. F1nsight addresses this by centralizing data, adding advanced visualizations, and making these insights accessible in an interactive format.",
      features: [
        "Detailed Leaderboards: Comprehensive rankings and statistics for each race.",
        "Lap Times Analysis: Performance metrics to study consistency and strategy.",
        "Tire Strategies: Analysis of tire choices and their impact on race outcomes.",
        "Fastest Laps: Identification of drivers' fastest laps in each event.",
        "Interactive Telemetry Viewer: Real-time driver telemetry with various camera angles.",
        "AR Models: Augmented reality views of select F1 cars."
      ],
      futurePlans: [
        "Expanded AR Visualization with additional car models and immersive AR.",
        "Prediction Tools: Real-time race prediction features.",
        "Broader Car Models Library: AR models for a wide array of historical F1 cars."
      ],
      githubUrl: "https://github.com/adityakotha03/F1nsight",
      demoUrl: "https://www.f1nsight.com"
    }
  ];

  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;

import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import NavBar from '../components/NavBar';

interface ProjectData {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  stats: {
    users: string;
    stars: number;
  };
  problemStatement: string;
  features: string[];
  workflow: string[];
  futurePlans: string[];
  githubUrl: string;
  demoUrl: string;
  publishDate: string;
}

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Project data - in a real app, this would come from an API or CMS
  const projectsData: Record<string, ProjectData> = {
    'f1nsight': {
      title: "F1nsight",
      description: "An open-source platform providing in-depth analysis and interactive visualization of Formula 1 race data",
      image: "/portfolio/assets/F1nsightMeta.jpg",
      techStack: ["React", "Recharts", "Tailwind", "Three.js"],
      stats: { users: "3K+", stars: 24 },
      publishDate: "November 2024",
      problemStatement: "F1 fans lack a unified, comprehensive tool that provides all race insights in one place. With multiple sources offering only partial data, fans struggle to access historical comparisons, live telemetry, and in-depth race metrics, especially with real-time and immersive views.",
      features: [
        "Detailed Leaderboards: Comprehensive rankings and statistics for each race",
        "Lap Times Analysis: Performance metrics to study consistency and strategy",
        "Tire Strategies: Analysis of tire choices and their impact on race outcomes",
        "Fastest Laps: Identification of drivers' fastest laps in each event",
        "Interactive Telemetry Viewer: Real-time driver telemetry with various camera angles",
        "AR Models: Augmented reality views of select F1 cars"
      ],
      workflow: [
        "Connect to multiple F1 telemetry and data APIs for live data",
        "Data preprocessing to enhance accuracy and visualization",
        "Create interactive visualizations with Recharts and Three.js",
        "Design real-time data display and telemetry insights",
        "Integrate AR support for select 3D F1 car models",
        "Implement continuous deployment for seamless updates"
      ],
      futurePlans: [
        "Expanded AR Visualization with additional car models and immersive AR",
        "Prediction Tools: Real-time race prediction features",
        "Broader Car Models Library: AR models for a wide array of historical F1 cars"
      ],
      githubUrl: "https://github.com/adityakotha03/F1nsight",
      demoUrl: "https://www.f1nsight.com"
    }
  };

  const project = slug ? projectsData[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <NavBar isMenuOpen={false} setIsMenuOpen={() => {}} />
        <div className="max-w-4xl mx-auto px-6 pt-32">
          <h1 className="text-2xl font-light text-gray-900">Project not found</h1>
          <Link to="/" className="text-gray-600 hover:text-gray-900 mt-4 inline-block">
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <NavBar isMenuOpen={false} setIsMenuOpen={() => {}} />
      
      <article className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        {/* Back button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-light text-gray-900 mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed mb-6">{project.description}</p>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
            <span>{project.publishDate}</span>
            <span>•</span>
            <span>{project.stats.users} users</span>
            <span>•</span>
            <span>{project.stats.stars} stars on GitHub</span>
          </div>

          <div className="flex gap-4 mb-8">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Github size={16} />
              View Source
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* Main image */}
        <div className="mb-12">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full rounded-lg shadow-sm"
          />
        </div>

        {/* Content sections */}
        <div className="prose prose-gray max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-light text-gray-900 mb-4 border-b border-gray-200 pb-2">Problem Statement</h2>
            <p className="text-gray-700 leading-relaxed font-light">{project.problemStatement}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light text-gray-900 mb-4 border-b border-gray-200 pb-2">Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="text-gray-700 leading-relaxed font-light">
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light text-gray-900 mb-4 border-b border-gray-200 pb-2">Development Process</h2>
            <ol className="space-y-3">
              {project.workflow.map((step, index) => (
                <li key={index} className="text-gray-700 leading-relaxed font-light">
                  <span className="font-medium text-gray-900">{index + 1}.</span> {step}
                </li>
              ))}
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light text-gray-900 mb-4 border-b border-gray-200 pb-2">Future Plans</h2>
            <ul className="space-y-3">
              {project.futurePlans.map((plan, index) => (
                <li key={index} className="text-gray-700 leading-relaxed font-light">
                  {plan}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200 pt-8 mt-12">
          <div className="flex justify-between items-center">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to home
            </Link>
            
            <div className="flex gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default ProjectDetail; 
import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../Section';
import { ArrowRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  techStack?: string[];
  stats?: {
    users?: string;
    stars?: number;
  };
  slug: string; // Added for routing
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "F1nsight",
      description: "An open-source platform providing in-depth analysis and interactive visualization of Formula 1 race data, including telemetry, AR models, and more.",
      image: "/portfolio/assets/F1nsightMeta.jpg",
      techStack: ["React", "Recharts", "Tailwind", "Three.js"],
      stats: { users: "3k+", stars: 24 },
      slug: "f1nsight"
    }
  ];

  return (
    <Section id="projects" title="Personal Projects">
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="group">
            <div className="flex flex-col md:flex-row gap-6 p-6 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="md:w-1/3">
                <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-medium text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light mb-4">{project.description}</p>
                
                {project.techStack && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                
                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-medium"
                >
                  Read more <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;

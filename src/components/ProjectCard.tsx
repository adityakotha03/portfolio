import React, { useState } from 'react';
import { Star, Users, Info, X, Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
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

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  techStack = [],
  stats = { users: "N/A", stars: 0 },
  workflow = [],
  problemStatement,
  features = [],
  futurePlans = [],
  githubUrl,
  demoUrl,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div className="bg-slate-800/50 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-bold text-sky-400">{title}</h3>
            <button
              onClick={() => setShowDetails(true)}
              className="p-2 hover:bg-sky-900/30 rounded-full transition-colors"
              aria-label="Show project details"
            >
              <Info size={20} className="text-sky-400" />
            </button>
          </div>
          <p className="text-slate-300 mb-4">{description}</p>

          {techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-sky-900/30 text-sky-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center gap-4 text-slate-400">
            <div className="flex items-center gap-1">
              <Users size={16} />
              <span>{stats.users}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star size={16} />
              <span>{stats.stars}</span>
            </div>
          </div>
        </div>
      </div>

      {showDetails && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold text-sky-400">{title}</h3>
                <button
                  onClick={() => setShowDetails(false)}
                  className="p-2 hover:bg-sky-900/30 rounded-full transition-colors"
                  aria-label="Close details"
                >
                  <X size={24} className="text-slate-400" />
                </button>
              </div>

              {/* Links for GitHub and Demo directly below the title in the modal */}
              <div className="flex gap-4 mb-6">
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white transition-colors"
                  >
                    <Github size={20} />
                    View Source
                  </a>
                )}
                {demoUrl && (
                  <a
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-500 rounded-lg text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                )}
              </div>

              <div className="space-y-6">
                {problemStatement && (
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Problem Statement</h4>
                    <p className="text-slate-300">{problemStatement}</p>
                  </div>
                )}

                {features.length > 0 && (
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Features</h4>
                    <ul className="list-disc list-inside text-slate-300 space-y-2">
                      {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {futurePlans.length > 0 && (
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Future Plans</h4>
                    <ul className="list-disc list-inside text-slate-300 space-y-2">
                      {futurePlans.map((plan, index) => (
                        <li key={index}>{plan}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {workflow.length > 0 && (
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Development Workflow</h4>
                    <ol className="list-decimal list-inside space-y-2 text-slate-300">
                      {workflow.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;

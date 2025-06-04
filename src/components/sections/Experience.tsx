import Section from '../Section';

const Experience = () => {
  const experiences = [
    {
      title: "Deep Learning Research",
      company: "Cornell University",
      location: "Ithaca, NY (Remote)",
      period: "Jan 2024 - Dec 2024",
      bullets: [
        "Implemented speculative decoding for Mamba models, achieving 11.21% reduction in inference latency on AMD GPUs.",
        "Optimized Mamba-2.8B inference using ROCm, increasing generation throughput 13% and improving TAR.",
        "Designed speculative decoding with Mamba-130m as a draft model to accelerate inference while maintaining quality."
      ]
    },
    {
      title: "Machine Learning Research",
      company: "Carleton University",
      location: "Ottawa, Canada (Hybrid)",
      period: "May 2023 - Mar 2024",
      bullets: [
        "Developed adversarial retraining algorithms and reduced adversarial sample detection time by over 4x.",
        "Improved SPAM filter accuracy by over 15% and NIDS accuracy by over 45% against adversarial samples.",
        "Enhanced ML model security by defending against problem-space and feature-space attacks."
      ]
    },
    {
      title: "Technical Intern",
      company: "Siemens",
      location: "Bengaluru, India (Remote)",
      period: "Aug 2022 - Mar 2023",
      bullets: [
        "Developed CV algorithms to optimize the storage and transmission of industrial CCTV footage.",
        "Collaborated with a team of 4+ developers to design and implement a scene reconstruction solution for Metaverse.",
        "Improved video transfer efficiency by reducing network load by over 75% while achieving < 0.1 sec reconstruction latency."
      ]
    }
  ];

  return (
    <Section id="experience" title="Experience">
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="group">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 tracking-tight">{exp.company}</h3>
                <p className="text-lg font-medium text-gray-700">{exp.title}</p>
              </div>
              <div className="text-right sm:text-left mt-1 sm:mt-0">
                <p className="text-sm font-medium text-gray-600">{exp.location}</p>
                <p className="text-sm text-gray-500">{exp.period}</p>
              </div>
            </div>
            
            <ul className="space-y-2 ml-0">
              {exp.bullets.map((bullet, bulletIndex) => (
                <li key={bulletIndex} className="text-gray-700 leading-relaxed flex items-start">
                  <span className="text-gray-400 mr-3 mt-1.5 flex-shrink-0">•</span>
                  <span className="font-light">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
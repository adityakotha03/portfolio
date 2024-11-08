import Section from '../Section';

const Experience = () => {
  const experiences = [
    {
      title: "Research Intern",
      company: "Cornell University",
      location: "Ithaca, USA",
      period: "Feb 2024 - Present",
      description: "Researched and developed custom PyTorch compiler backends using Torch Inductor and Triton to optimize computational efficiency on GPUs. Focused on optimizing large pretrained language models (LLMs) like Mamba, to improve inference speeds on AMD GPUs.",
      tools: ["PyTorch", "Triton", "CUDA"]
    },
    {
      title: "MITACs GRI Intern",
      company: "Carleton University",
      location: "Ottawa, Canada",
      period: "May 2023 - Aug 2023",
      description: "Selected as a distinguished researcher in the highly competitive Mitacs Globalink Research Internship, emerging successfully from a pool of 27,000 global applicants. Designed a solution to increasing spam filter accuracy for adversarial samples by over 20% and reduced decision times up to 4x.",
      tools: ["TensorFlow", "Scikit-learn", "ART"]
    },
    {
      title: "Technical Intern",
      company: "Siemens",
      location: "Bangalore, India",
      period: "Aug 2022 - Mar 2023",
      description: "Collaborated with a team of 6+ developers to design and implement a scene reconstruction solution for Metaverse. Worked on algorithms to optimize the storage and transmission of industrial CCTV footage, reducing network load by more than 75%.",
      tools: ["PyTorch", "OpenCV", "MediaPipe", "Unity XR"]
    }
  ];

  return (
    <Section id="experience" title="Experience">
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-4 border-sky-500 pl-6">
            <h3 className="text-2xl font-bold text-sky-400">{exp.title}</h3>
            <p className="text-xl text-slate-400">
              {exp.company} • {exp.location} | {exp.period}
            </p>
            <p className="mt-2 text-slate-300">{exp.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {exp.tools.map((tool, toolIndex) => (
                <span
                  key={toolIndex}
                  className="inline-flex items-center rounded-md bg-emerald-400/10 px-2 py-1 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-400/30"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
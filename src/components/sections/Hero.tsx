import { Github, Linkedin, GraduationCap } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, TooltipProps } from 'recharts';

interface JourneyDataPoint {
  date: string;
  experience: number;
  event: string;
}

interface CustomTooltipProps extends TooltipProps<number, string> {
  active?: boolean;
  payload?: Array<{
    payload: JourneyDataPoint;
    value: number;
  }>;
  label?: string;
}

const Hero = () => {
  const socialLinks = [
    {
      icon: <Github size={24} />,
      href: "https://github.com/adityakotha03",
      label: "GitHub Profile"
    },
    {
      icon: <Linkedin size={24} />,
      href: "https://in.linkedin.com/in/aditya-kotha-59a010241",
      label: "LinkedIn Profile"
    },
    {
      icon: <GraduationCap size={24} />,
      href: "https://scholar.google.com/citations?user=k3EuaTgAAAAJ&hl=en",
      label: "Google Scholar Profile"
    }
  ];

  const journeyData: JourneyDataPoint[] = [
    {
      date: '2020',
      experience: 10,
      event: "Started Computer Science Bachelors at IIIT NR"
    },
    {
      date: 'Aug 2022',
      experience: 40,
      event: "Joined Siemens as Technical Intern"
    },
    {
      date: 'Oct 2022',
      experience: 50,
      event: "First Journal Publication - DNSguard in IEEE"
    },
    {
      date: 'May 2023',
      experience: 65,
      event: "Selected for MITACs from 27,000 applicants"
    },
    {
      date: 'Aug 2023',
      experience: 75,
      event: "Published in Journal of Ambient Intelligence"
    },
    {
      date: 'Oct 2023',
      experience: 85,
      event: "Published Computer Vision research at OITS Conference"
    },
    {
      date: 'Feb 2024',
      experience: 95,
      event: "Research Intern at Cornell University"
    }
  ];

  const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-800 p-4 rounded-lg shadow-lg border border-sky-500/20">
          <p className="text-sky-400 font-medium">{label}</p>
          <p className="text-slate-300">{payload[0].payload.event}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="about" className="pt-32 pb-20 px-6 md:px-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
          Aditya Kotha
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
          I'm Aditya Kotha, a graduate from IIIT NR with a CS degree. I'm a dreamer with big aspirations, 
          always pushing the boundaries of what's possible in the world of technology and AI.
        </p>
        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mt-4">
          While my path isn't always linear, each experience – whether a success or a setback – 
          contributes to my overall upward trajectory.
        </p>

        <div className="mt-8 h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={journeyData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <XAxis 
                dataKey="date" 
                stroke="#94a3b8"
                tick={{ fill: '#94a3b8' }}
              />
              <YAxis 
                stroke="#94a3b8"
                tick={false}
                label={{ 
                  value: 'Experience', 
                  angle: -90, 
                  position: 'insideLeft',
                  fill: '#94a3b8'
                }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="experience" 
                stroke="#38bdf8" 
                strokeWidth={2}
                dot={{ 
                  stroke: '#38bdf8',
                  strokeWidth: 2,
                  r: 4,
                  fill: '#1e293b'
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="flex gap-6 mt-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-400 transition-colors"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

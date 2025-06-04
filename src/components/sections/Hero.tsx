import { Github, Linkedin, GraduationCap, Download, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/adityakotha03",
      label: "GitHub Profile"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/aditya-kotha-59a010241/",
      label: "LinkedIn Profile"
    },
    {
      icon: <GraduationCap size={20} />,
      href: "https://scholar.google.com/citations?user=k3EuaTgAAAAJ&hl=en",
      label: "Google Scholar Profile"
    }
  ];

  return (
    <section id="about" className="pt-32 pb-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 tracking-tighter">
          Hello, I'm Aditya.
        </h1>
        
        {/* Location and Contact Info */}
        <div className="flex flex-wrap items-center gap-6 mb-12 text-gray-600">
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-blue-600" />
            <span className="font-medium">Los Angeles, California</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={18} className="text-gray-500" />
            <a href="mailto:kothaa@usc.edu" className="hover:text-gray-900 transition-colors">
              kothaa@usc.edu
            </a>
          </div>
        </div>
        
        <div className="space-y-10">
          {/* Who am I? Section */}
          <div>
            <h2 className="text-2xl font-light text-gray-900 mb-6 tracking-tight border-b border-gray-200 pb-3">
              Who am I?
            </h2>
            <div className="space-y-5 text-lg md:text-xl text-gray-700 leading-relaxed">
              <p className="font-light">
                I'm a builder with a passion for <strong className="font-semibold text-gray-900">Artificial Intelligence</strong> and <strong className="font-semibold text-gray-900">Machine Learning</strong>. 
                Currently pursuing my <strong className="font-semibold text-gray-900">Masters in Computer Science (AI)</strong> at <strong className="font-semibold text-gray-900">USC</strong> in <strong className="font-semibold text-blue-600">Los Angeles, California</strong>.
              </p>
            </div>
          </div>

          {/* About */}
          <div>
            <h2 className="text-2xl font-light text-gray-900 mb-6 tracking-tight border-b border-gray-200 pb-3">
              About
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed font-light">
              <p>
                Hey, I'm Aditya. I'm passionate about pushing the boundaries of AI through research and hands-on projects. 
                My work has been published in <strong className="font-semibold text-gray-900">IEEE journals</strong> and I love building innovative solutions 
                that can make a real-world impact.
              </p>
              <p>
                I'm currently working on <a href="https://www.f1nsight.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-800 underline transition-colors">F1nsight</a> as a side project. When I'm not coding or researching, I enjoy exploring LA, 
                staying up-to-date with the latest in AI, and working on new ideas that push technological boundaries.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 items-center mt-12 mb-8">
          <a
            href="assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium shadow-sm"
          >
            <Download size={18} />
            Download Resume
          </a>
          
          <a
            href="mailto:kothaa@usc.edu"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
          >
            <Mail size={18} />
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
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

import React, { useState } from 'react';
import Section from '../Section';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

interface Publication {
  title: string;
  journal: string;
  date: string;
  type: string;
  url: string;
}

const Publications: React.FC = () => {
  const publications: Publication[] = [
    // {
    //   title: "Introducing Adaptive Continuous Adversarial Training (ACAT) to Enhance ML Robustness",
    //   journal: "Pre-print available at arxiv",
    //   date: "Mar 2024",
    //   type: "Research Paper",
    //   url: "https://arxiv.org/placeholder"
    // },
    {
      title: "Seeing the Unseen: Aid for the Visually Impaired using Monocular Depth Estimation of Objects and Self-Training",
      journal: "21st OITS International Conference on Information Technology",
      date: "Oct 2023",
      type: "Conference Paper",
      url: "https://ieee.org/placeholder"
    },
    {
      title: "Introducing Adaptive Continuous Adversarial Training (ACAT) to Enhance Machine Learning Robustness",
      journal: "IEEE Networking Letters",
      date: "Aug 2024",
      type: "Journal Article",
      url: "https://ieeexplore.ieee.org/abstract/document/10634900"
    },
    {
      title: "XNetIoT: An Extreme Quantized Neural Network Architecture For IoT Environment Using P4",
      journal: "IEEE Transactions on Network and Service Management",
      date: "Jul 2024",
      type: "Journal Article",
      url: "https://ieeexplore.ieee.org/abstract/document/10586219"
    },
    {
      title: "IaaSI: a device based interoperability as a service for IoMT devices",
      journal: "Journal of Ambient Intelligence and Humanized Computing",
      date: "Aug 2023",
      type: "Journal Article",
      url: "https://link.springer.com/article/10.1007/s12652-023-04669-8"
    },
    {
      title: "DNSguard: A Raspberry Pi Based DDoS Mitigation on DNS Server in IoT Networks",
      journal: "IEEE Networking letters",
      date: "Oct 2022",
      type: "Journal Article",
      url: "https://ieeexplore.ieee.org/abstract/document/9926110"
    }
  ];

  const [showAll, setShowAll] = useState(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  // Filtered publications based on the selected type
  const filteredPublications = selectedType
    ? publications.filter(pub => pub.type === selectedType)
    : publications;

  // Define the publications to display based on the showAll toggle
  const visiblePublications = showAll ? filteredPublications : filteredPublications.slice(0, 4);

  // Unique publication types for filter options
  const publicationTypes = Array.from(new Set(publications.map(pub => pub.type)));

  return (
    <Section id="publications" title="Publications">
      {/* Filter Dropdown */}
      <div className="mb-4 flex gap-4">
        <select
          value={selectedType || ""}
          onChange={(e) => setSelectedType(e.target.value || null)}
          className="bg-sky-900 text-sky-400 px-4 py-2 rounded-md ring-1 ring-sky-400/30 transition-all focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          <option value="">All Types</option>
          {publicationTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-8">
        {visiblePublications.map((pub, index) => (
          <div 
            key={index} 
            className="group hover:bg-sky-900/10 p-6 rounded-lg transition-all"
          >
            <div className="flex gap-3 mb-2">
              <span className="inline-flex items-center rounded-md bg-sky-400/10 px-2 py-1 text-xs font-medium text-sky-400 ring-1 ring-inset ring-sky-400/30">
                {pub.type}
              </span>
              <span className="inline-flex items-center rounded-md bg-slate-400/10 px-2 py-1 text-xs font-medium text-slate-400 ring-1 ring-inset ring-slate-400/30">
                {pub.date}
              </span>
            </div>
            <h3 className="text-xl font-bold text-sky-400">{pub.title}</h3>
            <p className="text-slate-400 mt-2">{pub.journal}</p>
            <a
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 text-sky-400 hover:text-sky-300 inline-flex items-center gap-2 transition-colors"
              aria-label={`Read ${pub.title} (opens in new tab)`}
            >
              Read paper <ExternalLink size={16} />
            </a>
          </div>
        ))}

        {/* Show More / Show Less Button */}
        {filteredPublications.length > 4 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sky-400 hover:text-sky-300 mt-4 inline-flex items-center gap-2 transition-colors"
          >
            {showAll ? (
              <>
                Show Less <ChevronUp size={16} />
              </>
            ) : (
              <>
                Show More <ChevronDown size={16} />
              </>
            )}
          </button>
        )}
      </div>
    </Section>
  );
};

export default Publications;

import React, { useState } from 'react';
import Section from '../Section';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

interface Publication {
  title: string;
  journal: string;
  date: string;
  type: string;
  url: string;
  year: number; // Added for sorting
}

const Publications: React.FC = () => {
  const publications: Publication[] = [
    {
      title: "RAPID-AV: Realtime Adaptive and Intelligent Detection For AV's Against DDoS Attacks",
      journal: "2024 IEEE International Conference on Advanced Networks and Telecommunications Systems (ANTS)",
      date: "Dec 2024",
      year: 2024,
      type: "Conference Paper",
      url: "https://ieeexplore.ieee.org/abstract/document/10898213/"
    },
    {
      title: "Adaptive continuous adversarial training (acat) to enhance ml-nids robustness",
      journal: "Authorea Preprints",
      date: "Nov 2024",
      year: 2024,
      type: "Conference Paper",
      url: "https://www.techrxiv.org/doi/pdf/10.36227/techrxiv.173144803.35072777"
    },
    {
      title: "ConvAE-512: Bandwidth-Efficient Image Compression in Edge with Auto-Encoders",
      journal: "2024 4th Asian Conference on Innovation in Technology (ASIANCON)",
      date: "Aug 2024",
      year: 2024,
      type: "Conference Paper",
      url: "https://ieeexplore.ieee.org/abstract/document/10837773/"
    },
    {
      title: "Introducing Adaptive Continuous Adversarial Training (ACAT) to Enhance Machine Learning Robustness",
      journal: "IEEE Networking Letters",
      date: "Aug 2024",
      year: 2024,
      type: "Journal Article",
      url: "https://ieeexplore.ieee.org/abstract/document/10634900"
    },
    {
      title: "XNetIoT: An Extreme Quantized Neural Network Architecture For IoT Environment Using P4",
      journal: "IEEE Transactions on Network and Service Management",
      date: "Jul 2024",
      year: 2024,
      type: "Journal Article",
      url: "https://ieeexplore.ieee.org/abstract/document/10586219"
    },
    {
      title: "IaaSI: a device based interoperability as a service for IoMT devices",
      journal: "Journal of Ambient Intelligence and Humanized Computing",
      date: "Aug 2023",
      year: 2023,
      type: "Journal Article",
      url: "https://link.springer.com/article/10.1007/s12652-023-04669-8"
    },
    {
      title: "DNSguard: A Raspberry Pi Based DDoS Mitigation on DNS Server in IoT Networks",
      journal: "IEEE Networking Letters",
      date: "Oct 2022",
      year: 2022,
      type: "Journal Article",
      url: "https://ieeexplore.ieee.org/abstract/document/9926110"
    }
  ];

  // Sort publications by year in descending order
  const sortedPublications = publications.sort((a, b) => b.year - a.year);

  const [showAll, setShowAll] = useState(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  // Filtered publications based on the selected type
  const filteredPublications = selectedType
    ? sortedPublications.filter(pub => pub.type === selectedType)
    : sortedPublications;

  // Define the publications to display based on the showAll toggle
  const visiblePublications = showAll ? filteredPublications : filteredPublications.slice(0, 4);

  // Unique publication types for filter options
  const publicationTypes = Array.from(new Set(publications.map(pub => pub.type)));

  return (
    <Section id="publications" title="Publications">
      {/* Filter Dropdown */}
      <div className="mb-6 flex gap-4">
        <select
          value={selectedType || ""}
          onChange={(e) => setSelectedType(e.target.value || null)}
          className="bg-gray-50 text-gray-700 px-4 py-2 rounded-md border border-gray-200 transition-all focus:outline-none focus:border-gray-400"
        >
          <option value="">All Types</option>
          {publicationTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-6">
        {visiblePublications.map((pub, index) => (
          <div 
            key={index} 
            className="group hover:bg-gray-50 p-4 rounded-lg transition-all"
          >
            <div className="flex gap-3 mb-3">
              <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                {pub.type}
              </span>
              <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                {pub.date}
              </span>
            </div>
            <h3 className="text-lg font-medium text-gray-900 leading-tight">{pub.title}</h3>
            <p className="text-gray-600 mt-2 font-light italic">{pub.journal}</p>
            <a
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 text-gray-600 hover:text-gray-900 inline-flex items-center gap-2 transition-colors text-sm"
              aria-label={`Read ${pub.title} (opens in new tab)`}
            >
              Read paper <ExternalLink size={14} />
            </a>
          </div>
        ))}

        {/* Show More / Show Less Button */}
        {filteredPublications.length > 4 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-gray-600 hover:text-gray-900 mt-4 inline-flex items-center gap-2 transition-colors font-medium"
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

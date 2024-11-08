import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-white">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
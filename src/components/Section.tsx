import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-light mb-8 text-gray-900 border-b border-gray-200 pb-4">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
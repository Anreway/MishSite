import React from 'react';

const TextSection = ({ data }) => {
  // Handle both data.sections and array data
  const sections = data.sections || (Array.isArray(data) ? data : []);
  const title = data.title || '';
  
  return (
    <section className="text-section">
      {title && <h2 className="text-section__title">{title}</h2>}
      <div className="text-section__content">
        {sections.map((section, index) => (
          <div key={index} className="text-section__block">
            <h3 className="text-section__block-title">{section.title}</h3>
            <p className="text-section__block-content">{section.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TextSection;

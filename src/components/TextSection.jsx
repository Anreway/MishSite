import React from 'react';

const TextSection = ({ data }) => {
  return (
    <section className="text-section">
      <h2 className="text-section__title">{data.title}</h2>
      <div className="text-section__content">
        {data.sections.map((section, index) => (
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

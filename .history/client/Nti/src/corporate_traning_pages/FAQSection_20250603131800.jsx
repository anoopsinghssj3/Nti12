import React, { useState } from 'react';
import "../corporate_traning_styles/FAQSection.css";

const faqs = [
  {
    question: 'Can I generate higher revenue through corporate training?',
    answer: 'Yes, corporate training enhances employee skills, boosting productivity and driving higher revenue.'
  },
  {
    question: 'Can we get both technical and non-technical training sessions?',
    answer: 'Absolutely! We offer a wide range of training options including both technical and non-technical topics.'
  },
  {
    question: 'Which skills can the employees expect to enhance during corporate training?',
    answer: 'Employees can improve skills such as leadership, technical expertise, communication, and problem-solving.'
  },
  {
    question: 'How much time do we have to invest?',
    answer: 'The duration varies based on the program but we customize sessions to fit your team’s schedule.'
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-header">
        <h2>FAQ'S</h2>
        <div className="underline"></div>
      </div>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              <span className={activeIndex === index ? 'arrow up' : 'arrow down'}></span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;

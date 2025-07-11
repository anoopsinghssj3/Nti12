import React, { useState } from 'react';
import '../home_pages/Testimonials.css';

const testimonials = [
  {
    name: 'Balveer',
    profile: "Web Developer",
    text: 'The Digital Marketing course at NTI Tech Academy exceeded my expectations! The content was thorough, and I gained hands-on experience with real-world marketing strategies. I now feel confident managing social media campaigns and SEO. It’s the best decision I’ve made for my career!',
    image: '',
  },
  {
    name: 'Anjali Mishra',
    profile: "Digital Marketing Executive",
    text: 'Enrolling in NTI Tech Academy’s Digital Marketing Course has been a game-changer for my career as a Digital Marketing Executive! Real-world projects and expert instructors made all the difference!',
    image: null,
  },
  {
    name: 'Ayushi Singh',
    profile: "Digital Marketing Executive",
    text: "NTI Tech Academy's Digital Marketing course exceeded my expectations! Their 100% placement record truly reflects the top-notch education and support they provide. I'm thrilled with the opportunities this course has opened up for me in the field.",
    image: '',
  },
];

function Testimonials() {
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const toggleReadMore = (index) => {
    setExpandedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const getShortText = (text, length = 120) =>
    text.length > length ? text.slice(0, length) + '...' : text;

  return (
    <div className="container py-5 testimonials">
      <div className="bg-animated-gradient mb-3">
        <h2 className="fw-bold mb-0 position-relative custom-heading">
          Testimonials
        </h2>
      </div>

      <div className="testimonials-marquee-wrapper position-relative overflow-hidden">
        <div className="testimonials-marquee-track d-flex">
          {testimonials.concat(testimonials).map((testimonial, index) => {
            const originalIndex = index % testimonials.length;
            const isExpanded = expandedIndexes.includes(originalIndex);

            return (
              <div className="card card-style testimonial-card mx-2 flex-shrink-0 p-3" key={index}>
                <div className="quote-icon avtar-design">❝</div>
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-circle avtar"
                    width="70"
                    height="70"
                    loading="lazy"
                  />
                  <div className="ms-3 avtar-name">
                    <h5 className="mb-0 fw-bold">{testimonial.name}</h5>
                    <p className="mb-0" style={{ fontSize: '0.85rem' }}>
                      {testimonial.profile}
                    </p>
                  </div>
                </div>
                <p className="testimonial-text">
                  {isExpanded ? testimonial.text : getShortText(testimonial.text)}
                </p>
                {testimonial.text.length > 120 && (
                  <p
                    className="text-end  mt-1 mb-0 read-more"
                    style={{ cursor: 'pointer' }}
                    onClick={() => toggleReadMore(originalIndex)}
                  >
                    {isExpanded ? 'Read less' : 'Read more'}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

import React, { useState, useRef } from 'react';
import '../home_pages/Testimonials.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: 'Balveer',
    profile: "Web Developer",
    text: 'The Digital Marketing course at NTI Tech Academy exceeded my expectations!...',
    image: '',
  },
  {
    name: 'Anjali Mishra',
    profile: "Digital Marketing Executive",
    text: 'Enrolling in NTI Tech Academy’s Digital Marketing Course has been a game-changer...',
    image: null,
  },
  {
    name: 'Ayushi Singh',
    profile: "Digital Marketing Executive",
    text: "NTI Tech Academy's Digital Marketing course exceeded my expectations!...",
    image: '',
  },
{
    name: 'Balveer',
    profile: "Web Developer",
    text: 'The Digital Marketing course at NTI Tech Academy exceeded my expectations!...',
    image: '',
  },
  {
    name: 'Anjali Mishra',
    profile: "Digital Marketing Executive",
    text: 'Enrolling in NTI Tech Academy’s Digital Marketing Course has been a game-changer...',
    image: null,
  },
  {
    name: 'Ayushi Singh',
    profile: "Digital Marketing Executive",
    text: "NTI Tech Academy's Digital Marketing course exceeded my expectations!...",
    image: '',
  },
{
    name: 'Balveer',
    profile: "Web Developer",
    text: 'The Digital Marketing course at NTI Tech Academy exceeded my expectations!...',
    image: '',
  },
  {
    name: 'Anjali Mishra',
    profile: "Digital Marketing Executive",
    text: 'Enrolling in NTI Tech Academy’s Digital Marketing Course has been a game-changer...',
    image: null,
  },
  {
    name: 'Ayushi Singh',
    profile: "Digital Marketing Executive",
    text: "NTI Tech Academy's Digital Marketing course exceeded my expectations!...",
    image: '',
  },
{
    name: 'Balveer',
    profile: "Web Developer",
    text: 'The Digital Marketing course at NTI Tech Academy exceeded my expectations!...',
    image: '',
  },
  {
    name: 'Anjali Mishra',
    profile: "Digital Marketing Executive",
    text: 'Enrolling in NTI Tech Academy’s Digital Marketing Course has been a game-changer...',
    image: null,
  },
  {
    name: 'Ayushi Singh',
    profile: "Digital Marketing Executive",
    text: "NTI Tech Academy's Digital Marketing course exceeded my expectations!...",
    image: '',
  },
];

function Testimonials() {
  const [expandedIndexes, setExpandedIndexes] = useState([]);
  const sliderRef = useRef(null);

  const toggleReadMore = (index) => {
    setExpandedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const getShortText = (text, length = 120) =>
    text.length > length ? text.slice(0, length) + '...' : text;

  const handleSlide = (direction) => {
    const scrollAmount = 320;
    if (sliderRef.current) {
      const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
      const currentScroll = sliderRef.current.scrollLeft;
      const targetScroll = direction === 'left'
        ? Math.max(currentScroll - scrollAmount, 0)
        : Math.min(currentScroll + scrollAmount, maxScroll);

      sliderRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="container py-5 testimonials position-relative">
      <h2 className="text-center mb-4 learners-underline">Testimonials</h2>

      <button className="testimonial-nav left" onClick={() => handleSlide('left')}>
        <FaChevronLeft />
      </button>
      <button className="testimonial-nav right" onClick={() => handleSlide('right')}>
        <FaChevronRight />
      </button>

      <div className="testimonials-marquee-wrapper">
        <div className="testimonials-marquee-track" ref={sliderRef}>
          {testimonials.map((testimonial, index) => {
            const isExpanded = expandedIndexes.includes(index);

            return (
              <div className="testimonial-card p-3 mx-2" key={index}>
                <div className="quote-icon avtar-design">❝</div>
                <div className="d-flex align-items-center mb-3 position-relative">
                  <img
                    src={testimonial.image || "/images/default-avatar.png"}
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
                    className="text-end mt-2 mb-0 read-more"
                    style={{ cursor: 'pointer' }}
                    onClick={() => toggleReadMore(index)}
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

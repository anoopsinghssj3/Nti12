// import React from 'react';
// import '../home_styles/Testimonials.css';

// const testimonials = [
//   {
//     name: 'Er R K Singh',
//     text: 'Good coaching of IT sector and good facilities, provide classroom and all teachers are very good.',
//     image: ''
//   },
//   {
//     name: 'Sumit Kumar',
//     text: 'Ducat is really a very good institute to improve your skills as Oracle DBA... Anjeet Sir is the best teacher for Oracle. He is very determined and demonstrates the tough topics.',
//     image: 'https://via.placeholder.com/60'
//   },
//   {
//     name: 'Randeep Singh',
//     text: 'Ducat placement service is one of the best placement services in Delhi NCR. Enlighten your career by enrolling for suitable courses and get placed in MNCs.',
//     image: 'https://via.placeholder.com/60'
//   }
// ];

// function Testimonials() {
//   return (
//     <div className="testimonials-container">
//       <h2 className="testimonials-heading">
//         Testimonials
//         <div className="heading-underline"></div>
//       </h2>
//       <div className="testimonials-slider">
//         {testimonials.map((testimonial, index) => (
//           <div className="testimonial-card" key={index}>
//             <div className="quote-icon">❝</div>
//             <div className="testimonial-header">
//               {testimonial.image && <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />}
//               <h3>{testimonial.name}</h3>
//             </div>
//             <p className="testimonial-text">{testimonial.text}</p>
//             {index === 1 && <p className="read-more">Read more</p>}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Testimonials;

import React from 'react';
import '../home_styles/Testimonials.css';

const testimonials = [
  {
    name: 'Surabhi Sharma',
    text: 'Ducat Mohan Nagar is one of the best learning place. I enrolled for Digital Marketing under the guidance of Mr Shashank Agarwal...',
    image: 'https://via.placeholder.com/60/FF7F50/FFFFFF?text=S',
  },
  {
    name: 'Omer Zia',
    text: 'Especial thanks to placement head Shashank Mishra sir. He has created a storm of companies in Ducat...',
    image: 'https://via.placeholder.com/60/4682B4/FFFFFF?text=O',
  },
  {
    name: 'Vinay Kumar',
    text: 'The Web Designing course was fantastic! It covered UX design and modern HTML/CSS techniques...',
    image: 'https://via.placeholder.com/60/2E8B57/FFFFFF?text=V',
  },
  {
    name: 'Sumit Kumar',
    text: 'Ducat is a great institute to improve Oracle DBA skills. Anjeet Sir is very supportive...',
    image: 'https://via.placeholder.com/60/FF7F50/FFFFFF?text=SK',
  },
];

function Testimonials() {
  return (
    <div className="testimonials-container container py-5">
      <h2 className="testimonials-heading text-center">
        Testimonials
        <div className="heading-underline"></div>
      </h2>

      {/* Carousel Section */}
      <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {testimonials.map((testimonial, index) => (
            <div
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              key={index}
            >
              <div className="testimonial-card mx-auto">
                <div className="quote-icon">❝</div>
                <div className="testimonial-header">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-img"
                  />
                  <h3 className="mb-0">{testimonial.name}</h3>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <p className="read-more">Read more</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Marquee-style strip */}
      <div className="marquee-container mt-5">
        <div className="marquee-content">
          {testimonials.map((t, i) => (
            <span className="marquee-item" key={i}>
              {t.name}: {t.text}&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

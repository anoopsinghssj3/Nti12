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
    text: 'Ducat Mohan Nagar is one of the best learning place...',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Ftestimonial%2F1717501086645Rahul.png&w=128&q=75',
  },
  {
    name: 'Omer Zia',
    text: 'Especial thanks to placement head Shashank Mishra sir...',
    image: 'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Ftestimonial%2F1717500186395jagriti.png&w=128&q=75',
  },
  {
    name: 'Vinay Kumar',
    text: 'The Web Designing course was fantastic!...',
    image: 'https://via.placeholder.com/60/2E8B57/FFFFFF?text=V',
  },
  {
    name: 'Sumit Kumar',
    text: 'Ducat is a great institute to improve Oracle DBA skills...',
    image: 'https://via.placeholder.com/60/FF7F50/FFFFFF?text=SK',
  },
];

function Testimonials() {
  return (
    <div className="container py-5 testimonials">
      <h2 className="text-center mb-4 learners-underline">
        Testimonials
        <div className="mx-auto mt-2"></div>
      </h2>

      <div className="position-relative overflow-hidden">
        <div className="d-flex marquee-track">
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <div
              className="card mx-2 flex-shrink-0 p-3"
              style={{ width: '300px', minHeight: '200px' }}
              key={index}
            >
              <div className="position-absolute top-0 start-0 p-2 fs-1 opacity-25">❝</div>
              <div className="d-flex align-items-center mb-2">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-circle me-2"
                  width="60"
                  height="60"
                />
                <h5 className="mb-0">{testimonial.name}</h5>
              </div>
              <p className="mb-0">{testimonial.text}</p>
              <p className="text-end text-primary mt-2 mb-0">Read more</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

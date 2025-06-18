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
    text: 'Ducat Mohan Nagar is one of the best learning place. I enrolled for Digital Marketing under the guidance of Mr Shashank Agarwal. He is very supportive and active and has...',
    image: 'https://via.placeholder.com/60/FF7F50/FFFFFF?text=S',
  },
  {
    name: 'Omer Zia',
    text: 'Especial thanks to new placement head shashank mishra sir ... he has created a storm of companies in the ducat.. I got placed in satin creditcare network limited as jav...',
    image: 'https://via.placeholder.com/60/4682B4/FFFFFF?text=O',
  },
  {
    name: 'Vinay Kumar',
    text: 'The Web Designing course was fantastic! It covered everything from UX design principles to the latest HTML and CSS techniques. The hands-on approach made learning enjoyab...',
    image: 'https://via.placeholder.com/60/2E8B57/FFFFFF?text=V',
  },
];

function Testimonials() {
  return (
    <div className="testimonials-container container py-5">
      <h2 className="testimonials-heading">
        Testimonials
        <div className="heading-underline"></div>
      </h2>

      <div className="row justify-content-center testimonials-slider">
        {testimonials.map((testimonial, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="testimonial-card position-relative">
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
    </div>
  );
}

export default Testimonials;

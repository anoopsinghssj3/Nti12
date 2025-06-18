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
    name: 'Er R K Singh',
    text: 'Good coaching of IT sector and good facilities, provide classroom and all teachers are very good.',
    image: ''
  },
  {
    name: 'Sumit Kumar',
    text: 'Ducat is really a very good institute to improve your skills as Oracle DBA... Anjeet Sir is the best teacher for Oracle. He is very determined and demonstrates the tough topics.',
    image: 'https://via.placeholder.com/60'
  },
  {
    name: 'Randeep Singh',
    text: 'Ducat placement service is one of the best placement services in Delhi NCR. Enlighten your career by enrolling for suitable courses and get placed in MNCs.',
    image: 'https://via.placeholder.com/60'
  },
  {
    name: 'Er R K Singh',
    text: 'Good coaching of IT sector and good facilities, provide classroom and all teachers are very good.',
    image: ''
  },
  {
    name: 'Sumit Kumar',
    text: 'Ducat is really a very good institute to improve your skills as Oracle DBA... Anjeet Sir is the best teacher for Oracle. He is very determined and demonstrates the tough topics.',
    image: 'https://via.placeholder.com/60'
  },
  {
    name: 'Randeep Singh',
    text: 'Ducat placement service is one of the best placement services in Delhi NCR. Enlighten your career by enrolling for suitable courses and get placed in MNCs.',
    image: 'https://via.placeholder.com/60'
  },
  {
    name: 'Er R K Singh',
    text: 'Good coaching of IT sector and good facilities, provide classroom and all teachers are very good.',
    image: ''
  },
  {
    name: 'Sumit Kumar',
    text: 'Ducat is really a very good institute to improve your skills as Oracle DBA... Anjeet Sir is the best teacher for Oracle. He is very determined and demonstrates the tough topics.',
    image: 'https://via.placeholder.com/60'
  },
  {
    name: 'Randeep Singh',
    text: 'Ducat placement service is one of the best placement services in Delhi NCR. Enlighten your career by enrolling for suitable courses and get placed in MNCs.',
    image: 'https://via.placeholder.com/60'
  },
  {
    name: 'Er R K Singh',
    text: 'Good coaching of IT sector and good facilities, provide classroom and all teachers are very good.',
    image: ''
  },
  {
    name: 'Sumit Kumar',
    text: 'Ducat is really a very good institute to improve your skills as Oracle DBA... Anjeet Sir is the best teacher for Oracle. He is very determined and demonstrates the tough topics.',
    image: 'https://via.placeholder.com/60'
  },
  {
    name: 'Randeep Singh',
    text: 'Ducat placement service is one of the best placement services in Delhi NCR. Enlighten your career by enrolling for suitable courses and get placed in MNCs.',
    image: 'https://via.placeholder.com/60'
  }
];

function Testimonials() {
  return (
    <div className="testimonials-container container py-5">
      <h2 className="testimonials-heading text-center mb-4">
        Testimonials
        <div className="heading-underline mx-auto mt-2"></div>
      </h2>
      <div className="row justify-content-center">
        {testimonials.map((testimonial, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="testimonial-card p-3 border rounded shadow-sm h-100">
              <div className="quote-icon fs-3 mb-2">❝</div>
              <div className="testimonial-header d-flex align-items-center mb-2">
                {testimonial.image && (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-img rounded-circle me-2"
                    width="50"
                    height="50"
                  />
                )}
                <h5 className="mb-0">{testimonial.name}</h5>
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              {index === 1 && <p className="read-more text-primary mt-2">Read more</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;

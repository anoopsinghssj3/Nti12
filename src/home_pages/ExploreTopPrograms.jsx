import React from 'react';

const programs = [
  'MERN STACK + GEN AI',
  'CYBER SECURITY + GEN AI',
  'JAVA EXPERT',
  'ADVANCE DIGITAL MARKETING',
  'UI & UX',
  '.NET',
  'JAVA FULL STACK DEVELOPER + GEN AI',
  'DATA SCIENCE PROFESSIONAL TRAINING',
  'PYTHON TRAINING COURSE',
  'BUSINESS ANALYTICS',
  'AWS PROFESSIONAL TRAINING',
  'SOFTWARE TESTING COURSE',
  'DATA ANALYTICS USING PYTHON',
  'GENERATIVE AI',
  'POWER BI',
  'AUTOCAD',
];


const src = [
  'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1739790191984mern-removebg-preview%20(1).png&w=256&q=75',

  'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1707561125125Cyber%20Security.png&w=256&q=75',

  'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1709033901773Java.png&w=256&q=75',

  'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1721644964282Digital%20Marketing.png&w=256&q=75',

  'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1718708782516UI%20UX%20png.png&w=256&q=75',

  'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1718714811576dot-net-png.png&w=256&q=75',

  'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1709033964060Java.png&w=256&q=75',

  'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1707559465273Data%20Science%20Training%20in%20Delhi.png&w=256&q=75',

  'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1710312728346Python.png&w=256&q=75',

  'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1709621420973Business%20Analytics.png&w=256&q=75',

  'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1729665262800aws.png&w=256&q=75',
  'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1729665153790software%20Testing.png&w=256&q=75',
  'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1707559446250Data%20Analytics%20Using%20Python.png&w=256&q=75',
  'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F17337437858871712321102440Generative%20Ai(1).png&w=256&q=75',
  'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1709096257414Power%20BI.png&w=256&q=75',
  'https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fcourse%2F1709383439715AutoCAD.png&w=256&q=75'
];
// export default function ExploreTopPrograms() {
//   return (
//     <div className="container py-5 explore-top-programs">
//       <h2 className=" mb-4 learners-underline">Explore Top Programs</h2>
//       <div className="row g-3">
//         {programs.map((program, idx) => (
//           <div key={idx} className="col-6 col-md-4 col-lg-3">
//             <div className="card h-100 shadow-sm">
//               <div className="d-flex align-items-center justify-content-start">
//                 <img
//                   src={src[idx]}
//                   alt={program}
//                   className="w-25 p-2"
//                   style={{height:"10vh"}}
//                 />
//                 <p className="card-text text- mb-0 ms-2 p-2 fw-semibold">{program}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }

export default function ExploreTopPrograms() {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center mb-1  pb-2 learners-underline">
        <strong>Explore Top Programs</strong>
      </h2>

      <div className="row g-2">
        {programs.map((program, idx) => (
          <div key={idx} className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div className="card h-100 shadow-sm  p-3 border border-1 border-secondary">
              <div className="d-flex align-items-center">
                <img
                  src={src[idx]}
                  alt={program}
                  className="img-fluid"
                  style={{ height: '60px', width: '60px', objectFit: 'contain' }}
                />
                <p className="mb-0 ms-3 fw-semibold">{program}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

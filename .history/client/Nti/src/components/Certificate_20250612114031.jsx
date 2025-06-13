// import React from 'react'
// import "../styles/Certificate.css"
// import CertificateBtns from '../pages/CertificateBtns'
// import Certificate from ".../../src/assets/certificate.jpeg"

// export default function Certificate() {
//     return (<div id="certificate" className="d-flex flex-lg-row flex-column w-75 justify-content-center align-items-center" >
//         <div className="left-section p-lg-5 p-3 text-center">
//             <img src={Certificate} alt="Certificate"
//                 className="img-fluid"
//             />
//         </div>

//         <div className="right-section  w-100 d-flex flex-column justify-content-evenly align-items-center ">
//             <CertificateBtns />
//         </div>
//     </div>

//     )
// }

import React from 'react';
import "../styles/Certificate.css";
import CertificateBtns from '../pages/CertificateBtns';
import certificateImg from '../assets/certificate.jpeg'; // Fixed image path and naming conflict

export default function CertificateSection() { // Changed name to avoid conflict
    return (
        <div id="certificate" className="d-flex flex-lg-row flex-column w-75 justify-content-center align-items-center mx-auto py-4">
            {/* Left Section - Certificate Image */}
            <div className="left-section p-lg-5 p-3 text-center">
                <img
                    src={certificateImg}
                    alt="Certificate"
                    className="img-fluid rounded shadow"
                />
            </div>

            {/* Right Section - Buttons */}
            <div className="right-section w-100 d-flex flex-column justify-content-evenly align-items-center">
                <CertificateBtns />
            </div>
        </div>
    );
}

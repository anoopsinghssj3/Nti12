import React from 'react'
import "../styles/Certificate.css"
import CertificateBtns from '../pages/CertificateBtns'


export default function Certificate() {
    return (<div id="certificate" className="d-flex flex-lg-row flex-column w-75 justify-content-center align-items-center" >
        <div className="left-section p-lg-5 p-3 text-center">
            <img src="./src/assets/certificate.jpeg" alt=""
                className="img-fluid"
            />
        </div>

        <div className="right-section  w-100 d-flex flex-column justify-content-evenly align-items-center ">
            <CertificateBtns />
        </div>
    </div>

    )
}
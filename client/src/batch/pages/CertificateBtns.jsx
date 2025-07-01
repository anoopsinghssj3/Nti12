import React from 'react'
import { Link } from "react-router-dom"

export default function CertificateBtns() {
    return (
        <>

            <button className="btn w-50 text-white">
                <Link to="/apply_certi" className="w-100 text-white text-decoration-none">
                    Apply for Certificate </Link>
            </button>
            <button className="btn w-50 text-white">
                <Link to="/download_certi" className="w-100 text-white text-decoration-none">
                    Download Certificate</Link>
            </button>
            <button className="btn w-50 text-white">
                <Link to="/verify_certi" className="w-100 text-white text-decoration-none">
                    Verify Certificate</Link>
            </button></>

    )
}

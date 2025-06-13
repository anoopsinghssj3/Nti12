import React, { useState } from 'react';
import "../corporate_traning_styles/Corporate_traning_data.css";

export default function CorporateTraningData() {
    const [showMore, setShowMore] = useState(false);
    const toggleReadMore = () => setShowMore(!showMore);

    return (
        <div id="corporate-traning-data" className="w-75 d-flex justify-content-center gap-4">
            <div>
                <h2 className="heading text-decoration-underline">EMPLOYEE POWERED CORPORATE TRAINING PROGRAM</h2>
                <p className="mb-5">
                    In today’s fast-paced corporate world, continuous training is crucial for enhancing productivity and operational efficiency.
                    <strong> Our corporate training programs</strong> aim to resolve workforce errors, boost skill levels, and introduce consistency within your organization, ultimately improving financial performance.
                </p>

                <h3 className="heading text-decoration-underline">WHAT IS CORPORATE TRAINING?</h3>
                <p className="mb-2">
                    <strong>Corporate training</strong> involves a series of activities using various learning methods to enhance employee performance, reflecting overall business success.
                    It’s not just about acquiring new skills but fostering a culture of continuous development. Corporate training improves engagement and productivity by ensuring employees have the necessary skills to do their jobs successfully while keeping up with industry changes.
                    At <strong>NTI</strong> India, our training is customized to meet the unique needs of your organization and its employees, ensuring the training is always informative, interactive, and productive.
                </p>

                {!showMore ? (
                    <div className="mb-5">
                        <button className="btn btn-link p-0" onClick={toggleReadMore}>Read more...</button>
                    </div>
                ) : (
                    <>
                        <p className="mb-5">
                            We implement adaptive learning strategies using real-world simulations and hands-on labs. Our programs are focused on skill retention, ensuring employees apply what they learn in actual scenarios.
                            In addition, we collaborate closely with your management team to align training goals with your business objectives.
                        </p>

                        <p className="mb-5">
                            Our blended learning approach combines virtual, in-person, and self-paced modules to cater to diverse learning styles, ensuring every employee benefits.
                            With post-training performance assessments and feedback loops, NTI ensures knowledge transfer sticks long after the sessions end.
                        </p>

                        <div>
                            <button className="btn btn-link p-0" onClick={toggleReadMore}>Read less...</button>
                        </div>
                    </>
                )}

                <h3 className="heading text-decoration-underline">WHY CORPORATE TRAINING IS IMPORTANT?</h3>
                <p className="mb-5">
                    Corporate training is vital for <strong>organizational growth</strong>. It helps in improving individual skills and creates an environment for continuous development.
                    By addressing the specific needs of your organization and its employees, corporate training ensures that the learning process is effective, interactive, and productive.
                </p>

                <h3 className="heading text-decoration-underline">What We Offer in Corporate Training?</h3>
                <p className="mb-5">
                    <strong>NTI</strong> India focuses on advancing your employees’ skills and furthering your organization’s training and development goals.
                    Before enrolling, understand how we stand out, the benefits we offer, and how we maximize the impact of corporate training.
                    Our standards ensure quick and effective learning, tailored to meet your specific needs.
                </p>

                <h3 className="heading text-decoration-underline">Why Choose NTI India?</h3>
                <p className="mb-5">
                    At <strong>NTI</strong> India, we specialise in upskilling your employees to meet your organization’s learning and development goals.
                    We are committed to providing customised training tailored to your company’s needs with a proven track record in delivering successful IT courses, including full-stack programming, Cloud Computing, DevOps, ERP, Data Science & Machine Learning, and more.
                </p>

                <div className="my-3">
                    <img
                        src="https://www.ducatindia.com/_next/image?url=%2Fstatic%2Fcorporate%2FCorporateImages.jpg&w=3840&q=75"
                        alt="Corporate Training at NTI"
                        className="w-100 rounded shadow-sm"
                    />
                </div>

                <div>
                    <h3 className="heading text-decoration-underline">Benefits of Choosing NTI India</h3>
                    <ul className="mb-5">
                        <li> Customized Training Programs: Tailored to your organization’s specific needs.</li>
                        <li>Experienced Instructors: Over 17 years of expertise in corporate training.</li>
                        <li> Proven Track Record: Success in various IT and corporate training programs.</li>
                        <li> Interactive Learning: Ensuring that training is always engaging and productive.</li>
                         <p className='mt-2'>
                            By choosing <strong>NTI India</strong>, you are investing in your organization’s future success.
                            Our seminars and training sessions are designed to transform employees into experts and certified professionals, improving confidence and ensuring long-term growth.
                        </p>
                    </ul>

                </div>
            </div>
        </div>
    );
}

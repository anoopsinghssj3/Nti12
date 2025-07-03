import React from "react";

const UnlockSection = () => {
  return (
    <section className="unlock-section py-16 px-4 bg-gray-50">
      <div className="unlock-content max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="unlock-text w-full md:w-3/4">
          <div className="unlock-heading space-y-6">
            <h2 className="unlock-title text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="unlock-description text-gray-600 text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
            </p>
          </div>
          <button className="btn-primary mt-6 inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default UnlockSection;

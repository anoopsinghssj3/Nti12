import "./ClientsSection.css"; // Import external styles

const ClientsSection = () => {
  const logos = [
    {
      id: 1,
      svg: (
        <div className="logo-svg" aria-label="Client logo 1">
        </div>
      ),
    },
    {
      id: 2,
      svg: (
        <div className="logo-svg" aria-label="Client logo 2">
          {/* SVG content here for id:2 */}
        </div>
      ),
    },
    {
      id: 3,
      svg: (
        <div className="logo-svg" aria-label="Client logo 3">
          {/* SVG content here for id:3 */}
        </div>
      ),
    },
    {
      id: 4,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/07dbc397fb651265e41c21998f9530f628f4f8c0?width=65",
    },
    {
      id: 5,
      svg: (
        <div className="logo-svg" aria-label="Client logo 5">
          {/* SVG content here for id:5 */}
        </div>
      ),
    },
    {
      id: 6,
      svg: (
        <div className="logo-svg" aria-label="Client logo 6">
          {/* SVG content here for id:6 */}
        </div>
      ),
    },
    {
      id: 7,
      svg: (
        <div className="logo-svg" aria-label="Client logo 7">
          {/* SVG content here for id:7 */}
        </div>
      ),
    },
  ];

  return (
    <section className="clients-section">
      <div className="clients-content">
        <div className="clients-header">
          <h2 className="section-title">Our Clients</h2>
          <p className="section-description">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="clients-logos">
          {logos.map((logo) => (
            <div key={logo.id} className="logo-item">
              {logo.svg ? (
                logo.svg
              ) : (
                <img
                  src={logo.image}
                  alt={`Client logo ${logo.id}`}
                  className="logo-image"
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;

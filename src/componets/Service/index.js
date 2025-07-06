import "./index.css";

const services = [
  {
    icon: "https://img.freepik.com/premium-photo/new-house-construction-building-site_293060-52.jpg",
    title: "Residential Construction",
    description:
      "Custom homes, renovations, and residential improvements tailored to your lifestyle and budget.",
    points: [
      "Custom Home Building",
      "Kitchen & Bathroom Remodeling",
      "Home Extensions",
      "Interior Renovations",
    ],
  },
  {
    icon: "https://5.imimg.com/data5/SELLER/Default/2021/5/DO/PV/CL/55599560/commercial-construction-service.jpg",
    title: "Commercial Projects",
    description:
      "Professional commercial construction services for offices, retail spaces, and industrial facilities.",
    points: [
      "Office Buildings",
      "Retail Spaces",
      "Warehouses",
      "Industrial Facilities",
    ],
    link: "#",
  },
  {
    icon: "https://targetbuilders.com/wp-content/uploads/2022/03/drawing-construction-plan-2021-08-28-18-46-13-utc-scaled.jpg",
    title: "Design & Consultation",
    description:
      "Expert consultation and design services to bring your vision to life with practical solutions.",
    points: [
      "Architectural Planning",
      "Project Consultation",
      "Cost Estimation",
      "3D Visualization",
    ],
    link: "#",
  },
];

const Service = () => (
  <>
    <section className="service-section" id="service">
      <h2 className="section-title">Our Services</h2>
      <p className="section-subtitle">
        From residential homes to commercial buildings, we offer comprehensive
        construction services to meet all your building needs.
      </p>
      <div className="service-cards">
        {services.map((service, index) => (
          <div
            className="card fade-in"
            key={index}
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <img className="icon-box" src={service.icon} alt={service.title} />
            <h3>{service.title}</h3>
            <p className="description">{service.description}</p>
            <ul>
              {service.points.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>
            {service.link && (
              <a href={service.link} className="learn-link">
                Learn More →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  </>
);

export default Service;

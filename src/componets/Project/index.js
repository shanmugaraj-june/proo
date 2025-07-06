import React from "react";
import Slider from "react-slick"; // For carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

const projects = [
  {
    title: "Modern Family Home",
    description:
      "A contemporary 3-bedroom family home with sustainable design features and modern amenities.",
    category: "Residential",
    image:
      "https://townsquare.media/site/942/files/2022/07/attachment-screen-shot-2022-07-19-at-12-14-24-pm.jpg?w=780&q=75",
  },
  {
    title: "Corporate Office Complex",
    description:
      "A state-of-the-art office building with flexible workspace solutions and energy-efficient systems.",
    category: "Commercial",
    image:
      "https://5.imimg.com/data5/VT/DX/XO/SELLER-33343279/img-8745-500x500.JPG",
  },
  {
    title: "Luxury Villa Renovation",
    description:
      "Complete renovation of a historic villa, preserving character while adding modern functionality.",
    category: "Renovation",
    image:
      "https://media.istockphoto.com/id/1146295665/photo/renovation-of-studio-room.jpg?s=612x612&w=0&k=20&c=CCfo3IoDIqXmS_ZhihYfdd_5_M4RiBipuFBFUJY2SzA=",
  },
];
const Project = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // ✅ Enables autoplay
    autoplaySpeed: 2000, // ✅ 2 seconds per slide
    cssEase: "linear", // ✅ Smooth animation
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="projects-section" id="project">
        <h2 className="projects-title">Featured Projects</h2>
        <p className="projects-subtitle">
          Take a look at some of our recent completed projects that showcase our
          commitment to quality and attention to detail.
        </p>
        <div className="projects-container">
          <h2 className="section-title">Our Projects</h2>

          <Slider {...settings}>
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <span className="project-category">{project.category}</span>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Project;

import Header from "../Header"  
import "./index.css" 

const projects = [
  {
    title: 'Modern Family Home',
    description: 'A contemporary 3-bedroom family home with sustainable design features and modern amenities.',
    category: 'Residential',
    image: 'https://townsquare.media/site/942/files/2022/07/attachment-screen-shot-2022-07-19-at-12-14-24-pm.jpg?w=780&q=75',
  },
  {
    title: 'Corporate Office Complex',
    description: 'A state-of-the-art office building with flexible workspace solutions and energy-efficient systems.',
    category: 'Commercial',
    image: 'https://5.imimg.com/data5/VT/DX/XO/SELLER-33343279/img-8745-500x500.JPG',
  },
  {
    title: 'Luxury Villa Renovation',
    description: 'Complete renovation of a historic villa, preserving character while adding modern functionality.',
    category: 'Renovation',
    image: 'https://media.istockphoto.com/id/1146295665/photo/renovation-of-studio-room.jpg?s=612x612&w=0&k=20&c=CCfo3IoDIqXmS_ZhihYfdd_5_M4RiBipuFBFUJY2SzA=',
  },
];
const Project = () => (
    <> 
     <Header /> 
     <section className="projects-section">
      <h2 className="projects-title">Featured Projects</h2>
      <p className="projects-subtitle">
        Take a look at some of our recent completed projects that showcase our commitment to quality and attention to detail.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-card fade-in"
            key={index}
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} className="project-image" />
              <span className="project-category">{project.category}</span>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
) 

export default Project
import Card from '../components/card'
import { Reveal } from '../components/reveal'
import '../css/App.css'

import rfv from '../assets/images/rfvDashboard.webp';
import web from '../assets/images/lmbsweb.webp'
import lts from '../assets/images/lts.webp'


const projects = [
  {
    id: 1,
    image: web,
    title: "Leopards Online Booking",
    description: "Web and mobile platform for passenger bookings and ticketing.",
  },
  {
    id: 2,
    image: lts,
    title: "Legislative Tracking System",
    description: "Web and mobile system for tracking legislative records and ordinances.",
  },
  {
    id: 3,
    image: rfv,
    title: "RFV Hemodialysis Web System",
    description: "Web and mobile platform for hemodialysis services and patient management.",
  },
];


function ProjectSection() {
    return (
        <div className="sectionPad projectsSec">
            <Reveal
                direction='right'
                duration={0.9}
            >
                <h6 className='globalFont' style={{ color: '#37BC7D', fontSize: 13, fontWeight: 500 }}>
                    FEATURED PROJECTS
                </h6>

                <h6 className='globalFont sectionTitle'>
                    Some of My Recent Works
                </h6>
            </Reveal>

            <Reveal
                direction="up"
                delay={0.2}
                duration={5}
            >
                {/* 3 columns -> 2 -> 1 (see .projectGrid in App.css) */}
                <div className="projectGrid">
                    {projects.map((project, i) => (
                        <Card
                            key={project.id}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            delay={(i + 1) * 0.3}
                        />
                    ))}
                </div>
            </Reveal>
        </div>
    )
}


export default ProjectSection
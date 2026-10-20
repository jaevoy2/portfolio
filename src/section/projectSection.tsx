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
        <div style={{ paddingRight: '12%', paddingLeft: '12%', marginTop: 100 }}>
            <Reveal
                direction='right'
                duration={0.9}
            >
                <h6 className='globalFont' style={{ color: '#37BC7D', fontSize: 13, fontWeight: 500 }}>
                    FEATURED PROJECTS
                </h6>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h6 className='globalFont' style={{ color: '#212529', fontSize: 24, fontWeight: 500, }}>
                        Some of My Recent Works
                    </h6>

                    {/* <a href="#" className='globalFont' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#37BC7D', fontSize: 13, fontWeight: 500, cursor: 'pointer' }}>
                        View All Projects
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#37BC7D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                    </a> */}
                </div>
            </Reveal>

            <Reveal
                direction="up"
                delay={0.2}
                duration={5}
            >
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 30 }}>
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
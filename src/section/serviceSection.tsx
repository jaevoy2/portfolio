import { motion } from 'motion/react';
import BorderGlow from '../components/serviceCard'
import { Reveal } from '../components/reveal';

import { useState } from 'react'; 

import mock1 from '../assets/images/mobileMockup.webp';
import mock2 from '../assets/images/mobile2.png'
import '../css/App.css'

const fadeRightIn = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
}


const cardData = [
    { id: 1, delay: 0.15, title: 'Web Design', description: 'Creating modern, responsive websites that elevate your brand.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-device-desktop"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10" /><path d="M7 20h10" /><path d="M9 16v4" /><path d="M15 16v4" /></svg>},
    { id: 2, delay: 0.40, title: 'UI/UX Design', description: 'Designing intuitive and user-friendly digital experiences.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-user-screen"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.03 17.818a3 3 0 0 0 1.97 -2.818v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3v8c0 1.317 .85 2.436 2.03 2.84" /><path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M8 21a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2" /></svg>},
    { id: 3, delay: 0.60, title: 'Web Development', description: 'Building fast, scalable, and secure web applications.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-code"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></svg> },
    { id: 4, delay: 0.80, title: 'Mobile App', description: 'Developing high-performance mobile apps for Android and iOS.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-device-mobile-code"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11.5 21h-3.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8" /><path d="M20 21l2 -2l-2 -2" /><path d="M17 17l-2 2l2 2" /><path d="M11 4h2" /><path d="M12 17v.01" /></svg> }
]


const ServiceCard = () => {
    return (
        <>
            {cardData.map((card, index) => (
                <div key={card.id} style={{ width: '90%' }} className='cardServiceCon'>
                    <Reveal
                        direction='right'
                        delay={card.delay}
                    >
                        <BorderGlow
                            edgeSensitivity={30}
                            glowColor="40 80 80"
                            backgroundColor="#fff"
                            borderRadius={18}
                            glowRadius={0}
                            glowIntensity={1}
                            coneSpread={30}
                            animationDelay={index * 200}
                            animated={true}
                            colors={['#22c55e', '#3b82f6', '#8b5cf6']}
                            className='serviceCon'
                            >
                            <div style={{ padding: 20, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                                <div className='serviceIconCon'>
                                    {card.icon}
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                    <p className='serviceTitle'>{card.title}</p>
                                    <p className='globalFont' style={{ fontSize: 12, color: '#212529', opacity: 0.6 }}>
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </BorderGlow>
                    </Reveal>
                </div>
            ))}
        </>
    )
}


function ServiceSection() {
    const[isHovered, setIsHovered] = useState(false);


    return (
        <div style={{ paddingRight: '12%', paddingLeft: '12%', marginTop: 300 }}>
            <Reveal
                duration={0.5}
                direction='up'
            >
                <h6 className='globalFont' style={{ color: '#37BC7D', fontSize: 13, fontWeight: 500 }}>
                    MY SERVICES
                </h6>
            </Reveal>

            <Reveal
                duration={0.8}
                direction='up'  
            >
                <h6 className='globalFont' style={{ color: '#212529', fontSize: 24, fontWeight: 500 }}>
                    Building Digital Products That <span style={{ color: '#22c55e' }}>Deliver Results</span>
                </h6>
            </Reveal>

            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 10, marginTop: 30, width: '50%' }} >
                    <ServiceCard />
                </div>
                <div 
                    style={{ width: '30%', justifyContent: 'flex-end', paddingLeft: 40, position: 'relative', height: 450 }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <motion.div
                        variants={fadeRightIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                        style={{ position: 'absolute', top: -20, left: -200, zIndex: 8 }}
                    >
                        <motion.div
                            animate={{ rotate: isHovered ? -8 : 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            style={{ transformOrigin: '50% 50%', willChange: 'transform' }}
                        >
                            <img src={mock2} alt={''} loading={'lazy'} style={{ width: 450, height: 450 }} />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={fadeRightIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.30 }}
                        style={{ position: 'absolute', top: 50, right: -100, zIndex: 10 }}
                    >
                        <motion.div
                            animate={{ rotate: isHovered ? 6 : 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            style={{ transformOrigin: '50% 50%', willChange: 'transform' }}
                        >
                            <img src={mock1} alt={''} loading={'lazy'} style={{ width: 450, height: 450 }} />
                        </motion.div>
                    </motion.div>
                </div>
            </div>  

        </div>
    )
}


export default ServiceSection
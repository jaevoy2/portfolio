import { motion } from 'framer-motion'
import { Reveal } from '../components/reveal'
import '../css/App.css'

import about from '../assets/images/about.png';


function AboutSection() {
    return (
        <section id="about" className="aboutCon">
            <div className="aboutHero">
                <div className="aboutRightSec">
                    <Reveal
                        className='globalFont aboutIntro'
                        direction='left'
                        amount={0.2}
                        duration={1}
                        delay={0.1}
                    >
                        I'm a Full-Stack Developer specializing in web and mobile development, building scalable applications with React Native, Expo, Laravel, and modern technologies.
                    </Reveal>

                    <Reveal
                        direction='left'
                        amount={0.2}
                        duration={0.7}
                        delay={0.3}
                    >
                        <div className='aboutRightBotContainer'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24   " height="24   " viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up-left"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 16v-8h8" /></svg>
                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%', paddingRight: 20, paddingLeft: 20 }}>
                                <h4 className='globalFont' >Skills & tools</h4>
                                <div>
                                    <ul className='aboutSkillandToolsCon'>
                                        <li className='globalFont aboutSkillandToolsList'>HTML & CSS</li>
                                        <li className='globalFont aboutSkillandToolsList'>JavaScript</li>
                                        <li className='globalFont aboutSkillandToolsList'>Bootstrap</li>
                                        <li className='globalFont aboutSkillandToolsList'>React</li>
                                        <li className='globalFont aboutSkillandToolsList'>React Native</li>
                                        <li className='globalFont aboutSkillandToolsList'>PHP & Laravel</li>
                                        <li className='globalFont aboutSkillandToolsList'>REST API Integration</li>
                                        <li className='globalFont aboutSkillandToolsList'>MySQL</li>
                                        <li className='globalFont aboutSkillandToolsList'>Git & GitHub</li>
                                    </ul>
                                </div>
                            </div>

                            <svg style={{ display: 'flex', alignSelf: 'end' }} xmlns="http://www.w3.org/2000/svg" width="24 " height="24 " viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16 8v8h-8" /></svg>
                        </div>
                    </Reveal>
                </div>

                <Reveal
                    className="aboutLabelCon"
                    direction='right'
                    amount={0.2}
                    duration={0.7}
                    delay={0.2}
                >
                    <h2 className="globalFont aboutBigText">ABOUT</h2>
                    <h2 className="globalFont aboutOutlineText">ME</h2>
                </Reveal>

                <motion.img
                    src={about}
                    alt="Jae Voy Seloterio"
                    className="aboutImage"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: -30 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                />
            </div>

        </section>
    )
}


export default AboutSection

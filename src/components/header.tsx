import '../css/App.css'
import { motion } from "framer-motion"
import logo from '../assets/images/logo-dark.png';


const fadeLeftIn = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
}

const fadeRightIn = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
}

const fadeTopIn = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
}


function Header() {
    return (
        <div className='headerCon'>
            <motion.div
                variants={fadeLeftIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            >
                <a href="#home">
                    <img src={logo} style={{ width: 80, height: 50 }} alt="logo" />
                </a>
            </motion.div>

            <motion.div
                variants={fadeTopIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            >
                <div>
                    <ul className='navCon'>
                        <li><a className='navs' href="#home">HOME</a></li>
                        <li><a className='navs' href="#projects">PROJECTS</a></li>
                        <li><a className='navs' href="#service">SERVICES</a></li>
                        <li><a className='navs' href="#about">ABOUT</a></li>
                        <li><a className='navs' href="#experience">EXPERIENCE</a></li>
                    </ul>
                </div>
            </motion.div>

            <motion.div
                variants={fadeRightIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.20 }}
            >
                <div className='contactBtn'>
                    <a className='contactNav' href="#contact">CONTACT ME</a>
                </div>
            </motion.div>

        </div>
    )
}

export default Header;
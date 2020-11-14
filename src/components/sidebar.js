import React from 'react';
import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons/instagram.svg';
import github from '../assets/icons/github.svg';
import linkedin from '../assets/icons/linkedin.svg';
import pin from '../assets/icons/pin.svg';
//import tie from '../assets/icons/tie.svg';
import download from '../assets/icons/download.svg';
//import mightycoder from '../assets/mightycoder.svg';
import linkedpic from '../assets/linkedinphoto.jpg';
import resume from '../assets/resume.pdf';
import { motion } from 'framer-motion';
//import facebook from '../assets/icons/facebook.svg';


const Sidebar =() => {
    const handleEmailMe = () => {
            window.open("mailto: suman.kalapatapu@gmail.com")
    }

    const sidebar_variant = {
        hidden: {
            x: '-20vw',
        },
        visible: {
            x: 0,
            transition: {
                delay: 0.1, duration: 0.5, type: 'spring'
            }

        }
    }

    return (
        <motion.div className="sidebar"
            variants = {sidebar_variant}
            initial= 'hidden'
            animate='visible'
            >
            <img src={linkedpic} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Suman <span> Kalapatapu </span></div>
            <div className="sidebar__item sidebar__title">Software Developer</div>
            <a href={resume} download="resume.pdf">
                <div className="sidebar__item sidebar__resume">
                    <img src={download} alt="resume" className="sidebar__icon mr-2" /> Download Resume
                </div>
            </a>
            <figure className="sidebar__social_icons my-2">
                <a href="!#" ><img src={facebook} alt="facebook" className="sidebar__icon mr-3" /></a>
                <a href="!#" ><img src={instagram} alt="instagram" className="sidebar__icon" /></a>
            </figure>
            <div className="sidebar__contact">
                <div className="sidebar__item sidebar__linkgit">
                    <a href="!#"><img src={github} alt="github" className="sidebar__icon mr-3" /></a>
                    <a href="!#"><img src={linkedin} alt="linkedin" className="sidebar__icon" /></a>
                </div>
                <div className="sidebar__location">
                    <img src={pin} alt="location" className="sidebar__icon mr-2" />
                    12805 Shaker Blvd,Cleveland,Ohio</div>
                <div className="sidebar__item">
                    <p> suman.kalapatapu@gmail.com </p>
                    <p>Tel No. +1 5133076877 </p>
                </div>
            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>Email Me</div>
        </motion.div>
    )
}

export default Sidebar;
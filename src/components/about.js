import React from 'react';
import Skillcard from './skillcard';
import { motion } from 'framer-motion';
import skills from './data/about_data';


const About = () => {
    const about_variant = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.1, duration: 0.6
            }
        }
    }

    return (
        <motion.div className="about"
            variants={about_variant}
            initial= 'hidden'
            animate='visible'
            >
            <h6 className="about__intro">
                 Dedicated IT professional with 4 years of experience in Full Stack Development, Building Data pipelines, Machine Learning, Data Analysis and Networking. 
                 Have extensive knowledge in retail chain and healthcare domain.
 
            </h6>
            <div className="container about__container">
                <h6 className="about__heading">What I Offer?</h6>
                <div className="row">
                    {
                        skills.map(skill => 
                            <Skillcard skill={skill} />

                        )

                    }
                </div>
            </div>

        </motion.div>
    );
};

export default About;
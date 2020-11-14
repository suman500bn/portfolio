import React from 'react';

import Bar from './bar';
import { motion } from 'framer-motion';
import {tools,languages} from './data/resume_data';


const Resume = () => {
    const resume_variant = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.1, duration: 0.7
            }
        }
    }

    return (
        <motion.div className="container resume"
            variants={resume_variant}
            initial= 'hidden'
            animate='visible'
            >
            <div className="row">
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Computer Engineering
                        </h5>
                        <p className="resume-card__name">
                            <strong key={1}> University of Cincinnati (2019-2020) </strong>
                        </p>
                        <p className="resume-card__details">Completed Masters in Computer Engineering from University of Cincinnati.</p>
                        <p className="resume-card__name">
                            <strong key={1}> CVR College of Engineering (2012-2016) </strong>
                        </p>
                        <p className="resume-card__details">Completed B.tech in Computer Engineering from CVR college of Engineering.</p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Backend Developer and ML engineer
                        </h5>
                        <p className="resume-card__name">
                            <strong key={1}> Y apps Lab (May '20 - Nov '20) </strong>
                        </p>
                        <p className="resume-card__details">Worked as Backend Developer for Onepot Application.</p>
                        <h5 className="resume-card__title">
                            Data Science Intern
                        </h5>
                        <p className="resume-card__name">
                            <strong key={1}> Cincinnati Children Hospital (Jan '20 - Jun '20) </strong>
                        </p>
                        <p className="resume-card__details">Worked to find impact of Chemotherapy using data analytics.</p>
                        <h5 className="resume-card__title">
                            Software Development Analyst
                        </h5>
                        <p className="resume-card__name">
                            <strong key={1}> NTT Data (Oct '16 - Jul '19) </strong>
                        </p>
                        <p className="resume-card__details">Worked as Data Engineer for retail chain client.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Language and Framework
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map(language =>
                                <Bar value={language} />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Tools and Softwares
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            tools.map(tool => <Bar value={tool} />)
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Resume;
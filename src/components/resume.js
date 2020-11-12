import React from 'react';
import react from '../assets/icons/react.svg';
import java from  '../assets/icons/java.svg';
import python from '../assets/icons/python.svg'
import Bar from './bar';

const languages = [
    {
        icon: python,
        name: 'Python',
        level: '45'
    },
    {
        icon: java,
        name: 'Java',
        level: '60'
    },
    {
        icon: react,
        name: 'react',
        level: '80'
    },
    {
        icon: react,
        name: 'Node.js',
        level: '60'
    },
    {
        icon: react,
        name: 'Django',
        level: '80'
    },
    {
        icon: react,
        name: 'Serverless',
        level: '80'
    }
]

const tools = [
    {
        icon: react,
        name: 'AWS',
        level: '85'
    },
    {
        icon: react,
        name: 'Pyspark',
        level: '45'
    },
    {
        icon: react,
        name: 'Tensorflow',
        level: '60'
    },
    {
        icon: react,
        name: 'Mongo',
        level: '45'
    },
    {
        icon: react,
        name: 'Mysql',
        level: '90'
    },
    {
        icon: react,
        name: 'Docker',
        level: '50'
    }

]


const Resume = () => {
    return (
        <div className="container resume">
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
                            University of Cincinnati (2019-2020)
                        </p>
                        <p className="resume-card__details">Completed Masters in Computer Engineering from University of Cincinnati.</p>
                        <p className="resume-card__name">
                            CVR College of Engineering (2012-2016)
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
                            Y apps Lab (May - Nov 2020)
                        </p>
                        <p className="resume-card__details">Worked as Backend Developer for Onepot Application.</p>
                        <h5 className="resume-card__title">
                            Data Science Intern
                        </h5>
                        <p className="resume-card__name">
                            Cincinnati Children Medical Center (Jan - June 2020)
                        </p>
                        <p className="resume-card__details">Worked to find impact of Chemotherapy using data analytics.</p>
                        <h5 className="resume-card__title">
                            Software Development Analyst
                        </h5>
                        <p className="resume-card__name">
                            Ntt Data (Oct 2016 - Jul 2019)
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
        </div>
    );
};

export default Resume;
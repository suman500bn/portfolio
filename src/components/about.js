import React from 'react';
import api from '../assets/icons/api.svg';
import Skillcard from './skillcard';

const skills = [
    {
        icon: api,
        title: "Backend Development",
        about: "Experienced in developing scalable applications using Node.js,Django with competitive coding style",
    },
    {
        icon: api,
        title: "Cloud Development",
        about: "Experienced AWS developer and Azure Certified.Configured and Deployed applications",
    },
    {
        icon: api,
        title: "Data Engineer",
        about: "Built Data pipelines and scheduled ETL jobs.Knowledgable in Hadoop,Spark,Informatica,Airflow",
    },
    {
        icon: api,
        title: "Machine Learning",
        about: "Developed and deployed Machine learning algorithms like personalized recommendations,content filtering",
    },
    {
        icon: api,
        title: "Frontend Development",
        about: "I can build a beautiful and scalable SPA using HTML, CSS ,Bootstrap and React.js.",
    },
    {
        icon: api,
        title: "Dev Ops",
        about: "Maintained CI/CD pipelines,integrated log collection and Network Security in applications",
    },

]

const About = () => {
    return (
        <div className="about">
            <h6 className="about__intro">
                 Dedicated IT professional with 4 years of experience in Building Data pipelines, predictive analytics, Machine Learning,Full Stack Development,Networking. 
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

        </div>
    );
};

export default About;
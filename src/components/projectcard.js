import React from 'react';
//import github from '../assets/icons/github.svg'
const ProjectCard = ({ project: { name, image, deployed_url, github_url } }) => {
    return (
        <div className="projectrCard col-md-6 col-lg-4 my-2">
            <figure className="projectCard__wrapper">
                <a>
                    <img src={image} alt={name} className="projectCard__image" />
                </a>
                <div className="projectCard__title">
                    
                    {name}
                </div>
            </figure>

        </div>
    );
};

/*
inside projectcard wrapper <a href={deployed_url} target="_blank">
<a href={github_url} target="_blank">
                        <img src={github} alt="github link" className="projectCard__icon" />
                    </a>
 */

export default ProjectCard;
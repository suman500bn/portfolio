import React, { useState } from 'react';
import data_projects from './data/projects_data';
import ProjectCard from './projectcard';
import { motion } from 'framer-motion';


const Projects = () => {
    const [projects, setProjects] = useState(data_projects)

    /*const handleFilterCategory = (name) => {
        const new_array = data_projects.filter(project => project.category.includes(name))
        setProjects(new_array)
    }*/

    const project_variant = {
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
        <motion.div className="container projects"
            variants={project_variant}
            initial= 'hidden'
            animate='visible'
            >
            
            <div className="row">

                {
                    projects.map(project =>
                        <ProjectCard key={project.name} project={project} />)
                }
            </div>
        </motion.div>
    );
};

export default Projects;

/*after motion.div
<div className="projects__navbar">
                <div onClick={() => setProjects(data_projects)}>All</div>
                <div onClick={() => handleFilterCategory('react.js')}>React</div>
                <div onClick={() => handleFilterCategory('mongoDB')}>MongoDB</div>
                <div onClick={() => handleFilterCategory('node.js')}>Node</div>
                <div onClick={() => handleFilterCategory('vanilla')}>Vanilla</div>
            </div>*/
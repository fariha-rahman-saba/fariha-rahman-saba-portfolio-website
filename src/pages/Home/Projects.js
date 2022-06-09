import React from 'react';
import './styles/projects.css';
import project1 from '../../assets/screenshots/proj1.PNG';
import project2 from '../../assets/screenshots/proj2.PNG';
import project3 from '../../assets/screenshots/proj3.PNG';
import { useNavigate } from 'react-router-dom';

const Projects = () => {

    const navigate = useNavigate();
    const goToProjects = () => {
        navigate(`/my-projects/`);
    };

    return (
        <div className='mt-20'>
            <h1 className='text-3xl'>My Recent Work</h1>
            <p className='text-xl'>Here are a few design projects I've worked on recently. Want to see more? <span >My Projects.</span></p>
            <div className='project'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={project1} alt="project 1" /></figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Tool Mania</h2>
                        <p>An online tool manufacturer website</p>
                        <div className="card-actions justify-center mt-5">
                            <button onClick={goToProjects} className="btn ml-2">Details <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16" >
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                            </svg></button>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={project2} alt="project 1" /></figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Book Mania</h2>
                        <p>An online book warehouse management system</p>
                        <div className="card-actions justify-center">
                            <button onClick={goToProjects} className="btn ml-2">Details <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16" >
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                            </svg></button>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={project3} alt="project 1" /></figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Code with Saba</h2>
                        <p>An online independent course selling website</p>
                        <div className="card-actions justify-center mt-5">
                            <button onClick={goToProjects} className="btn ml-2">Details <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16" >
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                            </svg></button>
                        </div>
                    </div>
                </div>

                {/* <button onClick={goToProjects} className="btn btn-warning mt-10 ml-2  ">Browse more projects <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                </svg></button> */}
            </div>
        </div>

    );
};

export default Projects;
import React from 'react';
import './styles/projects.css';

const Projects = () => {
    return (
        <div className='mt-20'>
            <h1>My Recent Work</h1>
            <p>Here are a few design projects I've worked on recently. Want to see more? <span >My Projects.</span></p>
            <div className='project'>
                <div className="card w-96 bg-primary text-primary-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Tool Mania</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium laborum optio, tempore iure pariatur tenetur consectetur quibusdam repudiandae consequuntur dolorem enim aspernatur fugit? Temporibus, ducimus?</p>
                        <div className="card-actions justify-center">
                            <button className="btn ">Visit Website <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16" className='ml-2'>
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                            </svg></button>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-primary text-primary-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Book Mania</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores alias blanditiis cumque sit tempora nisi! Dolore odio dolor corrupti, quibusdam laboriosam tempore aspernatur provident, eligendi itaque fugit, dolorem aperiam neque?</p>
                        <div className="card-actions justify-center">
                            <button className="btn ">Visit Website <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16" className='ml-2'>
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                            </svg></button>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-primary text-primary-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Code with Saba</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores similique neque repellendus pariatur nobis quisquam praesentium excepturi dolores facilis ullam ipsa voluptatum, earum nostrum itaque, facere dicta libero sit animi, aliquid officiis aut at? Eius?</p>
                        <div className="card-actions justify-center">
                            <button className="btn ">Visit Website <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16" className='ml-2'>
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                            </svg></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Projects;
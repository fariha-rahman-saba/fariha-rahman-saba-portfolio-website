import React from 'react';
import project1 from '../assets/screenshots/proj1.PNG';
import project1_ss1 from '../assets/screenshots/proj1_ss1.PNG';
import project1_ss2 from '../assets/screenshots/proj1_ss2.PNG';
import project1_ss3 from '../assets/screenshots/proj1_ss3.PNG';
import project2 from '../assets/screenshots/proj2.PNG';
import project3 from '../assets/screenshots/proj3.PNG';
import './styles/myprojects.css';

const MyProjects = () => {
    return (

        <div className='my-projects mt-10 mb-20'>
            <h1 className='text-3xl font-bold'>Tool Mania</h1>

            <div class="card lg:card-side bg-base-100   ">
                <figure className='w-88'>
                    <img src={project1} alt="Album"
                    />

                </figure>
                <div class="card-body items-center text-center">
                    {/* <h2 class="card-title">Tool Mania</h2> */}
                    <h4 class="text-xl font-bold">Details:</h4>
                    <ul>
                        <li>A responsive online tool manufacturer website with email and password as well as Google
                            authentication.</li>
                        <li>User can sign in as admin or as a normal user. With admin role user can access special
                            functionalities. Admin can add products, make other users admin, manage products etc.</li>
                        <li>User can add reviews, subscribe for newsletters, order products, cancel orders, make
                            payments, see order history, update profile and many other functionalities.</li>

                    </ul>
                    <p className='font-bold'>A list of technologies used within the project:</p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>ReactJS</li>
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                        <li>MongoDB</li>
                        <li>Firebase</li>
                    </ul>
                    <div class="card-actions justify-center">
                        <button class="btn btn-accent btn-sm text-white">Live site</button>
                        <button class="btn btn-accent btn-sm text-white">Client side code</button>
                        <button class="btn btn-accent btn-sm text-white">Server side code</button>
                    </div>
                </div>

            </div>
            <h4 class="text-xl">Screenshots</h4>
            <div className='screenshot'>

                <img src={project1_ss1} alt="Album"
                />
                <img src={project1_ss2} alt="Album"
                />
                <img src={project1_ss3} alt="Album"
                />
            </div>


        </div>
    );
};

export default MyProjects;
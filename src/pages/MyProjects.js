import React from 'react';
import project1 from '../assets/screenshots/proj1.PNG';
import project1_ss1 from '../assets/screenshots/proj1_ss1.PNG';
import project1_ss2 from '../assets/screenshots/proj1_ss2.PNG';
import project1_ss3 from '../assets/screenshots/proj1_ss3.PNG';
import project2 from '../assets/screenshots/proj2.PNG';
import project2_ss1 from '../assets/screenshots/proj2_ss1.PNG';
import project2_ss2 from '../assets/screenshots/proj2_ss2.PNG';
import project2_ss3 from '../assets/screenshots/proj2_ss3.PNG';
import project3 from '../assets/screenshots/proj3.PNG';
import project3_ss1 from '../assets/screenshots/proj3_ss1.PNG';
import project3_ss2 from '../assets/screenshots/proj3_ss2.PNG';
import project3_ss3 from '../assets/screenshots/proj3_ss3.PNG';
import './styles/myprojects.css';

const MyProjects = () => {
    return (

        <div className='my-projects mt-10 mb-20'>

            <h1 className='text-3xl font-bold'>Tool Mania</h1>

            <div className="card lg:card-side bg-base-100   ">
                <figure className='w-88'>
                    <img src={project1} alt="Album"
                    />

                </figure>
                <div className="card-body items-center text-center">

                    <h4 className="text-xl font-bold">Details:</h4>
                    <ul className='list-disc'>
                        <li>A responsive online tool manufacturer website with email and password as well as Google
                            authentication.</li>
                        <li>User can sign in as admin or as a normal user. With admin role user can access special
                            functionalities. Admin can add products, make other users admin, manage products etc.</li>
                        <li>User can add reviews, subscribe for newsletters, order products, cancel orders, make
                            payments, see order history, update profile and many other functionalities.</li>
                        <li>I have created private routes: add items, manage inventory, my items which we cannot access without login.</li>
                        <li>There is a page called subscribe where anyone can subscribe for newsletters.</li>

                    </ul>
                    <p className='font-bold'>A list of technologies used within the project:</p>
                    <ul className='list-disc'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>ReactJS</li>
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                        <li>MongoDB</li>
                        <li>Firebase</li>
                    </ul>
                    <div className="card-actions justify-center">
                        <a href="https://tools-manufacturer-2992e.web.app/" target="_blank"><button className="btn btn-accent btn-sm text-white">Live site</button></a>
                        <a href="https://github.com/fariha-rahman-saba/manufacturer-website-client-side" target="_blank"><button className="btn btn-accent btn-sm text-white">Client side code</button></a>
                        <a href="https://github.com/fariha-rahman-saba/manufacturer-website-server-side" target="_blank"><button className="btn btn-accent btn-sm text-white">Server side code</button></a>
                    </div>
                </div>

            </div>
            <h4 className="text-xl">Screenshots</h4>
            <div className='screenshot'>

                <img src={project1_ss1} alt="Album"
                />
                <img src={project1_ss2} alt="Album"
                />
                <img src={project1_ss3} alt="Album"
                />
            </div>


            <h1 className='text-3xl font-bold mt-20'>Book Mania</h1>

            <div className="card lg:card-side bg-base-100   ">
                <figure className='w-88'>
                    <img src={project2} alt="Album"
                    />

                </figure>
                <div className="card-body items-center text-center">

                    <h4 className="text-xl font-bold">Details:</h4>
                    <ul className='list-disc'>
                        <li>A responsive online book inventory management website with email and password as well
                            as Google authentication.</li>
                        <li>After creating an account user can add books, manage books, see their added books, delete
                            books, manage inventory, update stock, deliver books etc.</li>
                        <li>User can subscribe for newsletters and only delete the book that was added by the user but
                            he can see all the books added by other users as well.</li>
                        <li>I have created private routes which a user cannot access without login.</li>


                    </ul>
                    <p className='font-bold'>A list of technologies used within the project:</p>
                    <ul className='list-disc'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>ReactJS</li>
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                        <li>MongoDB</li>
                        <li>Firebase</li>
                    </ul>
                    <div className="card-actions justify-center">
                        <a href="https://book-inventory-568ec.web.app/" target="_blank"><button className="btn btn-accent btn-sm text-white">Live site</button></a>
                        <a href="https://github.com/fariha-rahman-saba/warehouse-management-client-side" target="_blank"><button className="btn btn-accent btn-sm text-white">Client side code</button></a>
                        <a href="https://github.com/fariha-rahman-saba/warehouse-management-server-side" target="_blank"><button className="btn btn-accent btn-sm text-white">Server side code</button></a>
                    </div>
                </div>

            </div>
            <h4 className="text-xl font-bold mt-5 ml-5">Screenshots</h4>
            <div className='screenshot ml-5'>

                <img src={project2_ss1} alt="Album"
                />
                <img src={project2_ss2} alt="Album"
                />
                <img src={project2_ss3} alt="Album"
                />
            </div>

            <h1 className='text-3xl font-bold mt-20'>Code with Saba</h1>

            <div className="card lg:card-side bg-base-100   ">
                <figure className='w-88'>
                    <img src={project3} alt="Album"
                    />

                </figure>
                <div className="card-body items-center text-center">

                    <h4 className="text-xl font-bold">Details:</h4>
                    <ul className='list-disc'>
                        <li>A responsive independent online course selling website with email and password as well
                            as Google authentication.</li>
                        <li>User can browse courses of the owner and see the reviews of the buyers.</li>
                        <li>User can read blogs and see about page of the owner.</li>
                        <li>User can read blogs and see about page of the owner.</li>
                        <li>I have also created a 404 route.</li>

                    </ul>
                    <p className='font-bold'>A list of technologies used within the project:</p>
                    <ul className='list-disc'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>ReactJS</li>
                        <li>Firebase</li>
                    </ul>
                    <div className="card-actions justify-center">
                        <a href="https://independent-service-prov-8d2df.web.app/" target="_blank"><button className="btn btn-accent btn-sm text-white">Live site</button></a>
                        <a href="https://github.com/fariha-rahman-saba/independent-service-provider" target="_blank"><button className="btn btn-accent btn-sm text-white">Client side code</button></a>

                    </div>
                </div>

            </div>
            <h4 className="text-xl font-bold mt-5 ml-5">Screenshots</h4>
            <div className='screenshot ml-5'>

                <img src={project3_ss1} alt="Album"
                />
                <img src={project3_ss2} alt="Album"
                />
                <img src={project3_ss3} alt="Album"
                />
            </div>

        </div>
    );
};

export default MyProjects;
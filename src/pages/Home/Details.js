import React from 'react';
import './styles/home.css';

const Details = () => {
    return (
        <div className='detail'>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <figure className="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-code-slash" viewBox="0 0 16 16">
                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                    </svg>
                </figure>
                <div className="card-body items-center text-center">
                    <h4 className="card-title">Junior Web Developer</h4>
                    <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                    <p>Languages I speak:</p>
                    <p>HTML, Pug, Slim, CSS, Sass, Less</p>
                    <p>Dev Tools:</p>
                    <p>Atom, Bitbucket, Bootstrap, Bulma, Codekit, Codepen, Github, Gitlab, Terminal</p>

                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-book-half" viewBox="0 0 16 16">
                        <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                    </svg>
                </figure>
                <div className="card-body items-center text-center">
                    <h4 className="card-title">Student</h4>
                    <p>I genuinely care about people, and love helping fellow designers work on their craft.</p>
                    <p>Experiences I draw from:</p>
                    <p>UX/UI, Product design, Freelancing</p>
                    <p>Mentor Stats:</p>
                    <p>5 years experience
                        26 short courses
                        42 bootcamps
                        125+ students
                        1,400+ mentor sessions
                        60+ group critiques
                        12,000+ comments</p>
                </div>
            </div>
        </div>
    );
};

export default Details;
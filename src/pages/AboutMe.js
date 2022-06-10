import React from 'react';

const AboutMe = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                {/* <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" /> */}
                <div>
                    <h1 className="text-5xl font-bold">Hi, This is Fariha Rahman Saba</h1>
                    <h3 className="text-3xl font-bold">Junior Web Developer and a Student</h3>
                    <p className="py-6 text-xl font-bold">I am currently studying undergrad Computer Science and Engineering 3rd year at Jahangirnagar University.</p>
                    <p>Beside studying I like to work on different web development project.</p>
                    <p>My hobbies are traveling and reading.</p>

                </div>
            </div>
        </div>
    );
};

export default AboutMe;
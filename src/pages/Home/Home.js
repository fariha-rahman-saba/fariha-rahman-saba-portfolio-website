import React from 'react';
import AboutMe from './AboutMe';
import Banner from './Banner';
import Details from './Details';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutMe />
            <Details />
            <Projects />
        </div>
    );
};

export default Home;
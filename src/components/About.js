import React from "react";
import "./css/About.css";

const About = () => {
    return ( 
        <>


        
        <section>
            <div className="about-grid">
                <div className="about-text">
                    <p>Hello,My name is
                        <p>Mallela <normal>SAI SRIHITHA,</normal>
                            <p>I'am a FullStack Developer and this is my <normal>PORTFOLIO</normal> </p>
                            </p></p>
                    
                </div>
                <div className="about-image">
                    <img src="/images/hi.jpg" alt="avatar"/>
                </div>
            </div>
            
        </section>
        <section>
                <div className="custom-section  text-white p-5 mt-4">
                    <h3>About <normal>Me</normal></h3>
                    <p>
                        Hi, I'm <span className="fw-normal">Sai Srihitha</span>, a dedicated <span className="fw-normal">Full Stack Developer</span> student in Computer Science from Keshav Memorial Institute of Technology.
                        With over 1 year of experience, I specialize in creating dynamic and responsive web applications using modern front-end frameworks like <span className="fw-normal">React</span>.
                        Alongside robust <span className="fw-normal">back-end solutions with Node.js and Express</span>, I am passionate about coding, continuous learning, and staying updated with the latest technology trends.
                        My goal is to deliver high-quality, user-friendly solutions that solve real-world problems. When I'm not coding, I enjoy contributing to open-source projects and <span className="fw-normal">exploring new tech innovations</span>.
                    </p>
                </div>
        </section>

        </>

        
        

     );
}
 
export default About;
import React from 'react';

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">My Skills</span>
                    <h2 className="section-title">Skills That Power My Work</h2>
                    <div className="section-line"></div>
                </div>
                <div className="skills-grid">
                    <div className="skill-card">
                        <div className="skill-icon">
                            <i className="fab fa-html5"></i>
                        </div>
                        <h3>Python</h3>
                        <div className="skill-bar">
                            <div className="skill-progress" style={{width: "95%"}}></div>
                        </div>
                        <span className="skill-percent">Intermediate</span>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon">
                            <i className="fab fa-css3-alt"></i>
                        </div>
                        <h3>Machine Learning</h3>
                        <div className="skill-bar">
                            <div className="skill-progress" style={{width: "90%"}}></div>
                        </div>
                        <span className="skill-percent">Intermediate</span>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon">
                            <i className="fab fa-js-square"></i>
                        </div>
                        <h3>Deep Learning</h3>
                        <div className="skill-bar">
                            <div className="skill-progress" style={{width: "88%"}}></div>
                        </div>
                        <span className="skill-percent">Currently Running</span>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon">
                            <i className="fab fa-react"></i>
                        </div>
                        <h3>NLP</h3>
                        <div className="skill-bar">
                            <div className="skill-progress" style={{width: "85%"}}></div>
                        </div>
                        <span className="skill-percent">Intermediate</span>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon">
                            <i className="fab fa-php"></i>
                        </div>
                        <h3>Power BI</h3>
                        <div className="skill-bar">
                            <div className="skill-progress" style={{width: "82%"}}></div>
                        </div>
                        <span className="skill-percent">Intermediate</span>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon">
                            <i className="fab fa-node-js"></i>
                        </div>
                        <h3>MySQL</h3>
                        <div className="skill-bar">
                            <div className="skill-progress" style={{width: "80%"}}></div>
                        </div>
                        <span className="skill-percent">Intermediate</span>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon">
                            <i className="fas fa-database"></i>
                        </div>
                        <h3>R</h3>
                        <div className="skill-bar">
                            <div className="skill-progress" style={{width: "85%"}}></div>
                        </div>
                        <span className="skill-percent">Intermediate</span>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon">
                            <i className="fab fa-figma"></i>
                        </div>
                        <h3>FastAPI</h3>
                        <div className="skill-bar">
                            <div className="skill-progress" style={{width: "78%"}}></div>
                        </div>
                        <span className="skill-percent">Intermediate</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;

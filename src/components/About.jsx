import React from 'react';

const About = () => {
    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">About Me</span>
                    <h2 className="section-title">Passionate Data Science</h2>
                    <div className="section-line"></div>
                </div>
                <div className="about-grid">
                    <div className="about-image-col">
                        <div className="about-image-wrapper">
                            <div className="about-placeholder">
                                <i className="fas fa-code"></i>
                            </div>
                            <div className="experience-badge">
                                <span className="exp-number">3</span>
                                <span className="exp-text">Months of<br/>Experience</span>
                            </div>
                        </div>
                    </div>
                    <div className="about-content-col">
                        <h3 className="about-subtitle">
                            I build things for the <span className="highlight">Data Science</span>
                        </h3>
                        <p className="about-text">
                            I am a Data Science student with a strong interest in Machine Learning, Deep Learning, and Natural Language Processing. 
                            I enjoy turning data into meaningful insights and building intelligent solutions to solve real-world problems.
                        </p>
                        <p className="about-text">
                            Currently, I am enhancing my skills in Python, SQL, and web technologies like Fast API,
                            while working on practical projects to strengthen my understanding of data-driven systems.
                        </p>
                        <div className="about-info-grid">
                            <div className="info-item">
                                <i className="fas fa-user"></i>
                                <div>
                                    <span className="info-label">Name</span>
                                    <span className="info-value">Himanshu Bhardwaj</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-envelope"></i>
                                <div>
                                    <span className="info-label">Email</span>
                                    <span className="info-value">bhardwajhimanshu7686@gmail.com</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <div>
                                    <span className="info-label">Location</span>
                                    <span className="info-value">Jaipur, Rajasthan</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-briefcase"></i>
                                <div>
                                    <span className="info-label">Status</span>
                                    <span className="info-value available">Pursuing College</span>
                                </div>
                            </div>
                        </div>
                        <a href="/Himanshu Bhardwaj_CV.pdf" download className="btn btn-primary">
                            <span>Download CV</span>
                            <i className="fas fa-download"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

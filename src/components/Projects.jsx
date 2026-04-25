import React, { useState } from 'react';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const handleFilter = (category) => {
        setFilter(category);
    };

    return (
        <section className="projects section" id="projects">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">My Work</span>
                    <h2 className="section-title">End-To-End Projects</h2>
                    <div className="section-line"></div>
                </div>
                <div className="project-filters">
                    <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => handleFilter('all')}>All</button>
                    <button className={`filter-btn ${filter === 'web' ? 'active' : ''}`} onClick={() => handleFilter('web')}>Deploy Project</button>
                    <button className={`filter-btn ${filter === 'app' ? 'active' : ''}`} onClick={() => handleFilter('app')}>PowerBI Project</button>
                    <button className={`filter-btn ${filter === 'ui' ? 'active' : ''}`} onClick={() => handleFilter('ui')}>MySQL Project</button>
                </div>
                <div className="projects-grid">
                    
                    {/* Project 1 */}
                    {(filter === 'all' || filter === 'web') && (
                        <div className="project-card">
                            <div className="project-image">
                                <div className="project-placeholder">
                                    <i className="fas fa-shopping-cart"></i>
                                </div>
                                <div className="project-overlay">
                                    <a href="#" className="project-link"><i className="fas fa-link"></i></a>
                                    <a href="#" className="project-link"><i className="fab fa-github"></i></a>
                                </div>
                            </div>
                            <div className="project-info">
                                <span className="project-category">Web Design</span>
                                <h3>Disease Prediction System</h3>
                                <p>Predict diseases using symptoms with Machine Learning models</p>
                                <div className="project-tech">
                                    <span>Python</span>
                                    <span>Scikit-Learn</span>
                                    <span>FastAPI</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Project 2 */}
                    {(filter === 'all' || filter === 'app') && (
                        <div className="project-card">
                            <div className="project-image">
                                <div className="project-placeholder">
                                    <i className="fas fa-mobile-alt"></i>
                                </div>
                                <div className="project-overlay">
                                    <a href="#" className="project-link"><i className="fas fa-link"></i></a>
                                    <a href="#" className="project-link"><i className="fab fa-github"></i></a>
                                </div>
                            </div>
                            <div className="project-info">
                                <span className="project-category">PowerBI</span>
                                <h3>Housing Price</h3>
                                <p>Complete make a dashboard using card,scatter,line</p>
                                <div className="project-tech">
                                    <span>PowerBI</span>
                                    <span>Using Measures</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Project 3 */}
                    {(filter === 'all' || filter === 'ui') && (
                        <div className="project-card">
                            <div className="project-image">
                                <div className="project-placeholder">
                                    <i className="fas fa-palette"></i>
                                </div>
                                <div className="project-overlay">
                                    <a href="#" className="project-link"><i className="fas fa-link"></i></a>
                                    <a href="#" className="project-link"><i className="fab fa-github"></i></a>
                                </div>
                            </div>
                            <div className="project-info">
                                <span className="project-category">MySQL</span>
                                <h3>Data Analysis Project</h3>
                                <p>Analyze real-world data using complex SQL queries</p>
                                <div className="project-tech">
                                    <span>MySQL</span>
                                    <span>SQL</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Project 4 */}
                    {(filter === 'all' || filter === 'web') && (
                        <div className="project-card">
                            <div className="project-image">
                                <div className="project-placeholder">
                                    <i className="fas fa-blog"></i>
                                </div>
                                <div className="project-overlay">
                                    <a href="#" className="project-link"><i className="fas fa-link"></i></a>
                                    <a href="#" className="project-link"><i className="fab fa-github"></i></a>
                                </div>
                            </div>
                            <div className="project-info">
                                <span className="project-category">Web Design</span>
                                <h3>NLP Chatbot</h3>
                                <p>Chatbot using Natural Language Processing techniques</p>
                                <div className="project-tech">
                                    <span>Python</span>
                                    <span>nltk</span>
                                    <span>Transformers</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Project 5 */}
                    {(filter === 'all' || filter === 'app') && (
                        <div className="project-card">
                            <div className="project-image">
                                <div className="project-placeholder">
                                    <i className="fas fa-comments"></i>
                                </div>
                                <div className="project-overlay">
                                    <a href="#" className="project-link"><i className="fas fa-link"></i></a>
                                    <a href="#" className="project-link"><i className="fab fa-github"></i></a>
                                </div>
                            </div>
                            <div className="project-info">
                                <span className="project-category">PowerBI</span>
                                <h3>Netflix Dashboard</h3>
                                <p>Check Real Time Trend and Find Insights</p>
                                <div className="project-tech">
                                    <span>PowerBI</span>
                                    <span>Using Measures</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Project 6 */}
                    {(filter === 'all' || filter === 'ui') && (
                        <div className="project-card">
                            <div className="project-image">
                                <div className="project-placeholder">
                                    <i className="fas fa-store"></i>
                                </div>
                                <div className="project-overlay">
                                    <a href="#" className="project-link"><i className="fas fa-link"></i></a>
                                    <a href="#" className="project-link"><i className="fab fa-github"></i></a>
                                </div>
                            </div>
                            <div className="project-info">
                                <span className="project-category">MySQL</span>
                                <h3>Analysis Coming Soon..</h3>
                                <p>Coming Soon..</p>
                                <div className="project-tech">
                                    <span>...</span>
                                    <span>...</span>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
};

export default Projects;

import React, { Component } from 'react';

export default class Skills extends Component{
    render() {
      return (
  
        <section className="colorlib-skills" data-section="skills">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">My Specialty</span>
                <h2 className="colorlib-heading animate-box">My Skills</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                <p>Software engineering is a fast changing field, in order to keep up with the fast pace of the field I am a strong believer in constant learning.</p><p> Listed below are some of my skills;</p>
              </div>
              <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                <div className="progress-wrap">
                  <h3>NodeJs</h3>
                  <div className="progress">
                    <div className="progress-bar color-1" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                      <span>80%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                <div className="progress-wrap">
                  <h3>React</h3>
                  <div className="progress">
                    <div className="progress-bar color-2" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}}>
                      <span>75%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                <div className="progress-wrap">
                  <h3>CI/CD</h3>
                  <div className="progress">
                    <div className="progress-bar color-3" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}}>
                      <span>85%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                <div className="progress-wrap">
                  <h3>Angular</h3>
                  <div className="progress">
                    <div className="progress-bar color-4" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>
                      <span>90%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                <div className="progress-wrap">
                  <h3>MongoDB</h3>
                  <div className="progress">
                    <div className="progress-bar color-5" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}>
                      <span>70%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                <div className="progress-wrap">
                  <h3>Postgres</h3>
                  <div className="progress">
                    <div className="progress-bar color-6" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                      <span>80%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  };
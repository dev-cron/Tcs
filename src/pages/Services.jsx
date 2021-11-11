import React from 'react'
import "bulma/css/bulma.min.css";

const Services = () => {
   return (
        
  <section className="section" id="services">
    <div className="section-heading has-text-centered">
      <h3 className="title is-2">Services</h3>
      <h4 className="subtitle is-5">What can I do for you?</h4>
    </div>
    <div className="container">
      <div className="columns">
        <div className="column">
          <div className="box">
            <div className="content">
              <h4 className="title is-5">Proof checking</h4>
              I'll tell you if you are buying the right thing for your need.
            </div>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <div className="content">
              <h4 className="title is-5">Can purchase the right product on your behalf</h4>
              I'll purchase the thing for you and it will get deliverd for you.
            </div>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <div className="box">
            <div className="content">
              <h4 className="title is-5">List curation</h4>
              I'll curate a nice list of choices you can choose from and buy for yourself.
            </div>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <div className="content">
              <h4 className="title is-5">Personal guide</h4>
              I'll guide you through at that instant.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}

export default Services;

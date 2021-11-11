import React from "react";
import logo from "./img.png";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="section-heading pb-3">
        <h3 className="title is-2 has-text-centered">About Me</h3>
        <div className="container">
          <h4 className="title is-5 has-text-centered">"<em>A self proclamied tech connoisseur</em>"</h4>
        </div>
      </div>

      <div className="columns is-3">
        <div className="column">
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img
                  src={logo}
                  alt="Placeholder"
                />
              </figure>
            </div>
          </div>
        </div>
        <div className="column" style={{marginTop:125}}>
          <div className="card">
            <div className="card-content skills-content">
            <p className="subtitle section has-text-centered">
            A Tech enthusiast with more than <strong> 4 years </strong> of
            well-rounded experience in the feild of 
            <strong> Technology</strong>. Extensive knowledge of modern tech
            and love for <strong>Printed circuit boards</strong>. Helping people
            to find or upgrade their gadget, as well as being efficient and budget
            friendly in this vast sea of bad tech.
          </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

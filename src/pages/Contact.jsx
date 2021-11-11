import React from 'react'


const Contact = () => {
    return (
        <section className="section" id="contact">
    <div className="container">
      <div className="section-heading">
        <h3 className="title is-2">Contact</h3>
        <h4 className="subtitle is-5 ">Get in touch</h4>
      </div>
      <br/>
      <form 
      name="contact v1"
      method = "post"
      data-netlify = "true"
      onSubmit="submit">

      <div className="columns">
        <div className="column is-6 is-offset-3">
          <div className="box">
            <div className="field">
            
            <input type="hidden" name="form-name" value="contact v1"/>
              
            <label className="label">Name</label>
              <div className="control">
                <input className="input" type="text" placeholder="Full Name" name="Full-name"/>
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left">
                <input className="input" type="email" placeholder="Email input" name="email"/>
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea className="textarea" placeholder="Textarea" name="comments"/>
              </div>
            </div>

            <div className="field is-grouped itemcent" style={{justifyContent:'center'}}>
              <div className="control">
                <button 
                    type="submit"
                    className="button is-link is-large is-text-centered"
                    ><span className="icon">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span>Submit</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
  </section>
    )
}

export default Contact

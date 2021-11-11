import React ,{useEffect,useState} from "react";
import "bulma/css/bulma.min.css";

const Navbar = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  
  let Myname;
  if(offset>=700){
    Myname = <h1 className="navbar-item" style={{fontSize:20}}>Karan Vishwakarma</h1>
  }
  else{
    Myname = ""
  }

   function burger() {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#'+burger.dataset.target);
    burger.addEventListener('click', function(){
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
};


  return (
    <nav className="navbar is-link is-fixed-top">
      <div className="navbar-brand">
        {Myname}
        <div
          className="navbar-burger burger"
          data-target="navbarExampleTransparentExample"
          onClick={
            burger
          }
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item" href="#about">
            <span>About</span>
          </a>
          <a className="navbar-item" href="#services">
            <span>Services</span>
          </a>
          <a className="navbar-item" href="#contact">
            <span className="icon">
              <i className="fas fa-envelope"></i>
            </span>
            <span>Contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

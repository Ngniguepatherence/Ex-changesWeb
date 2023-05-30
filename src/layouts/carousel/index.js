import {NavLink} from 'react-router-dom';import Imag1 from '../../asset/images/accueilback.jpg';
import Imag2 from '../../asset/images/money-around-world.jpg';
import Imag3 from '../../asset/images/coins-paper-money-globe-white-statistic-form-background.jpg';
import '../../components/home/css1.css';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Carousele(){

    return( 
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imag1}
          alt="First slide"
        />
        <Carousel.Caption>
        <div className='Big_div'>
            <div className='para'>
            <p className='para1'>MyChange</p>
            <p className='para2'> Pour vos échanges de dévise....... </p>
            <p className='para2'> ........................................................... </p>
            </div>
            <div className='btnLogin'>
            <NavLink to={"/signin"} className="butts">Login</NavLink>
            <NavLink to={"/signup"} className="butts">Register</NavLink>
            </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image2"
          src={Imag2}
          alt="Second slide"
        />
        <Carousel.Caption>
        <div className='para'>
        <p className='paras1'>MyChange</p>
        <p className='para3'> Pour vos échanges de dévise....... </p>
        </div>
        <div className='btnLogin3'>
        <NavLink to={"/signin"} className="butt">Login</NavLink>
        <NavLink to={"/signup"} className="butt">Register</NavLink>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image2"
          src={Imag3}
          alt="Third slide"
        />

        <Carousel.Caption>
        <div className='cont'>
        <h1 className='acl'>Bienvenue !</h1>
          <div className='btnLogins'>
              <NavLink to={"/signin"} className="butt">Login</NavLink>
              <NavLink to={"/signup"} className="butt">Register</NavLink>
          </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );



}
export default Carousele;
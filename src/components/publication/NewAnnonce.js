import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css'
// import { NavLink } from 'react-router-dom';
import '../../components/private/privateHome/css.css';
import Sidebar from '../../layouts/sidebar';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox
}

from 'mdb-react-ui-kit';
// import Conversion from '../../../Conversion';
// import CurrencyProvider from '../../../context/CurrencyContext';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';


export default function privateHome() {
  return (
    <MDBContainer fluid className="p-0 my-0 content_b">
      <MDBRow>
        <MDBCol col='2' md='2'>
          <Sidebar/>
        </MDBCol>
        <MDBCol col='1' md='10'>
          <div className='nav-cont'>
            <i className="bi bi-list iconstyleMenu"></i>
            <div className='param'>
                <i className='bi bi-gear-fill iconstyle'></i>
                <p>Compte</p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
      </MDBContainer>
      )
}

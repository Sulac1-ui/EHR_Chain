import React from 'react';
import { Menu } from 'semantic-ui-react';
import Link from 'next/link'; 
import logo from './lg.png'



/*import logo from '../public/Patient Records.png';*/
const Header = () => {
  return (
    <>
    <div className="Main">
      <div className="Register">


        <div className="EHRchain">
          <img
            src='https://scontent.fktm6-1.fna.fbcdn.net/v/t1.15752-9/357330351_6566394126756962_6540851967248277045_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=XfZFYxUgMTQAX9KMtnE&_nc_oc=AQlBx0-PAMXNCU7k1HuH4Gyt-PvtMLfnRa9ilpSzVIGxly0I3afXhCucVRSvXBOKj7Y&_nc_ht=scontent.fktm6-1.fna&oh=03_AdR5ZqVonvGzhADHAhuyFBRL38aGLcTb4AKWPN6BJv7RLA&oe=64C7BF7E'
            height="80"
            className="d-inline-block align-top"
            alt="EHRChain logo"
          ></img>
        </div>
        </div>
        <div className="heading">
          <h1 style={{  fontWeight: 'bold' , marginLeft:'25rem', marginTop: '0px', marginBottom: '2px' }}> Welcome to EHRchain</h1>
          <h2 style={{  fontWeight: 'bold' , marginLeft:'15rem', marginTop:'2px', fontFamily:'Lato' }}>Transforming Healthcare with Blockchain Technology</h2>
        </div>
        </div>
      <Menu style={{ marginTop: '30px', marginBottom: '30px',backgroundColor:'#095B57' }}>
        <Link href="/">
          <a
            className="item"
            style={{ fontSize: '1.3rem', fontWeight: 'bold', color:'#ffff' }}
          >
            EHR Chain{' '}
          </a>
        </Link>

        <Menu.Menu position="right">
          <Link href="/medical-records">
            <a
              className="item"
              style={{ fontSize: '1.3rem', fontWeight: 'bold', color:'#ffff'}}
            >
             EHR Dashboard
            </a>
          </Link>
          <Link href="/network">
            <a
              className="item"
              style={{ fontSize: '1.3rem', fontWeight: 'bold', color:'#ffff' }}
            >
              ConnectDocs
            </a>
          </Link>
        </Menu.Menu>
      </Menu>
    </>
  );
};

export default Header;

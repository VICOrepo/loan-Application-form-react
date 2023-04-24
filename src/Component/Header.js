import React from 'react';
import {  Typography } from '@mui/material';
import logo from '/home/viraljain/Documents/loan-app-react/loan-app/src/image/logo-original.png';
const Header = () => {
  return (
        <Typography variant="h3" style= {{textAlign:'center' , color:"green", marginTop:"30px"}}>
          <img src={logo} alt="logo"/>
        </Typography>
    
  );
};

export default Header;





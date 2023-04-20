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




// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const bodyparser = require('body-parser');

// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 8000;

// app.use(cors());
// app.use(express.json());
// // Body-parser middleware
// app.use(bodyparser.urlencoded({ extended: false }))
// app.use(bodyparser.json())

// // const uri = process.env.ATLAS_URI;
// // mongoose.connect(uri);
// const connectDB = async () => {
//     const conn = await mongoose.connect(process.env.ATLAS_URI)
//     console.log(`MongoDB Connected: ${conn.connection.host}`)
//  }


// // const connection = mongoose.connection;
// // connection.once('open', ()=> {
// //     console.log("MongoDB database connection established successfully");
// // })

// // const userRouter = require('./routes/user');
// // app.use('/user',userRouter);
// connectDB()

// app.listen(port, () => {
//     console.log(`Server is running on port: ${port}`);
// });
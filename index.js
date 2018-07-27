const express = require('express');
const app=express();
const Joi=require('joi');
const home=require('./routes/home');
const coursepage=require('./routes/courses');

app.use(express.json());
app.use(express.urlencoded({extended:true})); //key:value
app.use(express.static('public'));
app.use('/',home);
app.use('/api',coursepage);

app.set('view engine','pug');
app.set('views','./views');


const port=process.env.port||3000;
app.listen(3000,() => console.log(`Listening to port ${port}`));
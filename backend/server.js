const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRouter = require('./routers/productRouter');
const languagesRouter = require('./routers/languagesRouter');
// const { notFound, errorHandler } = require('./middlewares/errorMiddlewares');
const path = require('path');

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

//error middlewares
//  app.use(notFound);
//  app.use(errorHandler);



 app.use('/api/product',productRouter);
 app.use('/api/languages',languagesRouter);

//  ----------- Deployemet ---------------

const __dirname1 = path.resolve();
if(process.env.NODE_ENV === 'production'){
 app.use(express.static(path.join(__dirname1,'/frontend/build')));
 app.get('*',(req,res)=>{
    res.send(path.resolve(__dirname1,'frontent','build','index.html'))
 })
}else{
    app.get('/',(req,res)=>{
        res.send('API is Running Successfully...');
     })
}

//  ----------- Deploymet ---------------
 const PORT = process.env.PORT || 8000;

 app.listen(PORT,console.log(`server is running at ${PORT}`));
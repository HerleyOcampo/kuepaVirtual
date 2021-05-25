const express= require ('express');
const app= express();
const morgan = require('morgan');
const path = require('path');
const {mongoose} = require('./database');
const cors = require('cors');

 //*******SETTINGS******************************************
 
 app.set('port', process.env.PORT || 5000);
 
  //*******Middlewares**************************************
  
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(cors());
  
   //*******Routes*******************************************
   
   app.use('/api/task',require('./routes/task.routes'));
   
   //*******Static Files*************************************
    
 
  app.use(express.static(path.join(__dirname,'public')));

   //*******Starting the Server******************************
     
app.listen(
    app.get('port'),()=>{
        console.log(`Server on port ${app.get('port')}`);
    }
    );

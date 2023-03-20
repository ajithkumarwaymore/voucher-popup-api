import app from './src/config/express.js';


const port = 3000;
app.listen(port,()=>{
    console.log(`The Application Listening On Port ${port}`)
})
import express from 'express';
import router from '../router/main.route.js';
import cors from 'cors'
const app = express();
const port = 3000;
const corsConfig = {
    origin:'*',
    method: ['GET','POST'],
    allowedHeaders: ["Content-Type", "Authorization"],

}

app.use(router)
app.use(cors(corsConfig))


export default app;

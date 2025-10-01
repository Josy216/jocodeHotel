import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import router from './route/router.js';
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors({
    origin:"https://jocode-hoteladmin.netlify.app",
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
    
}));
app.use(express.json());
app.use('/api', router);

app.get('/', (req, res)=>{
    res.send('Hello World!');
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});
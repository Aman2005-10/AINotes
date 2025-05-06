import express from 'express';
import mongoose from 'mongoose';
import { route } from './routes/route.js';

const app = express();
const port = 3000;
// Middleware
app.use(express.json());



app.get("/" , (req , res) => {
    res.send("Server Start");
});




mongoose.connect("mongodb://localhost:27017/AINotes" , {
    useNewUrlParser: true,
    useUnifiedTopology: true
    
}).then(() => {
    console.log("Connected to MongoDB");
    }).catch((err) =>
        {
            console.log(err);
            });

            route(app);

app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
    });

    
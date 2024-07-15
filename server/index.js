const express = require('express');
const dotenv = require("dotenv");
const connect = require('./config/database');
const cors = require('cors');
// routers
const router = require('./routes/authRoutes');
const productRouter = require('./routes/productsRoutes');
const categoryRouter = require('./routes/categoryRoutes');
const userRouter = require('./routes/userRoutes');


const cookieParser = require('cookie-parser');
dotenv.config();

const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}
));
app.use(express.json());

// auth routes
app.use('/api', router);
// user routes
app.use('/api', userRouter);
// product routes
app.use('/api', productRouter);
// category routes
app.use('/api', categoryRouter);


app.use(cookieParser());



const PORT = process.env.SERVER_PORT || 5000;

async function main() {
    await connect();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

main();

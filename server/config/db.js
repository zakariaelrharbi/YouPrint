const monggoose = require('mongoose');


const connectDB = async () => {
    try {
        await monggoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    } catch (err) {
       console.log(err); 
    }
};
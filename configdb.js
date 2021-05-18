const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true,
        useFindAndModify:false,
    })
      console.log('connected to db');  
    } catch (error) {
        console.error("couldn't connect"+error.message);
        process.exit(1);
    }
}

module.exports = connectDB;

//MONGO_URI=mongodb+srv://<username>:<pwd>@<mongourl>/<db>?retryWrites=true&w=majority
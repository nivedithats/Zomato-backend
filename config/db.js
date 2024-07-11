const mongoose = require('mongoose');


const connectDatabase = async ()=>{
    try {
        await mongoose.connect('mongodb+srv://bhaskarAntoty123:bhaskar3958@bhaskarantony.wagpkay.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log('mongoDB connected....');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}


module.exports = connectDatabase;
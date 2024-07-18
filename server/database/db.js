import mongoose from "mongoose"
const Connection = async(username,pwd) => {
    const URL= `mongodb+srv://${username}:${pwd}@crud-app.1rvkovo.mongodb.net/?retryWrites=true&w=majority&appName=crud-app
`;   
    try {
        await mongoose.connect(URL, {useUnifiedTopology:true,useNewUrlParser: true});
        console.log("DB connected successfully");
    } catch(error) {    
        console.log('Error while connecting with database ',error);
    }
}   
export default Connection;

const mongoose=require("mongoose");
const db=async ()=>{
try{
    
        const con=await mongoose.connect("mongodb://127.0.0.1:27017/bench");
        console.log("db connected");
    
}
catch(e){
console.log(e.message);

}}
module.exports=db;
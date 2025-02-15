const mangoose = require("mongoose")


const courseSchema = new mangoose.Schema({
    title:{type:String,required : true},
    description:{type:String,required : true},
    instruction:{type:mangoose.Schema.Types.ObjectId,ref :"User",required : true},
    price : {type : Number,default: 0},
    createdAt:{type:Date,default:Date.now},
});


module.export = mangoose.model("Course", courseSchema);
const mongoose = require('mongoose');
const {Schema} = mongoose;

const TaskSchema = new Schema({

    title:{type:String,required:true},
    description:{type:String,required:true}
})

TaskSchema.methods.toJSON=function(){
    const {__v,_id,...user}=this.toObject();
    user.id=_id;
    return user
}

module.exports=mongoose.model('Task',TaskSchema);
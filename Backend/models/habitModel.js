import mongoose from 'mongoose'


const habitSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    start:{
        type:Date,
        required:true
       
    },
    end:{
        type:Date,
        required:true
    },
    days: [{
        type: String,
        required:true
    }],
    text:{
        type:String,
        required:true
    },
    completedOn:{
        type:Date,
        
    },
        
    
},{
    timestamps:true,
})


const Habit =mongoose.model('Habit',habitSchema)
export default Habit
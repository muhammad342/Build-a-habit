import mongoose from 'mongoose'


const habitSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    start:{
        type:Object,
        required:true
       
    },
    end:{
        type:Object,
        required:true
    },
    days: [{
        type: String,
        required:true
    }]
        
    
},{
    timestamps:true,
})


const Habit =mongoose.model('Habit',habitSchema)
export default Habit
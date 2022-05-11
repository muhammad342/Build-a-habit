import asyncHandler from 'express-async-handler'
import Habit from '../models/habitModel.js'


const createHabit = asyncHandler( async(req,res)=>{

    const {name, start, end,days}=req.body

  

    const habit = await Habit.create({
        name,
        start,
         end,
         days,
    })
    if(habit){
        res.status(201).json({
            _id:habit._id,
            name:habit.name,
          start:habit.start,
          end:habit.end,
          days:habit.days
            
        })
    }
    else{
        res.status(404)
        throw new Error('Invalid Habit data')
    }

})



const getHabits = asyncHandler( async(req,res)=>{
    const habits = await Habit.find({})

    res.json(habits)
})


export { getHabits, createHabit}
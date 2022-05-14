import asyncHandler from 'express-async-handler'
import Habit from '../models/habitModel.js'


const createHabit = asyncHandler( async(req,res)=>{

    const {name, start, end,days,text,completedOn}=req.body

  

    const habit = await Habit.create({
        name,
        start,
         end,
         days,
         text,
         completedOn
    })
    if(habit){
        res.status(201).json({
            _id:habit._id,
            name:habit.name,
          start:habit.start,
          end:habit.end,
          days:habit.days,
          text:habit.text,
          completedOn:habit.completedOn
            
        })
    }
    else{
        res.status(404)
        throw new Error('Invalid Habit data')
    }

})

const updateHabit = asyncHandler(async (req, res) => {
    const {_id}=req.body
    const habit = await Habit.findById(_id);
  
    if (habit) {
      habit.completedOn = req.body.completedOn || habit.completedOn;
      
     
  
      const updatedHabit = await habit.save();
  
      res.json({
        _id: updatedHabit._id,
        name: updatedHabit.name,
        start: updatedHabit.start,
        end: updatedHabit.end,
        days: updatedHabit.days,
        text: updatedHabit.text,
        completedOn: updatedHabit.completedOn,

      });
    } else {
      res.status(404);
      throw new Error("Habit not found");
    }
  });

  const findHabitById = asyncHandler(async (req, res) => {
     
    const habit = await Habit.findById(req.params.id);

    if (habit) {
        res.json(habit);
    }
    else {
        throw new Error("Habit not Found")
    }

});
const getHabits = asyncHandler( async(req,res)=>{
    const habits = await Habit.find({})

    res.json(habits)
})


export { getHabits, createHabit,updateHabit,findHabitById}
import express from 'express'


import { getHabits, createHabit, updateHabit, findHabitById } from '../Controller/habitController.js'


const router =express.Router()


router.route('/create').post(createHabit)
router.route('/').get(getHabits)
router.route('/completed').put(updateHabit)
router.route('/today/:id').get(findHabitById)

export default router 
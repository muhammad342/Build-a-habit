import express from 'express'


import { getHabits, createHabit } from '../Controller/habitController.js'


const router =express.Router()


router.route('/create').post(createHabit)
router.route('/').get(getHabits)



export default router 
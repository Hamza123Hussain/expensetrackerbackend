import { Router } from 'express'
import { AddExpense } from '../../DB/AddExpense.js'
import { AddProject } from '../../DB/AddNewProject.js'

export const expenserouter = Router()
expenserouter.post('/AddExpense', AddExpense)
expenserouter.post('/AddProject', AddProject)

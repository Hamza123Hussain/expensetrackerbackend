import { Router } from 'express'
import { AddExpense } from '../../DB/AddExpense.js'
import { AddProject } from '../../DB/AddNewProject.js'
import { GetExpenses } from '../../DB/GetExpenseofProject.js'
import { GetProjects } from '../../DB/GetProjects.js'

export const expenserouter = Router()
expenserouter.post('/AddExpense', AddExpense)
expenserouter.post('/AddProject', AddProject)
expenserouter.get('/GetExpenses', GetExpenses)
expenserouter.get('/GetProjects', GetProjects)

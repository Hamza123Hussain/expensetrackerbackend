import { collection, getDocs } from 'firebase/firestore'
import { db } from '../FireBaseConfig.js'

export const GetExpenses = async (req, res) => {
  const { Project } = req.query // Extract module from route parameter

  try {
    // Reference to the module's test collection
    const ExpenseRef = collection(db, 'Projects', Project, 'Expenses')

    // Fetch all documents (Expenses) under this module
    const snapshot = await getDocs(ExpenseRef)

    // Array to hold the formatted test data
    const Expenses = []
    snapshot.forEach((doc) => {
      Expenses.push({ id: doc.id, ...doc.data() }) // Push test data with ID
    })

    // Send the Expenses as JSON
    res.status(200).json(Expenses)
  } catch (err) {
    console.error(err) // Log error
    res
      .status(500)
      .json({ success: false, message: 'Error fetching Expenses.' }) // Return error response
  }
}

import { addDoc, collection } from 'firebase/firestore'
export const AddReadingQuestion = async (req, res) => {
  try {
    // Destructure required fields from request body
    const { Project, expense, description } = req.body
    // Validate input
    if (!Project || !expense || !description) {
      return res
        .status(400)
        .json({ error: 'Missing required fields or invalid format.' })
    }
    // Create ExpenseDetails
    const ExpenseDetails = {
      expense,
      description,
    }

    const docRef = await addDoc(
      collection(DB, 'Expenses', Project),
      ExpenseDetails
    )
    // Return the new document ID
    res
      .status(201)
      .json({ message: 'Reading test added successfully', testId: docRef.id })
  } catch (error) {
    console.error('Error adding reading test:', error.message)
    res
      .status(500)
      .json({ error: 'Something went wrong while adding the reading test.' })
  }
}

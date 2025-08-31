import { collection, getDocs } from 'firebase/firestore'
import { db } from '../FireBaseConfig.js'

export const GetProjects = async (req, res) => {
  try {
    // Reference to the module's test collection
    const ProjectsRef = collection(db, 'Projects')

    // Fetch all documents (Projectss) under this module
    const snapshot = await getDocs(ProjectsRef)

    // Array to hold the formatted test data
    const Projectss = []
    snapshot.forEach((doc) => {
      Projectss.push({ id: doc.id, ...doc.data() }) // Push test data with ID
    })

    // Send the Projectss as JSON
    res.status(200).json(Projectss)
  } catch (err) {
    console.error(err) // Log error
    res
      .status(500)
      .json({ success: false, message: 'Error fetching Projectss.' }) // Return error response
  }
}

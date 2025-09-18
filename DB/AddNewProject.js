import { doc, setDoc } from 'firebase/firestore'
import { db } from '../FireBaseConfig.js'

export const AddProject = async (req, res) => {
  const { ProjectName, UserName } = req.body

  // Validation: ProjectName must be provided
  if (!ProjectName) {
    return res.status(400).json({ message: 'Project Name is required' })
  }

  try {
    // Create a reference with ProjectName as the document ID
    const ProjectRef = doc(db, 'Projects', ProjectName)

    // Save project data in Firestore
    await setDoc(ProjectRef, {
      ProjectName,
      createdAt: new Date().toISOString(),
      UserName,
    })

    return res.status(200).json({
      message: 'Project registered successfully',
      projectId: ProjectName, // using ProjectName as doc ID
    })
  } catch (error) {
    console.error('AddProject Error:', error)
    return res.status(500).json({ message: error.message })
  }
}

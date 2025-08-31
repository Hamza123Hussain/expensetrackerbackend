import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Auth, DB } from '../../../Config/FirebaseConfig.js'
import {
  doc,
  setDoc,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore'
export const UserSignup = async (req, res) => {
  const { ProjectName } = req.body
  if (ProjectName) {
    return res.status(400).json({ message: 'Project Name are required' })
  }
  try {
    // Save user data in Firestore
    const ProjectRef = doc(DB, 'Project', Project)
    await setDoc(ProjectRef, {
      ProjectName,
    })
    return res.status(200).json({
      message: 'Project registered successfully',
      userId: uid,
    })
  } catch (error) {
    console.error('Signup Error:', error)
    return res.status(500).json({ message: error.message })
  }
}

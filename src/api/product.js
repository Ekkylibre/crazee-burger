import { setDoc, doc } from 'firebase/firestore'
import { db } from './firebase-config'

export const syncBothMenu = (userId, menuUpdated) => { 
    const cachette = doc(db, "users", userId)

    const nourriture = {
        username: userId, 
        menu: menuUpdated,
    }
    setDoc(cachette, nourriture)
 }
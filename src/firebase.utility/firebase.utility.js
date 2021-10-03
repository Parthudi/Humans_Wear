import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAt7GGV3e1JwOP75ycsPyxOMq2XTDL0WoU",
    authDomain: "humanswear-db.firebaseapp.com",
    databaseURL: "https://humanswear-db.firebaseio.com",
    projectId: "humanswear-db",
    storageBucket: "humanswear-db.appspot.com",
    messagingSenderId: "977383835873",
    appId: "1:977383835873:web:177be0327509790cae4fa0",
    
  }

export const CreateUserProfileDocument = async (userAuth , additionalData) => {
  if(!userAuth) {
    return;
    }
      const userRef = firestore.doc(`users/${userAuth.uid}`)

      const snapshot = await userRef.get();

      if(!snapshot.exists) {
        const {displayName, email} = userAuth
        const createdAt  = new Date()

        try{
            userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
        } catch (error) {
          console.log('error creating user ' +error.message)
        }
      }
    return userRef
} 

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
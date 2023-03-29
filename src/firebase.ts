import { FirebaseError, initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTU4wol6wFTBf1KebN5Si5zsxR1YwZfZk",
    authDomain: "shop-app-16e2f.firebaseapp.com",
    databaseURL: "https://shop-app-16e2f-default-rtdb.firebaseio.com",
    projectId: "shop-app-16e2f",
    storageBucket: "shop-app-16e2f.appspot.com",
    messagingSenderId: "455884535027",
    appId: "1:455884535027:web:fa5bf28aa1c8aca5d2b386"
  };

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);


export async function signIn(email: string, password: string) {
  try {
    let userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password)
    const user = userCredential.user;
    return user;
  }
  catch (error) {
    if (error instanceof FirebaseError) {
      const errorCode = error.code;
      const errorMessage = error.message
    }
    else {
      const errorMessage = String(error);
    }
  }
}
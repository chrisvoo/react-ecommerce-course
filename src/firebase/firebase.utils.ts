import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD1XnoI-f5gTfQosYd4jbmHJLPVyjLjwG4",
    authDomain: "react-course-22a70.firebaseapp.com",
    projectId: "react-course-22a70",
    storageBucket: "react-course-22a70.appspot.com",
    messagingSenderId: "872687932156",
    appId: "1:872687932156:web:c5596cb053cf13fc72bd79",
    measurementId: "G-SJ7P166HYB"
}

/**
 * It saves a logged-in user inside Firestore
 */
export const createUserProfileDoc = async (
    userAuth?: firebase.User | undefined | null,
    additionalData?: any): Promise<firebase.firestore.UpdateData | null> => {
    if (!userAuth) {
        return null;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const userSnapshot = await userRef.get();
    if (!userSnapshot.exists) {
        const { displayName, email } = userAuth;
        try {
            userRef.set({
                displayName,
                email,
                createdAt: new Date(),
                ...additionalData
            });
        } catch (e) {
            console.error(`createUserProfileDoc error: ${e.message}`);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account',
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signInWithEmailAndPassword = (
    email: string,
    password: string
) => auth.signInWithEmailAndPassword(email, password);

export default firebase;
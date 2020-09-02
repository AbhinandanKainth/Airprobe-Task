import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB-QS4-VsHv1pcYtB2vLX02xnrVJ1VBy1Q",
    authDomain: "ecom-db-a5dd2.firebaseapp.com",
    databaseURL: "https://ecom-db-a5dd2.firebaseio.com",
    projectId: "ecom-db-a5dd2",
    storageBucket: "ecom-db-a5dd2.appspot.com",
    messagingSenderId: "50884305496",
    appId: "1:50884305496:web:776a478f4bfc3f46d2a02d",
    measurementId: "G-ELHCPE46H4"

};

firebase.initializeApp(config);

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {
            displayName,
            email
        } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
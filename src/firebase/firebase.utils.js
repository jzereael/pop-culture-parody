import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
        apiKey: "AIzaSyCN5KrPrBOsyMPNpbwxCkq0GzfBPTYDxdk",
        authDomain: "pop-culture-parody.firebaseapp.com",
        databaseURL: "https://pop-culture-parody.firebaseio.com",
        projectId: "pop-culture-parody",
        storageBucket: "pop-culture-parody.appspot.com",
        messagingSenderId: "208300769749",
        appId: "1:208300769749:web:03332e4ec722a11619fd5c",
        measurementId: "G-9KP4R3J2P9"
      };


firebase.initializeApp(config)


export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt: 'select_account' } );
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
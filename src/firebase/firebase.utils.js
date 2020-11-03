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



export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(snapShot);

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
      })
    } catch(error){
        console.log('Error creating user',error.message);
    }  
  }
  //returns user reference handle 
  return userRef;

}     

firebase.initializeApp(config)


export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt: 'select_account' } );
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
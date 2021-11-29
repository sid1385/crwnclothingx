import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDMxOArZ74gY2aC7M_7VfYKwPQxgTCXAQw",
  authDomain: "crwn-clothing-255b1.firebaseapp.com",
  projectId: "crwn-clothing-255b1",
  storageBucket: "crwn-clothing-255b1.appspot.com",
  messagingSenderId: "800340993710",
  appId: "1:800340993710:web:f1b01d9ae393b4083faf3f",
  measurementId: "G-9HXZP8PCV1",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signinwithgoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userauth, additionaldata) => {
  if (!userauth) return;
  const userref = firestore.doc(`users/${userauth.uid}`);
  const snapshot = await userref.get();

  if (!snapshot.exists) {
    const { displayName, email } = userauth;
    const createdAt = new Date();

    try {
      userref.set({
        displayName,
        email,
        createdAt,
        ...additionaldata,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return userref;
};

export const checkUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribefromauth = auth.onAuthStateChanged((userAuth) => {
      unsubscribefromauth();
      resolve(userAuth);
    }, reject);
  });
};

export const convertCollectionsArrayToObject = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const addCollectionsAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

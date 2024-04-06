const firestoreUtils = require('./firestore-utils');

const { initializeApp, firestore } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const app = initializeApp(firebaseConfig);no
const firebaseConfig = {
    apiKey: "AIzaSyAU6O5u0V7IcduMmLXM3ST41kTnfW1beTU",
    authDomain: "wishland-b2fc4.firebaseapp.com",
    projectId: "wishland-b2fc4",
    storageBucket: "wishland-b2fc4.appspot.com",
    messagingSenderId: "382975596197",
    appId: "1:382975596197:web:ef30c474c8e1c1c2509f4c",
    measurementId: "G-T9K7Z19REQ"  // Your Firebase Configuration Here



const db = getFirestore(app);

console.log("Firestore instance:", db);
// Example: Creating a new user
await firestoreUtils.createUser("Sarah2023", "sarah@example.com");

// Example: Adding a wish
await firestoreUtils.addWish("I wish for a new puppy", "Sarah2023");

};
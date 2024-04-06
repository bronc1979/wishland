import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; 
import { createUser, addWish, getAllWishes } from './firestore-utils.js';

// Your Firebase configuration 
const firebaseConfig = {
    apiKey: "AIzaSyAU6O5u0V7IcduMmLXM3ST41kTnfW1beTU",
    authDomain: "wishland-b2fc4.firebaseapp.com",
    projectId: "wishland-b2fc4",
    storageBucket: "wishland-b2fc4.appspot.com",
    messagingSenderId: "382975596197",
    appId: "1:382975596197:web:ef30c474c8e1c1c2509f4c",
    measurementId: "G-T9K7Z19REQ"  // ... Replace with your actual Firebase configuration
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Login Functionality
let currentUser = null;

function promptForLogin() {
   const username = prompt("Please enter your username:");
   if (username) { 
        currentUser = username; 
        alert('Welcome, ' + username + '!');
        // Consider updating UI elements to reflect logged-in state
   }
}

const userLoginButton = document.getElementById('user-login-button'); 
userLoginButton.addEventListener('click', () => {
   promptForLogin();
});

// Wish Submission
const wishForm = document.getElementById('wish-form'); 
wishForm.addEventListener('submit', async (event) => { 
    event.preventDefault();

    const wishDescription = document.getElementById('wish-description').value; 

    if (!currentUser) {
        promptForLogin();
        return; 
    }

    try {
        await addWish(db, wishDescription, currentUser);  
        alert('Wish added!');
    } catch (error) {
        console.error("Add Wish Error: ", error);
    } 
});

// Signup Functionality (Example)
const signupForm = document.getElementById('signup-form'); 
signupForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username-input').value;
    const email = document.getElementById('email-input').value; 

    try {
        await createUser(db, username, email);
        alert('Signup successful!'); 
    } catch (error) {
        console.error("Signup Error: ", error);
    }
});

// Fetching and Displaying Wishes
// ... (Similar to earlier examples)


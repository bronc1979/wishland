import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; 
import firestoreUtils from './firestore-utils';

// Your Firebase configuration 
const firebaseConfig = {
    apiKey: "AIzaSyAU6O5u0V7IcduMmLXM3ST41kTnfW1beTU",
    authDomain: "wishland-b2fc4.firebaseapp.com",
    projectId: "wishland-b2fc4",
    storageBucket: "wishland-b2fc4.appspot.com",
    messagingSenderId: "382975596197",
    appId: "1:382975596197:web:ef30c474c8e1c1c2509f4c",
    measurementId: "G-T9K7Z19REQ"  // Your Firebase Configuration Here
  // ... your actual Firebase configuration ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Image Upload (Example)
const imageInput = document.getElementById('wish-image'); 
const blurredPlaceholder = document.querySelector('.blurred-image-placeholder');

imageInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    // ... Logic to upload the image to Firebase Storage (if you want this) ... 
});

// Signup Form Handling
const signupForm = document.getElementById('signup-form'); 
signupForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username-input').value;
    const email = document.getElementById('email-input').value; 

    try {
        await firestoreUtils.createUser(username, email);
        alert('Signup successful!'); 
    } catch (error) {
        console.error("Signup Error: ", error);
    }
});

// Wish Submission
const wishForm = document.getElementById('wish-form'); // Assuming you have this
wishForm.addEventListener('submit', async (event) => { 
    event.preventDefault();

    const wishDescription = document.getElementById('wish-description').value; 
    const username = ...; // Get username (from session or login)

    await firestoreUtils.addWish(wishDescription, username);  
});

// Fetching and Displaying Wishes
async function displayWishes() {
    const wishDisplayArea = document.querySelector('.wish-display-area');
    wishDisplayArea.innerHTML = ''; 

    const wishes = await firestoreUtils.getAllWishes();

    wishes.forEach((wish) => {
        const wishElement = document.createElement('div');
        wishElement.classList.add('wish'); 
        wishElement.innerHTML = `
            <p><strong>Name:</strong> ${wish.username}</p>
            <p><strong>Wish:</strong> ${wish.description}</p> 
        `;
        wishDisplayArea.appendChild(wishElement); 
    });
}

displayWishes(); // Initial display

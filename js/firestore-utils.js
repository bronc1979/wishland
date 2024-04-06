import { getFirestore } from 'firebase/firestore'; 

// Assuming you've initialized Firebase within index.js
const db = getFirestore();  

async function createUser(db, username, email) {
    await db.collection('users').doc(username).set({
        username,
        email
    });
}

async function addWish(db, description, username) {
    await db.collection('wishes').add({
        description,
        username,
        createdAt: new Date() 
    }); 
}

async function getAllWishes(db) {
    const snapshot = await db.collection('wishes').get();
    const wishes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); 
    return wishes;
}

export { createUser, addWish, getAllWishes }; 

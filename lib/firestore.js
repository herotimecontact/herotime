// Firestore database functions
// This file contains all functions for interacting with the 'fans' collection

import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  serverTimestamp 
} from 'firebase/firestore';
import { db } from './firebase';

// Collection reference
const FANS_COLLECTION = 'fans';

/**
 * Add a new fan to the Firestore database
 * @param {Object} fanData - The fan data object
 * @param {string} fanData.name - Fan's name
 * @param {string} fanData.country - Fan's country
 * @param {string} fanData.hero - Fan's favorite hero
 * @returns {Promise<string>} - The ID of the newly created document
 */
export async function addFan({ name, country, hero }) {
  try {
    // Reference to the 'fans' collection
    const fansCollection = collection(db, FANS_COLLECTION);
    
    // Add a new document with auto-generated ID
    // serverTimestamp() ensures consistent timestamp from Firebase server
    const docRef = await addDoc(fansCollection, {
      name,
      country,
      hero,
      createdAt: serverTimestamp() // Server-side timestamp for consistency
    });
    
    console.log('Fan added successfully with ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding fan:', error);
    throw error;
  }
}

/**
 * Fetch all fans from the Firestore database
 * @param {number} limit - Optional: Maximum number of fans to fetch
 * @returns {Promise<Array>} - Array of fan objects with their IDs
 */
export async function fetchFans(limit = null) {
  try {
    // Reference to the 'fans' collection
    const fansCollection = collection(db, FANS_COLLECTION);
    
    // Create a query to order fans by creation date (newest first)
    let q = query(fansCollection, orderBy('createdAt', 'desc'));
    
    // Execute the query
    const querySnapshot = await getDocs(q);
    
    // Transform the snapshot into an array of fan objects
    const fans = [];
    querySnapshot.forEach((doc) => {
      fans.push({
        id: doc.id, // Document ID
        ...doc.data() // All document fields (name, country, hero, createdAt)
      });
    });
    
    // Apply limit if specified
    const result = limit ? fans.slice(0, limit) : fans;
    
    console.log(`Fetched ${result.length} fan(s) from database`);
    return result;
  } catch (error) {
    console.error('Error fetching fans:', error);
    throw error;
  }
}

/**
 * Get the total count of fans
 * @returns {Promise<number>} - Total number of fans in the database
 */
export async function getFansCount() {
  try {
    const fansCollection = collection(db, FANS_COLLECTION);
    const querySnapshot = await getDocs(fansCollection);
    return querySnapshot.size;
  } catch (error) {
    console.error('Error getting fans count:', error);
    throw error;
  }
}

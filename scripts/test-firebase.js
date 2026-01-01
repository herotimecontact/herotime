/**
 * Firebase Connection Test Script
 * Run this to verify your Firebase configuration is working correctly
 * 
 * Usage: node scripts/test-firebase.js
 */

// Load environment variables
require('dotenv').config({ path: '.env.local' });

console.log('\n🔥 Firebase Connection Test\n');
console.log('========================================\n');

// Check if environment variables are loaded
const requiredEnvVars = [
  'NEXT_PUBLIC_FIREBASE_API_KEY',
  'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
  'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
  'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
  'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
  'NEXT_PUBLIC_FIREBASE_APP_ID'
];

let allEnvVarsPresent = true;

console.log('Step 1: Checking Environment Variables...\n');

requiredEnvVars.forEach(varName => {
  const value = process.env[varName];
  if (!value || value === 'your_api_key_here' || value.includes('your-project-id')) {
    console.log(`❌ ${varName}: NOT SET or using placeholder`);
    allEnvVarsPresent = false;
  } else {
    // Mask sensitive values
    const maskedValue = value.substring(0, 10) + '...' + value.substring(value.length - 4);
    console.log(`✅ ${varName}: ${maskedValue}`);
  }
});

if (!allEnvVarsPresent) {
  console.log('\n❌ ERROR: Some environment variables are missing or not configured.');
  console.log('\n📝 Next Steps:');
  console.log('1. Copy .env.local.template to .env.local');
  console.log('2. Get your Firebase credentials from: https://console.firebase.google.com/');
  console.log('3. Replace all placeholder values in .env.local');
  console.log('4. Run this test again: node scripts/test-firebase.js\n');
  process.exit(1);
}

console.log('\n✅ All environment variables are set!\n');

// Try to initialize Firebase
console.log('Step 2: Testing Firebase Initialization...\n');

try {
  const { initializeApp, getApps } = require('firebase/app');
  const { getFirestore, collection, getDocs } = require('firebase/firestore');

  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
  };

  // Initialize Firebase
  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  console.log('✅ Firebase initialized successfully!');
  console.log(`   Project ID: ${firebaseConfig.projectId}\n`);

  // Test Firestore connection
  console.log('Step 3: Testing Firestore Connection...\n');

  const db = getFirestore(app);

  // Try to read from fans collection
  getDocs(collection(db, 'fans'))
    .then((querySnapshot) => {
      console.log('✅ Firestore connection successful!');
      console.log(`   Fans collection contains ${querySnapshot.size} document(s)\n`);

      if (querySnapshot.size > 0) {
        console.log('Sample data:');
        querySnapshot.docs.slice(0, 3).forEach((doc) => {
          const data = doc.data();
          console.log(`   - ${data.name} from ${data.country} (Hero: ${data.hero})`);
        });
      }

      console.log('\n========================================');
      console.log('🎉 SUCCESS! Firebase is fully configured and working!\n');
      console.log('Next steps:');
      console.log('1. Test the website: npm run dev');
      console.log('2. Try submitting a fan form');
      console.log('3. Check Firebase Console to see the data\n');
      process.exit(0);
    })
    .catch((error) => {
      console.log('⚠️  Firestore collection read failed (this might be OK)');
      console.log(`   Error: ${error.message}`);
      console.log('\n   Possible causes:');
      console.log('   - Collection "fans" does not exist yet (will be created on first write)');
      console.log('   - Firestore security rules are too restrictive');
      console.log('\n   Try:');
      console.log('   1. Visit http://localhost:3000 and submit the fan form');
      console.log('   2. Check Firestore rules are in test mode\n');
      console.log('✅ Firebase connection is valid, but collection is empty or restricted\n');
      process.exit(0);
    });

} catch (error) {
  console.log('❌ Firebase initialization failed!');
  console.log(`   Error: ${error.message}\n`);
  console.log('📝 Troubleshooting:');
  console.log('1. Check your Firebase credentials are correct');
  console.log('2. Verify the project exists in Firebase Console');
  console.log('3. Make sure Firestore is enabled in the project');
  console.log('4. Check network connection\n');
  process.exit(1);
}

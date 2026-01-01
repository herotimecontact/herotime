# Firebase Firestore Setup Guide

## Overview
This project uses Firebase Firestore as the database to store fan data for the HeroTime experience.

## Setup Instructions

### 1. Create a Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Follow the setup wizard to create your project
4. Once created, you'll be redirected to the project dashboard

### 2. Enable Firestore Database
1. In the Firebase Console, click on "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose "Start in test mode" for development (you can secure it later)
4. Select a Cloud Firestore location (choose one closest to your users)
5. Click "Enable"

### 3. Get Your Firebase Configuration
1. In the Firebase Console, click on the gear icon (⚙️) next to "Project Overview"
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. Click on the web icon (`</>`) to add a web app
5. Register your app with a nickname (e.g., "Mark 81D App")
6. Copy the `firebaseConfig` object values

### 4. Configure Environment Variables
1. Create a `.env.local` file in the root of your project:
   ```bash
   cp .env.local.example .env.local
   ```

2. Open `.env.local` and replace the placeholder values with your actual Firebase credentials:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789012
   NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789012:web:abcdef123456
   ```

3. **Important**: Never commit `.env.local` to version control! It's already in `.gitignore`.

### 5. Restart the Development Server
After adding your environment variables, restart the Next.js development server:
```bash
npm run dev
```

## Project Structure

```
lib/
├── firebase.js      # Firebase initialization and configuration
└── firestore.js     # Firestore database functions (addFan, fetchFans)
```

## Available Functions

### `addFan(fanData)`
Adds a new fan to the Firestore database.

**Parameters:**
- `name` (string): Fan's name
- `country` (string): Fan's country
- `hero` (string): Fan's favorite hero

**Example:**
```javascript
import { addFan } from '@/lib/firestore';

const newFan = await addFan({
  name: 'John Doe',
  country: 'USA',
  hero: 'Iron Man'
});
```

### `fetchFans(limit)`
Fetches all fans from the database, ordered by creation date (newest first).

**Parameters:**
- `limit` (number, optional): Maximum number of fans to return

**Returns:** Array of fan objects with `id`, `name`, `country`, `hero`, and `createdAt`

**Example:**
```javascript
import { fetchFans } from '@/lib/firestore';

const allFans = await fetchFans();
const latestTenFans = await fetchFans(10);
```

### `getFansCount()`
Gets the total count of fans in the database.

**Example:**
```javascript
import { getFansCount } from '@/lib/firestore';

const totalFans = await getFansCount();
```

## Database Schema

### Collection: `fans`

| Field      | Type      | Description                |
|------------|-----------|----------------------------|
| name       | string    | Fan's name                 |
| country    | string    | Fan's country              |
| hero       | string    | Fan's favorite hero        |
| createdAt  | timestamp | Automatically added by server |

## Security Rules (Production)

For production, update your Firestore security rules to restrict access:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to all
    match /fans/{fanId} {
      allow read: if true;
      
      // Allow write only with valid data
      allow create: if request.resource.data.keys().hasAll(['name', 'country', 'hero', 'createdAt'])
                    && request.resource.data.name is string
                    && request.resource.data.country is string
                    && request.resource.data.hero is string;
    }
  }
}
```

## Troubleshooting

### Firebase not initialized
- Make sure `.env.local` exists and contains valid credentials
- Restart the development server after adding environment variables
- Check that all variables start with `NEXT_PUBLIC_`

### Permission denied errors
- In development, make sure Firestore is in "test mode"
- Check your Firestore security rules in the Firebase Console

### Module not found errors
- Run `npm install` to ensure Firebase SDK is installed
- Check that import paths use `@/lib/` alias (configured in `jsconfig.json`)

## Next Steps

1. Create a form component to add new fans
2. Create a page to display the list of fans
3. Implement real-time updates using Firestore listeners
4. Add pagination for large fan lists
5. Configure production security rules before deployment

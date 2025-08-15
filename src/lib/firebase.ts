import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, off } from 'firebase/database';

// Demo Firebase config - replace with your own for production
const firebaseConfig = {
  apiKey: "AIzaSyDemo-replace-with-real-key",
  authDomain: "dinner-bell-demo.firebaseapp.com",
  databaseURL: "https://dinner-bell-demo-default-rtdb.firebaseio.com",
  projectId: "dinner-bell-demo"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set, onValue, off };
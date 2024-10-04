import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';  

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYwQ5104wueepfttO2HxsY50nQhT86Z2Y",
  authDomain: "sit313-b4906.firebaseapp.com",
  projectId: "sit313-b4906",
  storageBucket: "sit313-b4906.appspot.com",
  messagingSenderId: "213113672488",
  appId: "1:213113672488:web:de5619b475a89eddc1f61d",
  measurementId: "G-YZZNW31T08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication, Analytics, and Firestore
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);  // Initialize Firestore

const googleProvider = new GoogleAuthProvider();  // Initialize Google Auth Provider

// Only export each identifier once
export { auth, analytics, db, googleProvider };

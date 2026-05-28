import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const isFirebaseConfigured = Object.values(firebaseConfig).every(Boolean);

let firestore = null;
if (isFirebaseConfigured) {
  const app = initializeApp(firebaseConfig);
  firestore = getFirestore(app);
}

export async function loadSavedState(userId = 'guest') {
  if (!firestore) return null;
  const stateDoc = doc(firestore, 'recipe-wonderlab', userId);
  const snapshot = await getDoc(stateDoc);
  return snapshot.exists() ? snapshot.data() : null;
}

export async function saveState(userId = 'guest', payload = {}) {
  if (!firestore) return null;
  const stateDoc = doc(firestore, 'recipe-wonderlab', userId);
  await setDoc(stateDoc, payload, { merge: true });
  return payload;
}

export { isFirebaseConfigured };

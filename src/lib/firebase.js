import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
<<<<<<< HEAD:src/lib/firebase.js
// Follow this pattern to import other Firebase services
import { getAuth } from 'firebase/auth';
// import { } from 'firebase/<service>';
// TODO: Replace the following with your app's Firebase project configuration
=======
import { getAuth } from 'firebase/auth';

// Follow this pattern to import other Firebase services
// import { } from ’firebase/<service>’;
// TODO: Replace the following with your app’s Firebase project configuration
>>>>>>> aae835a29f893135f198ea175b7a69d600ec941c:src/App/firebase.js
const firebaseConfig = {
  apiKey: 'AIzaSyDx90UpJPU3woIjM7nmQhCYSDIL6foM1G0',
  authDomain: 'social-network-8a647.firebaseapp.com',
  projectId: 'social-network-8a647',
  storageBucket: 'social-network-8a647.appspot.com',
  messagingSenderId: '1028473208915',
  appId: '1:1028473208915:web:452946a1e270b3017ec6a6',
  measurementId: 'G-HDJFBPXPQP',
};
<<<<<<< HEAD:src/lib/firebase.js

=======
>>>>>>> aae835a29f893135f198ea175b7a69d600ec941c:src/App/firebase.js
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

<<<<<<< HEAD:src/lib/firebase.js
=======

>>>>>>> aae835a29f893135f198ea175b7a69d600ec941c:src/App/firebase.js
// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
<<<<<<< HEAD:src/lib/firebase.js
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

=======
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}
>>>>>>> aae835a29f893135f198ea175b7a69d600ec941c:src/App/firebase.js

import firebase from 'firebase';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyB-P83xES-A1NkHm2ihVuytc_gqC7u_mBM',
  authDomain: 'jalaram-enterprise-contact.firebaseapp.com',
  projectId: 'jalaram-enterprise-contact',
  storageBucket: 'jalaram-enterprise-contact.appspot.com',
  messagingSenderId: '91141870691',
  appId: '1:91141870691:web:546ebda8f1b795d5f19456',
  measurementId: 'G-9V6KTTVC3J',
};

// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();

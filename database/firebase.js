// database/firebaseDb.js

import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBhfKz8s7v-rnkhxrKUpvKQ1cuxlfghHmw',
  authDomain: 'audiorecorder-4d0c9.firebaseapp.com',
  projectId: 'audiorecorder-4d0c9',
  storageBucket: 'audiorecorder-4d0c9.appspot.com',
  messagingSenderId: '792643899707',
  appId: '1:792643899707:web:34e239fabb1891550ca71e',
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;

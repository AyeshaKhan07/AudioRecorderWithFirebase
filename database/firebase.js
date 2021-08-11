import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBhfKz8s7v-rnkhxrKUpvKQ1cux',
  apiKey: 'AIzaSyBhfKz8s7v-rnkhxrKUpvKQ1cuxlfghHmw',
  authDomain: 'audiorecorder-4d0c9.firebaseapp.com',
  projectId: 'audiorecorder-4d0c9',
  storageBucket: 'audiorecorder-4d0c9.appspot.com',
  messagingSenderId: '792643899707',
  appId: '1:792643899707:web:e8e222f367b9b1df0ca71e',
});
export const auth = app.auth();
export default app;

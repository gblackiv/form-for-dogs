import key from './apiKey.js';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: key,
  authDomain: 'faux-paw-form.firebaseapp.com',
  databaseURL: 'https://faux-paw-form.firebaseio.com',
  projectId: 'faux-paw-form',
  storageBucket: 'faux-paw-form.appspot.com',
  messagingSenderId: '598733060543',
  appId: '1:598733060543:web:4c24d2bb55a0e61f'
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const Firestore = firebaseApp.firestore();

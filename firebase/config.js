import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD5fXW9DI-xgCdN8Dbt-Lz3EPPThV80CPw",
    authDomain: "react-native-firebase-695f5.firebaseapp.com",
    projectId: "react-native-firebase-695f5",
    storageBucket: "react-native-firebase-695f5.appspot.com",
    messagingSenderId: "602696799133",
    appId: "1:602696799133:web:9718c837160a7955609574",
    measurementId: "G-ZFX6WDZW4Z"
};

// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// }
 firebase.initializeApp(firebaseConfig);
export { firebase };
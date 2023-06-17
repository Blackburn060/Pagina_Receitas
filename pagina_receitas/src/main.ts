import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));




  
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuBDr2HmibfoYxwKh4uhAOFG9g2QJroWQ",
  authDomain: "paginareceitas-a63a8.firebaseapp.com",
  projectId: "paginareceitas-a63a8",
  storageBucket: "paginareceitas-a63a8.appspot.com",
  messagingSenderId: "455949804714",
  appId: "1:455949804714:web:062150fbc19dc9a9015cd3",
  measurementId: "G-SE1G1XFNM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
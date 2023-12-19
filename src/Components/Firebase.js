import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOhuGe6G09pCRXKCZZp_4sQ1N40U_yaVs",
  authDomain: "the-moviebox.firebaseapp.com",
  projectId: "the-moviebox",
  storageBucket: "the-moviebox.appspot.com",
  messagingSenderId: "675518230574",
  appId: "1:675518230574:web:a85e24ef439231d5406fbf"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

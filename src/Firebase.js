import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAoTUaC5ghoub1nFqpDfEZZUYViYq7EqmQ",
	authDomain: "cryptobin-55814.firebaseapp.com",
	projectId: "cryptobin-55814",
	storageBucket: "cryptobin-55814.appspot.com",
	messagingSenderId: "400233954897",
	appId: "1:400233954897:web:bf71fb46f873b241528270",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

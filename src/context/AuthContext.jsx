import { useContext, createContext, useState, useEffect } from "react";
import {
	GoogleAuthProvider,
	signInWithPopup,
	signInWithRedirect,
	signOut,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import { auth, db } from "../Firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [user, setuser] = useState({});

	//* google Sign IN
	const googleSignIn = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider);
		return setDoc(doc(db, "users", user.email), { watchList: [] });
	};

	//* custom sign Up
	const signUp = (email, password) => {
		createUserWithEmailAndPassword(auth, email, password);
		return setDoc(doc(db, "users", user.email), { watchList: [] });
	};

	//* Custom Log In
	const LogIn = (email, password) => {
		signInWithEmailAndPassword(auth, email, password);
	};

	//* google signout
	const logOut = () => {
		signOut(auth);
	};

	//* Checking current user
	useEffect(() => {
		const unsubscibe = onAuthStateChanged(auth, (currentUser) => {
			setuser(currentUser);
			console.log("user", currentUser);
		});
		return () => {
			unsubscibe();
		};
	}, []);

	return (
		<AuthContext.Provider value={{ googleSignIn, user, logOut, LogIn, signUp }}>
			{children}
		</AuthContext.Provider>
	);
};

export const UserAuth = () => {
	return useContext(AuthContext);
};

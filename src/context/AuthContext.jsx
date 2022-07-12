import { useContext, createContext, useState, useEffect } from "react";
import {
	GoogleAuthProvider,
	signInWithPopup,
	signInWithRedirect,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../Firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [user, setuser] = useState({});

	//* google Sign IN
	const googleSignIn = () => {
		const provider = new GoogleAuthProvider();
		// signInWithPopup(auth, provider);
		signInWithRedirect(auth, provider);
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
		<AuthContext.Provider value={{ googleSignIn, user, logOut }}>
			{" "}
			{children}
		</AuthContext.Provider>
	);
};

export const UserAuth = () => {
	return useContext(AuthContext);
};

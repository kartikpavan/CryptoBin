import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CoinPage from "./components/CoinPage";
import About from "./pages/About";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Notfound from "./pages/Notfound";
import Footer from "./components/Footer";

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/account" element={<Account />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
				<Route path="/coin/:coinID" element={<CoinPage />}></Route>
				<Route path="/*" element={<Notfound />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;

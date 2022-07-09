import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Login from "./pages/Login";

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/signin" element={<Signin />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</>
	);
};

export default App;

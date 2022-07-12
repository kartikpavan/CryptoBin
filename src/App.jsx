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
import Protected from "./components/Protected";
import { AuthContextProvider } from "./context/AuthContext";

const App = () => {
	return (
		<>
			<AuthContextProvider>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route
						path="/account"
						element={
							<Protected>
								<Account />{" "}
							</Protected>
						}
					/>
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />
					<Route path="/coin/:coinID" element={<CoinPage />}></Route>
					<Route path="/*" element={<Notfound />} />
				</Routes>
				<Footer />
			</AuthContextProvider>
		</>
	);
};

export default App;

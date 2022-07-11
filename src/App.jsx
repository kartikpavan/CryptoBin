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
import { fetchData } from "./utils/FetchData";
import Footer from "./components/Footer";

const App = () => {
	const [coins, setCoins] = React.useState([]);

	const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=30&page=1&sparkline=true`;

	React.useEffect(() => {
		async function fetchCoinData() {
			const data = await fetchData(url);
			setCoins(data);
		}
		fetchCoinData();
	}, [url]);

	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home coins={coins} />} />
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

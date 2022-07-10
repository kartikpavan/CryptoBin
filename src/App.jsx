import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Login from "./pages/Login";
import { fetchData } from "./utils/FetchData";

const App = () => {
	const [coins, setCoins] = React.useState([]);

	const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=20&page=1&sparkline=true`;

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
				<Route path="/signin" element={<Signin />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</>
	);
};

export default App;

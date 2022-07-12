import React from "react";
import CoinSearch from "../components/CoinSearch";
import Trending from "../components/Trending";
import { fetchData } from "../utils/FetchData";

const Home = () => {
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
		<div>
			<Trending />
			<CoinSearch coins={coins} />
		</div>
	);
};

export default Home;

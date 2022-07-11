import React from "react";
import { fetchData } from "../utils/FetchData";

const Trending = () => {
	const [trending, setTrending] = React.useState([]);

	const url = `https://api.coingecko.com/api/v3/search/trending`;
	React.useEffect(() => {
		const getTrendingData = async () => {
			const data = await fetchData(url);
			setTrending(data.coins);
		};
		getTrendingData();
	}, []);

	return (
		<>
			<div className="rounded-div my-12 py-8 ">
				<h1 className="text-2xl font-semibold py-4">Trending</h1>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
					{trending.map((coin) => {
						return (
							<div className="rounded-div flex justify-between p-4 hover:scale-105 ease-in-out duration-300">
								<div className="flex w-full items-center justify-between">
									<div className="flex items-center gap-4 ">
										<img src={coin.item.small} alt={coin.item.symbol} />
										<p className="font-bold ">{coin.item.name.slice(0, 10)}</p>
										<p>{coin.item.symbol}</p>
									</div>
								</div>
								<div className="flex items-center gap-4">
									<img
										className="w-4"
										src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579"
										alt="/"
									/>
									<p className="mr-4">{coin.item.price_btc.toFixed(7)}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Trending;

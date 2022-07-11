import React from "react";
import SingleCoinItem from "./SingleCoinItem";

const CoinSearch = ({ coins }) => {
	const [searchText, setSearchText] = React.useState("");

	return (
		<div className="rounded-div my-4">
			<div className="flex flex-col md:flex-row justify-between py-6 px-4 text-center md:text-right">
				<h1 className="text-lg font-bold my-2">Search Crypto</h1>
				<form>
					<input
						onChange={(e) => setSearchText(e.target.value)}
						type="text"
						placeholder="Search a coin"
						className="input input-bordered input-secondary rounded-xl shadow-xl"
					/>
				</form>
			</div>
			<table className="w-full border-collapse text-center">
				<thead>
					<tr className="border-b">
						<th></th>
						<th className="px-4">#</th>
						<th className="text-left">Coin</th>
						<th></th>
						<th>Price (INR)</th>
						<th>24h</th>
						<th className="hidden md:table-cell">24h Volume</th>
						<th className="hidden sm:table-cell">Market</th>
						<th>Last 7 days</th>
					</tr>
				</thead>
				<tbody>
					{coins &&
						coins
							.filter((item) => {
								if (searchText === "") {
									return item;
								} else if (
									item.name.toLowerCase().includes(searchText.toLowerCase())
								) {
									return item;
								}
							})
							.map((coin) => {
								return <SingleCoinItem coin={coin} key={coin.id} />;
							})}
				</tbody>
			</table>
		</div>
	);
};

export default CoinSearch;

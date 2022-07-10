import React from "react";
import SingleCoinItem from "./SingleCoinItem";

const CoinSearch = ({ coins }) => {
	const [searchText, setSearchText] = React.useState("");

	console.log(coins);
	return (
		<div>
			<div>
				<h1>Search Crypto</h1>
				<form>
					<input
						onChange={(e) => setSearchText(e.target.value)}
						type="text"
						placeholder="Search a coin"
					/>
				</form>
			</div>
			<table>
				<thead>
					<tr>
						<th></th>
						<th>#</th>
						<th>Coin</th>
						<th>Price</th>
						<th>24h</th>
						<th>24h Volume</th>
						<th>Market</th>
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

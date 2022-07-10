import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";

const SingleCoinItem = ({ coin }) => {
	return (
		<>
			<tr key={coin.id}>
				<td>
					<AiOutlineStar sze={16} />
				</td>
				<td>{coin.market_cap_rank}</td>
				<td>
					<div>
						<img src={coin.image} alt={coin.name} className="w-16 h-auto" />
						<p>{coin.name}</p>
					</div>
				</td>

				<td>{coin.current_price}</td>
				<td>{coin.price_change_24h}</td>
				<td>{coin.price_change_percentage_24h}</td>
				<td>{coin.market_cap}</td>
				<td>
					<Sparklines data={coin.sparkline_in_7d.price}>
						<SparklinesLine color="teal" />
					</Sparklines>
				</td>
			</tr>
		</>
	);
};

export default SingleCoinItem;

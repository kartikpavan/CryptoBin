import React, { useState, useEffect } from "react";
import { fetchData } from "../utils/FetchData";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { FaReddit, FaTwitter, FaGithub, FaFacebook } from "react-icons/fa";
import DOMPurify from "dompurify";
import { useParams } from "react-router-dom";
const CoinPage = () => {
	const [coin, setCoin] = useState({});
	const params = useParams();
	const url = `https://api.coingecko.com/api/v3/coins/${params.coinID}?localization=false&sparkline=true`;
	useEffect(() => {
		const getCoinData = async () => {
			const data = await fetchData(url);
			console.log(data);
			setCoin(data);
		};
		getCoinData();
	}, [url]);

	return (
		<div className="rounded-div my-12 py-8">
			<div className="flex py-8 ">
				<img src={coin.image?.large} alt="/" className="w-20 mr-8" />
				<div>
					<p className="text-3xl font-bold">{coin?.name} price</p>
					<p>({coin?.symbol} / INR)</p>
				</div>
			</div>
			<div className="grid md:grid-cols-2 gap-8">
				<div>
					<div className="flex justify-between items-center">
						{coin.market_data?.current_price ? (
							<p className="text-3xl font-semibold">
								₹ {coin.market_data?.current_price?.inr.toLocaleString()}
							</p>
						) : null}
						<p className="text-gray-500 font-semibold">7 days</p>
					</div>
					<div>
						<Sparklines data={coin.market_data?.sparkline_7d.price}>
							<SparklinesLine color="teal" />
						</Sparklines>
					</div>
					<div className="flex justify-between py-4 border-b">
						<div>
							<p className="text-gray-500 text-sm"> Market Cap</p>
							{coin.market_data?.market_cap ? (
								<p>₹ {coin.market_data?.market_cap?.inr.toLocaleString()}</p>
							) : null}
						</div>
						<div>
							<p className="text-gray-500 text-sm text-right">Volume (24h)</p>
							{coin.market_data?.market_cap ? (
								<p>₹ {coin.market_data?.total_volume?.inr.toLocaleString()}</p>
							) : null}
						</div>
					</div>
					<div className="flex justify-between py-4">
						<div>
							<p className="text-gray-500 text-sm ">24h High</p>
							{coin.market_data?.high_24h ? (
								<p>₹ {coin.market_data?.high_24h?.inr.toLocaleString()}</p>
							) : null}
						</div>
						<div>
							<p className="text-gray-500 text-sm text-right">24h Low</p>
							{coin.market_data?.low_24h ? (
								<p>₹ {coin.market_data?.low_24h?.inr.toLocaleString()}</p>
							) : null}
						</div>
					</div>
				</div>
				<div>
					<p className="text-xl font-bold ">Market Stats</p>
					<div className="flex justify-between py-4 border-b">
						<div>
							<p className="text-gray-500 text-sm">Market Rank</p>
							{coin.market_cap_rank}
						</div>
						<div>
							<p className="text-gray-500 text-sm">Hashing Algorithm</p>
							{coin.hashing_algorithm ? (
								<p className="text-center"> {coin.hashing_algorithm}</p>
							) : null}
						</div>
						<div>
							<p className="text-gray-500 text-sm">Trust Score</p>
							{coin.tickers ? (
								<p className="text-right"> {coin.liquidity_score.toFixed(2)}</p>
							) : null}
						</div>
					</div>
					<div className="flex justify-between py-4 border-b">
						<div>
							<p className="text-gray-500 text-sm">Price Change (24h)</p>
							{coin.market_data ? (
								<p>{coin.market_data?.price_change_percentage_24h.toFixed(2)}%</p>
							) : null}
						</div>
						<div>
							<p className="text-gray-500 text-sm">Price Change (7d)</p>
							{coin.market_data ? (
								<p className="text-center">
									{coin.market_data?.price_change_percentage_7d.toFixed(2)}%
								</p>
							) : null}
						</div>
						<div>
							<p className="text-gray-500 text-sm">Price Change (14d)</p>
							{coin.market_data ? (
								<p className="text-right">
									{coin.market_data?.price_change_percentage_14d.toFixed(2)}%
								</p>
							) : null}
						</div>
					</div>
					<div className="flex justify-between py-4 border-b">
						<div>
							<p className="text-gray-500 text-sm">Price Change (30d)</p>
							{coin.market_data ? (
								<p>{coin.market_data?.price_change_percentage_30d.toFixed(2)}%</p>
							) : null}
						</div>
						<div>
							<p className="text-gray-500 text-sm">Price Change (60d)</p>
							{coin.market_data ? (
								<p className="text-center">
									{coin.market_data?.price_change_percentage_60d.toFixed(2)}%
								</p>
							) : null}
						</div>
						<div>
							<p className="text-gray-500 text-sm">Price Change (1Y)</p>
							{coin.market_data ? (
								<p className="text-right">
									{coin.market_data?.price_change_percentage_1y.toFixed(2)}%
								</p>
							) : null}
						</div>
					</div>
					<div className="flex justify-around p-8 text-primary ">
						<a
							href={`https://www.facebook.com/${coin.links?.facebook_username}`}
							rel="noreferrer"
							target="_blank"
							className="hover:text-yellow-600"
						>
							<FaFacebook />
						</a>

						<a
							href={coin.links?.repos_url.github[0]}
							rel="noreferrer"
							target="_blank"
							className="hover:text-yellow-600"
						>
							<FaGithub />
						</a>
						<a
							href={coin.links?.subreddit_url}
							rel="noreferrer"
							target="_blank"
							className="hover:text-yellow-600"
						>
							<FaReddit />
						</a>

						<a
							href={`https://twitter.com/${coin.links?.twitter_screen_name}`}
							rel="noreferrer"
							target="_blank"
							className="hover:text-yellow-600"
						>
							<FaTwitter />
						</a>
					</div>
				</div>
			</div>
			{/* Description */}
			<div>
				<p className="text-xl font-bold">About {coin.name}</p>
				<p
					className="text-gray-600"
					dangerouslySetInnerHTML={{
						__html: DOMPurify.sanitize(coin.description ? coin.description.en : ""),
					}}
				></p>
			</div>
		</div>
	);
};

export default CoinPage;

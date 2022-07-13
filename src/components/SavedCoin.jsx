import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { onSnapshot, doc, updateDoc, setDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { UserAuth } from "../context/AuthContext";

const SavedCoin = () => {
	const [coins, setCoins] = React.useState([]);
	const { user } = UserAuth();
	console.log(user.email);

	useEffect(() => {
		onSnapshot(doc(db, "users", `${user.email}`), (doc) => {
			setCoins(doc.data().watchList);
		});
	}, [user.email]);

	const coinPath = doc(db, "users", `${user.email}`);

	const deleteCoin = async (id) => {
		try {
			const filteredList = coins.filter((item) => item.id !== id);
			await updateDoc(coinPath, {
				watchList: filteredList,
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			{coins.length === 0 ? (
				<p>
					You don't have any coins saved. Please save a coin to add it to your watch list.
					<Link to="/" className="italic text-secondary text-sm font-semibold underline">
						Click here to search Coins
					</Link>
				</p>
			) : (
				<table className="w-full border-collapse text-center">
					<thead>
						<tr className="border-b">
							<th className="px-4">Rank #</th>
							<th className="text-left">Coin </th>
							<th className="text-red-600 text-left">Remove</th>
						</tr>
					</thead>
					<tbody>
						{coins.map((coin) => {
							return (
								<tr key={coin?.id} className="h-[60px] overflow-hidden ">
									<td>{coin?.rank}</td>
									<td>
										<Link to={`/coin/${coin.id}`}>
											<div className="flex items-center">
												<img
													src={coin?.image}
													alt="/"
													className=" w-8 mr-4 "
												/>
												<div>
													<p className="hidden sm:table-cell">
														{coin?.name}
													</p>
													<p className=" text-gray-500 text-left text-sm">
														{coin?.symbol.toUpperCase()}
													</p>
												</div>
											</div>
										</Link>
									</td>
									<td className="pl-8">
										<AiOutlineClose
											className="cursor-pointer "
											onClick={() => deleteCoin(coin?.id)}
										/>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default SavedCoin;

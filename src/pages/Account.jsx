import React from "react";
import SavedCoin from "../components/SavedCoin";
import { UserAuth } from "../context/AuthContext";
const Account = () => {
	const { user, logOut } = UserAuth();

	const handleLogout = async () => {
		try {
			await logOut();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="max-w-[1140px] mx-auto h-[80vh] p-2 md:p-0">
			<div className="flex justify-between items-center my-12 py-8 rounded-div">
				<div>
					<div>
						<p>
							Welcome, <br />
							<span className="text-secondary text-lg font-semibold">
								{user?.displayName ? user.displayName : user.email}
							</span>
						</p>
					</div>
				</div>
				<div>
					<button
						className="btn btn-outline btn-error btn-sm md:btn-md"
						onClick={handleLogout}
					>
						Sign Out
					</button>
				</div>
			</div>
			<div className="flex justify-between items-center my-12 py-8 rounded-div">
				<div className="w-full min-h-[300px] ">
					<h1 className="text-lg sm:text-2xl fot-bold py-4 font-semibold">Watch List </h1>
					<SavedCoin />
				</div>
			</div>
		</div>
	);
};

export default Account;

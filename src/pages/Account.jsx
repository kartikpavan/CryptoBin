import React from "react";
import SavedCoin from "../components/SavedCoin";

const Account = () => {
	return (
		<div className="max-w-[1140px] mx-auto h-[80vh] p-2 md:p-0">
			<div className="flex justify-between items-center my-12 py-8 rounded-div">
				<div>
					<h1 className="text-2xl font-bold">Account</h1>
					<div>
						<p>Welcome, User</p>
					</div>
				</div>
				<div>
					<button className="btn btn-outline btn-error">Sign Out</button>
				</div>
			</div>
			<div className="flex justify-between items-center my-12 py-8 rounded-div">
				<div className="w-full min-h-[300px] ">
					<h1 className="text-2xl fot-bold py-4 font-semibold">Watch List </h1>
					<SavedCoin />
				</div>
			</div>
		</div>
	);
};

export default Account;

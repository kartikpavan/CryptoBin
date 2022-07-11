import React from "react";

const Notfound = () => {
	return (
		<div className="w-[500px] h-[550px] mx-auto text-center">
			<h1 className="text-error font-bold text-8xl pt-24">404</h1>
			<p className="text-6xl text-gray-500">Not Found</p>
			<p>The resource you are looking for does not exist yet. </p>
		</div>
	);
};

export default Notfound;

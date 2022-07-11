import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
	const [showMenu, setShowMenu] = React.useState(false);

	function menuHandeler() {
		setShowMenu(!showMenu);
	}

	return (
		<div className="rounded-div flex items-center justify-between h-20 font-bold">
			<Link to="/">
				<h1 className="text-2xl">CryptoBin</h1>
			</Link>
			<div className="hidden md:block">
				<Link to="/login" className="p-4 hover:text-primary-focus">
					Login
				</Link>
				<Link to="/signup" className="btn btn-primary text-white">
					Sign Up
				</Link>
			</div>

			{/* Menu Icon */}
			<div className="block md:hidden cursor-pointer z-10" onClick={menuHandeler}>
				{showMenu ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
			</div>

			{/* Mobile Menu */}

			<div
				className={
					showMenu
						? "md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-slate-100 ease-in duration-300 z-10"
						: "fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-center ease-in duration-300"
				}
			>
				<ul className="w-full p-4 text-gray-800">
					<li className="border-b py-6">
						<Link to="/" onClick={menuHandeler}>
							HOME
						</Link>
					</li>
					<li className="border-b py-6">
						<Link to="/account">ACCOUNT</Link>
					</li>
					<li className=" py-6">
						<Link to="/about">ABOUT</Link>
					</li>
				</ul>
				<div className="flex flex-col w-full p-4">
					<Link to="/login">
						<button className="w-full p-3 my-2 btn text-lg">Login</button>
					</Link>

					<Link to="/signup">
						<button className="w-full p-3 my-2 btn btn-primary text-lg">Sign Up</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

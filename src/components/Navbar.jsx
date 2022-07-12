import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
	const [showMenu, setShowMenu] = React.useState(false);
	const { user, logOut } = UserAuth();
	const navigate = useNavigate();

	function menuHandeler() {
		setShowMenu(!showMenu);
	}

	const handleLogout = async () => {
		try {
			await logOut();
			setShowMenu(!showMenu);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (user !== null) {
			navigate("/");
		} else {
			return;
		}
	}, []);

	return (
		<div className="rounded-div flex items-center justify-between h-20 font-bold">
			<Link to="/">
				<h1 className="text-2xl">CryptoBin</h1>
			</Link>
			<div className="hidden md:block">
				{user?.uid ? (
					<div className="flex gap-4 items-center">
						<Link to="/account">
							<div className="avatar flex items-center gap-2 border p-2 rounded-lg">
								<div className="w-6 rounded-full">
									{user?.photoURL ? (
										<img src={user?.photoURL} alt="user-avatar" />
									) : (
										<FaRegUserCircle size={24} />
									)}
								</div>
								<p className="text-sm">My Account</p>
							</div>
						</Link>
						<button className="btn btn-sm btn-outline btn-error" onClick={handleLogout}>
							Logout
						</button>{" "}
					</div>
				) : (
					<div>
						{" "}
						<Link to="/login" className="p-4 hover:text-primary-focus">
							Login
						</Link>
						<Link to="/signup" className="btn btn-primary text-white">
							Sign Up
						</Link>
					</div>
				)}
			</div>

			{/* Menu Icon */}
			<div className=" md:hidden flex items-center gap-2">
				<Link to="/account">
					<div className="avatar border p-2 rounded-lg">
						<div className="w-6 rounded-full">
							{user?.photoURL ? (
								<img src={user?.photoURL} alt="user-avatar" />
							) : (
								<FaRegUserCircle size={24} />
							)}
						</div>
					</div>
				</Link>

				<div className="block md:hidden cursor-pointer z-10" onClick={menuHandeler}>
					{showMenu ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
				</div>
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
						<Link to="/account" onClick={menuHandeler}>
							ACCOUNT
						</Link>
					</li>
					<li className=" py-6">
						<Link to="/about">ABOUT</Link>
					</li>
				</ul>
				<div className="flex flex-col w-full p-4">
					{user?.uid ? (
						<button className="btn btn-sm btn-outline btn-error" onClick={handleLogout}>
							{" "}
							Logout
						</button>
					) : (
						<div className="flex flex-col w-full p-4 gap-4">
							<Link
								to="/login"
								className="p-4 btn btn-neutral"
								onClick={menuHandeler}
							>
								Login
							</Link>
							<Link
								to="/signup"
								className="btn btn-primary text-white"
								onClick={menuHandeler}
							>
								Sign Up
							</Link>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;

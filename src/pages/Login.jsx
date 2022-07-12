import React from "react";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { GoogleButton } from "react-google-button";
const Login = () => {
	return (
		<div className="w-full h-[70vh] flex justify-center items-center">
			<div className="max-w-[400px] w-full h-[500px] shadow-xl rounded-lg px-4 py-8">
				<h1 className="text-2xl font-bold">Login</h1>
				<form>
					<div className="pt-4">
						<label htmlFor="email">Email</label>
						<div className="my-2 w-full relative rounded-2xl shadow-lg ">
							<input
								type="Email"
								name="email"
								id="email"
								className="w-full p-2 border rounded-2xl"
							/>
							<AiOutlineMail className="absolute right-2 top-3 text-gray-400" />
						</div>
					</div>
					<div className="pt-2">
						<label htmlFor="password">Password</label>
						<div className="my-2 w-full relative rounded-2xl shadow-lg ">
							<input
								type="password"
								name="password"
								id="password"
								className="w-full p-2 border rounded-2xl"
							/>
							<AiFillLock className="absolute right-2 top-3 text-gray-400" />
						</div>
						<div className="flex items-center gap-4 mt-4">
							<input type="checkbox" name="" id="" className="ml-2 checkbox-xs" />
							<p className="text-sm text-gray-500">Show Password</p>
						</div>
					</div>
					<button className="btn btn-primary w-full mt-4">Login</button>
				</form>
				<div className="mt-8 mb-4">
					<h2 className="w-full text-center border-b-2 leading-[0.1em] m-[10px 0 20px]">
						<span className="bg-[#fff]">OR</span>
					</h2>
				</div>
				<div className="mt-8">
					<GoogleButton className="mx-auto" />
				</div>
			</div>
		</div>
	);
};

export default Login;

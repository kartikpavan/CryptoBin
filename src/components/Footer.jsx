import React from "react";

const Footer = () => {
	return (
		<>
			<footer class="footer p-10 bg-base-200 text-base-content">
				<div>
					<p className="max-w-[200px]">
						<span className="text-2xl font-semibold">CryptoBin</span>
						<br />
						provides a fundamental analysis of the crypto market. In addition to
						tracking price, volume and market capitalisation, CoinGecko tracks community
						growth, open-source code development, major events and on-chain metrics.
					</p>
				</div>
				<div>
					<span class="footer-title">Services</span>
					<a class="link link-hover">Branding</a>
					<a class="link link-hover">Design</a>
					<a class="link link-hover">Marketing</a>
					<a class="link link-hover">Advertisement</a>
				</div>
				<div>
					<span class="footer-title">Company</span>
					<a class="link link-hover">About us</a>
					<a class="link link-hover">Contact</a>
					<a class="link link-hover">Jobs</a>
					<a class="link link-hover">Press kit</a>
				</div>
				<div>
					<span class="footer-title">Legal</span>
					<a class="link link-hover">Terms of use</a>
					<a class="link link-hover">Privacy policy</a>
					<a class="link link-hover">Cookie policy</a>
				</div>
			</footer>
		</>
	);
};

export default Footer;

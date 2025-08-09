"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Logo from "../public/assets/logo/logo.png";
import PrimaryButton from "./PrimaryButton";

const Navbar = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [isAtTop, setIsAtTop] = useState(true);
	const [isMobileMebuOpen, setIsMobileMenuOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		let lastScrollY = window.scrollY;

		const controlNavbar = () => {
			const currentScrollY = window.scrollY;

			setIsAtTop(currentScrollY < 10);

			if (currentScrollY > lastScrollY && currentScrollY > 100) {
				setIsVisible(false);
			} else {
				setIsVisible(true);
			}

			lastScrollY = currentScrollY;
		};

		window.addEventListener("scroll", controlNavbar);
		return () => window.removeEventListener("scroll", controlNavbar);
	}, []);

	const getBackgroundClass = () => {
		if (isAtTop) return "bg-transparent";
		if (isVisible && !isAtTop) return "bg-dark/30 backdrop-blur-xl";
		return "bg-transparent";
	};

	const navLink = [
		{
			href: "/",
			label: "Home",
		},
		{
			href: "/about-us",
			label: "About Us",
		},
		{
			href: "/videos",
			label: "Videos",
		},
		{
			href: "/divisions",
			label: "Divisions",
		},
		{
			href: "/jobs",
			label: "Jobs",
		},
		{
			href: "/careers",
			label: "Careers",
		},
		{
			href: "/blog",
			label: "Blog",
		},
		{
			href: "/resources",
			label: "Resources",
		},
	];

	return (
		<>
			<nav
				className={`fixed w-full transition-transform duration-300 ease-in-out z-[999] ${
					isVisible ? "translate-y-0" : "-translate-y-full"
				} ${getBackgroundClass()}`}
			>
				<div className="container mx-auto px-4 lg:px-6">
					<div className="flex items-center justify-between py-4 lg:py-8">
						<Link href="/">
							<Image
								src={Logo}
								alt="company logo"
								className="max-w-[52px] md:max-w-[70px] xl:max-w-[100px] h-auto"
							/>
						</Link>
						<div className="flex items-center gap-6 xl:gap-12 max-lg:hidden">
							{navLink.map((link) => (
								<Link
									href={link.href}
									key={link.href}
									className={`text-white/90 hover:text-white text-base transition-colors duration-300 ease-in-out ${pathname === link.href ? "text-white font-semibold" : ""}`}
								>
									{link.label}
								</Link>
							))}
							<div className="w-fit">
								<PrimaryButton text="Contact Us" link="/contact" />
							</div>
						</div>

						<div className="lg:hidden">
							<button
								type="button"
								className="relative overflow-hidden w-[18px] h-[16px]"
								onClick={() => setIsMobileMenuOpen(!isMobileMebuOpen)}
							>
								<div
									className={`absolute w-full h-0.5 rounded-lg bg-white right-0 ${isMobileMebuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0 rotate-0"} transition-all duration-300 ease-in-out`}
								></div>
								<div
									className={`absolute h-0.5 rounded-lg bg-white top-1/2 -translate-y-1/2 right-0 ${isMobileMebuOpen ? "w-0" : "w-full"} transition-all duration-300 ease-in-out`}
								></div>
								<div
									className={`absolute w-full h-0.5 rounded-lg bg-white right-0 ${isMobileMebuOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0 rotate-0"} transition-all duration-300 ease-in-out`}
								></div>
							</button>
						</div>
					</div>
				</div>
			</nav>

			<div
				className={`h-full bg-dark absolute top-0 left-0 lg:hidden transition-all duration-300 ease-in-out z-[99999] ${isMobileMebuOpen ? "w-[420px] translate-x-0 opacity-100" : "-translate-x-full opacity-0"} overflow-hidden`}
			>
				<div className="flex gap-10 px-6 py-10 items-center justify-between">
					<Image
						src={Logo}
						alt="company logo"
						className="max-w-[62px] h-auto"
					/>
					<button
						type="button"
						onClick={() => setIsMobileMenuOpen(!isMobileMebuOpen)}
					>
						<IoClose className="text-white text-2xl" />
					</button>
				</div>
				<div className="px-6 flex flex-col gap-2">
					{navLink.map((link) => (
						<Link
							href={link.href}
							key={link.href}
							onClick={() => setIsMobileMenuOpen(false)}
							className="text-white font-medium text-xl"
						>
							{link.label}
						</Link>
					))}
				</div>
			</div>
			<div
				className={`absolute left-0 top-0 w-full h-full bg-white/10 backdrop-blur-xl z-[9999] ${isMobileMebuOpen ? "translate-x-0" : "-translate-x-full"} transition-all duration-300 ease-in-out`}
			></div>
		</>
	);
};

export default Navbar;

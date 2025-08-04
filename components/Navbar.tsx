"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [isMobileMebuOpen, setIsMobileMenuOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		let lastScrollY = window.scrollY;

		const controlNavbar = () => {
			const currentScrollY = window.scrollY;

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

	const navLink = [
		{
			href: "/",
			label: "Home",
		},
		{
			href: "/about",
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
				className={`fixed w-full bg-transparent transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
			>
				<div className="container mx-auto px-4 lg:px-6">
					<div className="flex items-center justify-between py-10">
						<Link href="/">
							<h3>LOGO</h3>
						</Link>
						<div className="flex items-center gap-10 max-lg:hidden">
							{navLink.map((link) => (
								<Link
									href={link.href}
									key={link.href}
									className={`text-white/80 hover:text-white text-lg font-medium transition-colors duration-300 ease-in-out ${pathname === link.href ? "text-white font-semibold" : ""}`}
								>
									{link.label}
								</Link>
							))}
						</div>

						<div className="lg:hidden">
							<button
								type="button"
								className="text-white"
								onClick={() => setIsMobileMenuOpen(!isMobileMebuOpen)}
							>
								Menu
							</button>
						</div>
					</div>
				</div>
			</nav>

			<div
				className={`h-full bg-white absolute top-0 left-0 lg:hidden transition-all duration-300 ease-in-out z-50 ${isMobileMebuOpen ? "w-[90%] translate-x-0" : "-translate-x-full"} overflow-hidden`}
			>
				<div className="px-6 py-10 flex flex-col gal-4">
					{navLink.map((link) => (
						<Link
							href={link.href}
							key={link.href}
							onClick={() => setIsMobileMenuOpen(false)}
							className="text-black"
						>
							{link.label}
						</Link>
					))}
				</div>
			</div>
		</>
	);
};

export default Navbar;

import HeadsetIcon from "@/components/svgComponents/HeadsetIcon";
import HeartIcon from "@/components/svgComponents/HeartIcon";
import MedalIcon from "@/components/svgComponents/MedalIcon";
import TrophyIcon from "@/components/svgComponents/TrophyIcon";
import fbIcon from "../public/assets/icons/fb.svg";
import igIcon from "../public/assets/icons/ig.svg";
import liIcon from "../public/assets/icons/in.svg";
import xIcon from "../public/assets/icons/x.svg";
import ytIcon from "../public/assets/icons/yt.svg";
import serviceImg1 from "../public/assets/pohots/home/02.jpg";
import serviceImg2 from "../public/assets/pohots/home/03.jpg";
import serviceImg3 from "../public/assets/pohots/home/04.jpg";

import type { FooterLinkProps, WhyUsProps } from "./types";

export const heroValues = [
	{
		id: 1,
		icon: MedalIcon,
		title: "Independent & Owner-Operated",
		text: "Every load is handled by professionals with a personal stake in getting it right.",
	},
	{
		id: 2,
		icon: HeadsetIcon,
		title: "Hands-On Support Transport",
		text: "From dispatch to maintenance, we back you with real people and real solutions.",
	},
	{
		id: 3,
		icon: TrophyIcon,
		title: "Driven by Experience",
		text: "Over a decade of reliable freight delivery across all 48 states.",
	},
	{
		id: 4,
		icon: HeartIcon,
		title: "Respect for the Road",
		text: "No forced dispatch. No hidden fees. Just the freedom to drive your way.",
	},
];

export const services = [
	{
		id: 1,
		image: serviceImg1,
		title: "Dry Van Freight",
		text: "Versatile 53’ trailers built for everyday cargo—enclosed, secure, and ideal for both short and long hauls.",
	},
	{
		id: 2,
		image: serviceImg2,
		title: "Flatbed Freight",
		text: "Versatile 53’ trailers built for everyday cargo—enclosed, secure, and ideal for both short and long hauls.",
	},
	{
		id: 3,
		image: serviceImg3,
		title: "Step Deck & Conestoga",
		text: "Versatile 53’ trailers built for everyday cargo—enclosed, secure, and ideal for both short and long hauls.",
	},
];

export const socials = [
	{
		id: 1,
		link: "",
		icon: igIcon,
	},
	{
		id: 2,
		link: "",
		icon: fbIcon,
	},
	{
		id: 3,
		link: "",
		icon: liIcon,
	},
	{
		id: 4,
		link: "",
		icon: xIcon,
	},
	{
		id: 5,
		link: "",
		icon: ytIcon,
	},
];

export const quickLinks: FooterLinkProps[] = [
	{
		id: 1,
		link: "/",
		label: "Home",
	},
	{
		id: 2,
		link: "/about-us",
		label: "About Us",
	},
	{
		id: 3,
		link: "/videos",
		label: "Videos",
	},
	{
		id: 4,
		link: "/divisions",
		label: "Divisions",
	},
	{
		id: 5,
		link: "/jobs",
		label: "Jobs",
	},
	{
		id: 6,
		link: "/blog",
		label: "Blog",
	},
	{
		id: 7,
		link: "/resources",
		label: "Resources",
	},
];

export const serviceLinksFooter: FooterLinkProps[] = [
	{
		id: 1,
		link: "/",
		label: "Dry Van Freight",
	},
	{
		id: 2,
		link: "",
		label: "Flatbed Freight",
	},
	{
		id: 3,
		link: "",
		label: "Step Deck & Conestoga",
	},
	{
		id: 4,
		link: "",
		label: "Conestoga Trailers",
	},
];

export const findUsLinksFooter: FooterLinkProps[] = [
	{
		id: 1,
		link: "tel:17087464448",
		label: "1-708-746-4448",
	},
	{
		id: 2,
		link: "",
		label: "1032 Moen Ave (2nd Floor) Suite# 2, Rockdale, IL 60436",
	},
	{
		id: 3,
		label: "Mon - Fri : 07:00 - 17:00",
	},
	{
		id: 4,
		label: "MC# 814259 - DOT#2372907",
	},
];

export const whyUsData: WhyUsProps[] = [
	{
		id: 1,
		gridClass: "col-start-1 row-start-3",
		title: "Transparent Communication",
		text: "We keep you in the loop at every step—no guesswork, no radio silence. Just proactive updates and a team that’s easy to reach.",
	},
	{
		id: 2,
		gridClass: "col-start-2 row-start-2 xl:border-l xl:rounded-tl-lg",
		title: "Real-Time Load Tracking",
		text: "We equip every shipment with GPS tracking, giving you full visibility and updates from pickup to delivery—no need to chase down your freight.",
	},
	{
		id: 3,
		gridClass: "col-start-2 row-start-3",
		title: "Experienced, Professional Drivers",
		text: "Our vetted, independent owner-operators take pride in every mile. You get skilled professionals who value safety, punctuality, and service.",
	},
	{
		id: 4,
		gridClass: "xl:col-start-3 row-start-2 xl:row-start-1 xl:border-l",
		title: "24/5 Dispatch Availability",
		text: "Our responsive dispatch team is available five days a week, with extended Saturday support.",
	},
	{
		id: 5,
		gridClass: "col-start-3 row-start-2 border-r-0",
		title: "24/7 Fleet Maintenance",
		text: "Our in-house maintenance team keeps our fleet in peak condition, reducing delays and breakdowns to keep your cargo moving reliably.",
	},
	{
		id: 6,
		gridClass: "row-start-3 border-r-0",
		title: "Tailored Shipping Solutions",
		text: "No two shipments are the same. We work closely with you to match your freight needs with the right trailer, schedule, and route",
	},
	{
		id: 7,
		gridClass: "col-start-1 row-start-3",
		title: "Transparent Communication",
		text: "We keep you in the loop at every step—no guesswork, no radio silence. Just proactive updates and a team that’s easy to reach.",
	},
	{
		id: 8,
		gridClass: "col-start-2 row-start-2 xl:border-l xl:rounded-tl-lg",
		title: "Real-Time Load Tracking",
		text: "We equip every shipment with GPS tracking, giving you full visibility and updates from pickup to delivery—no need to chase down your freight.",
	},
	{
		id: 9,
		gridClass: "col-start-2 row-start-3",
		title: "Experienced, Professional Drivers",
		text: "Our vetted, independent owner-operators take pride in every mile. You get skilled professionals who value safety, punctuality, and service.",
	},
	{
		id: 10,
		gridClass: "xl:col-start-3 row-start-2 xl:row-start-1 xl:border-l",
		title: "24/5 Dispatch Availability",
		text: "Our responsive dispatch team is available five days a week, with extended Saturday support.",
	},
	{
		id: 11,
		gridClass: "col-start-3 row-start-2 border-r-0",
		title: "24/7 Fleet Maintenance",
		text: "Our in-house maintenance team keeps our fleet in peak condition, reducing delays and breakdowns to keep your cargo moving reliably.",
	},
	{
		id: 12,
		gridClass: "row-start-3 border-r-0",
		title: "Tailored Shipping Solutions",
		text: "No two shipments are the same. We work closely with you to match your freight needs with the right trailer, schedule, and route",
	},
];

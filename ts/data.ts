import HeadsetIcon from "@/components/svgComponents/HeadsetIcon";
import HeartIcon from "@/components/svgComponents/HeartIcon";
import MedalIcon from "@/components/svgComponents/MedalIcon";
import TrophyIcon from "@/components/svgComponents/TrophyIcon";
import fbIcon from "../public/assets/icons/fb.svg";
import igIcon from "../public/assets/icons/ig.svg";
import liIcon from "../public/assets/icons/in.svg";
import xIcon from "../public/assets/icons/x.svg";
import ytIcon from "../public/assets/icons/yt.svg";
import blogImg1 from "../public/assets/pohots/blog/01.jpg";
import blogImg2 from "../public/assets/pohots/blog/02.jpg";
import blogImg3 from "../public/assets/pohots/blog/03.jpg";
import blogImg4 from "../public/assets/pohots/blog/04.jpg";
import blogImg5 from "../public/assets/pohots/blog/05.jpg";
import articleImg1 from "../public/assets/pohots/blog/06.jpg";
import articleImg2 from "../public/assets/pohots/blog/07.jpg";
import articleImg3 from "../public/assets/pohots/blog/08.jpg";
import articleImg4 from "../public/assets/pohots/blog/09.jpg";
import articleImg5 from "../public/assets/pohots/blog/10.jpg";
import articleImg6 from "../public/assets/pohots/blog/11.jpg";
import articleImg7 from "../public/assets/pohots/blog/12.jpg";
import articleImg8 from "../public/assets/pohots/blog/13.jpg";
import solutionsData1Img1 from "../public/assets/pohots/divisions/2.jpg";
import solutionsData1Img2 from "../public/assets/pohots/divisions/3.jpg";
import solutionsData1Img3 from "../public/assets/pohots/divisions/4.jpg";
import solutionsData2Img1 from "../public/assets/pohots/divisions/5.jpg";
import solutionsData2Img2 from "../public/assets/pohots/divisions/6.jpg";
import solutionsData2Img3 from "../public/assets/pohots/divisions/7.jpg";
import solutionsData3Img1 from "../public/assets/pohots/divisions/8.jpg";
import solutionsData3Img2 from "../public/assets/pohots/divisions/9.jpg";
import solutionsData3Img3 from "../public/assets/pohots/divisions/10.jpg";
import serviceImg1 from "../public/assets/pohots/home/02.jpg";
import serviceImg2 from "../public/assets/pohots/home/03.jpg";
import serviceImg3 from "../public/assets/pohots/home/04.jpg";
import testimonialImage1 from "../public/assets/pohots/home/10.jpg";
import video1 from "../public/assets/pohots/videos/video-1.jpg";
import video2 from "../public/assets/pohots/videos/video-2.jpg";
import video3 from "../public/assets/pohots/videos/video-3.jpg";
import video4 from "../public/assets/pohots/videos/video-4.jpg";
import video5 from "../public/assets/pohots/videos/video-5.jpg";
import video6 from "../public/assets/pohots/videos/video-6.jpg";
import video7 from "../public/assets/pohots/videos/video-7.jpg";
import video8 from "../public/assets/pohots/videos/video-8.jpg";
import video9 from "../public/assets/pohots/videos/video-9.jpg";

import type {
	ArticleProps,
	BlogProps,
	ContactDetailProps,
	DifferencesProps,
	FaqProps,
	FooterLinkProps,
	JobProps,
	JobRequirementsProps,
	SolutionsDataProps,
	TestimonialsProps,
	VideoProps,
	WhyUsProps,
} from "./types";

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

export const testimonials: TestimonialsProps[] = [
	{
		image: testimonialImage1,
		id: 1,
		reviews:
			"The support system at Delta is solid. I’m earning well, staying busy, and finally feel like I’m driving for a company that gets it.",
		name: "Verified Owner-Operator",
		job: "Dsipatcher",
	},
	{
		image: testimonialImage1,
		id: 2,
		reviews:
			"Delta gives me the freedom I want and the support I need. I make over $3,000 a week and choose my own schedule.",
		name: "Verified Owner-Operator",
		job: "Dsipatcher",
	},
	{
		image: testimonialImage1,
		id: 3,
		reviews:
			"I’ve worked with a lot of companies, but Delta actually delivers on what they promise. Straight forward, no fluff",
		name: "Verified Owner-Operator",
		job: "Dsipatcher",
	},
	{
		image: testimonialImage1,
		id: 4,
		reviews:
			"Dispatch always has my back, and I never feel pressured. I pick my loads, run my routes, and stay in control of my time.",
		name: "Verified Owner-Operator",
		job: "Dsipatcher",
	},
	{
		image: testimonialImage1,
		id: 5,
		reviews:
			"Delta gives me the freedom I want and the support I need. I make over $3,000 a week and choose my own schedule.",
		name: "Verified Owner-Operator",
		job: "Dsipatcher",
	},
	{
		image: testimonialImage1,
		id: 6,
		reviews:
			"Delta gives me the freedom I want and the support I need. I make over $3,000 a week and choose my own schedule.",
		name: "Verified Owner-Operator",
		job: "Dsipatcher",
	},
	{
		image: testimonialImage1,
		id: 7,
		reviews:
			"The support system at Delta is solid. I’m earning well, staying busy, and finally feel like I’m driving for a company that gets it.",
		name: "Verified Owner-Operator",
		job: "Dsipatcher",
	},
	{
		image: testimonialImage1,
		id: 8,
		reviews:
			"Delta gives me the freedom I want and the support I need. I make over $3,000 a week and choose my own schedule.",
		name: "Verified Owner-Operator",
		job: "Dsipatcher",
	},
	{
		image: testimonialImage1,
		id: 9,
		reviews:
			"I’ve worked with a lot of companies, but Delta actually delivers on what they promise. Straight forward, no fluff",
		name: "Verified Owner-Operator",
		job: "Dsipatcher",
	},
	{
		image: testimonialImage1,
		id: 10,
		reviews:
			"Dispatch always has my back, and I never feel pressured. I pick my loads, run my routes, and stay in control of my time.",
		name: "Verified Owner-Operator",
		job: "Dsipatcher",
	},
	{
		image: testimonialImage1,
		id: 11,
		reviews:
			"Delta gives me the freedom I want and the support I need. I make over $3,000 a week and choose my own schedule.",
		name: "Verified Owner-Operator",
		job: "Dsipatcher",
	},
	{
		image: testimonialImage1,
		id: 12,
		reviews:
			"Delta gives me the freedom I want and the support I need. I make over $3,000 a week and choose my own schedule.",
		name: "Verified Owner-Operator",
		job: "Dsipatcher",
	},
];

export const jobRequirements: JobRequirementsProps[] = [
	{
		id: 1,
		title: "2+ years of CDL-A Experience",
		text: "We require at least two years of verified CDL-A driving experience.",
	},
	{
		id: 2,
		title: "Clean MVR (Last 24 Months)",
		text: "No major violations in the past 24 months.",
	},
	{
		id: 3,
		title: "DOT Drug Test (SAP Not Accepted)",
		text: "Applicants must pass a DOT drug screening. We do not accept drivers from the SAP program.",
	},
	{
		id: 4,
		title: "Solo Drivers Only",
		text: "We’re currently onboarding solo Owner-Operators only—no team drivers at this time",
	},
	{
		id: 5,
		title: "Operate Across the Lower 48 States",
		text: "Must be willing to run loads across all 48 states.",
	},
];

export const faqs: FaqProps[] = [
	{
		id: 1,
		number: "01.",
		title: "What experience do I need to join Delta?",
		text: "Drivers must have at least 2 years of verifiable CDL-A experience. This helps ensure safety, efficiency, and the ability to operate independently.",
	},
	{
		id: 2,
		number: "02.",
		title: "Is there a minimum age requirement?",
		text: "Drivers must have at least 2 years of verifiable CDL-A experience. This helps ensure safety, efficiency, and the ability to operate independently.",
	},
	{
		id: 3,
		number: "03.",
		title: "Where does Delta operate?",
		text: "Drivers must have at least 2 years of verifiable CDL-A experience. This helps ensure safety, efficiency, and the ability to operate independently.",
	},
	{
		id: 4,
		number: "04.",
		title: "How many miles will I typically drive per day?",
		text: "Drivers must have at least 2 years of verifiable CDL-A experience. This helps ensure safety, efficiency, and the ability to operate independently.",
	},
	{
		id: 5,
		number: "05.",
		title: "Is Delta ELD compliant?",
		text: "Drivers must have at least 2 years of verifiable CDL-A experience. This helps ensure safety, efficiency, and the ability to operate independently.",
	},
	{
		id: 6,
		number: "06.",
		title: "How much time do I have to spend on the road?",
		text: "Drivers must have at least 2 years of verifiable CDL-A experience. This helps ensure safety, efficiency, and the ability to operate independently.",
	},
];

export const differences: DifferencesProps[] = [
	{
		id: 1,
		number: "01",
		title: "People First, Always",
		text: "At Delta Carrier Group, it all starts with people. As a family-owned business, we believe strong relationships lead to better results—for drivers, customers, and our team.",
	},
	{ id: 2 },
	{
		id: 3,
		number: "03",
		title: "Built Around Owner-Operators",
		text: "Owner-operators are the backbone of what we do. That’s why we focus entirely on supporting independent drivers with the tools, respect, and freedom they deserve.",
	},
	{ id: 4 },
	{ id: 5 },
	{
		id: 6,
		number: "02",
		title: "Freedom to Run Your Way",
		text: "No forced dispatch. No hidden fees. Our drivers choose their loads, their routes, and their schedules—with full control over how they run their business.",
	},
	{ id: 7 },
	{
		id: 8,
		number: "04",
		title: "Support That’s Always There",
		text: "From dispatch and logistics to compliance and maintenance, we’re hands-on and ready to help. Our goal is to make sure every partner is equipped for success on the road.",
	},
];

export const contactDetails: ContactDetailProps[] = [
	{
		id: 1,
		lagel: "Our Address",
		info: "1032 Moen Ave (2nd Floor) Suite# 2, Rockdale, IL 60436",
		link: "",
		target: "_blank",
	},
	{
		id: 2,
		lagel: "Phone Number",
		info: "1-708-746-4448",
		link: "tel:17087464448",
	},
	{
		id: 3,
		lagel: "Working Hours",
		info: "Mon - Fri : 07:00 - 17:00",
	},
];

export const solutionsData1: SolutionsDataProps[] = [
	{
		id: 1,
		elementId: "grid1-img1",
		mobileId: "mobile1-img1",
		image: solutionsData1Img1,
	},
	{
		id: 2,
		elementId: "grid1-img2",
		mobileId: "mobile1-img2",
		image: solutionsData1Img2,
	},
	{
		id: 3,
		elementId: "grid1-img3",
		mobileId: "mobile1-img3",
		image: solutionsData1Img3,
	},
];

export const solutionsData2: SolutionsDataProps[] = [
	{
		id: 1,
		elementId: "grid2-img1",
		mobileId: "mobile2-img1",
		image: solutionsData2Img1,
	},
	{
		id: 2,
		elementId: "grid2-img2",
		mobileId: "mobile2-img2",
		image: solutionsData2Img2,
	},
	{
		id: 3,
		elementId: "grid2-img3",
		mobileId: "mobile2-img3",
		image: solutionsData2Img3,
	},
];

export const solutionsData3: SolutionsDataProps[] = [
	{
		id: 1,
		elementId: "grid3-img1",
		mobileId: "mobile3-img1",
		image: solutionsData3Img1,
	},
	{
		id: 2,
		elementId: "grid3-img2",
		mobileId: "mobile3-img2",
		image: solutionsData3Img2,
	},
	{
		id: 3,
		elementId: "grid3-img3",
		mobileId: "mobile3-img3",
		image: solutionsData3Img3,
	},
];

export const videos: VideoProps[] = [
	{
		id: 1,
		videoLink: "",
		videoThumbnail: video1,
	},
	{
		id: 2,
		videoLink: "",
		videoThumbnail: video2,
	},
	{
		id: 3,
		videoLink: "",
		videoThumbnail: video3,
	},
	{
		id: 4,
		videoLink: "",
		videoThumbnail: video4,
	},
	{
		id: 5,
		videoLink: "",
		videoThumbnail: video5,
	},
	{
		id: 6,
		videoLink: "",
		videoThumbnail: video6,
	},
	{
		id: 7,
		videoLink: "",
		videoThumbnail: video7,
	},
	{
		id: 8,
		videoLink: "",
		videoThumbnail: video8,
	},
	{
		id: 9,
		videoLink: "",
		videoThumbnail: video9,
	},
];

export const jobs: JobProps[] = [
	{
		id: 1,
		title: "CDL‑A Owner-Operator",
		subtitle: "Fleet Operations",
		text: "As a CDL‑A Owner‑Operator with Delta, you run your own truck—your way. We deliver industry-leading support without limiting your independence:",
		applyLink: "",
		link: "",
		variant: "in-office",
	},
	{
		id: 2,
		title: "CDL‑A Owner-Operator",
		subtitle: "Fleet Operations",
		text: "As a CDL‑A Owner‑Operator with Delta, you run your own truck—your way. We deliver industry-leading support without limiting your independence:",
		applyLink: "",
		link: "",
		variant: "in-office",
	},
	{
		id: 3,
		title: "CDL‑A Owner-Operator",
		subtitle: "Fleet Operations",
		text: "As a CDL‑A Owner‑Operator with Delta, you run your own truck—your way. We deliver industry-leading support without limiting your independence:",
		applyLink: "",
		link: "",
		variant: "in-office",
	},
	{
		id: 4,
		title: "CDL‑A Owner-Operator",
		subtitle: "Fleet Operations",
		text: "As a CDL‑A Owner‑Operator with Delta, you run your own truck—your way. We deliver industry-leading support without limiting your independence:",
		applyLink: "",
		link: "",
		variant: "in-office",
	},
	{
		id: 5,
		title: "CDL‑A Owner-Operator",
		subtitle: "Fleet Operations",
		text: "As a CDL‑A Owner‑Operator with Delta, you run your own truck—your way. We deliver industry-leading support without limiting your independence:",
		applyLink: "",
		link: "",
		variant: "in-office",
	},
	{
		id: 6,
		title: "CDL‑A Owner-Operator",
		subtitle: "Fleet Operations",
		text: "As a CDL‑A Owner‑Operator with Delta, you run your own truck—your way. We deliver industry-leading support without limiting your independence:",
		applyLink: "",
		link: "",
		variant: "in-office",
	},
	{
		id: 7,
		title: "CDL‑A Owner-Operator",
		subtitle: "Fleet Operations",
		text: "As a CDL‑A Owner‑Operator with Delta, you run your own truck—your way. We deliver industry-leading support without limiting your independence:",
		applyLink: "",
		link: "",
		variant: "in-office",
	},
	{
		id: 8,
		title: "CDL‑A Owner-Operator",
		subtitle: "Fleet Operations",
		text: "As a CDL‑A Owner‑Operator with Delta, you run your own truck—your way. We deliver industry-leading support without limiting your independence:",
		applyLink: "",
		link: "",
		variant: "in-office",
	},
	{
		id: 9,
		title: "CDL‑A Owner-Operator",
		subtitle: "Fleet Operations",
		text: "As a CDL‑A Owner‑Operator with Delta, you run your own truck—your way. We deliver industry-leading support without limiting your independence:",
		applyLink: "",
		link: "",
		variant: "in-office",
	},
	{
		id: 1,
		title: "Fleet Maintenance Technician",
		subtitle: "Maintenance",
		text: "Join our mobile maintenance team and keep our fleet running smoothly. Work with state-of-the-art equipment and enjoy competitive pay:",
		applyLink: "",
		link: "",
		variant: "other",
	},
	{
		id: 2,
		title: "Route Planning Specialist",
		subtitle: "Logistics",
		text: "Help optimize delivery routes and maximize efficiency for our owner-operators. Work remotely with flexible scheduling options:",
		applyLink: "",
		link: "",
		variant: "other",
	},
	{
		id: 3,
		title: "Safety Compliance Officer",
		subtitle: "Safety & Compliance",
		text: "Ensure our operations meet all DOT regulations and safety standards. Travel to various locations and work with diverse teams:",
		applyLink: "",
		link: "",
		variant: "other",
	},
	{
		id: 4,
		title: "Customer Relations Manager",
		subtitle: "Client Services",
		text: "Build strong relationships with our clients and ensure exceptional service delivery. Hybrid work model with competitive benefits:",
		applyLink: "",
		link: "",
		variant: "other",
	},
	{
		id: 5,
		title: "Freight Coordinator",
		subtitle: "Operations",
		text: "Coordinate freight assignments and manage load dispatch for maximum efficiency. Fast-paced environment with growth opportunities:",
		applyLink: "",
		link: "",
		variant: "other",
	},
	{
		id: 6,
		title: "Training & Development Specialist",
		subtitle: "Human Resources",
		text: "Design and implement training programs for new drivers and staff. Work across multiple locations with excellent travel benefits:",
		applyLink: "",
		link: "",
		variant: "other",
	},
];

export const blogs: BlogProps[] = [
	{
		id: 1,
		name: "Marko Trpeski",
		read: "5 min read",
		title: "How Delta Carrier Keeps Freight Moving Across America",
		text: "At Delta Carrier Group, we combine experience, technology, and dedication to deliver freight safely and on time.",
		link: "/blogs/fright-moving-across-america",
		image: blogImg1,
	},
	{
		id: 2,
		name: "Marko Trpeski",
		read: "5 min read",
		title: "How Delta Carrier Keeps Freight Moving Across America",
		text: "At Delta Carrier Group, we combine experience, technology, and dedication to deliver freight safely and on time.",
		link: "/blogs/fright-moving-across-america",
		image: blogImg2,
	},
	{
		id: 3,
		name: "Marko Trpeski",
		read: "5 min read",
		title: "Lorem ipsum dolor sit amet consectetur. Faucibus mauris phasel",
		link: "/blogs/fright-moving-across-america",
		image: blogImg3,
	},
	{
		id: 4,
		name: "Marko Trpeski",
		read: "5 min read",
		title: "Lorem ipsum dolor sit amet consectetur. Faucibus mauris phasel",
		link: "/blogs/fright-moving-across-america",
		image: blogImg4,
	},
	{
		id: 5,
		name: "5 min read",
		read: "Marko Trpeski",
		title: "Lorem ipsum dolor sit amet consectetur. Faucibus mauris phasel",
		link: "/blogs/fright-moving-across-america",
		image: blogImg5,
	},
];
export const articles: ArticleProps[] = [
	{
		id: 1,
		name: "Marko Trpeski",
		read: "5 min read",
		title: "How Delta Carrier Keeps Freight Moving Across America",
		text: "At Delta Carrier Group, we combine experience, technology, and dedication to deliver freight safely and on time.",
		link: "/blogs/fright-moving-across-america",
		image: articleImg1,
	},
	{
		id: 2,
		name: "Marko Trpeski",
		read: "5 min read",
		title: "How Delta Carrier Keeps Freight Moving Across America",
		text: "At Delta Carrier Group, we combine experience, technology, and dedication to deliver freight safely and on time.",
		link: "/blogs/fright-moving-across-america",
		image: articleImg2,
	},
	{
		id: 3,
		name: "Marko Trpeski",
		read: "5 min read",
		title: "How Delta Carrier Keeps Freight Moving Across America",
		text: "At Delta Carrier Group, we combine experience, technology, and dedication to deliver freight safely and on time.",
		link: "/blogs/fright-moving-across-america",
		image: articleImg3,
	},
	{
		id: 4,
		name: "Marko Trpeski",
		read: "5 min read",
		title: "How Delta Carrier Keeps Freight Moving Across America",
		text: "At Delta Carrier Group, we combine experience, technology, and dedication to deliver freight safely and on time.",
		link: "/blogs/fright-moving-across-america",
		image: articleImg4,
	},
	{
		id: 5,
		name: "Marko Trpeski",
		read: "5 min read",
		title: "How Delta Carrier Keeps Freight Moving Across America",
		text: "At Delta Carrier Group, we combine experience, technology, and dedication to deliver freight safely and on time.",
		link: "/blogs/fright-moving-across-america",
		image: articleImg5,
	},
	{
		id: 6,
		name: "Marko Trpeski",
		read: "5 min read",
		title: "How Delta Carrier Keeps Freight Moving Across America",
		text: "At Delta Carrier Group, we combine experience, technology, and dedication to deliver freight safely and on time.",
		link: "/blogs/fright-moving-across-america",
		image: articleImg6,
	},
	{
		id: 7,
		name: "Marko Trpeski",
		read: "5 min read",
		title: "How Delta Carrier Keeps Freight Moving Across America",
		text: "At Delta Carrier Group, we combine experience, technology, and dedication to deliver freight safely and on time.",
		link: "/blogs/fright-moving-across-america",
		image: articleImg7,
	},
	{
		id: 8,
		name: "Marko Trpeski",
		read: "5 min read",
		title: "How Delta Carrier Keeps Freight Moving Across America",
		text: "At Delta Carrier Group, we combine experience, technology, and dedication to deliver freight safely and on time.",
		link: "/blogs/fright-moving-across-america",
		image: articleImg8,
	},
];

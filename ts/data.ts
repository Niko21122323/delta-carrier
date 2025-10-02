import HeadsetIcon from "@/components/svgComponents/HeadsetIcon";
import HeartIcon from "@/components/svgComponents/HeartIcon";
import MedalIcon from "@/components/svgComponents/MedalIcon";
import TrophyIcon from "@/components/svgComponents/TrophyIcon";
import serviceIcon1 from "../components/svgComponents/ServiceIcon1";
import serviceIcon2 from "../components/svgComponents/ServiceIcon2";
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
import solutionsData2Img1 from "../public/assets/pohots/divisions/flatbed-divisons.jpg";
import solutionsData2Img2 from "../public/assets/pohots/divisions/flatbed-divisons-1.jpg";
import solutionsData2Img3 from "../public/assets/pohots/gallery/14.jpg";
import solutionsData3Img1 from "../public/assets/pohots/divisions/8.jpg";
import solutionsData3Img2 from "../public/assets/pohots/divisions/9.jpg";
import solutionsData3Img3 from "../public/assets/pohots/divisions/10.jpg";
import serviceImg1 from "../public/assets/pohots/home/dryvan.jpg";
import serviceImg2 from "../public/assets/pohots/home/flatbet-service.jpeg";
import testimonialImage1 from "../public/assets/pohots/home/10.jpg";

const missing = [25]; // add more if needed

export const gallery = Array.from({ length: 61 }, (_, i) => i + 1)
  .filter((id) => !missing.includes(id))
  .map((id) => ({
    id,
    image: `/assets/pohots/gallery/${String(id).padStart(2, "0")}.jpg`,
  }));

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
    title: "Dry Van",
    text: "Dry van freight refers to fully enclosed, non-refrigerated trailers ideal for general cargo. It's the most common and cost-effective option for protecting goods from weather, debris, and theft during transport.",
    link: "/services/dry-van-freight",
    icon: serviceIcon1,
  },
  {
    id: 2,
    image: serviceImg2,
    title: "Flatbed",
    text: "Choose from 48' or 53' flatbed trailers, plus Conestoga options, to handle all your transportation needs.",
    link: "/services/flatbed-trailers",
    icon: serviceIcon2,
  },
];

export const socials = [
  {
    id: 1,
    link: "https://www.instagram.com/deltacarriergroup/",
    icon: igIcon,
  },
  {
    id: 2,
    link: "https://www.facebook.com/deltacarriergroup",
    icon: fbIcon,
  },
  {
    id: 3,
    link: "https://www.linkedin.com/company/deltacarriergroup/",
    icon: liIcon,
  },
  {
    id: 4,
    link: "https://x.com/deltacarrier_",
    icon: xIcon,
  },
  {
    id: 5,
    link: "https://www.youtube.com/@deltacarriergroup/shorts",
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
    link: "/divisions",
    label: "Divisions",
  },
  {
    id: 4,
    link: "/gallery",
    label: "Gallery",
  },
  {
    id: 9,
    link: "/blogs",
    label: "Blog",
  },
  {
    id: 10,
    link: "/videos",
    label: "Videos",
  },
  {
    id: 11,
    link: "/weather",
    label: "Weather",
  },
  {
    id: 12,
    link: "https://deltacarriergroup.com/packet.pdf",
    label: "Carrier Packet",
  },
];

export const serviceLinksFooter: FooterLinkProps[] = [
  {
    id: 1,
    link: "/services/dry-van-freight",
    label: "Dry Van Freight",
  },
  {
    id: 2,
    link: "/services/flatbed-trailers",
    label: "Flatbed Freight",
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
    label: "Dispatch hours:  Mon-Fri 24/5 Saturday 7am - Noon",
  },
  {
    id: 4,
    label: "Maintenance Hours 24/7",
  },
  {
    id: 5,
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
      "Top-Tier Dispatch Service - Highly Recommend! Working with Delta Carrier Group has been a game-changer for my business. Their dispatch team is incredibly professional, responsive, and dedicated to helping carriers succeed. They consistently find high-paying loads, keep communication clear and timely, and handle all the logistics so I can focus on driving.",
    name: "Failko",
  },
  {
    image: testimonialImage1,
    id: 2,
    reviews:
      "I’m extremely satisfied with the work Delta Carrier Group is doing. Communication is clear, their team is responsive and respectful, and they show real commitment to customer satisfaction. It’s evident that they care about both their clients and their drivers, which creates a sense of trust and consistency that’s hard to find in the industry.",
    name: "Sonja Dimovska",
    job: "Local Guide",
  },
  {
    image: testimonialImage1,
    id: 3,
    reviews:
      "I've been with this company for more than two years, and I never had any problems with them. The best dispatchers i ever work with. They are always very helpful when I call them with any problem 24/7. The best company for owner operator.",
    name: "James Pierre",
  },
  {
    image: testimonialImage1,
    id: 4,
    reviews:
      "So we’ve all had a tough time making money after this trucking recession here so I’ll try not too badmouth anyone here for that. The contract I signed, the rates seemed pretty fair too me. I had problems with dispatch starting out. I got upset with them. They’re not perfect and neither am I. I got pretty upset and they still tolerated me and we worked together...",
    name: "Joey Krebs",
    job: "Local Guide",
  },
  {
    image: testimonialImage1,
    id: 5,
    reviews:
      "This is a great company to sign on with… the people are really good people… from the management to dispatchers to maintenance personnel to safety,there are good people there… if you need help with anything they try to help you… I highly recommend them to anyone",
    name: "Abraham Hardin",
  },
  {
    image: testimonialImage1,
    id: 6,
    reviews:
      "I've been with this trucking company for 13 years, and I couldn't be more satisfied. It's been a great experience throughout, and I'm especially grateful for my dispatcher, who is always supportive, professional, and dependable.",
    name: "Vlatko KItanoski",
  },
  {
    image: testimonialImage1,
    id: 7,
    reviews:
      "Having been with Delta since the day it first opened in 2013, I can confidently say the entire team—dispatch, maintenance, accounting, safety, recruiting, and drivers—is outstanding. It's incredibly important to have a job that makes you excited to wake up each morning, eager to work alongside such amazing people.",
    name: "Marko Trpeski",
  },
  {
    image: testimonialImage1,
    id: 8,
    reviews:
      "The best company for Owner Operators. They have 24/7 dispatch available. I recommend this company if you are an Owner Operator",
    name: "Dimitar Kamcev",
  },
  {
    image: testimonialImage1,
    id: 9,
    reviews:
      "They paid me what they said. The spot market is what I ran. They kept me going. Very nice and polite. They had my back all the time. Niki is the man! Matt is a smart gentleman. Martin is on the spot when needed. You run where you want.",
    name: "David Torres",
    job: "Local Guide",
  },
  {
    image: testimonialImage1,
    id: 10,
    reviews:
      "Amazing carrier been working for us (Pioneer) for over 7 years very reliable and you can always count on them to deliver and pick up on time. Mike is in charge of our account and he is the absolute best at what he does",
    name: "Kaisha Ramirez",
    job: "Local Guide",
  },
  {
    image: testimonialImage1,
    id: 11,
    reviews:
      "Great company to work for. Very helpful in every and any way possible!!",
    name: "Ted Stafie",
    job: "Local Guide",
  },
  {
    image: testimonialImage1,
    id: 12,
    reviews:
      "Great job on one of my critical loads, receiver said drivers were fantastic and very professional. Dispatcher, Phil, provided excellent updates when asked.",
    name: "Brandon Wyrick",
  },
  {
    image: testimonialImage1,
    id: 13,
    reviews: "Great company, Great people, The money is there",
    name: "Gordon A",
  },
  {
    image: testimonialImage1,
    id: 14,
    reviews: "Great company that takes pride in what they do. Would recommend!",
    name: "Rade Ginev",
  },
  {
    image: testimonialImage1,
    id: 15,
    reviews:
      "They were great communicating and was on time to delivery. I would use them again. Good company!",
    name: "Anna Granberry",
  },
  {
    image: testimonialImage1,
    id: 16,
    reviews:
      "Luke has been taking care of me for a couple years now. Best in the biz!",
    name: "Alex Stanbrough",
  },
  {
    image: testimonialImage1,
    id: 17,
    reviews:
      "Good job and on time. We look forward to booking our next load together.",
    name: "Route Transportation Logistics",
  },
  {
    image: testimonialImage1,
    id: 18,
    reviews: "Great place for owner operators!",
    name: "Martin Stojanovski",
  },
  {
    image: testimonialImage1,
    id: 19,
    reviews: "Great place for owner operators.",
    name: "Robert C",
  },
  {
    image: testimonialImage1,
    id: 20,
    reviews: "Best company",
    name: "Simeon Stanoev",
  },
  {
    image: testimonialImage1,
    id: 21,
    reviews:
      "It's a company where everyone is friendly and delivers almost everything they promise. In my opinion, if they had 24/7 delivery, it would be much better.",
    name: "Daniel C",
    job: "Local Guide",
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
    text: "Minimum age requirement: 23, with at least 2 years of experience.",
  },
  {
    id: 3,
    number: "03.",
    title: "Where does Delta operate?",
    text: "We provide nationwide coverage across the lower 48 states, with a strong focus on routes east of the Rockies. At the same time, we prioritize flexibility by listening to our owner-operators and accommodating their preferred lanes whenever possible.",
  },
  {
    id: 4,
    number: "04.",
    title: "How many miles will I typically drive per day?",
    text: "As an owner-operator, you set your own daily mileage within legal limits. We maintain full ELD compliance and strictly adhere to all regulations, ensuring you are never asked to drive beyond what the law allows.",
  },
  {
    id: 5,
    number: "05.",
    title: "Is Delta ELD compliant?",
    text: "Yes, we strictly adhere to all FMCSA regulations and maintain 100% ELD compliance. Our commitment to safety and accountability ensures that every load is moved responsibly and within federal guidelines.",
  },
  {
    id: 6,
    number: "06.",
    title: "How much time do I have to spend on the road?",
    text: "As an owner-operator, you are in control of your time on the road. The more miles you choose to drive, the greater the opportunity to maximize your revenue—but the decision is always yours. We see you as our partner and our boss, which means you have the freedom to create a schedule that fits your lifestyle, your goals, and your priorities. Whether you prefer to stay closer to home or put in longer runs, we’re here to support you every step of the way. We stay committed to our slogan: Drive Your Own Way.",
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
    image: solutionsData2Img1,
  },
  {
    id: 2,
    elementId: "grid1-img2",
    mobileId: "mobile1-img2",
    image: solutionsData2Img2,
  },
  {
    id: 3,
    elementId: "grid1-img3",
    mobileId: "mobile1-img3",
    image: solutionsData2Img3,
  },
];

export const solutionsData2: SolutionsDataProps[] = [
  {
    id: 1,
    elementId: "grid2-img1",
    mobileId: "mobile2-img1",
    image: solutionsData1Img1,
  },
  {
    id: 2,
    elementId: "grid2-img2",
    mobileId: "mobile2-img2",
    image: solutionsData1Img2,
  },
  {
    id: 3,
    elementId: "grid2-img3",
    mobileId: "mobile2-img3",
    image: solutionsData1Img3,
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
    videoLink: "https://www.youtube.com/embed/hnyTCcBpcS4",
  },
  {
    id: 2,
    videoLink: "https://www.youtube.com/embed/8lKUaQw77fA",
  },
  {
    id: 3,
    videoLink: "https://www.youtube.com/embed/hq4dLtipgmE",
  },
  {
    id: 4,
    videoLink: "https://www.youtube.com/embed/czBfF8-7l0Q",
  },
  {
    id: 5,
    videoLink: "https://www.youtube.com/embed/ENrtZZQnmdU",
  },
  {
    id: 6,
    videoLink: "https://www.youtube.com/embed/rX9bC0DMYT8",
  },
  {
    id: 7,
    videoLink: "https://www.youtube.com/embed/hfEMNUXraUY",
  },
];

export const jobs: JobProps[] = [
  {
    id: 1,
    title: "Dispatcher",
    subtitle: "In Office",
    text: "Experienced in keeping trucks moving with high-paying loads. Strong negotiation skills, knowledge of routing, and ability to handle paperwork and broker communication.",
    applyLink: "/jobs/apply",
    link: "/jobs/in-office-careers",
    variant: "in-office",
  },
  {
    id: 2,
    title: "Safety Department",
    subtitle: "In Office",
    text: "Knowledge of DOT/FMCSA regulations with responsibility for managing driver files, logs, inspections, audits, and ensuring overall compliance.",
    applyLink: "/jobs/apply",
    link: "/jobs/in-office-careers",
    variant: "in-office",
  },
  {
    id: 3,
    title: "Accounting",
    subtitle: "Fleet Operations",
    text: "Handles invoicing, payroll, and financial recordkeeping. Detail-oriented, organized, and experienced in bookkeeping; trucking industry experience is a plus.",
    applyLink: "/jobs/apply",
    link: "/jobs/in-office-careers",
    variant: "in-office",
  },
  {
    id: 4,
    title: "Recruiting",
    subtitle: "Fleet Operations",
    text: "Responsible for sourcing, screening, and onboarding qualified drivers. Recruiting experience, strong communication skills, and knowledge of DOT hiring requirements required.",
    applyLink: "/jobs/apply",
    link: "/jobs/in-office-careers",
    variant: "in-office",
  },
  {
    id: 5,
    title: "Human Resources",
    subtitle: "Fleet Operations",
    text: "Manages employee relations, onboarding, and compliance with company policies. Strong communication, organizational, and people skills required.",
    applyLink: "/jobs/apply",
    link: "/jobs/in-office-careers",
    variant: "in-office",
  },
  {
    id: 6,
    title: "IT Department",
    subtitle: "Fleet Operations",
    text: "Supports and maintains systems, software, and communications. Experience in troubleshooting, network management, and providing technical support required.",
    applyLink: "/jobs/apply",
    link: "/jobs/in-office-careers",
    variant: "in-office",
  },
  {
    id: 7,
    title: "Maintenance Department",
    subtitle: "Fleet Operations",
    text: "Ensures trucks and equipment are safe and road-ready through inspections, repairs, and preventive maintenance. Experience in diesel mechanics preferred.",
    applyLink: "/jobs/apply",
    link: "/jobs/in-office-careers",
    variant: "in-office",
  },
  {
    id: 8,
    title: "Owner-Operator",
    subtitle: "Over The Road",
    text: "Take control of your career and run your own truck with the freedom as an independent business owner. With steady freight, competitive earnings, and the full support of our team, you’ll have everything you need to stay moving and profitable.",
    extraText: "$20,000 Sign-On Bonus – Call for details or apply now!",
    applyLink:
      "https://intelliapp.driverapponline.com/c/deltacarriergroup?uri_b=ia_deltacarriergroup_1667164099",
    link: "/jobs/cdl-a-owner-operator",
    variant: "over-the-road",
  },
  {
    id: 9,
    title: "Lease Purchase",
    subtitle: "Over The Road",
    text: "LEASE PURCHASE OFFER - 2026 & 2025 KW T680 with Cummins Engine & 2026-2025 Freightliner Cascadia DD15 Trucks and more...",
    applyLink:
      "https://intelliapp.driverapponline.com/c/deltacarriergroup?uri_b=ia_deltacarriergroup_1667164099",
    link: "/jobs/cdl-lis-purchase",
    variant: "over-the-road",
  },
];

export const blogs: BlogProps[] = [
  {
    id: 1,
    name: "Marko Trpeski",
    read: "5 min read",
    title:
      "Maximizing Profit as an Owner-Operator: Smart Strategies for Success",
    text: "Running your own truck is rewarding—but profit doesn’t happen by chance. As an owner-operator, you wear every hat: driver, dispatcher, bookkeeper, and strategist.",
    link: "/blogs/maximizing-profit",
    image: blogImg1,
  },
  {
    id: 2,
    name: "Marko Trpeski",
    read: "5 min read",
    title: "Top Challenges Owner-Operators Face—and How to Overcome Them",
    text: "Life on the road as an owner-operator offers freedom and the potential for strong profits, but it also comes with unique hurdles.",
    link: "/blogs/top-challenges",
    image: blogImg2,
  },
  {
    id: 3,
    name: "Marko Trpeski",
    read: "5 min read",
    title: "Essential Maintenance Checklist for Owner-Operator Trucks",
    link: "/blogs/essential-maintenance-checklist",
    image: blogImg3,
  },
  {
    id: 4,
    name: "Marko Trpeski",
    read: "5 min read",
    title: "Balancing Life on the Road: Health, Family, and Finances",
    link: "/blogs/balancing-life-on-the-road",
    image: blogImg4,
  },
  {
    id: 5,
    name: "5 min read",
    read: "Marko Trpeski",
    title: "Fuel Efficiency on the Road: How Owner-Operators Can Save Big",
    link: "/blogs/efficiency-on-the-road",
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

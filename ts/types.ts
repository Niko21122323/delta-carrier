import type { StaticImageData } from "next/image";

export interface PrimaryButtonProps {
	link: string;
	text?: string;
	color?: string;
}

export interface SvgProps {
	color: string;
}

export interface TitleProps {
	title: string;
	subtitle: string;
	variant?: string;
	position?: string;
}

export interface FooterLinkProps {
	link?: string;
	label: string;
	id: number;
}

export interface WhyUsProps {
	title: string;
	text: string;
	id: number;
	gridClass: string;
}

export interface TestimonialsProps {
	id: number;
	reviews: string;
	name: string;
	job: string;
	image: string | StaticImageData;
}

export interface JobRequirementsProps {
	id: number;
	title: string;
	text: string;
}

export interface FaqProps {
	id: number;
	number: string;
	title: string;
	text: string;
}

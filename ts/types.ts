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

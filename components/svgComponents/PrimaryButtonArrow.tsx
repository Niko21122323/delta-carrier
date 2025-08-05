import type { SvgProps } from "@/ts/types";

const PrimaryButtonArrow = ({ color }: SvgProps) => {
	return (
		<svg
			width="14"
			height="14"
			viewBox="0 0 14 14"
			className={color}
			xmlns="http://www.w3.org/2000/svg"
			aria-label="arrow"
		>
			<path
				d="M4.51447 1.79379C4.09961 1.77948 3.75946 2.11963 3.77377 2.53449C3.78674 2.91079 4.08879 3.21283 4.46509 3.2258L9.53852 3.40075L2.05026 10.889C1.75737 11.1819 1.75736 11.6568 2.05026 11.9497C2.34315 12.2426 2.81803 12.2426 3.11092 11.9497L10.5992 4.46141L10.7741 9.53484C10.7871 9.91114 11.0891 10.2132 11.4654 10.2262C11.8803 10.2405 12.2204 9.90032 12.2061 9.48546L11.9691 2.60984C11.9582 2.2947 11.7052 2.04175 11.3901 2.03088L4.51447 1.79379Z"
				fill={color}
			/>
		</svg>
	);
};

export default PrimaryButtonArrow;

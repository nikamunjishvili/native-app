import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps | any) => (
	<Svg {...props} xmlns="http://www.w3.org/2000/svg" width={30} height={31} fill="none">
		<Path
			fill="#25314C"
			d="M17.942 20.12a.625.625 0 0 1-.884.883l-5-5a.626.626 0 0 1 0-.884l5-5a.625.625 0 0 1 .883.884l-4.557 4.558 4.558 4.558Z"
		/>
	</Svg>
);
export default SvgComponent;

import styled, {keyframes} from "styled-components";

const gradientAnimation = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`
interface GradientDivProps {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
}

const GradientDiv = styled.div<GradientDivProps>`
    ${({ primary: color1, secondary: color2, tertiary: color3, quaternary: color4 }) => `
        background: linear-gradient(-45deg, ${color1}, ${color2}, ${color3}, ${color4});
    `}
	background-size: 400% 400%;
	animation: ${gradientAnimation} 15s ease infinite;
	height: 100%;
	width: 100%;
	border-radius: 4px;
`

interface GradientBackgroundProps {
    colors: {
		primary: string,
		secondary: string,
		tertiary: string,
		quaternary: string
	};
}

export const GradientBackground: React.FC<GradientBackgroundProps> = ({ colors }) => {
    return (
        <GradientDiv 
			primary={colors.primary} 
			secondary={colors.secondary} 
			tertiary={colors.tertiary} 
			quaternary={colors.quaternary}
		/>
    )
}
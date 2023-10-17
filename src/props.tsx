export interface ComboProps {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
}

export interface GenerateHaikuProps {
    combo: ComboProps;
    image: string;
}

export interface HaikuProps {
    combo: ComboProps;
    line1: string;
    line2: string;
    line3: string;
}

export interface TitleProps {
    image: string;
    combo: ComboProps;
}
import { FC } from 'react';

interface LogoFooterProps {
	title?: string;
}

const LogoFooter: FC<LogoFooterProps> = ({title = 'Logo Fiat' }) => {
	return (
    <svg xmlns="http://www.w3.org/2000/svg"
        role="img" 
        aria-hidden="false"
        //height="100%" 
        viewBox="0 0 43.211 31.401"
    >
        <title id={`logo-footer-${title}`}>{title}</title>

        <path 
        d="M10.182 0L0 31.4h4.718L14.9 0z" 
        fill="rgb(38, 143, 82)"
        stroke="none"
    ></path>
    <path 
        d="M44.382 0L34.2 31.4h4.718L49.1 0z" 
        transform="translate(-24.763)" 
        fill="rgb(255, 255, 255)"
        stroke="none;"
    ></path>
    <path 
        d="M78.582 0L68.4 31.4h4.718L83.3 0z" 
        transform="translate(-49.526)" 
        fill="rgb(255, 255, 255)"
        stroke="none;"
    ></path>
    <path 
        d="M112.782 0L102.6 31.4h4.718L117.5 0z" 
        transform="translate(-74.289)" 
        fill="rgb(255, 20, 48)"
        stroke="none;"
    ></path>
        
    </svg>

	)
}

export default LogoFooter;

import scssStyles from '@/utils/scssStyles';
import styles from './Button.module.scss';

interface ButtonProps {
	content: JSX.Element | string;
	title: string;
	href?: string;
	className?: string;
	disabled?: boolean;
	isSubmit?: boolean;
	isButton?: boolean;
	handleClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement> | undefined;
	handleAuxClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement> | undefined;
	target?: string;
}

const Button: React.FC<ButtonProps> = ({
	content,
	title,
	href = '#',
	className = '',
	isSubmit = false,
	disabled = false,
	isButton = false,
	handleAuxClick,
	handleClick,
	target = '_blank',
}) => {
	if (isSubmit || isButton) {
		return (
			<button
				type={isSubmit ? 'submit' : 'button'}
				title={title}
				className={scssStyles([styles.button, className])}
				onClick={handleClick}
				onAuxClick={handleAuxClick}
				disabled={disabled}
			>
				{content}
			</button>
		);
	}
	return (
		<a
			title={title}
			className={scssStyles([styles.button, className])}
			href={href}
			target={target}
			onClick={handleClick}
			onAuxClick={handleAuxClick}
		>
			{content}
		</a>
	);
}

export default Button;
import { ButtonProps } from './Button.props'
import styles from './Button.module.css'
import cn from 'classnames';
import ArrowIcon from './arrow.svg';

export const Button = ({ children, arrow = 'none', appearance, className, ...otherProps }: ButtonProps) => {
	return (
		<button
			className={cn(styles.button, className, styles[appearance])}
			{...otherProps}
		>
			{children}
			{arrow !== 'none' && (
				<span className={cn(styles.arrow, styles[arrow])}>
					<ArrowIcon />
				</span>
			)}
		</button >
	)
}